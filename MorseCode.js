/*
 *  Name: MorseCode.js
 *  Purpose: JS Object for encoding/decoding Morse Code messages
 *  Example(s):
 *    myMorse.textToMorse("Hello"); // returns .... . .-.. .-.. --- 
 *    myMorse.morseToText(".... . .-.. .-.. ---"); // returns HELLO
 */
function MorseCode(){

    // map for encoding Morse
    const morseMap = {
      // Letters
      'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
      'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
      'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
      'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
      'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
      'Z': '--..',

      // Numbers
      '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
      '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',

      // Punctuation
      '.': '.-.-.-',  // Period
      ',': '--..--',  // Comma
      '?': '..--..',  // Question mark
      "'": '.----.',  // Apostrophe
      '!': '-.-.--',  // Exclamation mark
      '/': '-..-.',   // Slash
      '(': '-.--.',   // Open parenthesis
      ')': '-.--.-',  // Close parenthesis
      '&': '.-...',   // Ampersand
      ':': '---...',  // Colon
      ';': '-.-.-.',  // Semicolon
      '=': '-...-',   // Equals sign
      '+': '.-.-.',   // Plus
      '-': '-....-',  // Hyphen/Dash
      '_': '..--.-',  // Underscore
      '"': '.-..-.',  // Quotation marks
      '$': '...-..-', // Dollar sign
      '@': '.--.-.'   // At sign
    };

    // Reversed map for decoding Morse
    const reverseMorseMap = {};
    for (let letter in morseMap) {
        reverseMorseMap[morseMap[letter]] = letter;
    }

    function textToMorse(txtPlain){
        let results = '';

        txtPlain
            .toUpperCase()
            .split('')
            .forEach( character => {
                if ( character === ' ' ) {
                    results += '   ';
                }
                else {
                    results += morseMap[ character ];
                    results += ' ';
                }
            })
        
        return results.trim();
    }

    function morseToText(txtMorse){

        return txtMorse
            .split(' ')
            .map( character => {
                if ( reverseMorseMap[ character ] !== undefined )
                    return reverseMorseMap[ character ];
                else 
                    return ' ';
            })
            .join('')
            .replaceAll('   ', ' ')
            .trim();
    }
    
    return {
        textToMorse, morseToText
    }
}
