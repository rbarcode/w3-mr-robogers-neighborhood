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
6. You can open the folder "w1-portfolio-landing-page" in VS Code (for example, by using the appropriate commands in GitBash or using the GUI and right-clicking on the option to “Open with Code” in the menu that pops up… note, you may need to select “Show more options” at the bottom of the menu if you don’t see “Open with Code” in the provided list).
7. You can now read and edit the project files!

## Tests


**Describe: robotTranslator()**

  
Test: "It should store verified integers parsed from the string."  
Code: 
```
let verifiedInt;
robotTranslator("123");
```  
Expected Output:  
```
> verifiedInt;  
123  
```  

Test: "It should return an array of numbers from 0 to the user's inputted number."  
Code: robotTranslator("0");  
Expected Output: [0]  

Test: "It should determine whether an index in the array contains a 3."  
Code: robotTranslator("3");  
Expected Outcome: true  

Test: "It should determine whether an index in the array is a numeral with at least one digit that is a 3."  
Code: 
```  
robotTranslator(13); //With following inside: console.log("This index includes a three!")
```  
Expected Outcome:   
```
This index includes a three!
This index includes a three!
```

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

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Richard Barbour II
