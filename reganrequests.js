// Only do things on the Network Security Site blocked page.
if (document.title === "Web Site Blocked" ) {
    // For debugging only.
    document.body.style.border = "5px solid red";

    // @TODO Switch the images out with a variety of good memes.
    var content = document.getElementsByTagName('center');
    var imagePath = browser.extension.getURL('imgs/regan.png');
    content[0].innerHTML += "<div><img src='" + imagePath + "' /></div>"
}