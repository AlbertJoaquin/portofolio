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
                    <p>
                        Looking to collaborate or have a question?
                        Drop me a message here, and I’ll get back to you promptly.
                        Let’s create something awesome together.
                    </p>
                </div>
                <div className="right-contact">
                      <form>
                            <label htmlFor="name"> Name</label>
                            <input type="text" id="name" name="name" required/>

                            <label htmlFor="email"> Email</label>
                            <input type="email" id="email" name="email" required/>

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>

                            <button type="submit">Let’s connect</button>
                      </form>
                </div>
            </div>
        </div>
    );
}