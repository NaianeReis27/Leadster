import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

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
      <main className={plusJakartSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default Home