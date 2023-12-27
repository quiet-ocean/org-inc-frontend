import type { PropsWithChildren } from 'react'

export const SectionWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="mb-5">{children}</div>
}
