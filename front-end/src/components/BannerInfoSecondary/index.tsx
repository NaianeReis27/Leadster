import { Container } from './styles'
import SvgComponent from '../SvgComponent/index'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button'

const BannerInfoSecondary = () => {
  return (
    <Container
      data-aos="fade-top"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h2>
        Pronto para triplicar sua <strong>Geração de Leads?</strong>
      </h2>
      <p className="text-primary">
        Criação e ativação em <strong>4 minutos</strong>
      </p>
      <div>
        <Button text="VER DEMONSTRAÇÃO" types="quartenary" />
        <figure>
          <img src="images/selo_RD.png" />
        </figure>
      </div>

      <div>
        <div>
          <figure>
            <img src="/images/no-card-dark.webp" alt="" />
          </figure>
          <p className="text-secondary">
            <strong>Não</strong> é necessário cartão de credito
          </p>
        </div>
        <div>|</div>
        <div>
          <figure className="rating">
            <img src="/images/rating.webp" alt="" />
          </figure>
          <p className="text-secondary">4.9/5 média de sastisfação</p>
        </div>
      </div>
    </Container>
  )
}

export default BannerInfoSecondary
