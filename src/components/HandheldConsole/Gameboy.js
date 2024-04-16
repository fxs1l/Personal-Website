// Nintendo don't come for me
// Also, yes I think this is terrible UX design
import {useGameDispatch, GameProvider, useGameStates} from './GameContext';
// import { useHistory } from 'react-router-dom';
import ProjectGallery from './ProjectGallery';

import LazyAnimation from '../LazyAnimation';


import Card from "../Card";

function GameControls({speakerLines=3,}){

    // const history = useHistory();
    const dispatch = useGameDispatch();
    const state = useGameStates();

    const isSelectionScreen = () => {
        return state.selectedProject === ''
    }

    const handleDownButtonClick = () => {
        if (isSelectionScreen()){
            dispatch({type: 'next_item'});
        }
        else{
            dispatch({type: 'previous_project'})
        }
    }
    const handleRightButtonClick = () => {
        if (isSelectionScreen()){
            dispatch({type: 'next_item'});
        }
        else {
            dispatch({type: 'next_project'});
        }
        
    }
    const handleLeftButtonClick = () => {
        if (isSelectionScreen()){
            dispatch({type: 'previous_item'});
        }
        else {
            dispatch({type: 'previous_project'});
        }
    }
    const handleUpButtonClick = () => {
        if (isSelectionScreen()){
            dispatch({type: 'previous_item'});
        }
        else {
            dispatch({type: 'previous_project'});
        }
    }
    const handleBButtonClick = () => {
        // if (isSelectionScreen()){
            dispatch({type: 'toggle_sidebar'})
        // }
        // else {
            dispatch({type: 'toggle_overlay', payload: false})
        // }        
    }
    const handleAButtonClick = () => {
        if (isSelectionScreen()){
            dispatch({type: 'select_focused'})
        }
        else {
            dispatch({type: 'toggle_overlay', payload: true})
        }
        
    }
    return(
        <div class = 'game-controls flex-container'>
            <div class = 'd-pad button-no-decorations' >
                <div class = 'grid-item placeholder' />
                <div 
                    class = 'grid-item up-button button-no-decor' 
                    onClick =  {handleUpButtonClick}
                />
                <div class = 'grid-item placeholder' />
                <div 
                    class = 'grid-item left-button' 
                    onClick = {handleLeftButtonClick} 
                />
                <div class = 'grid-item circle-container' > 
                    <div class='circle'/>
                </div>
                <div 
                    class = 'grid-item right-button' 
                    onClick = {handleRightButtonClick} 
                />
                <div class = 'grid-item placeholder' />
                <div 
                    class = 'grid-item down-button' 
                    onClick = {handleDownButtonClick}
                />
                <div class='grid-item placeholder' />
            </div>
            <div class = 'speakers flex-container' >
                {Array.from({length: speakerLines}, (_, index)=> (
                    <div class = 'speaker-line'/>
                ))}
            </div>
            <div class = 'ab-buttons'>
                <div class = 'grid-item circle'>
                    <button 
                        class = 'a-button button-no-decor' 
                        onClick = {handleBButtonClick}
                    >
                        B
                    </button>
                </div>
                <div class = 'grid-item circle' >
                    <button 
                        class = 'b-button button-no-decor' 
                        onClick={handleAButtonClick} 
                    >
                        A
                    </button>
                </div>
            </div>
        </div>
        
    )
}

function GameScreen(){
    return(
        <div class = 'game-screen-container flex-container column' >
            <div class = 'game-screen' >
                <ProjectGallery />
            </div>
        </div>
        
    );
}

function GameBrand(){
    const state = useGameStates();
    return (
        <>  
            <div class = 'gameboy-decorations flex-container' >
                <div 
                    class = 'left-decor' 
                    style = {{flex:(state.focusedIndex+1) / state.projects.length}}
                />
                <div 
                    class = 'right-decor' 
                    style = {{flex: 1 - ((state.focusedIndex+1)) / state.projects.length}}
                />
                
            </div>
            <h1 style={{fontFamily: 'Poppins', margin: '20px'}}>  <b>Gamebro</b> Basic  </h1>
        </>
    )
}

function Instructions() {
    // const state = useGameStates()

    return (
        <Card id = 'instructions' >
            <div class = 'instructions' >
                {/* focused index {state.focusedIndex} <br></br>
                next_item {(state.focusedIndex + 1) % state.projects.length } <br></br> */}
            <p>
            As a child, I was really into gaming on retro handheld consoles.
            Studying electronics engineering has only made me appreciate these more.
            <br /> <br />
            What better way to showcase my projects than on this classic look!
            <br /> <br />
            {/* Just <b>swipe/scroll</b> the game screen <b> horizontally </b> to browse my projects or click on the selection screen. */}
            {/* <br /> <br /> */}
            Go old school and use the:
            </p> 
            <p class = 'button-info'>
                <span class='ab-span'> A </span> button to <b>select</b> a project. Then use the <span class='ab-span'> A </span> button again (or <b> hover over</b> ) to view the project <b> details.</b>
            </p>
            <p class = 'button-info'>
                <span class='ab-span'> B </span> to go back to the <b>selection</b> screen.
            </p>
            <p class = 'button-info'>
                
            <span class='dpad-span'> Direction-Pad </span> to go through projects.
            </p>
            
            
            </div>
        </Card>
        
    )
}


export default function Gameboy(){

    return (
        <GameProvider>
            <Card 
                id = 'gameboy' 
                className = ''
            >
                
                    { /* TODO fix Instructions also being rendered */}
                    
                    <LazyAnimation
                        id = 'animate-instructions'
                        animationStyle = 'animate__bounceInLeft'
                    >
                        <Instructions />
                    </LazyAnimation>
                    <container class='flex-container-centered column'>
                        <LazyAnimation 
                            id = 'animate-game'
                            animationStyle = 'animate__bounceInDown'
                        >
                            <GameBrand/>
                            <GameScreen/>
                            <GameControls/>
                        </LazyAnimation>
                    </container>
            </Card>
        </GameProvider>
    );
}

