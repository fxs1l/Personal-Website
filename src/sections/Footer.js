// import './Footer.css'
import Contacts from '../components/Contacts'

export default function Footer(){
    return(
        <footer class = 'flex-container'>
            <h5 class = 'copyright' > 
                Copyright © Asil Andrei Acasio
            </h5>
            <a href = 'https://github.com/fxs1l/asilacas.io'> 
                <h5> Made with ♥️ using ReactJS </h5>
            </a>
            {/* <a href = 'https://www.nordtheme.com/docs/colors-and-palettes'>
                <h5> Implements the Nord colorscheme</h5>
            </a> */}
            <Contacts />
        </footer>
    );
}