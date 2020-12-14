import { forwardRef, useEffect, useState } from "react";

const DecryptingText = forwardRef((props, ref) => {
    return(
        <div ref={ref} className="">
            { props.textDisplayed }
        </div>
    )
});

function DecryptAnimation(props) {
    const [savedString, setSavedString] = useState();
    const [plaintext, setPlaintext] = useState(props.textContent);
    const [ciphertext, setCiphertext] = useState(generateRandomString(props.textContent));
    const [decryptingIndex, setDecryptingIndex] = useState(props.textContent.length);

    useEffect(()=>{
        console.log(savedString);
        setSavedString(combineStringsAtIndex(plaintext, ciphertext, decryptingIndex));

    }, [decryptingIndex>0]);

    useEffect (()=>{
        console.log(savedString);
        setDecryptingIndex(decryptingIndex);

    }, [savedString])

    return(
        <DecryptingText textDisplayed={savedString}/>
    )
}

function combineStringsAtIndex (plaintext, ciphertext, index) {
    let combinedString = plaintext.slice(0, index);
    combinedString += ciphertext.slice(index, ciphertext.length);
    console.log(`Combining strings at ${index}`);
    console.log(combinedString);
    return combinedString;
}

function generateRandomString (plaintext) {
    plaintext = plaintext.toLowerCase();
    let newString = ""
    for(let character of plaintext) {
        let randomAddition = Math.floor(Math.random() * 26);
        let currentChar = character.charCodeAt(0)-97;
        let newChar = String.fromCharCode(97+(currentChar+randomAddition)%25);
        newString += newChar;
    }

    return newString;
}

export default DecryptAnimation;