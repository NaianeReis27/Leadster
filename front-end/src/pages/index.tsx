import { ContainerPage } from '../styles/GlobalStyles'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Filter from '../components/Filter'
import Gallery from '../components/Gallery'
import Pagination from '../components/Pagination'
import BannerInfo from '@/components/BannerInfo'
const index = () => {
  return (
    <ContainerPage>
      <Header/>
      <Banner/>
      <Filter/>
      <Gallery />
      <Pagination/>
      <BannerInfo/>
    </ContainerPage>
  )
}

export default index
