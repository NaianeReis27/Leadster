import { Container, Thumb } from './styles'
import { Data } from '../../interfaces/api.interfaces'
import { useContext, useEffect, useState } from 'react'
import { UtilsContext } from '@/context/utilsContext'
const Card = (data: Data) => {
  const { setSelectedVideos, setOpen, thumb } = useContext(UtilsContext)
  
  const [thumbImage, setThumbImage] = useState<string | undefined>()

  const showVideo = () => {
    setSelectedVideos(data)
    setOpen(true)
  }
useEffect(()=>{
  thumb(data.url, setThumbImage)
},[])

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
