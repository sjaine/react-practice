import { useState } from 'react';

export default function InputDisplay() {
    const [text, setText] = useState('');

    return(
        <div>
           <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
           <div>{text}</div> 
        </div>
    );
}