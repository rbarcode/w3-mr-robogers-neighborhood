# Mr. Roboger's Neighborhood

#### By Richard Barbour II

#### //One sentence summary to go here...//


## Technologies Used

* HTML
* CSS
* JS


## Description


## Setup/Installation Requirements

1. Navigate to https://github.com/rbarcode/w3-mr-robogers-neighborhood.git in an internet browser.
2. Click on the green “<> Code” button approximately 2/3s to the right-hand side of the page near the top.
3. On the “Local” tab of the mini-window that opens underneath the “<>Code” button, copy the HTTPS link in the gray bar to your clipboard.
4. In GitBash (or your terminal/shell of your choice/computer), navigate to the directory where you wish to download the project and enter the following prompt (replacing the italicized word with the appropriate link): git clone *url-of-the-repository-copied-in-the-previous-step*
5. Your chosen directory will now contain a folder titled “w3-mr-robogers-neighborhood”.
6. You can open the folder "w1-portfolio-landing-page" in VS Code (for example, by using the appropriate commands in GitBash or using the GUI and right-clicking on the option to “Open with Code” in the menu that pops up… note, you may need to select “Show more options” at the bottom of the menu if you don’t see “Open with Code” in the provided list).
7. You can now read and edit the project files!

## Tests


**Describe: robotTranslator()**

Test: "It should check to see whether the string contains solely integers."  
Code: robotTranslator("hello");  
Expected Output:  
```  
NaN  
```    
  
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
Code: robotTranslator(0);  
Expected Output: [0]  

Test: "It should determine whether an index in the array contains a 3."  
Code: robotTranslator(3);  
Expected Outcome: true  

Test: "It should determine whether an index in the array is a numeral with at least one digit that is a 3."  
Code: robotTranslator(13);  
Expected Outcome: console.log("This index includes a three! This index includes a three!")  

Test: "It should replace the numeral that has at least one digit that is a 3 with the phrase 'Won't you be my neighbor?'"  
Code: robotTranslator(3);  
Expected Outcome: [0,1,2,"Won't you be my neighbor?"]  

## Known Bugs



## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Richard Barbour II
