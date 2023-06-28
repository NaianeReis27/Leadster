import { Container } from './styles'
import SvgComponent from '../SvgComponent/index'
import { useEffect, useRef, useState } from 'react'
import BannerInfoSecondary from '../BannerInfoSecondary'
const BannerInfo = () => {
  const banner = useRef<HTMLDivElement>(null)
  const delay = 300
  const [isAnimate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const divTop = banner.current!.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (divTop < windowHeight) {
        setAnimate(true)
        animated()
      } else {
        setAnimate(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const animated = () => {
    const s = '5c7f360c'
    const i = {
      root: 'egew8y6YN5R1',
      version: '2022-05-04',
      animations: [
        {
          elements: {
            egew8y6YN5R2: {
              transform: {
                data: {
                  t: { x: -337.487005, y: -667.467987 },
                },
                keys: {
                  o: [
                    {
                      t: 600,
                      v: { x: -500, y: 667.467987, type: 'corner' },
                      e: [0, 0, 0.58, 1],
                    },
                    {
                      t: 1200,
                      v: { x: 337.487005, y: 667.467987, type: 'corner' },
                      e: [0.42, 0, 0.58, 1],
                    },
                  ],
                },
              },
              opacity: [
                { t: 600, v: 0, e: [0, 0, 0.58, 1] },
                { t: 1200, v: 1, e: [0, 0, 0.58, 1] },
              ],
            },
            egew8y6YN5R4: {
              opacity: [
                { t: 1100, v: 0, e: [0, 0, 0.58, 1] },
                { t: 1500, v: 1 },
              ],
            },
            egew8y6YN5R5: {
              transform: {
                data: {
                  o: { x: 1422.044, y: 1447.138, type: 'corner' },
                  t: { x: -135.454, y: -1204.033 },
                },
                keys: {
                  s: [
                    { t: 700, v: { x: 1, y: 0.000253 }, e: [0.42, 0, 0.58, 1] },
                    { t: 1500, v: { x: 1, y: 1 } },
                  ],
                },
              },
            },
            egew8y6YN5R6: {
              transform: {
                data: {
                  o: { x: 1100.861, y: 1447.138, type: 'corner' },
                  t: { x: -135.349, y: -591.982 },
                },
                keys: {
                  s: [
                    { t: 400, v: { x: 1, y: -0.000218 } },
                    { t: 1100, v: { x: 1, y: 1 } },
                  ],
                },
              },
            },
            egew8y6YN5R7: {
              transform: {
                data: {
                  o: { x: 770.6235, y: 1446.507, type: 'corner' },
                  t: { x: -133.7125, y: -395.697 },
                },
                keys: {
                  s: [
                    { t: 100, v: { x: 1, y: 0.019685 }, e: [0, 0, 0.58, 1] },
                    { t: 800, v: { x: 1, y: 1 } },
                  ],
                },
              },
            },
            egew8y6YN5R8: {
              opacity: [
                { t: 1500, v: 0, e: [0, 0, 0.58, 1] },
                { t: 1700, v: 1 },
              ],
            },
            egew8y6YN5R9: {
              opacity: [
                { t: 1100, v: 0 },
                { t: 1300, v: 1, e: [0.42, 0, 0.58, 1] },
              ],
            },
            egew8y6YN5R10: {
              opacity: [
                { t: 800, v: 0 },
                { t: 1000, v: 1 },
              ],
            },
            egew8y6YN5R13: {
              opacity: [
                { t: 1100, v: 0, e: [0, 0, 0.58, 1] },
                { t: 1500, v: 1 },
              ],
            },
            egew8y6YN5R18: {
              transform: {
                data: {
                  t: { x: -266.364509, y: -73.149504 },
                },
                keys: {
                  o: [
                    {
                      t: 800,
                      v: { x: -333.635491, y: 609.860504, type: 'corner' },
                      e: [0.445, 0.05, 0.55, 0.95],
                    },
                    {
                      t: 1500,
                      v: { x: 516.364509, y: 609.860504, type: 'corner' },
                    },
                  ],
                },
              },
            },
            egew8y6YN5R19: {
              transform: {
                data: {
                  t: { x: -451.120575, y: -603.751007 },
                },
                keys: {
                  o: [
                    {
                      t: 800,
                      v: { x: -333.635491, y: 609.860504, type: 'corner' },
                      e: [0.445, 0.05, 0.55, 0.95],
                    },
                    {
                      t: 1500,
                      v: { x: 516.364509, y: 609.860504, type: 'corner' },
                    },
                  ],
                },
              },
            },
          },
          s: 'MCDA1ZGI3NWVhMEJiMWLFlOWRiMGE1YWJhYTVClNzY2ZjZjNmNTNmM2COE81ZWEwYTVhZWExOUWZiMGE1YWJhYTVlUTGc2NmQ2ODVlRGE1YjBOhMWFlOWRiMGE1YWJHQYWFhZjVlNzY2ZDY4NEWVhMmE1V2E4YTg1ZTVc2NmQ2ODVlOWRhOFdOiMGExYWVhYTlkRmIwXYTE1ZVY3NmEyOWRhOCGFmYTE2ODVlYWZhY2VExYTFhMFE1ZTc2NmQG2ODVlYTJhY2FmNWU3VNjZkNmM2Y2I5',
        },
      ],
      options: 'MVDAxMDg4UzJmODBHODYE2ZTdmODFNMmY0NzJPmNzlPN2M2ZTcxMmY4UYQ|',
    }

    const u = 'https://cdn.svgator.com/ply/'
    const o = '__SVGATOR_PLAYER__'
    const c = '2022-05-04'
    const w: any = window
    const d = document
    const t = 'script'
    const n = 'http://www.w3.org/2000/svg'
    const x = 'http://www.w3.org/1999/xlink'

    w[o] = w[o] || {}
    w[o][s] = w[o][s] || []
    w[o][s].push(i)

    const e: any = d.createElementNS(n, t)
    e.async = true
    e.setAttributeNS(
      x,
      'href',
      [u, s, '.', 'j', 's', '?', 'v', '=', c].join(''),
    )
    e.setAttributeNS(
      null,
      'src',
      [u, s, '.', 'j', 's', '?', 'v', '=', c].join(''),
    )
    const p: any = d.getElementsByTagName(t)[0]
    p.parentNode.insertBefore(e, p)
  }
  return (
    <Container ref={banner}>
      {isAnimate && (
        <>
          <SvgComponent />
          <BannerInfoSecondary />
        </>
      )}
    </Container>
  )
}

export default BannerInfo
