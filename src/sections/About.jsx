import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJava, faPhp, faCss, faJs, } from "@fortawesome/free-brands-svg-icons";
import { faDatabase} from "@fortawesome/free-solid-svg-icons";


export default function About() {
    return(
        <div className="about">
            <div className="img-container">
                <img src="/./assets/mainP.webp"
                     alt="Albert Enselada"
                     loading="eager"
                     decoding="async"
                     fetchPriority="high"/>
            </div>

            <div className="aboutme-content">
                <div className="title-wrapper">
                    <h1>Objectives</h1>
                    <div className="title-subtext">
                        <p> Motivated and detail-oriented individual with strong problem-solving
                            skills and technical knowledge, eager to contribute effectively to a dynamic
                            IT team and support successful projects. Naturally curious and
                            passionate about exploring new technologies and innovative solutions.
                            Committed to continuous learning, mastering new tools and technologies,
                            and applying fresh ideas to improve processes and outcomes.</p>
                    </div>
                    <h1>Technologies</h1>
                    <div className="title-subtext tech">
                        <p> CSS <FontAwesomeIcon icon={faCss} size="2x" color="#1572B6"/></p>
                        <p> HTML <FontAwesomeIcon icon={faHtml5} size="2x" color="#E34F26"/></p>
                        <p> JS <FontAwesomeIcon icon={faJs} size="2x" color="#F7DF1E"/></p>
                        <p> REACT <FontAwesomeIcon icon={faReact} size="2x" color="#777BB4"/></p>
                        <p> JAVA <FontAwesomeIcon icon={faJava} size="2x" color="#007396"/></p>
                        <p> PHP <FontAwesomeIcon icon={faPhp} size="2x" color="#777BB4"/></p>
                        <p> MySQL <FontAwesomeIcon icon={faDatabase} size="2x" color="#4479A1"/></p>
                    </div>
                </div>
            </div>
        </div>

    )
}