import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";


function App() {
    const [loading, setLoading] = useState(true);

    // Smooth scroll when nav is clicked
    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header handleScroll={handleScroll} />

            {/* HERO / HOME */}
            <section className='home' id="home">
                <Home />
            </section>

            {/* ABOUT */}
            <section className='about' id="about">
                <About />
            </section>

            {/* CONTACT */}
            <section className='contact' id="contact">
                <Contact />
            </section>

            <Footer />

            {loading && <Loader onFinish={() => setLoading(false)} />}
        </>
    );
}

export default App;
