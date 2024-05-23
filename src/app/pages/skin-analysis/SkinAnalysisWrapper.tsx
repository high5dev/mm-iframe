import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Content } from '../../../_metronic/layout/components/Content'
import { toAbsoluteUrl } from '../../../_metronic/helpers'

const SkinAnalysisPage = () => (
    <Content>
        <div className='card'>
            <div className='card-body pb-10 pb-lg-15'>
                <h1 className='fw-bolder d-flex align-items-center text-gray-900'>
                    Skin Analysis
                </h1>
                <div className='card min-h-250px'>
                    <div className='card-body pb-10 pb--md-15'>
                        <h3 className='fw-bolder d-flex align-items-center text-gray-900'>Eye Age, Perceived Age & Skin tone</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="card card-custom overlay overflow-hidden mr-20">
                            <div className="card-body p-0">
                                <div className="overlay-wrapper">
                                    <img
                                        src={toAbsoluteUrl('media/stock/600x400/img-1.jpg')}
                                        alt=""
                                        className="w-100 rounded"
                                    />
                                </div>
                                <div className="overlay-layer bg-dark bg-opacity-10">
                                    <a href="#" className="btn btn-primary btn-shadow">
                                        Concern
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-light-primary btn-shadow ms-2"
                                    >
                                        Lowest Score
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="card card-custom overlay overflow-hidden">
                            <div className="card-body p-0">
                                <div className="overlay-wrapper">
                                    <img
                                        src={toAbsoluteUrl('media/stock/600x400/img-1.jpg')}
                                        alt=""
                                        className="w-100 rounded"
                                    />
                                </div>
                                <div className="overlay-layer bg-dark bg-opacity-10">
                                    <a href="#" className="btn btn-primary btn-shadow">
                                        Concern
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-light-primary btn-shadow ms-2"
                                    >
                                        Lowest Score
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto mw-600px w-100 pt-15 pb-10'>
                    <div className='mr-4 row'>
                        <button className='btn btn-lg btn-primary me-3'>Your Routine</button>
                    </div>
                    <div className='mr-2 mt-10 row'>
                            <button className='btn btn-block btn-primary me-150 mr-150'>Retake Photo</button>
                    </div>
                </div>
            </div>
        </div>
    </Content>
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
