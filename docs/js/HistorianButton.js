function HistorianButton(year){
    switch(year){
        case 2004:
            SetYearText(2004);
            SetEmptyImage();
            SetContentText(
                "公司創立。"
            );
            break;
        case 2009:
            SetYearText(2009);
            SetEmptyImage();
            SetContentText(
                "設立 <b><u>羽泰五股廠</u></b> (五股工業區)，" +
                "並通過 ISO 9001-2008 驗證。"
            );
            break;
        case 2011:
            SetYearText(2011);
            SetEmptyImage();
            SetContentText(
                "通過國家通訊傳播委員會「電信管制射頻經營許可執照」。"
            );
            break;
        case 2013:
            SetYearText(2013);
            SetEmptyImage();
            SetContentText(
                "通過 <b>美國Walmat</b> 合格廠商認證 (2013~2015年)，" +
                "並生產五金園藝及文具等相關生活用品。"
            );
            break;
        case 2017:
            SetYearText(2017);
            SetEmptyImage();
            SetContentText(
                "接獲開架美妝品牌 <b>~霓淨思~</b> 包裝組裝代工。"
            );
            break;
        case 2018:
            SetYearText(2018);
            SetEmptyImage();
            SetContentText(
                "成立塑膠射出成型廠、設立 <b><u>羽泰新莊廠</u></b>，" +
                "獲 <b>花仙子米奇</b> 拖把頭生產訂單。"
            );
            break;
        case 2020:
            SetYearText(2020);
            SetEmptyImage();
            SetContentText(
                "購置 <b><u>桃園八德和平廠</u></b> 並於同年將五股及新莊二廠遷址至和平廠。"
            );
            break;
        case 2021:
            SetYearText(2021);
            SetEmptyImage();
            SetContentText(
                "增設 <b>醫用口罩生產部</b> 並取得: <br>" +
                "製造業醫療器材商許可執照 <br><b>桃字醫器製 字第MD6132000094號</b><br><br>" +
                "衛生福利部第一等級醫療器材許可證 <br><b>衛部醫器製字第 9242號</b><br><br>" +
                "販賣業藥商許可執照 <br><b>桃字藥販 字第 6232088592 號</b>"
            );
            break;
        default:
            alert("Wrong years.");
            break;
    }
}
function SetYearText(year){
    document.getElementById("year").innerHTML = year;
}
function SetImage(url){
    document.getElementById("imgBox").style.display = "block"
    document.getElementById("pic").src = url;
}
function SetEmptyImage(){
    document.getElementById("imgBox").style.display = "none";
}
function SetContentText(info){
    document.getElementById("info").innerHTML = info;
}
