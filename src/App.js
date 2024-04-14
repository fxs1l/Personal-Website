import { useRef } from 'react'

import './styles/main.sass';
import 'animate.css'

import About from './sections/About';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills'
import Footer from './sections/Footer';
import SnappableSection from './components/SnappableSection';
import SectionSeparator from './sections/SectionSeparator';
import NavigationBar from './sections/NavigationBar'



export default function App(){
    // Define refs for scrolling to sections
    const sectionRefs = {
        aboutRef: useRef(null),
        projectsRef: useRef(null),
        skillsRef: useRef(null),
    };

    const scrollToSection = (sectionId) => {
        const sectionRef = sectionRefs[sectionId];
        if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
            behavior: 'smooth',
            // block: 'start',
        });
        }
    };
    return(
        <>
            <div class = 'snappable-container' > 
                {/* <StickyNavBar></StickyNavBar> */}
                <NavigationBar scrollToSection = {scrollToSection}></NavigationBar>
                <SnappableSection >
                    <Hero opacity/>
                </SnappableSection>
                <SnappableSection >
                    <SectionSeparator 
                        title = 'About' 
                        ref = {sectionRefs.aboutRef}
                    />
                    <About />
                    <SectionSeparator 
                        title = 'Projects' 
                        ref = {sectionRefs.projectsRef}
                    />
                    <Projects />
                    <SectionSeparator 
                        title = 'Skills' 
                        ref = {sectionRefs.skillsRef}
                    />
                    <Skills />
                    <SectionSeparator />
                    <Footer />
                </SnappableSection>
                
            </div> 
        </>
        
    );
}


