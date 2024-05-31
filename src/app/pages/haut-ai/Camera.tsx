import React, { FC, useCallback, useRef, useState, useEffect } from 'react'
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720,
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

    return (
        <div className='w-100 container'>
            <div className='mb-10 row button-alignment'>
                <Webcam
                    audio={false}
                    height={720}
                    screenshotFormat="image/jpeg"
                    width={1280}
                // videoConstraints={videoConstraints}
                >
                </Webcam>
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt="Captured"
                    />
                )}
                <button onClick={capture}>Capture photo</button>
            </div>
        </div>
    )
}

export { Camera }
