import { useGameStates, useGameDispatch } from './GameContext'

// Components for creating array of skills //
function SkillItem({skillName}){
    return(
        <div class='skill-tab'>
            {skillName}
        </div>
    )
}

function ProjectSkills({skills}){
    return(
        <>
            <div class='skill-array'>
                {skills.map((skill) => <SkillItem skillName={skill}/>) }
            </div>
        </>   
    )
}
// ------------------------------- // 

export function Project(props){
    const alt = 'Loading ' + props.title + '...'

    const dispatch = useGameDispatch();
    const state = useGameStates();

    

    const handleMouseEnter = () => {
        // console.log("--")
        // console.log(state.showOverlay)
        dispatch({type:'toggle_overlay', payload: true});
        // console.log("mouse entered")
        console.log(state.showOverlay)
    };
    
    const handleMouseLeave = () => {
        // console.log("--")
        
        dispatch({type:'toggle_overlay', payload: false});
        console.log(state.showOverlay)
        // console.log("mouse left")
        // console.log(state.showOverlay)
    };
    return(
        <>
            <div 
                class = 'project-container' 
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
            >
                <a 
                    href = {props.link} 
                    className = 'project-media' 
                >
                    <img 
                        // class = 'animate__tada animate__animated'
                        src = {props.media.src} 
                        alt = {alt}
                    />
                </a>
                {/* <a 
                    href = {props.link} 
                    className = 'details-overlay pointer-hover'
                > */}
                    <div class = {`details-overlay ${state.showOverlay ? 'hover' : 'none'}`}>
                        <h1> {props.title} </h1>
                        <h4> {props.desc} </h4>
                        <a href = {props.link} >
                            <i class="bi bi-github"></i>
                            &nbsp; Read more
                        </a>
                        <ProjectSkills skills = {props.skills} />

                    </div>
                {/* </a> */}
            </div>
        </>
       
    );

}

function ProjectSelector(){
    
    const state = useGameStates();
    const dispatch = useGameDispatch();

    const handleListItemClick = (choice, index) => {
        dispatch({type: 'select_item', payload: choice})
        dispatch({type: 'set_index', payload: index})
    }

    return(
        <div class = {`sidebar-content ${state.selectedProject ? 'hidden' : ''}`}>
            {/* <h3> ProjectOS 20.24 LTS tty1</h3>
            <h4> login: fxs1l <br/> password: ****** <br/><br/></h4> */}
            <h3> &gt;_ boot project </h3>
            <ul>
                {
                state.projects.map((project, index) => (
                <li
                    key = {index}
                    className = {`animate__flash animate__infinite animate__slow ${index === state.focusedIndex ? 'animate__animated bg-focused' : ''}`}
                    onClick = {() => 
                        handleListItemClick(project.setIndex, index)
                    }
                >
                    {project.funProgramName} 
                </li>
                ))}
                

            </ul>
            {/* <h3> &gt;_ man project </h3>
            <ul>
                <li> click or use the up/down buttons to navigate</li>
            </ul> */}
        </div>
    );
    
}


// const Scroller = (props) =>{
//     return(
//         <div class='project-scroller-container snap-scroller-x'>
//             <div class='project-scroller'>   
//                 {props.children}
//             </div>
//         </div>
//     )
// }

function ProjectGallery() {
    const state = useGameStates();

    return (
        <nav class = 'sidebar' >
            <ProjectSelector/>
            
            {state.selectedProject && (
                <>
                {/* // <Scroller> */}
                    <div className="selected-project">
                        {state.selectedProject !== '' &&
                            <Project
                                title = {state.projects[state.focusedIndex].details.title}
                                link = {state.projects[state.focusedIndex].details.link}
                                media = {state.projects[state.focusedIndex].details.media} 
                                desc = {state.projects[state.focusedIndex].details.desc} 
                                skills = {state.projects[state.focusedIndex].details.skills}

                            />
                            
                        }
                    </div> 
                {/* // </Scroller> */}
                </>
            )}
        </nav>
    );
}

export default ProjectGallery;

