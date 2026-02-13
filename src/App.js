import { useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";


function App() {
    const [loading, setLoading] = useState(true);

    // Smooth scroll when nav is clicked
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const handleScroll = (section) => {
        let ref;

        if (section === "home") ref = homeRef;
        else if (section === "about") ref = aboutRef;
        else if (section === "contact") ref = contactRef;

        ref.current.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <>
            <Header handleScroll={handleScroll} />

            {/* HERO / HOME */}
            <section className='home' ref={homeRef}>
                <Home/>
            </section>

            {/* ABOUT */}
            <section className='about' ref={aboutRef}>
                <About />
            </section>

            {/* CONTACT */}
            <section className='contact' ref={contactRef}>
                <Contact />
            </section>

            <Footer />

            {loading && <Loader onFinish={() => setLoading(false)} />}
        </>
    );
}

export default App;
