//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello World!";

const myImage = document.querySelector("img");

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        let changesize = document.getElementById("homes");
        changesize.height = 256;
        changesize.width = 256;
        myImage.setAttribute("src", "images/firefox2.jpg");
    }
        else {
            myImage.setAttribute("src", "images/firefox-icon.png" );
        }
    };


function setUserName() {
    const myName = prompt("Please enter your name...");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};