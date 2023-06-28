import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react'
import { Container, Overlay } from './styles'
import { AiOutlineClose } from 'react-icons/ai';

import { UtilsContext } from '@/context/utilsContext'

const Modal = () => {
  const { isOpen, setOpen, urlEmbeded, selectedVideos } =
    useContext(UtilsContext)

  function handleChildClick(event: any) {
    event.stopPropagation()
    setOpen(false)
  }

  return isOpen ? (
    <Container>
      <div>
        <div className="modal-content">
          <div className="container-btn">
            <button onClick={handleChildClick}>
              <AiOutlineClose></AiOutlineClose>
            </button>
          </div>
          <div className="container-title">
            <p>
              <strong>Webinar: </strong>
              {selectedVideos!.title}
            </p>
          </div>
          <iframe
            src={urlEmbeded}
            title="YouTube Video"
            width="560"
            height="315"
            allowFullScreen
          ></iframe>
          <div className="container-description">
            <h3>Descrição</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              bibendum, tortor nec rutrum feugiat, nulla arcu sollicitudin
              turpis, euismod sollicitudin enim neque sit amet arcu.
            </p>
            <h3>Download</h3>
            <hr />
          
          </div>
        </div>
      </div>
      <Overlay onClick={handleChildClick} />
    </Container>
  ) : (
    <></>
  )
}

export default Modal
