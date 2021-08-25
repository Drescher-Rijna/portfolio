import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Modal, Button } from 'react-bootstrap';
import { useRef } from 'react';

const MayasModal = ({showModal, setShowModal}) => {

    const modalRef = useRef();

    const closeModal = () => {
        setShowModal(false);
    }
    

    return(
        <Modal  ref={modalRef} show={showModal} onHide={closeModal} scrollable={true}  >
            <Modal.Header>
                <div className="project-modal-carousel">
                    <Carousel variant="dark" >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/mayas-carousel/mayas-forside.webp"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/mayas-carousel/mayas-hjemmesideoversaettelse.webp"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/mayas-carousel/mayas-formular.webp"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/mayas-carousel/mayas-menu.webp"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/mayas-carousel/mayas-tekniskoversaettelse.webp"
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <span className="close-modal-btn" onClick={() => {setShowModal(prev => !prev); }}>
                    <FontAwesomeIcon icon={faWindowClose} />
                </span>
            </Modal.Header>
            <Modal.Body showModal={showModal}   >
                <div className="project-modal-infobox">
                    <article>
                        <h2 className="heading-h2">
                            MAYA'S NYE HJEMMESIDE OG LOGODESIGN
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
                            Mig og Veli Aday fik til opgave, af Maya's Tolkeservice, at lave dem en ny moderniseret hjemmeside og et nyt logodesign.
                        </p>
                        <p className="modal-text">
                            Det var et 3 ugers projekt hvor vi fik lavede en masse research om Maya's Tolkeservice og deres konkurrenter og brugte den information, samt
                            informationen om at de var blevet til en virksomhed som er mere kommune orienteret, til at lave en logodesign- og hjemmesidedesign prototype.
                            
                        </p>
                        <p>
                            Efter der var givet en præsentation af vores forslag til vores arbejdsgiver og der blev givet thumbs up gik vi igang med implementeringen af 
                            det nye design ved hjælp af Wordpress og Elementor, og vi fik kodet et plugin til dem for at gøre den interaktive toggle-knap som skifter forsidens sprog mulig.
                        </p>
                        <p>
                            Det endelig produkt skabte så meget tilfredshed, at ejerne af Maya's Tolkeservice ville have os til at bygge hjemmesider til 
                            deres andre virksomheder de arbejder på.
                        </p>
                    </article>
                </div>
            </Modal.Body>
            
            <Modal.Footer className="mt-4">
                <a className="modal-project-link" href="http://mayastolkeservice.dk/" target="_blank">
                    <button>
                        Besøg siden
                    </button>
                </a>
            
                <a className="modal-project-link" href="https://github.com/Drescher-Rijna/translate-toggle" target="_blank">
                    <button>
                        Kode på Github
                    </button>
                </a>
            </Modal.Footer>
        </Modal>
                
    );
}

export default MayasModal;