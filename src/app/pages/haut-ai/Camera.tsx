import React, { FC, useCallback, useRef, useState, useEffect } from 'react'
import Webcam from "react-webcam";
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import { sendImgToHaut } from "../request/sass"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store"
import { setScore } from '../../store/slices/scoreSlice';
import { setUser } from '../../store/slices/custermInfoSlice';
import './styles.scss'

const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user"
};

const Camera: FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();

    const customer = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot({width: 640, height: 480});
            setImgSrc(imageSrc);
        } else {
            console.log("web camera reference returns null")
        }
    }, [webcamRef, setImgSrc]);

    const recapture = useCallback(
        () => {
            setImgSrc(null);
        }, [setImgSrc]
    )

    const sendImage = async () => {
        if (imgSrc !== null && customer.email !== '') {
            setIsSending(true);
            try {
                const res = await sendImgToHaut(imgSrc, customer);
                console.log(res?.msg)
                const hautScore = res?.haut[0];
                dispatch(setScore({
                    acne: hautScore?.acne,
                    age: hautScore?.age,
                    eyeAge: hautScore?.eyeAge,
                    eyeBags: hautScore?.eyeBags,
                    redness: hautScore?.redness,
                    uniformness: hautScore?.uniformness,
                    hydration: hautScore?.hydration,
                    skinTone: hautScore?.skinTone,
                    pigmentation: hautScore?.pigmentation,
                    lines: hautScore?.lines,
                    pores: hautScore?.pores,
                    translucency: hautScore?.translucency
                }));
                dispatch(setUser({
                    name: res?.name,
                    email: res?.email,
                    age: res?.age,
                    gender: res?.gender,
                    pregnancy: res?.pregnancy,
                    skinType: res?.skinType,
                    skinSensitivity: res?.skinSensitivity,
                    imageURL: res?.imageUri
                }));
                navigate('/skin-analysis', { replace: true });
            } catch (error) {
                console.error('Error sending image:', error);
                // alert('There was an error processing your request. Please try again.');
            } finally {
                setIsSending(false);
            }
        } else {
            alert('Please provide your detailed information and take a selfie again');
        }
    }

    return (
        <div className='w-100 container'>
            <div className='mb-10 row button-alignment'>
                {!imgSrc ? (<>
                    <Webcam
                        audio={false}
                        height={480}
                        screenshotFormat="image/jpeg"
                        screenshotQuality={0.9} // Adjusted quality
                        width={640}
                        ref={webcamRef}
                        videoConstraints={videoConstraints}
                    >
                    </Webcam>
                    <Tooltip title="Take a Selfie">
                        <IconButton aria-label="delete" size="large" onClick={capture} >
                            <PhotoCameraIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </>) : (<>
                    <img
                        src={imgSrc}
                        alt="Captured"
                        className='mb-20 mt-20'
                    />
                    <Tooltip title="Retake">
                        <IconButton aria-label="delete" size="large" onClick={recapture} >
                            <CameraswitchIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Send">
                        <IconButton
                            aria-label="send"
                            size="large"
                            onClick={sendImage}
                            disabled={isSending}
                        >
                            {isSending ? (
                                <div className="spinner"></div>
                            ) : (
                                <SendIcon fontSize="large" />
                            )}
                        </IconButton>
                    </Tooltip>
                </>)}
            </div>
        </div>
    )
}

export { Camera }
