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
import { setDataSet } from '../../store/slices/dataSetSlice';

const videoConstraints = {
    width: 375,
    height: 667,
    facingMode: "user"
};

const Camera: FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const navigate = useNavigate();  
    
    const customer = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
        } else {
            console.log(webcamRef)
        }
    }, [webcamRef, setImgSrc]);

    const recapture = useCallback(
        () => {
            setImgSrc(null);
        }, [setImgSrc]
    )

    const sendImage = () => {
        if (imgSrc !== null && customer.email !== '') {
            sendImgToHaut(imgSrc, customer).then((res)=> {
                dispatch(setDataSet({
                    access_token: res?.access_token,
                    company_id: res?.company_id,
                    dataset_id: res?.dataset_id,
                    subject_id: res?.subject_id,
                    batch_id: res?.batch_id,
                    image_id: res?.image_id,
                    success: 2
                }))
                navigate('/skin-analysis',{ replace: true })
            })
        } else {
            alert('please provide your detailed information or take a selfie')
        }
        // login('gaurav.singh@beminimalist.co', 'Minimalist@4321').then((data) => {
        //     console.log(data)
        // })
    }

    return (
        <div className='w-100 container'>
            <div className='mb-10 row button-alignment'>
                {!imgSrc ? (<>
                    <Webcam
                        audio={false}
                        height={540}
                        screenshotFormat="image/jpeg"
                        width={1280}
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
                        <IconButton aria-label="delete" size="large" onClick={sendImage} >
                            <SendIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </>)}
            </div>
        </div>
    )
}

export { Camera }
