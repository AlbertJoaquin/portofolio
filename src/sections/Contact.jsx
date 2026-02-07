import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return(
        <div>
            <div className="line-separator"></div>
            <div className="contactForm">
                <div className="left-contact">
                    <div className="thumbs-icon"><FontAwesomeIcon icon={faComment} size="2x" color="#23c483"/></div>
                    <h1>Hit me up!</h1>
                    <p>Looking to collaborate or have a question?
                        Drop me a message here, and I’ll get back to you promptly.
                        Let’s create something awesome together.</p>
                </div>
                <div className="right-contact">

                </div>
            </div>
        </div>
    );
}