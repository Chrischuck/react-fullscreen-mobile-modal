import React from 'react'
import { Motion, spring } from 'react-motion'

const Fade: React.FC<{
  startOpacity?: number
  endOpacity?: number
  className?: string
  style?: React.CSSProperties
  fadeRef?: React.RefObject<HTMLDivElement>
}> = ({
  startOpacity = 0,
  endOpacity = 1,
  className,
  style: s = {},
  fadeRef,
  children,
}) => {
  const props: any = {}

  if (className) {
    props.className = className
  }

  if (fadeRef) {
    props.ref = fadeRef
  }

  return (
    <Motion
      defaultStyle={{ opacity: startOpacity }}
      style={{ opacity: spring(endOpacity) }}
    >
      {(style: any) => (
        <div {...props} style={{ ...style, ...s }}>
          {children}
        </div>
      )}
    </Motion>
  )
}

export default Fade
