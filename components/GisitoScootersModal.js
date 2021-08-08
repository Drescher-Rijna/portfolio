import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Modal, Button } from 'react-bootstrap';
import { useRef } from 'react';

const GisitoScootersModal = ({showModal, setShowModal}) => {

    const modalRef = useRef();

    const closeModal = () => {
        setShowModal(false);
    }
    

    return(
                <Modal  ref={modalRef} show={showModal} onHide={closeModal} >
                    <Modal.Body showModal={showModal} >
                        <span className="close-modal-btn" onClick={() => {setShowModal(prev => !prev); }}>
                            <FontAwesomeIcon icon={faWindowClose} />
                        </span>
                        <div className="project-modal-carousel">
                            <Carousel variant="dark" >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-forside.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-search.png"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-details.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-incart.png"
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-cart.png"
                                        alt="Fifth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-removeditem.png"
                                        alt="Sixth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-auth.png"
                                        alt="Seventh slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-admin.png"
                                        alt="Eigth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-gallery.png"
                                        alt="Ninth slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    
                        <div className="project-modal-infobox">
                            <article>
                                <h2 className="heading-h2">
                                    GISITO SCOOTERS | LØBEHJUL WEBSHOP
                                </h2>
                                <ul className="tools-used">
                                    <li>
                                        NextJS |
                                    </li>
                                    <li>
                                        ReactJS |
                                    </li>
                                    <li>
                                        Firebase(NoSQL) |
                                    </li>
                                </ul>
                                        
                                <article className="modal-text">
                                    <p>
                                        Løbehjul webshop projekt, hvor jeg har brugt en NoSQL-databse til at skabe bruger regristering og log ind.
                                    </p>
                                    <p>
                                        Derudover har jeg brugt databasen til at gemme produktinfo og billeder, så siden dynamisk kan fremvise produkterne. Samtidigt fremvises individuelle
                                        produkter dynamisk på produktinfo-siden, så man ikke skal lave en unik side til hvert produkt.
                                    </p>
                                    <p>
                                        Brugeren har mulighed for at bruge søgefeltet til at finde specfikke produkter og kan tilføje produkter til deres kurv, som vil blive gemt på
                                        databsen hvis man er logget ind, og på local storage hvis man ikke er logget ind.
                                    </p>
                                    <p>
                                        Ydermere er der en form for tilføjelse af nye produkter, som kun kan bruges af brugere som er tildelt rollen som administrator. 
                                    </p>
                                </article>
                            </article>
                        </div>
                    </Modal.Body>
                    
                    <Modal.Footer className="mt-4">
                        <a className="modal-project-link" href="https://gisito-scooters-nextjs.vercel.app/" target="_blank">
                            <button>
                                Besøg siden
                            </button>
                        </a>
                    
                        <a className="modal-project-link" href="https://github.com/Drescher-Rijna/gisito-scooters-nextjs" target="_blank">
                            <button>
                                Kode på Github
                            </button>
                        </a>
                    </Modal.Footer>
                </Modal>
                
    );
}

export default GisitoScootersModal;