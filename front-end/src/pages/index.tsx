import { ContainerPage } from '../styles/GlobalStyles'
import Header from '../components/header'
import Banner from '../components/banner'
import Filter from '../components/filter'
import Gallery from '../components/gallery'
const index = () => {
  return (
    <ContainerPage>
      <Header></Header>
      <Banner></Banner>
      <Filter></Filter>
      <Gallery />
    </ContainerPage>
  )
}

export default index
