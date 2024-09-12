import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function clickCounter() {
        setCount(count + 1);
    }

    return (
        <button onClick={clickCounter}>
            You pressed me {count} times.
        </button>
    );
};