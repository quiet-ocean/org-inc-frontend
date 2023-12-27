import { useState, useEffect } from 'react'

export const AnimationWrapper: React.FC<{
  start?: string
  end?: string
  allowed?: boolean
  delay?: number
  duration?: number
  children?: React.ReactNode
  callback?: () => void
}> = ({
  start,
  end,
  allowed = true,
  delay = 1,
  duration,
  children,
  callback,
}) => {
  const [play, setPlay] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (delay && allowed) {
      timer = setTimeout(() => {
        setPlay(true)
        if (callback) callback()
      }, delay)
    }
    if (!allowed) setPlay(false)

    return () => clearTimeout(timer)
  }, [delay, allowed])

  return (
    <div
      className={`transition-all transform duration-${
        duration ? '[duration]' : 1000
      } ${play ? end : start} w-full`}
    >
      {children}
    </div>
  )
}
