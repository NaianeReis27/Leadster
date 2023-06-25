import { Container } from './styles'
import Button from '../Button'
import Image from 'next/image'
const Banner = () => {
  return (
    <Container>
      <Button types="primary" text="WEBINARS EXCLUSIVOS"></Button>
      <h3>Menos Conversinha,</h3>
      <div>
        <h2>
          Mais conversã
          <span>
            o
            <img
              src="/images/asset-header.png"
              alt="logo leadster"
            />
          </span>
        </h2>
        <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
      </div>
    </Container>
  )
}

export default Banner
