import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {Horizontal} from './components/Horizontal'

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
