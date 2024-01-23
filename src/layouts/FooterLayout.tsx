import Contact from '@/components/Contact'
import React from 'react'

interface Props {
  children: React.ReactNode
}
const FooterLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Contact/>
      {children}
    </div>
  )
}

export default FooterLayout