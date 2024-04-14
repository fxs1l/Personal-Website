// import './Contacts.css'
import SvgButton from './SVGButton'

const linkedIn = 
    <i class = "bi bi-linkedin" />
const github =
    <i class = "bi bi-github" />
const email = 
    <i class = "bi bi-envelope-fill" />

export default function Contacts({svgArray}){
    return (
        <div 
            id = 'Contact'
            class = 'contacts flex-container-centered'  
        >
            <SvgButton 
                link = 'https://www.linkedin.com/in/asilandreiacasio/' 
                svg = {linkedIn}
            />
            <SvgButton 
                link = 'https://github.com/fxs1l/' 
                svg = {github} 
            /> 
            <SvgButton 
                link = 'mailto:abacasio@up.edu.ph' 
                svg = {email} 
            /> 
        </div> 
    );
}