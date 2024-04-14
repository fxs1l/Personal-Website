import { useState, useEffect, useRef } from "react";

export function AnimateOnVisible({animation, animationStyle='', children}){
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, 
        }
        );
        const currentRef= ref.current
        if (currentRef) {
            observer.observer(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    //
    return(
        <div class={`${isVisible ? 'animate__animated' : ''} ${animation} ${animationStyle} `}>
            {isVisible && children}
        </div>
    );
}

// const [isVisible, setIsVisible] = useState(false);
// // const ref = useRef(null); 

// useEffect(() => {
//     const observer = new IntersectionObserver(
//     ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//     },
//     {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.5, // You can adjust this threshold based on your requirements
//     }
//     );

//     if (ref.current) {
//         observer.observe(ref.current);
//     }

//     return () => {
//         if (ref.current) {
//             observer.unobserve(ref.current);
//         }
//     };
// }, []);

// return (
//     <section className={`${combinedClassNames} ${props.animationStyle} ${isVisible ? 'animate__animated' : ''}`} ref={ref}>
//     {/* Your content goes here */}
//     {isVisible && props.children}
//     {/* {props.children} */}
//     </section>
// );