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
                <Modal  ref={modalRef} show={showModal} onHide={closeModal} scrollable={true} >
                    <Modal.Header>
                        <div className="project-modal-carousel">
                            <Carousel variant="dark" >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-forside.webp"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-search.webp"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-details.webp"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-incart.webp"
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-cart.webp"
                                        alt="Fifth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-removeditem.webp"
                                        alt="Sixth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-auth.webp"
                                        alt="Seventh slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-admin.webp"
                                        alt="Eigth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/gisitoscooters-carousel/gisito-gallery.webp"
                                        alt="Ninth slide"
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
                                    GISITO SCOOTERS | L??BEHJUL WEBSHOP
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
                                    <div className="mt-3 grid gap-y-4">
                                        <div>
                                            <h4 className="heading-h4">
                                                Om Gisito Scooters
                                            </h4>    
                                            <p className="modal-text">
                                                Dette er en L??behul webshop, som er blevet bygget med en NoSQL-database. Der er blevet sat fokus p??
                                                bruger registrering, database implementering ift. produkter og informationssider til produkter, tilf??jelse af
                                                produkter til kurven der gemmes og et brugebart s??gefelt. S?? det er s?? nemt for brugeren at bruge siden, og finde det
                                                produkt de gerne vil tilf??je til kurven.
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h4 className="heading-h4">
                                                Personligt projekt | 3-4 uger
                                            </h4>
                                        </div>

                                        <div>
                                            <h4 className="heading-h4">
                                                Websitet har f??lgende funktionaliteter:
                                            </h4>

                                            <ul className="list-disc ml-5 grid gap-y-1">
                                                <li className="text-base">
                                                    Bruger oprettelse og login
                                                </li>
                                                <li className="text-base">
                                                    S??gefelt
                                                </li>
                                                <li className="text-base">
                                                    Dynamisk side som ??ndre sig alt efter hvad produkt brugeren v??lger, at ville have mere information om
                                                </li>
                                                <li className="text-base">
                                                    Admin links hvorp?? man har mulighed for at tilf??je nye produkter til databasen, og som automatisk vil fremvises
                                                    p?? webshoppen
                                                </li>
                                                <li className="text-base">
                                                    En kurv hvor de gemte produkter er gemt i local storage for g??ster uden login, og i databasen for brugere
                                                    der er logget ind
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </article>
                            </article>
                        </div>
                    </Modal.Body>
                    
                    <Modal.Footer className="mt-4">
                        <a className="modal-project-link" href="https://gisito-scooters-nextjs.vercel.app/" target="_blank">
                            <button>
                                Bes??g siden
                            </button>
                        </a>
                    
                        <a className="modal-project-link" href="https://github.com/Drescher-Rijna/gisito-scooters-nextjs" target="_blank">
                            <button>
                                Kode p?? Github
                            </button>
                        </a>
                    </Modal.Footer>
                </Modal>
                
    );
}

export default GisitoScootersModal;