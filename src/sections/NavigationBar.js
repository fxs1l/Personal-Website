// import logoSrc from '../assets/logo.png';
import { useState, useEffect } from 'react'


function NavigationMenu({scrollToSection}) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleNavItems = () => {
        setShowMenu(!showMenu);
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
        setShowMenu(width > 900)
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []); 

    // const isMobile = useMediaQuery

    const items  = [
        {id: 0, name: 'about', link: '#/', isPage: false},
        {id: 1, name: 'projects', link: '#/Projects', isPage: false},
        {id: 2, name: 'skills', link: '#/Skills', isPage: false},
        {id: 3, name: 'resume', link: '/static/media/resume.pdf', isPage: true}
    ];

    return (
        <>
            <div class = 'nav-menu'>
                {/* {windowWidth <= 900 ? setShowMenuValue(true) : <h1>false</h1>} */}
                <button 
                    id = 'menu-button' 
                    class = {`button-no-decor ${showMenu ? 'hidden' : ''}`}
                    onClick = {toggleNavItems}
                >
                    <b><i class = "bi bi-list" /> </b>
                </button>
                {items.map((item) => 
                    <>
                    {item.isPage ?
                        <button class = {`menu-item button-no-decor ${showMenu ? '' : 'hidden'} `}>
                            <a
                                class = 'fill-parentt'
                                role = 'button' 
                                href = {item.link} 
                                target = '_self' 
                                rel = 'noopener noreferrer'
                            > 
                                {item.name} 
                            </a>
                        </button>
        
                        :
        
                        <button 
                            class = {`menu-item button-no-decor ${showMenu ? '' : 'hidden'}`} 
                            // href = '#'
                            onClick = {() => {
                                scrollToSection(item.name + 'Ref');
                                toggleNavItems();
                            }}
                        >  
                            {item.name}
                        </button>
                    }
                    </>
                )}
                
                
            </div>
            
        </>
    );
  }
  
export default function NavigationBar({scrollToSection}){
    // const websiteUrl = 'https://asilacas.io';
    // const websiteName = 'Asil Andrei Acasio';

    return(
        <nav class = 'topnav flex-container' >
            {/* <div class = 'nav-logo-container' >
              <a href = {websiteUrl} >
                <img 
                    class = 'nav-logo' 
                    src = {logoSrc} 
                    alt = {websiteName}
                />
              </a>
            </div> */}
            <NavigationMenu scrollToSection={scrollToSection}/>
        </nav> 
    );
  }
    