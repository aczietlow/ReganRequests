if (document.title === "Web Site Blocked" ) {
    document.body.style.border = "5px solid orange";
    var content = document.getElementsByTagName('center');
    console.log(content[0]);
    content[0].innerHTML += "<div><img src='imgs/regan.png' /></div>"
}