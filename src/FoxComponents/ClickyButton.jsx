// Create a button component that will be used to increment the counter with a passed in function
import React from 'react';

import { useSpring, animated } from '@react-spring/web'

const ClickyButton = (props) => {
    const [springs, api] = useSpring(() => ({
        from: { y: 5 },
    }))

    function handleClick() {
        // make the button bounce
        api.start({
            from: {
                y: 0,
            },
            to: {
                y: 5,
            },
            config: {
                duration: 100,
            },
        })
        props.increment();
    }

    // give the button 50% opacity  
    return (
        <animated.button 
            style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                background: 'linear-gradient(45deg, #2E779E 30%, #73C1EB 80%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transform: springs.y.to(y => `translateY(${y}px)`),
                ...springs,
            }}
        onClick={handleClick}>
            {/* <h2>Click</h2> */}
        </animated.button>
    );
}

export default ClickyButton;