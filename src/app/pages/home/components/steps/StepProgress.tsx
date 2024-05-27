import React, { FC } from 'react'
import './stepProgress.scss'

const StepProgress: FC = () => {
    const [currentStep, setCurrentStep] = React.useState(0);

    const steps = Array(7).fill(null);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                {steps.map((_, index) => (
                    <React.Fragment key={index}>
                        <div className={`progress-step ${index <= currentStep ? 'active' : ''}`}>
                            <div className="progress-dot"></div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`progress-line ${index < currentStep ? 'completed' : ''}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="progress-buttons">
                <button onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}>Previous</button>
                <button onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}>Next</button>
            </div>
        </div>
    )
}

export { StepProgress }