import React, { useEffect } from 'react';
import './styles.scss';


const Thermometer = ({ min, max, target }) => {
    const outOfRange = target < min || target > max;

    useEffect(() => {
        const temp = target / (min + max) *280; // use 280deg to stay in possible window
        const pointer_style = document.getElementById("pointer").style;
        
        // edge case out of range: pointer disappears
        if(outOfRange) {
            pointer_style.background = 'none';
            return;
        }

        // edge case target = min: pointer on min
        if(target === min) {
            pointer_style.transform = 'translate(-50%,-50%) rotate(40deg)';
            pointer_style.background = 'black';
            return;
        }

        // edge case target = max: pointer on max
        if(target === max) {
            pointer_style.transform = 'translate(-50%,-50%) rotate(320deg)';
            pointer_style.background = 'black';
            return;
        }

        pointer_style.transform = `translate(-50%,-50%) rotate(${temp+40}deg)`; // add 40deg to start at min point
        pointer_style.background = 'black';
    }, [ min, max, outOfRange, target ]);

    const tempInfo = !outOfRange ? `${target}℃` : 'not in range';

    return (
        <div className='Thermometer'>
            <h2>Thermometer Component</h2>

            <section className="Thermometer__box">
                <div id="pointer" className="Thermometer__box--pointer" />
                <div className="Thermometer__box--mintemp" />
                <div className="Thermometer__box--maxtemp" />
                <div className="Thermometer__box--display">{ tempInfo }</div>
            </section>

        </div>
    )
}

export default Thermometer;
