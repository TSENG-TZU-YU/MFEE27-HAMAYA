import React from 'react';
import './index.scss';

function Loader() {
    return (
        <div className="waveform">
            <div className="waveform__bar"></div>
            <div className="waveform__bar"></div>
            <div className="waveform__bar"></div>
            <div className="waveform__bar"></div>
        </div>
    );
}

export default Loader;
