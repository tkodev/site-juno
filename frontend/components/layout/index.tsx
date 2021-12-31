import React from 'react'
import Head from 'next/head'

type LayoutProps = {
  title?: string
  desc?: string
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, desc, children } = props 

  return (
    <div>
      <Head>
        {title && <title>{title}</title>}
        {desc && <meta name="description" content={desc} />}
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}

export { Layout }
