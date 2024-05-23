import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  ListsWidget1,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  MixedWidget10,
  MixedWidget11,
  MixedWidget2,
  StatisticsWidget5,
  TablesWidget10,
  TablesWidget5,
} from '../../../_metronic/partials/widgets'
import { Horizontal } from '../../modules/wizards/components/Horizontal'
import { Content } from '../../../_metronic/layout/components/Content'

const APIPageToHautAI = () => (
  <Content>
    <div className='mx-auto mw-600px w-100 pt-15 pb-10 w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-gray-900'>
          Haut.ai API to take photo
        </h2>
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
