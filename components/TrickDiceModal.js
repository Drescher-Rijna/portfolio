import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Modal, Button } from 'react-bootstrap';
import { useRef } from 'react';

const TrickDiceModal = ({showModal, setShowModal}) => {

    const modalRef = useRef();

    const closeModal = () => {
        setShowModal(false);
    }
    

    return(
                <Modal  ref={modalRef} show={showModal} onHide={closeModal} scrollable={true} >
                    <Modal.Header>
                        <div className="project-modal-carousel w-full">
                            <Carousel className="max-h-96" variant="dark" >
                                <Carousel.Item className="max-h-96 bg-gray-200 w-full">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/trickdice-carousel/trickdice-start.webp"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200 w-full">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/trickdice-carousel/trickdice-throw.webp"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200 w-full">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/trickdice-carousel/trickdice-difficulty.webp"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200 w-full">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/trickdice-carousel/trickdice-create.webp"
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200 w-full">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/trickdice-carousel/trickdice-saved.webp"
                                        alt="Fifth slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <span className="close-modal-btn" onClick={() => {setShowModal(prev => !prev); }}>
                            <FontAwesomeIcon icon={faWindowClose} />
                        </span>
                    </Modal.Header>

                    <Modal.Body showModal={showModal} >
                        <div className="project-modal-infobox">
                            <article>
                                <h2 className="heading-h2">
                                    TRICK DICE TERNINGER LIGE VED HÅNDEN
                                </h2>
                                <ul className="tools-used">
                                    <li>
                                        Unity |
                                    </li>
                                    <li>
                                        C#(C-sharp) |
                                    </li>
                                    <li>
                                        Binary formatter
                                    </li>
                                </ul>
                                        
                                <p className="modal-text">
                                    En app der simulere spillet Trick Dice hvor man normalt ville have fysiske terninger man kaster med og får tricks
                                    man skal lande for at undgå at få et strike og vinde spillet. Ideen kom af at mig og mine venner elsker at konkurrere mod 
                                    hinanden på løbehjul og gad godt at spille "Trick Dice", men kunne ikke skaffe terningerne til at spille. Så jeg valgte at lave
                                    en alternativ løsning selv, med en mobil app.
                                </p>
                                <h3 className="heading-h3">
                                    Appen har følgende features:
                                </h3>
                                <ul id="trick-dice-features">
                                    <li>
                                        Shake-detection, så man kan ryste sin mobil for at kaste terningerne, som hvis man kastede virkelige terninger
                                    </li>
                                    <li>
                                        Forskellige terninger for forskellige sværhedsgrader
                                    </li>
                                    <li>
                                        Mulighed for at lave og gemme egne terninger
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </Modal.Body>
                    
                    <Modal.Footer className="mt-4">                    
                        <a className="modal-project-link" href="https://github.com/Drescher-Rijna/dawinti-plugin" target="_blank">
                            <button>
                                Kode på Github
                            </button>
                        </a>
                    </Modal.Footer>
                </Modal>
                
    );
}

export default TrickDiceModal;