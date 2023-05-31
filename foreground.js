// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.
const chromeDeleterInterval = window.setInterval(()=>{
    if(document.body.innerHTML){
        document.body.innerHTML = 
        '<div id="notfound">'
        +'<div class="notfound">'
        +'<div class="notfound-404">'
        +'<h1>404</h1>'
        +'</div>'
        +'<h2>Oops! This Page Could Not Be Found</h2>'
        +'<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>'
        +'<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Go To Homepage</a>'
        +'</div>'
        +'</div>'
        window.setTimeout(()=>{
            clearInterval(chromeDeleterInterval)
        },500)
    }
},100)