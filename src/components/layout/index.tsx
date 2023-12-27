import type { PropsWithChildren } from 'react'
import React, { memo } from 'react'

const Layout: React.FC<PropsWithChildren> = memo(({ children, ...rest }) => {
  return (
    <main {...rest} className="min-w-full min-h-[1622px] flex justify-center">
      <div className="max-w-[1080px] w-full px-4">{children}</div>
    </main>
  )
})
Layout.displayName = 'Layout'

export default Layout
