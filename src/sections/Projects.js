import { forwardRef } from "react"

import Gameboy from "../components/HandheldConsole/Gameboy"


const Projects = forwardRef((_, ref) => {
    return (
        <section 
            id = 'Projects'
            className = 'flex-container column'
        >
            <Gameboy />
        </section>
    );
});

export default Projects;

