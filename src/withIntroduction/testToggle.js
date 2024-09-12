import { useState } from 'react';

export default function Toggle() {
    const [isVisible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>Now you can see me!</p>}
        </div>
    );
}