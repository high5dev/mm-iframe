import React, { FC, useCallback, useRef, useState, useEffect } from 'react'
import Webcam from "react-webcam";

const videoConstraints = {
    width: 375,
    height: 667,
    facingMode: "user"
};

const Camera: FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

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
        console.log(sendImage)
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
                    <a onClick={capture} className='btn btn-icon btn-circle btn-outline-success'>Take</a>
                </>) : (<>
                    <img
                        src={imgSrc}
                        alt="Captured"
                        className='mb-15'
                    />
                    <a onClick={recapture} className='btn btn-icon btn-circle btn-outline-success'>Retry</a>
                    <a onClick={sendImage} className='btn btn-icon btn-circle btn-outline-success mr-5'>Retry</a>
                </>)}
            </div>
        </div>
    )
}

export { Camera }
