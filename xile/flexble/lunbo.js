$(function() {

    var w = $('.banner div').width() + 3
    $('.rotation').css('transform', 'translateX(' + -w + 'px)')
    $('.rotation a').each(function(i, ele) {
        var li = $('<li></li>')
        li.attr('index', i)
        $('.spot').append(li)
        $('.spot li').eq(0).addClass('plus')
    })
    var num = 1
    var num1 = 0
    var first = $('.rotation a:first').clone()
    var last = $('.rotation a:last').clone()
    $('.rotation').append(first)
    $('.rotation').prepend(last)
    var timer = setInterval(function() {
        num++
        $('.rotation').css('transition', 'all 0.3s')
        $('.rotation').css('transform', 'translateX(' + -w * num + 'px)')
    }, 2000)
    var rotation = document.querySelector('.rotation')
    rotation.addEventListener('transitionend', function() {
        if (num > $('.rotation a').length - 2) {
            num = 1
            $('.rotation').css('transition', 'none')
            $('.rotation').css('transform', 'translateX(' + -w * num + 'px)')
        } else if (num < 0) {
            num = $('.rotation a').length - 3
            $('.rotation').css('transition', 'none')
            $('.rotation').css('transform', 'translateX(' + -w * num + 'px)')
        }
        num1++
        if (num1 == $('.spot li').length) {
            num1 = 0
        }
        $('.spot li').eq(num1).addClass('plus').siblings().removeClass()

    })
    var X1 = 0
    var X2 = 0
    var flag = true
    rotation.addEventListener('touchstart', function(e) {
        X1 = e.targetTouches[0].pageX
        clearInterval(timer)
    })

    rotation.addEventListener('touchmove', function(e) {
        X2 = e.targetTouches[0].pageX - X1
        var x = -w * num + X2
        $('.rotation').css('transition', 'none')
        $('.rotation').css('transform', 'translateX(' + x + 'px)')
        flag = true

    })
    rotation.addEventListener('touchend', function() {
            if (flag) {
                if (Math.abs(X2) > 50) {
                    if (X2 > 0) {
                        num--;
                    } else {
                        num++;
                    }
                    console.log(num1);
                    var x = -num * w;
                    $('.rotation').css('transition', 'all 0.3s')
                    $('.rotation').css('transform', 'translateX(' + x + 'px)')
                } else {
                    var x = -num * w;
                    $('.rotation').css('transition', 'all 0.3s')
                    $('.rotation').css('transform', 'translateX(' + x + 'px)')

                }
            }
            timer = setInterval(function() {
                num++
                $('.rotation').css('transition', 'all 0.3s')
                $('.rotation').css('transform', 'translateX(' + -w * num + 'px)')
            }, 2000)
        })
        //定位
        // $(window).scroll(function() {
        //     // console.log($('.seckill').offset().top)
        //     if ($('html').scrollTop() >= $('.seckill').offset().top) {
        //         $('.header-one').css({
        //             'width': '15rem',
        //             'height': '1.76rem',
        //             'position': 'fixed',
        //             'z-index': '999',
        //             'top': 0,
        //             'background-image': 'url(../images/header/bg.jpg)'
        //         })
        //     } else {
        //         $('.header-one').css({
        //             'width': '13.64rem',
        //             'height': '1.76rem',
        //             'position': 'relative'
        //         })
        //     }
        // })


})