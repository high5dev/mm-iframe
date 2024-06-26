import React, { FC, useCallback, useRef, useState, useEffect } from 'react'
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


const TakeASelfie: FC = () => {
    const webcamRef = useRef<HTMLHautAiLiqaElement>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();

    const customer = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    function blobToBase64(blob: Blob): Promise<string | null> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string | null);
            reader.readAsDataURL(blob);
        });
    }

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
                const hautScore = res?.haut[0];
                dispatch(setScore({
                    acne: hautScore.acne,
                    age: hautScore.age,
                    eyeAge: hautScore.eyeAge,
                    eyeBags: hautScore.eyeBags,
                    redness: hautScore.redness,
                    uniformness: hautScore.uniformness,
                    hydration: hautScore.hydration,
                    skinTone: hautScore.skinTone,
                    pigmentation: hautScore.pigmentation,
                    lines: hautScore.lines,
                    pores: hautScore.pores,
                    translucency: hautScore.translucency
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
                alert('There was an error processing your request. Please try again.');
            } finally {
                setIsSending(false);
            }
        } else {
            alert('Please provide your detailed information and take a selfie again');
        }
    }

    useEffect(() => {
        const takeASelfie = async (event: CustomEvent) => {
            const capture = event.detail;
            const image: Blob = await capture.blob();
            const base64 = await blobToBase64(image);
            console.log(base64);
            setTimeout(() => {
                if (base64) {
                    setImgSrc(base64);
                }
            }, 100);
        };

        const liqaElement = webcamRef.current;
        if (liqaElement) {
            liqaElement.addEventListener('capture', takeASelfie);
        }
        return () => {
            if (liqaElement) {
                liqaElement.removeEventListener('capture', takeASelfie);
            }
        };
    }, []);

    return (
        <>
            {!imgSrc ? (
                <div className="mt-20">
                    <hautai-liqa ref={webcamRef} license="eyJpZCI6IkhFS04tOTA1Mi0wIn0="></hautai-liqa>
                </div>) : (
                <>
                    <img src={imgSrc} alt="Selfie"
                        className='mb-20 mt-20' />
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
                </>
            )}
        </>
    );
};

export { TakeASelfie };