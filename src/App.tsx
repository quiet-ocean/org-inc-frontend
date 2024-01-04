import React, { memo, Suspense, useRef } from 'react'
import { Provider } from 'react-redux'

import type { AppStore } from './common/store'
import { makeStore } from './common/store'
import { LayoutComponent } from './components'
import ErrorBoundary from './components/ErrorBoundary'
import Spinner from './components/Spinner'
import Routes from './Routes'

const App: React.FC = memo(() => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }
  return (
    <ErrorBoundary>
      <Provider store={storeRef.current}>
        <Suspense fallback={<Spinner size="xl" />}>
          <LayoutComponent>
            <Routes />
          </LayoutComponent>
        </Suspense>
      </Provider>
    </ErrorBoundary>
  )
})

App.displayName = 'App'
export default App
