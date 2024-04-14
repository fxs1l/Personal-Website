import { createContext, useContext, useReducer } from "react";

import hayahaySrc from '../../assets/projects/hayahay_ui_screenshot.jpg'
import bouywatchSrc from '../../assets/projects/buoywatch.png'

const GameContext = createContext(null);
const GameDispatchContext = createContext(null);

// Todo make this organization better
const aso = { 
    skills: ['Python', 'C++','Arduino', 'OpenCV', 'Machine Learning', 'Circuits'], 
    title: 'Automatic Smoke Observer', 
    link: 'https://github.com/fxs1l/Automatic-Smoke-Observer', 
    // media: {src:'https://www.youtube.com/embed/cfjgM5uVEug?controls=1',
    //          isYoutubeVideo: true},
    media: {src:"http://img.youtube.com/vi/cfjgM5uVEug/0.jpg"},
    desc: 'A remote monitoring and alerting system for forest fires mitigation'
}

const bwatch = {
    skills: ['Python', 'OpenCV'], 
    title: 'Buoywatch', 
    link: 'https://github.com/fxs1l/Buoywatch', 
    media: {src: bouywatchSrc},
    desc: 'A system that detects and reports illegal fishing.'
}

const yahay = {
    skills: ['Flutter', 'Python', 'Firebase'], 
    title: 'Hayahay', 
    link: 'https://github.com/fxs1l/Hayahay', 
    media: {src: hayahaySrc},
    desc: 'A home automation system for controlling appliances, lights, etc.'
}

const initialStates = {
    selectedProject: '',
    focusedIndex: 0,
    // isSelectionScreen: 0,
    showOverlay: false,
    projects: [
        {details: aso, setIndex: 'aso', funProgramName: 'automatic_smoke_observer.sh'},
        {details: bwatch, setIndex: 'buoywatch', funProgramName: 'buoywatch.py'},
        {details: yahay, setIndex: 'hayahay', funProgramName: 'hayahay.exe'},
    ]
}


const gameReducer = (state, action) => {
    const nextIndex = (index, length) =>{
        // Helper function for going to next index
        return (index + 1) % length
    }
    const previousIndex = (index, length) => {
        return (index - 1 + length) % length
        // Helper function for going to previous index
    }
    switch (action.type) {
        case 'select_item':
            return { ...state, selectedProject: action.payload};
        case 'toggle_sidebar':
            return {...state, selectedProject: '', isSelectionScreen: !state.isSelectionScreen}
        case 'toggle_overlay':
            return {...state, showOverlay: action.payload}
        case 'next_item':
            return { ...state, focusedIndex: nextIndex(state.focusedIndex, state.projects.length)};
        case 'previous_item':
            return {...state, focusedIndex: previousIndex(state.focusedIndex, state.projects.length)};
        case 'select_focused':
            return {...state, selectedProject: state.projects[state.focusedIndex].setIndex};
        case 'next_project':
            const next = nextIndex(state.focusedIndex, state.projects.length)
            return {
                ...state, 
                selectedProject: state.projects[next].setIndex,
                focusedIndex: next
            }
        case 'previous_project':
            const previous = previousIndex(state.focusedIndex, state.projects.length)
            return {
                ...state, 
                selectedProject: state.projects[previous].setIndex,
                focusedIndex: previous
            }
        // case 'route_to_project':
        
        default:
            return state;
            // throw new Error();
    }
};

export function GameProvider({children}) {
    const [state, dispatch] = useReducer(gameReducer, initialStates);

    return(
        <GameContext.Provider value={state}>
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameContext.Provider>
    );
};



export function useGameStates() {
    return useContext(GameContext);
}

export function useGameDispatch(){
    return useContext(GameDispatchContext);
}