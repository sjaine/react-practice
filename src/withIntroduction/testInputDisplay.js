import { useState } from 'react';

export default function InputDisplay() {
    const [input, setInput] = useState("");

    function changeInput(e) {
        setInput(e.target.value);
    }

    return(
        <div>
            <input type="text" value={input} onChange={changeInput}></input>
            <p>{input}</p>
        </div>
    );
};