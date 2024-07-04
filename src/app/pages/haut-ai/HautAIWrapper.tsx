import { useIntl } from 'react-intl'
import { Content } from '../../../_metronic/layout/components/Content'
import { Camera } from './Camera'
import { TakeASelfie } from './LIQA'

const APIPageToHautAI = () => (
  <Content>
    <div className='mx-auto mw-600px w-100 pt-15 pb-10 w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='d-flex align-items-center justify-content-center'>
          Take a selfie
        </h2>
        <Camera/>
        {/* <TakeASelfie /> */}
      </div>
    </div>
  </Content>
)

const HautAIWrapper = () => {
  const intl = useIntl()
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      <APIPageToHautAI />
    </>
  )
}

export { HautAIWrapper }
