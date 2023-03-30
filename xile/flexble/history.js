window.onload = function() {
    var a = document.querySelector('header a')
    a.onclick = function() {

        window.history.back()
    }
}