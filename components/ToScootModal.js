import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Modal, Button } from 'react-bootstrap';
import { useRef } from 'react';

const ToScootModal = ({showModal, setShowModal}) => {

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
                                <Carousel.Item className="max-h-96 bg-gray-200">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/toscoot-carousel/toscoot-forside.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/toscoot-carousel/tricklist-stats.jpg"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/toscoot-carousel/session-stats.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/toscoot-carousel/tricklists.jpg"
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/toscoot-carousel/tricks.jpg"
                                        alt="Fifth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-96 bg-gray-200">
                                    <img
                                        className="d-block max-h-96 m-auto"
                                        src="/toscoot-carousel/sessions.jpg"
                                        alt="Sixth slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    
                        <div className="project-modal-infobox">
                            <article>
                                <h2 className="heading-h2">
                                    PERFORMANCE TRACKING APP FOR LØBEHJUL
                                </h2>
                                <ul className="tools-used">
                                    <li>
                                        Flutter |
                                    </li>
                                    <li>
                                        Firebase(NoSQL) |
                                    </li>
                                    <li>
                                        Adobe IA
                                    </li>
                                </ul>
                                        
                                <p className="modal-text">
                                    Som sagt elsker jeg at køre løbehjul og vil gerne forbedre mig så meget så muligt. Med det fik
                                    jeg den ide at det ville være fedt hvis man kunne have en app der vidste hvor godt man præstere i sine træninger,
                                    som med løbe-apps, men dedikeret til løbehjul.
                                </p>
                                <p>
                                    ToScoot er en form for to-do/workout app hvor man laver trickliste og derefter lave sessions ud fra de tricks man
                                    har i sin trickliste og siger til appen hvor mange gange man lander sit trick og hvor mange gange man fejler sine tricks. 
                                    Hvorpå appen vil gennem tiden kalkulere din succes ratio og sammenligne dem med tidligere ratios for at se om du faktisk blive bedre.
                                </p>
                                <p>
                                    Den tager også tiden og viser hvor lang tid du bruger på en session og hvor lang tid du bruger på individuelle tricks, så du kan se
                                    hvor du er bedst og hvor du er knap så god. 
                                </p>
                                <p>
                                    Appens data indsamling og udregnede statistikker giver mulighed for at måle og analysere på hvad du har brug for at arbejde på og hvad dine styrker og svagheder er.
                                </p>
                                <h3 className="heading-h3">
                                    Appen har følgende featurs:
                                </h3>
                                <ul id="toscoot-features" >
                                    <li>
                                        All Time statistikker for alle tricks og tricklister, samt total landing ratio
                                    </li>
                                    <li>
                                        Statistikker for hver individuel trickliste
                                    </li>
                                    <li>
                                        Statistikker for hver individuel session
                                    </li>
                                    <li>
                                        Ugentlige samligning af landing ratio, hvor den viser hvor bedre eller værre man bliver fra uge til uge
                                    </li>
                                    <li>
                                        Landing ratios for hvert trick i odreren bedst til værst
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    
                        <a className="modal-project-link" href="https://github.com/Drescher-Rijna/toscoot" target="_blank">
                            <button>
                                Kode på Github
                            </button>
                        </a>
                    </Modal.Footer>
                </Modal>
                
    );
}

export default ToScootModal;