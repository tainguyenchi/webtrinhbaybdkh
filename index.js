function showContent(idContent, idButton) {
    if(document.getElementById(idContent).style.display == "block"){
        document.getElementById(idContent).style.display = "none";
        document.getElementById(idButton).innerHTML = "Chi tiết";
    }else{
        document.getElementById(idContent).style.display = "block";
        document.getElementById(idButton).innerHTML = "Ẩn bớt";
    }
}