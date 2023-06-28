import { Container } from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { TiSocialLinkedin } from 'react-icons/ti'
import { BiLogoFacebook, BiLogoInstagramAlt } from 'react-icons/bi'

const Footer = () => {
  return (
    <Container>
      <div className="footer-logo">
        <Image
          width={192}
          height={42}
          src="images/logo.svg"
          alt="logo leadster"
        />
        <p>Tranformando visitantes em clientes.</p>
      </div>
      <div className="footer-links">
        <div>
          <h3>Links Principais</h3>
          <ul>
            <li>
              <Link href={'#'}>Home</Link>
            </li>
            <li>
              <Link href={'#'}>Ferramentas</Link>
            </li>
            <li>
              <Link href={'#'}>Preços</Link>
            </li>
            <li>
              <Link href={'#'}>Contatos</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Cases</h3>
          <ul>
            <li>
              <Link href={'#'}>Geração de Leads B2B</Link>
            </li>
            <li>
              <Link href={'#'}>Geração de Leads em Software</Link>
            </li>
            <li>
              <Link href={'#'}>Geração de Leads em Imobiliária</Link>
            </li>
            <li>
              <Link href={'#'}>Cases de sucesso</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Materiais</h3>
          <ul>
            <li>
              <Link href={'#'}>Blog</Link>
            </li>
            <li>
              <Link href={'#'}>Parceria com Agências</Link>
            </li>
            <li>
              <Link href={'#'}>Guia definitivo do Marketing</Link>
            </li>
            <li>
              <Link href={'#'}>Materiais Gratuitos</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Siga a Leadster</h3>
          <div className="footer-social">
            <div>
              <Link href={'#'}>
                <TiSocialLinkedin fill="#737679" size={25} />
              </Link>
            </div>
            <div>
              <Link href={'#'}>
                <BiLogoFacebook fill="#737679" size={25} />
              </Link>
            </div>
            <div>
              <Link href={'#'}>
                <BiLogoInstagramAlt fill="#737679" size={25} />
              </Link>
            </div>
          </div>
          <ul>
            <li>
              <Link href={'#'}>
                <strong>E-mail: </strong> contato@leadster.com.br
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <strong>Telefone: </strong> (42) 98828-9851
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Footer
