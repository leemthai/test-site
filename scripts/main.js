const myHeadings = document.querySelector('h1');
let myVariable = 'Bob';
myVariable = 'Leeds United ALAW 💛💙'; /* Reassign value of myVariable */
myHeadings.textContent = myVariable; /* Assign first h1 on page to be value stored in myVariable */

/* toggle the image when u click on it */
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/leeds_united_logo_colors.webp') {
        myImage.setAttribute('src','images/graphic.jpg');
    } else {
        myImage.setAttribute('src','images/leeds_united_logo_colors.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name:');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Leeds are cool, ' + myName;
    }  
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Leeds are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}