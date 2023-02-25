import '@/styles/globals.css'
import Layout from '@/components/layout';

import React, { useEffect } from "react";

import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      (await require('tw-elements')).default;
        };
        use();
      }, []);


  return <Component {...pageProps} />

}




