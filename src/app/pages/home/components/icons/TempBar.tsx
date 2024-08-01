import { FC } from 'react'

type Props = {
    grading?: string
}

const TempBar: FC<Props> = ({grading}) => {



    if (grading === 'optimal') {
        return (
            <svg width="184" height="14" viewBox="0 0 184 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="184" height="8" rx="4" fill="url(#paint0_linear_0_1)"/>
            <path d="M173.5 0.5H180.5V6.43248L177 9.34915L173.5 6.43248V0.5Z" fill="black" stroke="white"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="0" y1="10" x2="184" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF0000"/>
            <stop offset="0.33" stop-color="#FF7A00"/>
            <stop offset="0.66" stop-color="#FFE920"/>
            <stop offset="1" stop-color="#33FF00"/>
            </linearGradient>
            </defs>
            </svg>
        )
    } else if (grading === 'stable') {

        return (
            <svg width="184" height="14" viewBox="0 0 184 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="184" height="8" rx="4" fill="url(#paint0_linear_0_1)"/>
            <path d="M91.5 0.5H98.5V6.43248L95 9.34915L91.5 6.43248V0.5Z" fill="black" stroke="white"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="0" y1="10" x2="184" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF0000"/>
            <stop offset="0.33" stop-color="#FF7A00"/>
            <stop offset="0.66" stop-color="#FFE920"/>
            <stop offset="1" stop-color="#33FF00"/>
            </linearGradient>
            </defs>
            </svg>

        )

    } else if (grading === 'trouble') {

        return (
            <svg width="184" height="14" viewBox="0 0 184 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="184" height="8" rx="4" fill="url(#paint0_linear_0_1)"/>
            <path d="M47.5 0.5H54.5V6.43248L51 9.34915L47.5 6.43248V0.5Z" fill="black" stroke="white"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="0" y1="10" x2="184" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF0000"/>
            <stop offset="0.33" stop-color="#FF7A00"/>
            <stop offset="0.66" stop-color="#FFE920"/>
            <stop offset="1" stop-color="#33FF00"/>
            </linearGradient>
            </defs>
            </svg>

        )

    } else if (grading === 'severe') {

        return (
            <svg width="184" height="14" viewBox="0 0 184 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="184" height="8" rx="4" fill="url(#paint0_linear_0_1)"/>
            <path d="M3.5 0.5H10.5V6.43248L7 9.34915L3.5 6.43248V0.5Z" fill="black" stroke="white"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="0" y1="10" x2="184" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF0000"/>
            <stop offset="0.33" stop-color="#FF7A00"/>
            <stop offset="0.66" stop-color="#FFE920"/>
            <stop offset="1" stop-color="#33FF00"/>
            </linearGradient>
            </defs>
            </svg>
        )

    }


};
  
  export default TempBar;
