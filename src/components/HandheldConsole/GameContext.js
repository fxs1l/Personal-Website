import { createContext, useContext, useReducer } from "react";

import hayahaySrc from '../../assets/projects/hayahay_ui_screenshot.jpg';
import bouywatchSrc from '../../assets/projects/buoywatch.png';
import websiteSrc from '../../assets/projects/asilacasio.png';
import palancaSrc from '../../assets/projects/palanca-bot.png';

const GameContext = createContext(null);
const GameDispatchContext = createContext(null);

// TODO make JSON object configuration better
const aso = { 
    skills: ['Python', 'C++','Arduino', 'OpenCV', 'Machine Learning', 'Circuits'], 
    title: 'Automatic Smoke Observer', 
    link: 'https://github.com/fxs1l/Automatic-Smoke-Observer', 
    // media: {src:'https://www.youtube.com/embed/cfjgM5uVEug?controls=1',
    //          isYoutubeVideo: true},
    media: {src:"http://img.youtube.com/vi/cfjgM5uVEug/0.jpg"},
    desc: 'A remote monitoring and alerting system for forest fires mitigation. Gold awardee at the Malaysia Technology Expo 2021.'
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

const dotfiles = {
    skills: ['Bash', 'CSS'],
    title: 'Linux Dotfiles',
    link: 'https://github.com/fxs1l/dotfiles',
    media: {src: 'https://github.com/fxs1l/dotfiles/assets/62643719/cbeec724-3778-4602-a7f7-63869210d796'},
    desc: 'Personal dotfiles/configuration files for my Linux desktop.'
}

const websitePortfolio = {
    skills: ['HTML', 'Javascript/React', 'CSS'],
    title: 'asilacas.io',
    link: 'https://github.com/fxs1l/asilacas.io',
    media: {src: websiteSrc},
    desc: 'This current website is under constant development as I learn React. I implement what I learn on this site.'
}

const palancaBot = {
    skills: ['Javascript/Google Script'],
    title: '[Archived] Palanca Automation Bot',
    link: 'https://github.com/fxs1l/Palanca-Automation-Bot',
    media: {src: palancaSrc},
    desc: 'A Google Script based Palanca letter sender.'
}

const initialStates = {
    selectedProject: '',
    focusedIndex: 0,
    showOverlay: false,
    projects: [
        {details: aso, setIndex: 'aso', funProgramName: 'automatic_smoke_observer.sh'},
        {details: bwatch, setIndex: 'buoywatch', funProgramName: 'buoywatch.py'},
        {details: yahay, setIndex: 'hayahay', funProgramName: 'hayahay.exe'},
        {details: dotfiles, setIndex: 'dotfiles', funProgramName: 'linux_desktop.bat'},
        {details: websitePortfolio, setIndex: 'website', funProgramName: 'website.js'},
        {details: palancaBot, setIndex: 'palanca', funProgramName: 'palancaBotv1.gs'}
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
        case 'set_index':
            return {...state, focusedIndex: action.payload}
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