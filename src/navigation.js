// JS code
$(document).ready(function() {
    $(".animsition").animsition({
        inClass: 'fade-in-right',
        outClass: 'fade-out-right',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img img="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });
});


function menuFunction(x) {

    if (x.classList.contains("change")) {
        off();
    }
    else {
        on();
    }
    x.classList.toggle("change");
}

function on() {
    document.getElementById("text").style.opacity = "1.0";
    document.getElementById("overlay").style.height = "100%";
}

function off() {
    document.getElementById("overlay").style.height = "0px";
    document.getElementById("text").style.opacity = "0.0";
}