import type { PropsWithChildren } from 'react'

export const MockupWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
