import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
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
import {Horizontal} from '../../modules/wizards/components/Horizontal'

const HomePage = () => (
  <>
  <Horizontal />
  </>
)

const HomeWrapper = () => {
  const intl = useIntl()
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      <HomePage />
    </>
  )
}

export {HomeWrapper}
