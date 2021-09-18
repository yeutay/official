function SubmitTo(){
    let str = 
    "mailto:allenwu@yeutay.com.tw?subject=" + 
    document.getElementsByClassName("input-subject")[0].value + 
    "&body=" + 
    "From_" + document.getElementsByClassName("input-name")[0].value + 
    "_Content_" + document.getElementsByClassName("input-message")[0].value;

    document.getElementById("submitButton").href = str;
    return false;
}