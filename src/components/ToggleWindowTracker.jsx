import React, { useState } from 'react';
import WindowTracker from './WindowTracker.jsx';

export default function ToggleWindowTracker() {
    const [show, setShow] = useState(true);

    function toggle() {
        setShow(prevShow => !prevShow);
    }
    return (
        <main className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </main>
    )
}