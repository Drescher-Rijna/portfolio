import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Modal, Button } from 'react-bootstrap';
import { useRef } from 'react';

const DaWintiModal = ({showModal, setShowModal}) => {

    const modalRef = useRef();

    const closeModal = () => {
        setShowModal(false);
    }
    

    return(
                <Modal  ref={modalRef} show={showModal} onHide={closeModal}>
                    <Modal.Body showModal={showModal} >
                        <span className="close-modal-btn" onClick={() => {setShowModal(prev => !prev); }}>
                            <FontAwesomeIcon icon={faWindowClose} />
                        </span>
                        <div className="project-modal-carousel">
                            <Carousel variant="dark" >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/dawinti-carousel/dawinti-forside.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/dawinti-carousel/dawinti-booking-form.png"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/dawinti-carousel/dawinti-overnatningspris-beregner.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/dawinti-carousel/dawinti-sektion-lokaler.png"
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/dawinti-carousel/dawinti-arrangementer.png"
                                        alt="Fifth slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    
                        <div className="project-modal-infobox">
                            <article>
                                <h2 className="heading-h2">
                                    DA WINTI'S NYE LOGO OG HJEMMESIDE
                                </h2>
                                <ul className="tools-used">
                                    <li>
                                        WordPress |
                                    </li>
                                    <li>
                                        Elementor |
                                    </li>
                                    <li>
                                        Elementor class |
                                    </li>
                                    <li>
                                        Adobe XD og IA
                                    </li>
                                </ul>
                                        
                                <p className="modal-text">
                                    Mig og en medstuderende fik til opgave fra kunst- og kulturhuset Da Winti i Selde,
                                    at give dem en ny visuel identitet som repræsentere dem og hvad de står for, en hjemmeside
                                    som har et stærkt sammenhæng med den nye identitet og hjælpe dem med at styrke deres online tilstedeværelse.
                                </p>
                                <p className="modal-text">
                                    Vi har gået gennem en lang fasebaseret process, hvor vores tilgang satte stor fokus på brugerenes involvering og feedback,
                                    i form af adskillige test. Så vi havde mulighed for at skræddesye siden specielt til Da Winti's primær målgruppe.
                                </p>
                            </article>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <a className="modal-project-link" href="https://dawinti.drescher-rijna.dk/" target="_blank">
                            <button>
                                Besøg siden
                            </button>
                        </a>
                    
                        <a className="modal-project-link" href="https://github.com/Drescher-Rijna/dawinti-plugin" target="_blank">
                            <button>
                                Kode på Github
                            </button>
                        </a>
                    </Modal.Footer>
                </Modal>
                
    );
}

export default DaWintiModal;