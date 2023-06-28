import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { ApiProvider } from '../context/ApiContext'
import { UtilsProvider } from '@/context/utilsContext'
import { GlobalStyle } from '@/styles/GlobalStyles'
const plusJakartSans = localFont({
  src: [
    {
      path: '../../public/fonts/PlusJakartaSans-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },

    {
      path: '../../public/fonts/PlusJakartaSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
})
function Home({ Component, pageProps }: AppProps) {
  return (
    <>
      <UtilsProvider>
        <ApiProvider>
          <GlobalStyle />
          <main className={plusJakartSans.className}>
            <Component {...pageProps} />
          </main>
        </ApiProvider>
      </UtilsProvider>
    </>
  )
}

export default Home
