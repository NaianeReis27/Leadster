import { ContainerPage } from '../styles/GlobalStyles'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Filter from '../components/Filter'
import Gallery from '../components/Gallery'
import Pagination from '../components/Pagination'
import BannerInfo from '@/components/BannerInfo'
import { useEffect, useRef, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

const index = () => {

  useEffect(() => {
    Aos.init()
  }, [])


  return (
    <ContainerPage>
      <Modal/>
      <Header />
      <Banner />
      <Filter />
      <Gallery />
      <Pagination />
      <BannerInfo />
      <Footer />
    </ContainerPage>
  )
}

export default index
