import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Content } from '../../../_metronic/layout/components/Content'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import './styles.scss'

const SkinAnalysisPage = () => (
    <>
        <div className='row g-5 g-xl-8'>
            <div className='col-xl-6'>
                <h1 className='fw-bolder d-flex align-items-center text-gray-900'>
                    Skin Analysis
                </h1>
            </div>
        </div>
        <div className='row g-5 g-xl-8'>
            <div className='col-xl-12'>
                <div className='card pb-10 pb--md-15'>
                    <h3 className='fw-bolder d-flex align-items-center text-gray-900 px-5 py-5'>Eye Age, Perceived Age & Skin tone</h3>
                </div>
            </div>
        </div>
        <div className='row g-5 g-xl-8'>
            <div className=''>
                <div className='row g-0'>
                    <div className='col py-8 rounded-2  me-7 mb-7'>
                        <img
                            src={toAbsoluteUrl('media/stock/600x400/img-1.jpg')}
                            alt=""
                            className="w-100 h-250px rounded"
                        />
                        <div className='row g-0'>
                            <div className='col py-0 px-4'>
                                <a
                                    href="/daily-routine"
                                    className="btn btn-block btn-dark fixed-height-button"
                                >
                                    Concern
                                </a>
                            </div>
                            <div className='col py-0 px-0'>
                                <a
                                    href="/daily-routine"
                                    className=" btn btn-block btn-light-dark fixed-height-button"
                                >
                                    Lowest Score
                                </a>
                            </div>


                        </div>
                    </div>
                    <div className='col py-8 rounded-2  mb-7'>
                        <img
                            src={toAbsoluteUrl('media/stock/600x400/img-1.jpg')}
                            alt=""
                            className="w-100 h-250px rounded"
                        />
                        <div className='row g-0'>
                            <div className='col py-0 px-4'>
                                <a
                                    href="/daily-routine"
                                    className="btn btn-block btn-dark fixed-height-button"
                                >
                                    Concern
                                </a>
                            </div>
                            <div className='col py-0 px-0'>
                                <a
                                    href="/daily-routine"
                                    className=" btn btn-block btn-light-dark fixed-height-button"
                                >
                                    Lowest Score
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row g-5 g-xl-8'>
            <div className='pt-15'>
                <div className='row'>
                    <a
                        href="/daily-routine"
                        className="btn btn-block btn-primary me-150 mr-150 btn-shadow"
                    >
                        Your Routine
                    </a>
                    {/* <button className='btn btn-block btn-primary me-3 ms-2'>Your Routine</button> */}
                </div>
                <div className='mt-10 row'>
                    <a
                        href="/"
                        className="btn btn-dark"
                    >
                        Retake Photo
                    </a>
                </div>
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
