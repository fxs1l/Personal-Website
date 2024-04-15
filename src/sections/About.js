
import profileSrc from '../assets/asil.jpg'

import Card from '../components/Card';
import LazyAnimation from '../components/LazyAnimation';
// import Contacts from '../components/Contacts.js';
// import SnappableSection from '../components/SnappableSection';

function AboutMeText(){
    const universityUrl = 'https://upd/edu.ph'
    return(
        <p> 
            I am a third year undergraduate student in <b> Electronics Engineering </b> at the <b> 
            <a href = {universityUrl} > University of Philippines - Diliman</a></b>.
            Currently, I am actively seeking internships while engaging 
            in self-learning efforts to enter the tech industry, with a particular focus on data science and software development.
            <br/><br/>
            I am passionate about designing circuits, building IOT systems, configuring Linux desktops, and machine learning projects.
            Outside of school, I regularly play 🎸 and 🎮, binge-watch 📺 shows, and 💪 work out for fitness.

            <br/><br/>
            Feel free to contact me if you have any questions or would like me to work on a project.
            <br/> <br/>
            <a 
                href = '/static/media/resume.pdf' 
                role = 'button' 
                target = '_self' 
                rel = 'noopener noreferrer'
            >
                View Resume
            </a>
            {/* <Contacts /> */}
        </p>
    );
}

// function IntroText(){
//     return(
//         <h1>
//             <span class = "material-symbols-outlined">
//                 waving_hand 
//             </span>
//             &nbsp;&nbsp;Hi, I'm <br /> <br />
//             <b> Asil </b> Andrei Acasio 
//         </h1>
//     )  
// }

function ProfilePicture(){
    return (
        <div class = 'profile-container'>
            <img 
                class = 'pointer-hover' 
                src = {profileSrc} 
                alt = 'Asil' 
            />
        </div>
    )

}

export default function About() {
    return(
        <section 
            id = 'About' 
            class = 'flex-container'
        >
            {/* <CardTitle 
                    logo = 'badge' 
                    title = 'About Me'
                />   */}
            <LazyAnimation 
                id = 'animate-profile'
                animationStyle = 'animate__backInLeft'
            >
                <Card 
                    id = 'About-profile'
                    className = 'column'
                >       
                    <ProfilePicture />
                </Card>
            </LazyAnimation>
            <LazyAnimation 
                id = 'animate-description'
                animationStyle = 'animate__backInRight animate__fast'
            >
                <Card 
                    id = 'About-description' 
                    className = 'column'
                >
                    
                    <AboutMeText />
                </Card>
            </LazyAnimation>
            
        </section>
    );
};

