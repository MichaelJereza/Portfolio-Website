import { useEffect, useState } from "react";

function DecryptingText(props) {
    // The amount of iterations to decrypt for each letter
    // Can be defined in props.iterations
    let iterations;
    if(!props.iterations) {
        iterations = 3;
    } else {
        iterations = props.iterations;
    }

    // Timeout in ms of each letter change
    // Defined in props.timeout
    let timeout;
    if(!props.timeout) {
        timeout = 10;
    } else {
        timeout = props.timeout;
    }

    const displayedString = DecryptStringAnimation(props.textContent, iterations, timeout);

    return displayedString         
}

// This component
function DecryptStringAnimation(baseString, iterationForEachLetter, timeout) {
    const [decryptionState, setDecryptionState] = useState({
        currentString: generateRandomString(baseString),
        indexedCharacter: baseString.length-1,
        iterations: iterationForEachLetter,
        done: false
    });

    // Takes stringToIterateAtIndex and index
    // Returns new string with iterated index
    function iterateLetter(stringToIterateAtIndex, index) {
        index = stringToIterateAtIndex.length-1 - index;
        // ignore space
        if(stringToIterateAtIndex.charAt(index)===' ') {
            return stringToIterateAtIndex;
        }

        let front = stringToIterateAtIndex.substring(0, index);
        let back;
        if(index!==stringToIterateAtIndex.length-1){
            back = stringToIterateAtIndex.substring(index + 1);
        } else {
            back = "";
        }

        let newString = front + getRandomByteCharacter() + back;
        return newString;
    }

    function iterateCorrectLetter(stringToIterateAtIndex, index, correctString) {
        index = stringToIterateAtIndex.length-1 - index;
        let front = stringToIterateAtIndex.substring(0, index);
        let back;
        if(index!==stringToIterateAtIndex.length-1){
            back = stringToIterateAtIndex.substring(index + 1);
        } else {
            back = "";
        }

        let newChar = correctString.charAt(index);
        return front + newChar + back;
    }

    // If the string starts with a space, the initial space will be attempted
    function iterateDecryption() {
        if(decryptionState.iterations>0){
            setDecryptionState({
                currentString: iterateLetter(decryptionState.currentString, decryptionState.indexedCharacter),
                indexedCharacter: decryptionState.indexedCharacter,
                iterations: decryptionState.iterations-1,
                done: false
            })
        } else if(decryptionState.indexedCharacter!==0) {
            let newIndex = decryptionState.indexedCharacter-1;

            if(decryptionState.currentString[decryptionState.indexedCharacter]===' '){
                newIndex -= 1;
            }

            setDecryptionState({
                currentString: iterateCorrectLetter(decryptionState.currentString, decryptionState.indexedCharacter, baseString),
                indexedCharacter: newIndex,
                iterations: iterationForEachLetter,
                done: false
            })
        } else {
            setDecryptionState({
                currentString: baseString,
                indexedCharacter: 0,
                iterations: 0,
                done: true
            })
        }
    
    }

    useEffect(()=>{
        if(!decryptionState.done){
            var decryptionAnimationID = setInterval( () => iterateDecryption(), timeout);
            return function cleanup() {
                clearInterval(decryptionAnimationID);
            };
        }
    })

    return decryptionState.currentString;
}

function getRandomByteCharacter () {
    // Get a random character [0-9A-F]
    let rng = Math.floor(Math.random() * 15);
    let newChar;
    if(rng > 9) {
        newChar = String.fromCharCode(65+(rng-10));
    } else {
        newChar = String.fromCharCode(48+rng);
    }
    return newChar
}

function generateRandomString (plaintext) {
    plaintext = plaintext.toLowerCase();
    let newString = ""
    for(let character of plaintext) {
        // ignore spaces
        if(character===' ') {
            newString += ' ';
        }
        else {
            newString += getRandomByteCharacter();
        }
        
    }

    return newString;
}

export default DecryptingText;