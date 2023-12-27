import React, { memo, Suspense } from 'react'

import { LayoutComponent } from './components'
import ErrorBoundary from './components/ErrorBoundary'
import Spinner from './components/Spinner'
import Routes from './Routes'

const App: React.FC = memo(() => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner size="xl" />}>
      <LayoutComponent>
        <Routes />
      </LayoutComponent>
    </Suspense>
  </ErrorBoundary>
))

App.displayName = 'App'
export default App
