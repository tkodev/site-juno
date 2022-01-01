import React from 'react'

type ExampleProps = {
  title?: string
}

const Example: React.FC<ExampleProps> = (props) => {
  const { title,  children } = props 

  return (
    <div>
      {title}
      {children}
    </div>
  )
}

export { Example }
