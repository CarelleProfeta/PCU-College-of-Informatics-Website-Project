// Will display and hide information based on what the user clicks 
function about_info(clicked_id) {
    var num = clicked_id.substr(5,2)

    var show_info = "information" + num; 

    if(num == "1") {
        number = parseInt(num);
        hide = number + 1;
        hide2 = number + 2;
        hide_info = "information" + hide;
        hide2_info = "information" + hide2;
        document.getElementById(show_info).style.display = "block"; 
        document.getElementById(hide_info).style.display = "none";
        document.getElementById(hide2_info).style.display = "none";

        // setting the active sidebar 

        unactive = "mybtn" + hide;
        unactive2 = "mybtn" + hide2;
        document.getElementById(clicked_id).style.backgroundColor = "#0142AE";
        document.getElementById(clicked_id).style.color = "white";
        document.getElementById(unactive).style.backgroundColor = "transparent";
        document.getElementById(unactive).style.color = "black";
        document.getElementById(unactive2).style.backgroundColor = "transparent";
        document.getElementById(unactive2).style.color = "black";
    } else if(num == "2") {
        number = parseInt(num);
        hide = number - 1;
        hide2 = number + 1;
        hide_info = "information" + hide;
        hide2_info = "information" + hide2;
        document.getElementById(show_info).style.display = "block";
        document.getElementById(hide_info).style.display = "none";
        document.getElementById(hide2_info).style.display = "none";

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
