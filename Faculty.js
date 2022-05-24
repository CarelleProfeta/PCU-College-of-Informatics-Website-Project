function Credentials(clicked_id) {
    var myModal_num; 

    var num = clicked_id.substr(5,2)
    // alert(num)
    myModal_num = "myModal" + num;
    
    document.getElementById(myModal_num).style.display = "block";
    
}

function close_btn(click_id) {
    var myModal_num;

    var number = click_id.substr(9, 2)
    
    myModal_num = "myModal" + number;

    document.getElementById(myModal_num).style.display = "none";
}