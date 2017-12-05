function onPageLoad() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        if(getExtensionButtonPressed(acc[i].innerHTML)) {
            acc[i].classList.toggle("active", true);
            var panel = acc[i].nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                setExtensionButtonPressed(this.innerHTML, false);
                panel.style.maxHeight = null;
            } else {
                setExtensionButtonPressed(this.innerHTML, true);
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        }
    }
}

function setExtensionButtonPressed(button, value) {
    var index = 0;
    var i;
    for(i = 0; i < 3 && index != -1; i++) {
        index = window.location.pathname.indexOf("/", index) + 1;
    }
    if(index != -1) {
        var result = button + "=" + value + "; path=" + window.location.pathname.substring(0, index);
        document.cookie = result;
    }
}

function getExtensionButtonPressed(button) {
    var index = 0;
    var i;
    for(i = 0; i < 3 && index != -1; i++) {
        index = window.location.pathname.indexOf("/", index) + 1;
    }
    if(index != -1) {
        var re = new RegExp("(?:(?:^|.*;\\s*)" + button + "\\s*\\=\\s*([^;]*).*$)|^.*$");
        var value = document.cookie.replace(re, "$1");
        if(value != "") {
            return value == "true";
        }
    }
}

window.onload = onPageLoad;