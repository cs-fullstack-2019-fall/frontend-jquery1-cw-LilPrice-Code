let time_interval = window.setInterval(rotate,2000);
let count = 0;
function rotate() {
    if(count === 0){
        $("#item2").show();
        count++;
    }
    else if (count === 1){
        $("#item2").hide();
        count--;
    }
}
