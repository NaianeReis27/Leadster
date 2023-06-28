import { Container, Thumb } from './styles'
import { Data } from '../../interfaces/api.interfaces'
import { useContext, useEffect, useState } from 'react'
import { UtilsContext } from '@/context/utilsContext'
const Card = (data: Data) => {
  const { setSelectedVideos, setOpen} = useContext(UtilsContext)
  const [thumbImage, setThumbImage] = useState<string | undefined>()

  useEffect(() => {
    const valid = data.url.toString().split('watch?v=')[1].substring(0, 11)
    const imageThumb = `https://img.youtube.com/vi/${valid}/hqdefault.jpg`
    setThumbImage(imageThumb)
  }, [])

  const showVideo = () =>{
    setSelectedVideos(data)
    setOpen(true)
  }
  
  return (
    <Container onClick={showVideo}>
      <Thumb>
        <img className="play" src="/images/play.svg" alt="" />
        <div />
        <img className="thumb-image" src={thumbImage}></img>
      </Thumb>
      <p>{data.title}</p>
    </Container>
  )
}

export default Card
