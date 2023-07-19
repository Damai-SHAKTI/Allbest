import '../style/global.css'
import { useEffect, useRef } from 'react'
import type { AppProps } from 'next/app'
import LoadingBar from 'react-top-loading-bar'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import MyNavbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {

  const loadingBarRef: any = useRef(null);

  useEffect(() => {
    loadingBarRef?.current?.complete()
  }, [])

  const lightTheme = createTheme({
    type: 'light',
  })

  const darkTheme = createTheme({
    type: 'dark',
  })

  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <LoadingBar color="#a249fd" ref={loadingBarRef} />
        <MyNavbar>
          <Component {...pageProps} />
        </MyNavbar>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
