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
                <Modal  ref={modalRef} show={showModal} onHide={closeModal} scrollable={true}>
                    <Modal.Header>
                        <div className="project-modal-carousel w-full">
                            <Carousel variant="dark" >
                                <Carousel.Item className="max-h-80 bg-gray-200">
                                    <img
                                        className="d-block max-h-80 m-auto"
                                        src="/toscoot-carousel/toscoot-forside.webp"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-80 bg-gray-200">
                                    <img
                                        className="d-block max-h-80 m-auto"
                                        src="/toscoot-carousel/tricklist-stats.webp"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-80 bg-gray-200">
                                    <img
                                        className="d-block max-h-80 m-auto"
                                        src="/toscoot-carousel/session-stats.webp"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-80 bg-gray-200">
                                    <img
                                        className="d-block max-h-80 m-auto"
                                        src="/toscoot-carousel/tricklists.webp"
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-80 bg-gray-200">
                                    <img
                                        className="d-block max-h-80 m-auto"
                                        src="/toscoot-carousel/tricks.webp"
                                        alt="Fifth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="max-h-80 bg-gray-200">
                                    <img
                                        className="d-block max-h-80 m-auto"
                                        src="/toscoot-carousel/sessions.webp"
                                        alt="Sixth slide"
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
                                        
                                <div className="mt-3 grid gap-y-4">
                                    <div>
                                        <h4 className="heading-h4">
                                            Om ToScoot
                                        </h4>    
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
                                    </div>
                                    
                                    <div>
                                        <h4 className="heading-h4">
                                            Personligt projekt | 4-5 uger
                                        </h4>
                                    </div>
                                    
                                    <div>
                                        <h4 className="heading-h4">
                                            Appen har følgende features:
                                        </h4>

                                        <ul className="list-disc ml-5 grid gap-y-1">
                                            <li className="text-base">
                                                All Time statistikker for alle tricks og tricklister, samt total landing ratio
                                            </li>
                                            <li className="text-base">
                                                Statistikker for hver individuel trickliste
                                            </li>
                                            <li className="text-base">
                                                Statistikker for hver individuel session
                                            </li>
                                            <li className="text-base">
                                                Ugentlige samligning af landing ratio, hvor den viser hvor bedre eller værre man bliver fra uge til uge
                                            </li>
                                            <li className="text-base">
                                                Landing ratios for hvert trick i odreren bedst til værst
                                            </li>
                                        </ul>
                                    </div>
                                     
                                </div>
                            </article>
                        </div>
                    </Modal.Body>
                    
                    <Modal.Footer className="mt-4">
                    
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