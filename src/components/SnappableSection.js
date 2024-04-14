// import './SnappableSection.css'

import {forwardRef} from 'react';

const SnappableSection = forwardRef((props, ref) => {
    let combinedClassNames = 'snappable-content';
    // let combinedClassNames = 'flex-container'
    if (props.className !== undefined){
        combinedClassNames = props.className + ' ' + combinedClassNames
    }
    if (props.snap){
        combinedClassNames += ' snapping'
    }

    return(
        <section class={combinedClassNames} id={props.id} ref={ref}>
            {props.children}
        </section>
    );
});

export default SnappableSection;
