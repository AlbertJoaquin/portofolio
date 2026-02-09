import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="mPort-Footer">
            <div className="information">
                <a
                    href="https://github.com/AlbertJoaquin"  // replace with your GitHub URL
                    target="_blank"                         // opens in a new tab
                    rel="noopener noreferrer"               // security best practice
                >
                    <FontAwesomeIcon icon={faGithub} size="5x" color="#23c483"/>
                </a>
                <div className="profile">
                    <p><FontAwesomeIcon icon={faEnvelope} size="1.5x" color="#23c483"/> :
                        albertjoaquinenselada@gmail.com
                    </p>
                    <p><FontAwesomeIcon icon={faPhone} size="1.5x" color="#23c483"/> : 09166217839</p>

                </div>
                <div className="reserved"><p>&copy; 2026 AJ. All rights reserved.</p></div>
            </div>
        </footer>
    );
}