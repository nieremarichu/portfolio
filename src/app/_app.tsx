import '@/styles/tailwind.css'
import type { AppProps } from 'next/app'

import { useEffect } from 'react';
import { initAOS } from '../config/client-entry';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Run client-specific initialization
    initAOS();
  }, []);
  
  return <Component {...pageProps} />
}
