// Create a button component that will be used to increment the counter with a passed in function
import React from 'react';

import { useSpring, animated } from '@react-spring/web'

const ClickyButton = (props) => {
    const startY = 7;
    const endY = 0;
    const bounceDuration = 100;

    const [springs, api] = useSpring(() => ({
        from: { y: startY },
    }))

    function handleClick() {
        // make the button bounce
        api.start({
            from: {
                y: endY,
            },
            to: {
                y: startY,
            },
            config: {
                duration: bounceDuration,
            },
        })
        props.increment();
    }

    return (
        <animated.button 
            style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                background: 'linear-gradient(5deg, #2E779E 30%, #73C1EB 70%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transform: springs.y.to(y => `translateY(${y}px)`),
                ...springs,
            }}
        onClick={handleClick}>
        </animated.button>
    );
}

export default ClickyButton;