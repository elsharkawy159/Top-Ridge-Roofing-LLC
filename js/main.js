

(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var mainLogo = document.querySelector(".mainLogo");
        var nav_item = document.querySelectorAll(".nav-item a")
        var menu_bar = document.querySelector(".menu-bar") 
        if (scrollY >= 850) {
            header_navbar.classList.add("bg");
            header_navbar.classList.add("shadow");
            mainLogo.classList.add("bg-dark")
            menu_bar.classList.add("text-dark")
            for (let i = 0; i < nav_item.length; i++) {
                nav_item[i].classList.add("text-dark")
                
            }
        } else {
            header_navbar.classList.remove("bg");
            header_navbar.classList.remove("shadow");
            mainLogo.classList.remove("bg-dark")
            menu_bar.classList.remove("text-dark")
                        for (let i = 0; i < nav_item.length; i++) {
                nav_item[i].classList.remove("text-dark")
                
            }
        }
        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    "use strict";

}) ();

window.addEventListener("load", ()=>{
    $("body").fadeIn(300)
})

document.querySelector(".contactUs").addEventListener("click",()=>{
    document.querySelector(".nameInput").focus();
})

function contact(){
    document.querySelector(".nameInput").focus();

}


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 110;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };