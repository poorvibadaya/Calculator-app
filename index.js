function display(value){
    document.getElementById("result").value+=value;
}
function clrscr(){
    document.getElementById("result").value="";
}
function sjow(){
    var ans=document.getElementById("result").value;
    document.getElementById("result").value=eval(ans);
    // console.log(eval(ans));
}
function del(){
    var dm=document.getElementById("result").value;
    
    document.getElementById("result").value=dm.slice(0,-1);
}
// var m=document.getElementById("result");

$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        sjow();
    
        return false;
      }
    });
  });


$(".result").onkeydown=function(){
    if(window.event.keyCode=='13'){
        sjow();
    }
}