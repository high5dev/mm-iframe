import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { I18nProvider } from '../_metronic/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen } from '../_metronic/layout/core'
import { MasterInit } from '../_metronic/layout/MasterInit'
import { AuthInit } from './modules/auth'
import { ThemeModeProvider } from '../_metronic/partials'
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Provider store={store}>
        <I18nProvider>
          <LayoutProvider>
            <ThemeModeProvider>
              <AuthInit>
                <Outlet />
                <MasterInit />
              </AuthInit>
            </ThemeModeProvider>
          </LayoutProvider>
        </I18nProvider>
      </Provider>
    </Suspense>
  )
}

export { App }
