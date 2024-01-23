import NavBar from '@/components/Header'
import React from 'react'

interface Props {
  children: React.ReactNode
}
const HeaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  )
}

export default HeaderLayout