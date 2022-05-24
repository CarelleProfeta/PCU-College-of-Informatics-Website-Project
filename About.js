// Will display and hide information based on what the user clicks 
function about_info(clicked_id) {
    var num = clicked_id.substr(5,2)

    var show_info = "information" + num; 

    // alert(show_info)
    if(num == "1") {
        number = parseInt(num);
        hide = number + 1;
        hide2 = number + 2;
        hide_info = "information" + hide;
        hide2_info = "information" + hide2;
        document.getElementById(show_info).style.display = "block"; 
        document.getElementById(hide_info).style.display = "none";
        document.getElementById(hide2_info).style.display = "none";
        document.getElementById("prevNnext").style.display = "none";
        document.getElementById("div_dot").style.display = "none";

        // setting the active sidebar 

        unactive = "mybtn" + hide;
        unactive2 = "mybtn" + hide2;
        document.getElementById(clicked_id).style.backgroundColor = "#0142AE";
        document.getElementById(clicked_id).style.color = "white";
        document.getElementById(unactive).style.backgroundColor = "transparent";
        document.getElementById(unactive).style.color = "black";
        document.getElementById(unactive2).style.backgroundColor = "transparent";
        document.getElementById(unactive2).style.color = "black";

        // alert(clicked_id)
    } else if(num == "2") {
        number = parseInt(num);
        hide = number - 1;
        hide2 = number + 1;
        hide_info = "information" + hide;
        hide2_info = "information" + hide2;
        document.getElementById(show_info).style.display = "block";
        document.getElementById(hide_info).style.display = "none";
        document.getElementById(hide2_info).style.display = "none";
        document.getElementById("prevNnext").style.display = "none";
        document.getElementById("div_dot").style.display = "none";

        // setting the active sidebar 

        unactive = "mybtn" + hide;
        unactive2 = "mybtn" + hide2;
        document.getElementById(clicked_id).style.backgroundColor = "#0142AE";
        document.getElementById(clicked_id).style.color = "white";
        document.getElementById(unactive).style.backgroundColor = "transparent";
        document.getElementById(unactive).style.color = "black";
        document.getElementById(unactive2).style.backgroundColor = "transparent";
        document.getElementById(unactive2).style.color = "black";

    } else {
        number = parseInt(num);
        hide = number - 1;
        hide2 = number - 2;
        hide_info = "information" + hide;
        hide2_info = "information" + hide2;
        document.getElementById(show_info).style.display = "block";
        document.getElementById(hide_info).style.display = "none";
        document.getElementById(hide2_info).style.display = "none";
        document.getElementById("prevNnext").style.display = "block";
        document.getElementById("div_dot").style.display = "block";

        // setting the active sidebar 

        unactive = "mybtn" + hide;
        unactive2 = "mybtn" + hide2;
        document.getElementById(clicked_id).style.backgroundColor = "#0142AE";
        document.getElementById(clicked_id).style.color = "white";
        document.getElementById(unactive).style.backgroundColor = "transparent";
        document.getElementById(unactive).style.color = "black";
        document.getElementById(unactive2).style.backgroundColor = "transparent";
        document.getElementById(unactive2).style.color = "black";
    }

}

// for image slider

let slideIndex = 1;
showSlides(slideIndex); // to set the first img
              
// for prev and next button
function plusSlides(n) {
    showSlides(slideIndex = slideIndex + n);
}

// for the dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // if it is reach the maximum length of the slide, will show again the first img
    if (n > slides.length) {
        slideIndex = 1
    }  

    // if it is reach the minimum length of the slide, will show again the last img
    if (n < 1) {
        slideIndex = slides.length 
    }

    // setting everthing to hidden first
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // then will display one img and one active dot at a time
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}