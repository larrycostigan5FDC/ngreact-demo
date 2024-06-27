import React, { useState } from 'react';
import { glub } from './fn';

export default function Fish() {
    const [fishText, setFishText] = useState('');

    const rxWords = /\b[A-Za-z0-9]*\b/g;
    const rxCapitalLetter = /[A-Z]/;

    /** @param {FormData} formData */
    function fishify(formData) {
        const text = String(formData.get('input') ?? '');
        setFishText(text.replace(rxWords, m => {
            let text = glub(m.length).split('');
            if (rxCapitalLetter.test(m)) {
                for (let i = 0; i < m.length; i++) {
                    if (rxCapitalLetter.test(m[i])) {
                        text[i] = text[i].toUpperCase();
                    }
                }
            }
            return text.join('');
        }));
    }

    return (
        <form onSubmit={e => { e.preventDefault(); fishify(new FormData(e.target)); }}>
            <div><textarea name="input"></textarea></div>
            <div><button type="submit">Translate into Fish</button></div>
            <pre>{fishText}</pre>
        </form>
    );
}
