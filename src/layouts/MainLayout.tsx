import React from 'react';
import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';

interface IProps {
  children: React.ReactNode
}

type MainLayoutProps = (props: IProps) => JSX.Element

const MainLayout: MainLayoutProps = ({ children }) => {
  console.log(children);
  
  return (
    <div className='relative flex flex-col w-full h-screen bg-white'>
      {/* <HeaderLayout>
      </HeaderLayout> */}
      { children }
      {/* <FooterLayout>
      </FooterLayout> */}
    </div>
  )
}

export default MainLayout