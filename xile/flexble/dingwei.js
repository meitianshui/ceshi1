window.onload = function() {
    document.addEventListener('scroll', function() {

        var s = document.documentElement.scrollTop
        var nav = document.querySelector('nav')
        console.log(nav);
        if (s >= 900) {
            // console.log(1);
            nav.style.position = 'fixed'
            nav.style.top = '0'

        } else {
            // console.log(2);
            nav.style.position = 'relative'
        }
    })

}