import React from 'react';
import './index.scss';

function Toast() {
    const myFunction = () => {
        var x = document.getElementById('snackbar');
        x.className = 'show';
        setTimeout(function () {
            x.className = x.className.replace('show', '');
        }, 3000);
    };
    return (
        <>
            <button onClick={(e) => myFunction()}>Show Snackbar</button>
            <div id="snackbar">Some text some message..</div>
        </>
    );
}

export default Toast;
