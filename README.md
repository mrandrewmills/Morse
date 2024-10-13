# Morse
JS Object for Morse message encoding/decoding

## Basic Instructions
After adding MorseCode.js to your project, create a new object from it:

``` myMC = new MorseCode();```

Your object will have two methods, named *.textToMorse()* and *.morseToText()*.

The .textToMorse() method converts plain text into Morse code, like this:

```
myCode = myMC.textToMorse("Hello!"); // returns .... . .-.. .-.. ---
```
And the .morseToText() method converts Morse code back into plain text. It works like this:

```
myPlain = myMC.morseToText( myCode ); // returns "HELLO"
```

## Frequently Asked Questions
There are no frequently asked questions yet.

Submit _*your*_ questions through the "Issues" link above.
