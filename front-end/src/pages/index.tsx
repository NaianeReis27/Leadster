import { ContainerPage } from '../styles/GlobalStyles'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Filter from '../components/Filter'
import Gallery from '../components/Gallery'
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
