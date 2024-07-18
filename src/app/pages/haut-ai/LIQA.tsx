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
import { setProduct } from '../../store/slices/productSlice';
// import { preload  } from '"https://liqa.haut.ai/liqa.js"';
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

    const sendImage = async (base64: string) => {
        if (base64 !== null && customer.email !== '') {
            setIsSending(true);
            try {
                const res = await sendImgToHaut(base64, customer);
                const hautScore = res?.haut[0];
                const primaryConcernProduct = res?.primaryConcernProduct
                const secondaryConcernProduct = res?.secondaryConcernProduct
                dispatch(setScore({
                    acne: hautScore.acne,
                    age: hautScore.perceivedAge,
                    eyeAge: hautScore.eyeAge,
                    eyeBags: hautScore.eyeBags,
                    redness: hautScore.redness,
                    uniformness: hautScore.uniformness,
                    hydration: hautScore.hydration,
                    skinTone: hautScore.skinTone,
                    pigmentation: hautScore.pigmentation,
                    lines: hautScore.lines,
                    pores: hautScore.pores,
                    primaryConcern: hautScore.lowestMetric,
                    secondaryConcern: hautScore.secondLowestMetric
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
                dispatch(setProduct({
                    primaryConcernProduct: primaryConcernProduct,
                    secondaryConcernProduct: secondaryConcernProduct
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
            if (capture.source === "front_camera")
                capture.transform({ horizontalFlip: true })
            const image: Blob = await capture.blob();
            const base64 = await blobToBase64(image);
            setTimeout(() => {
                if (base64) {
                    setImgSrc(base64);
                    sendImage(base64)
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
    }, [customer.email]);

    return (
        <>
            <div className="mt-20">
                <hautai-liqa ref={webcamRef} license="eyJpZCI6IkhFS04tOTA1Mi0wIn0=" preset="face"></hautai-liqa>
            </div>
        </>
    );
};

export { TakeASelfie };