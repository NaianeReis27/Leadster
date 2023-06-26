import { Container, Thumb } from './styles'
import { Data } from '../../interfaces/api.interfaces'
import { useEffect, useState } from 'react'

const Card = ({ url, title }: Data) => {
  const [thumbImage, setThumbImage] = useState<string | undefined>()
  useEffect(() => {
    const valid = url.toString().split('watch?v=')[1].substring(0, 11)
    const imageThumb = `https://img.youtube.com/vi/${valid}/hqdefault.jpg`
    setThumbImage(imageThumb)
  }, [])

  return (
    <Container>
      <Thumb>
        <img className="play" src="/images/play.svg" alt="" />
        <div />
        <img className="thumb-image" src={thumbImage}></img>
      </Thumb>
      <p>{title}</p>
    </Container>
  )
}

export default Card
