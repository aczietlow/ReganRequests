function submitRequest() {
    alert('Moar work needed.');
}

// Only do things on the Network Security Site blocked page.
if (document.title === "Web Site Blocked" ) {
    // For debugging only.
    document.body.style.border = "5px solid blue";

    // @TODO Switch the images out with a variety of good memes.
    var content = document.getElementsByTagName('center');
    var imagePath = browser.extension.getURL('imgs/regan.png');
    content[0].innerHTML += "<div><img src='" + imagePath + "' /></div>"
    content[0].innerHTML += "<button  type='submit' id='submit_firewall_request'>Tear Down this wall</button>"
}

document.getElementById('submit_firewall_request').addEventListener("click", submitRequest);
