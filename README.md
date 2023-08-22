# Mr. Roboger's Neighborhood

#### By Richard Barbour II

#### This page is a "robot translator" that takes a single number provided by the user and returns a neighborly message ... mostly in numbers, beeps and boops.  

https://rbarcode.github.io/w3-mr-robogers-neighborhood/


## Technologies Used

* HTML
* CSS
* JS


## Description

The webpage prompts the user to input a single number before the page returns a message from a robot consisting of a sequence of numbers in ascending order from 0 to the number the user inputted.  

However, and in the following order of precedence, any number that contains a three is replaced with a request to be neighbors, any number that contains a two is replaced by a "Boop!" and any number that contains a one is replaced by a "Beep!".  

For example, an input of "4" will return the following message: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4"  

Try it out for yourself and start talking to/like a robot today!

## Setup/Installation Requirements

1. Navigate to https://github.com/rbarcode/w3-mr-robogers-neighborhood.git in an internet browser.
2. Click on the green “<> Code” on the far right-hand side of the page's main column.
3. On the “Local” tab of the mini-window that opens underneath the “<>Code” button, copy the HTTPS link in the gray bar to your clipboard.
4. In GitBash (or your terminal/shell of your choice/computer), navigate to the directory where you wish to download the project and enter the following prompt (replacing the italicized word with the appropriate link): git clone *url-of-the-repository-copied-in-the-previous-step*
5. Your chosen directory will now contain a folder titled “w3-mr-robogers-neighborhood”.
6. Navigate inside the folder and find the file named "index.html".
7. Double click on the file to open it up in your browser. (The first time you click on the file, you may be prompted by your operating system to choose how you wish to open the file; you can select your browser of choice from any of the browsers you have installed on your computer.)

## Tests


**Describe: robotTranslator()**

  
Test: "It should store verified integers parsed from the string."  
Code:  
&ensp; let verifiedInt;  
&ensp; robotTranslator("123");  
Expected Output:  
&ensp; verifiedInt;  
&ensp; 123  
  

Test: "It should return an array of numbers from 0 to the user's inputted number."  
Code: robotTranslator("0");  
Expected Output: [0]  

Test: "It should determine whether an index in the array contains a 3."  
Code: robotTranslator("3");  
Expected Outcome: true  

Test: "It should determine whether an index in the array is a numeral with at least one digit that is a 3."  
Code:  
&ensp; robotTranslator(13); //With following inside:  
&ensp; console.log("This index includes a three!")  
Expected Outcome:   
&ensp; This index includes a three!  
&ensp; This index includes a three!  

Test: "It should replace the numeral that has at least one digit that is a 3 with the phrase 'Won't you be my neighbor?'."  
Code: robotTranslator("3");  
Expected Outcome: [0,1,2,"Won't you be my neighbor?"]  

Test: "It should replace any numerals that have at least one digit that is a 2 with the word 'Boop!'."  
Code: robotTranslator("3");  
Expected Outcome: [0,1,"Boop!","Won't you be my neighbor?"] 

Test: "It should replace any numerals that have at least one digit that is a 1 with the word 'Beep!'."  
Code: robotTranslator("3");  
Expected Outcome: [0,"Beep!","Boop!","Won't you be my neighbor?"]  

Test: "It should return the array as a string."  
Code: robotTranslator("3");  
Expected Outcome: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?'"  


## Known Bugs

No known bugs.

## License

MIT License

Copyright (c) 2023 Richard Barbour II

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
