const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

const myImage = document.querySelector("img");

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
