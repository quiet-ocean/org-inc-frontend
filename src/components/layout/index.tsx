import type { PropsWithChildren } from 'react'
import React, { memo } from 'react'

const Layout: React.FC<PropsWithChildren> = memo(({ children, ...rest }) => {
  return (
    <main {...rest} className="min-w-full grid place-items-center">
      <div className="max-w-[1080px]">{children}</div>
    </main>
  )
})
Layout.displayName = 'Layout'

export default Layout
