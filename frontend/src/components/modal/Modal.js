import React, { useRef, useEffect, useCallback } from "react";
import ReactPlayer from 'react-player';


import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import './modal.css';

import reparo from '../../pages/reparo.jpg'

const backgroundModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 1200px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <backgroundModal onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ReactPlayer id="video" controls url="https://www.youtube.com/watch?v=vgm69mJ1ZRc" />
              <ModalContent>
                <h1 className="videoTitle">Projeto Reparo J??</h1>
                <img className="video" src={reparo} alt="Reparo J??" />
                <p className="videoText"> Um sistema online, de f??cil manuseio, que possibilitar?? que usu??rios que 
                    necessitam de servi??os de profissionais liberais para reparos de eletrodom??sticos 
                    e eletroeletr??nicos que possam busc??-los de acordo com a sua geolocaliza????o, 
                    levando-se em conta crit??rios como a avalia????o do profissional e a dist??ncia 
                    poder?? contribuir para encontrar com maior facilidade profissionais capacitados 
                    na internet. Um sistema que conecta o cliente ao prestador de servi??os. 
                </p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </backgroundModal>
      ) : null}
    </>
  );
}

export default Modal;
