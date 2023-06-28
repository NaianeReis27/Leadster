import { Container } from './styles'
import { useEffect, useState, useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import Button from '../Button'
const Pagination = () => {
  const {videos, getVideos}= useContext(ApiContext);
  const [pages, setPages] = useState<number[]>([]);

  const [isClicked, setIsClicked] = useState<null | number>(null)

  useEffect(()=>{
    if(videos.pagination){
      var arrayPages = Array.from({ length: videos.pagination.lastPage + 1}, (_, index) => index + 1);
      setPages(arrayPages)
    }
  },[videos])
  return (
    <Container>
      <label>Página</label>
      <div>
      {
        pages.map((ele, index) => <Button action={()=>getVideos(index)} key={ele} isClicked={isClicked} setIsClicked={setIsClicked} index={index} text={ele.toString()} types='tertiary'></Button>)
      }
      </div>
      
    </Container>
  )
}

export default Pagination
