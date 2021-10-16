var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
    if (window.pageYOffset > 150){
        var currentScrollpos = window.pageYOffset;
        if (prevScrollpos > currentScrollpos){
            document.getElementById("navbar").style.top = "0";
        }
        else{
            document.getElementById("navbar").style.top = "-300px";
        }
        prevScrollpos = currentScrollpos;
    }
}