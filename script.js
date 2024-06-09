let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function toggleJavaContent() {
    var moreText = document.getElementById("javaMore");
    var btnText = document.querySelector(".technology-item button");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "See More";
    }
}

function toggleSpringContent() {
    var moreText = document.getElementById("springMore");
    var btnText = document.querySelector(".technology-item button");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "See More";
    }
}

function toggleHtmlContent() {
    var moreText = document.getElementById("htmlMore");
    var btnText = document.querySelector(".technology-item button");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "See More";
    }
}

function toggleAngularContent() {
    var moreText = document.getElementById("angularMore");
    var btnText = document.querySelector(".technology-item button");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "See More";
    }
}

function toggleMysqlContent() {
    var moreText = document.getElementById("mysqlMore");
    var btnText = document.querySelector(".technology-item button");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "See More";
    }
}

function togglePythonContent() {
    var moreText = document.getElementById("pythonMore");
    var btnText = document.querySelector(".technology-item button");
    
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btnText.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "See More";
    }
}

