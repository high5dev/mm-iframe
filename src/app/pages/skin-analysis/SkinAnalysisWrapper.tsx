import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Content } from '../../../_metronic/layout/components/Content'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import './styles.scss'
import { ImageContainer } from './ImageContainer'

const SkinAnalysisPage = () => (
    <>
        <div className=''>
            <div className='d-flex align-items-center margin-top-65 font-size-25 margin-left-20'>
                Skin Analysis
            </div>
        </div>
        <div className=''>
            <div className='card-319-90 margin-left-20 d-flex'>
                <div className='d-flex align-items-center justify-content-center font-size-18'>Eye Age, Perceived Age & Skin tone</div>
            </div>
        </div>
        <div className=''>
            <div className='row g-0'>
                <ImageContainer/>
                <ImageContainer/>
            </div>
        </div>
        <div className='row g-5 g-xl-8'>
            <div className='row button-alignment justify-content-center pt-15 mb-5'>
                <a
                    href="/daily-routine"
                    className="btn btn-lg btn-primary align-items-center w-203 rounded-0"
                >
                    <span className='indicator-label font-size-20'>Your Routine
                    </span>

                </a>
            </div>
            <div className='mt-10 row button-alignment justify-content-center mb-15'>
                <a
                    href="/"
                    className="btn-next-md align-items-center"
                >
                    <span className='indicator-label font-size-20 text-center'>Retake Photo</span>
                </a>
            </div>
        </div>



    </>
)

const SkinAnalysisWrapper = () => {
    const intl = useIntl()
    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
            <PageTitle breadcrumbs={[]}>Skin Analysis</PageTitle>
            <SkinAnalysisPage />
        </>
    )
}

export { SkinAnalysisWrapper }
