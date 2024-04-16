import { forwardRef } from "react"

// import SnappableSection from "../components/SnappableSection"
import Card from "../components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faReact, faHtml5, faCss3, faJava, faJs, faSass, faAndroid, faGit} from '@fortawesome/free-brands-svg-icons'
import { faCode, faC, faTerminal, faFire, faSquare, faMicrochip} from '@fortawesome/free-solid-svg-icons'
import LazyAnimation from "../components/LazyAnimation";

function Table({data}) {
    const skillCategory = Object.keys(data);
    const skills = Object.values(data);
    return (
        // <>{skillCategory}</>
             <table>
                {/* {Object.values(data)} 'aajh' */}
                <thead>
                <tr>
                    {skillCategory.map((header, index) => (
                    <th key={index}> <h3> {header} </h3> </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {Array.from({ length: Math.max(...Object.values(skills).map(category => category.length)) }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(skills).map((category, colIndex) => {
                            const item = category[rowIndex];
                            if (item === undefined) return null
                            return (
                                <td key={colIndex}>
                                    {item.icon === 'none' 
                                        ? 
                                            <> 
                                                <FontAwesomeIcon icon={faCode} /> &nbsp;
                                                {item.name}
                                            </> 
                                        : (
                                            <>
                                                <FontAwesomeIcon icon={item.icon} /> &nbsp;
                                                {item.name} 
                                            </>
                                    )}
                                </td>
                            )
                            })}
                        </tr>
                    ))}
                </tbody>

            </table>
     
    );
}
const SkillsSection = forwardRef((_, ref) => {
    const languages = {
        'Programming Languages': [
            {name: 'Python', icon: faPython},
            {name: 'HTML5', icon: faHtml5},
            {name: 'CSS', icon: faCss3},
            {name: 'Javascript', icon: faJs},
            {name: 'Java', icon: faJava},
            {name: 'C/C++', icon: faC}, 
            {name: 'Flutter', icon: faAndroid},
            {name: 'Bash/ZSH', icon: faTerminal}, 
            {name: 'MATLAB', icon: 'none'}, 
        ],
        
    }
    const frameworks = {
        'Frameworks & Libraries': [
            {name: 'React', icon: faReact},
            {name: 'SASS', icon: faSass},
            
        ],

        
    }

    const databases = {
        'Databases': [
            {name: 'Firestore', icon: faFire}
        ]
    }
    const otherTools = {
        'Developer Tools':
        [
            {name: 'Git', icon: faGit},
            {name: 'Neovim', icon: faCode},
            {name: 'VSCode', icon: faCode},
            {name: 'Arduino IDE', icon: faMicrochip},
            {name: 'STM32 Cube IDE', icon: faMicrochip}
            
        ]
    }

    const engineering = {
        'Engineering Software': [
        {name: 'LTSPICE', icon: faMicrochip},
        {name: 'KiCAD', icon: faMicrochip},
        {name: 'Simulink', icon: faSquare},
        
        ]
    }
    return (
        // <>
        // </>
        // <SnappableSection id='Projects' ref={ref}>
        <section 
            id = 'Skills'
            className = 'flex-container'
        >
                {/* <h2> 🚧 Coming soon</h2> */}
                <Card className = 'flex-container-centered'>
                    <LazyAnimation id = 'animate-table' animationStyle='animate__fadeIn'>
                        <Table data = {languages} />
                        {/* <div class = 'line' /> */}
                        <Table data = {frameworks} />
                        {/* <div class = 'line' /> */}
                        <Table data = {databases} />
                        {/* <div class = 'line' /> */}
                        <Table data = {otherTools} />
                    </LazyAnimation>
                    
                </Card>
                <Card>
                    <LazyAnimation id = 'animate-table' animationStyle = 'animate__fadeIn'>
                        
                        
                        <Table data = {engineering} />
                    </LazyAnimation>
                </Card>
                
        </section>
        
        // </SnappableSection>
    );
});

export default SkillsSection;