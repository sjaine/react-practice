import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1);
    }

    return(
        <div>
            <button onClick={handleCount}>Click me!</button>
            <div>You clicked me {count} times.</div>
        </div>
    );
}