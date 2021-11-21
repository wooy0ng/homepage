
function getPrevUrl(){
    var url = window.location.href;
    var dir = url.split('/');
    dir.splice(0, 3);
    var idx = dir.pop().split('.')[0];
    if((idx == 'index') || (idx == '')){
        var result = "None";
    }
    else{
        idx = Number(idx) - 1;
        if(idx){
            var result = String(idx) + '.html';
        } else{
            var result = "None";
        }
    }
    return result;
}
function getNextUrl(){
    var url = window.location.href;
    var dir = url.split('/');
    dir.splice(0, 3);
    var idx = dir.pop().split('.')[0];
    if((idx == 'index') || (idx == '')){
        var result = "None";
    }
    else{
        idx = Number(idx) + 1;
        if(idx){
            var result = String(idx) + '.html';
        } else{
            var result = "None";
        }
    }
    return result;
}
function checkFileExists(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();

    if(http.status != 404){
        return true;
    }
    return false;
}


function goPrevUrl(){
    var url = getPrevUrl();
    if(checkFileExists(url)){
        location.href = url;
    }
}

function goNextUrl(){
    var url = getNextUrl();
    if(checkFileExists(url)){
        location.href = url;
    }
}


function goPrevMenu(){
    var url_num = Number(document.getElementsByClassName("click")[0].text);
    var prev_url_num = url_num - 1;
    var prev_url = "menu/" +String(prev_url_num) + ".html";
    if(checkFileExists(prev_url)){
        $(document).ready(function(){
            $("#board_wrap").load(prev_url);
        });
    }
}
function goNextMenu(){
    var url_num = Number(document.getElementsByClassName("click")[0].text);
    var next_url_num = url_num + 1;
    var next_url = "menu/" + String(next_url_num) + ".html";
    if(checkFileExists(next_url)){
        $(document).ready(function(){
            $("#board_wrap").load(next_url);
        });
    }
}

function goClickedMenu(btn_num){
    var url_num = Number(document.getElementById(btn_num).text);
    var clicked_url = "menu/" + String(url_num) + ".html";
    if(checkFileExists(clicked_url)){
        $(document).ready(function(){
            $("#board_wrap").load(clicked_url);
        });
    }
}
function goPPrevMenu(){
    var btns = document.getElementsByClassName('btn');
    var first_num = Number(btns[0].text);
    if(first_num % 5 == 1){
        var pprev_num = first_num - 5;
        var pprev_url = "menu/" + String(pprev_num) + ".html";
        if(checkFileExists(pprev_url)){
            $(document).ready(function(){
                $("#board_wrap").load(pprev_url);
            });
        }
    }
}

function goNNextMenu(){
    var btns = document.getElementsByClassName('btn');
    var last_num = Number(btns[btns.length - 1].text);
    if(last_num % 5 == 0){
        var nnext_num = last_num + 1;
        var nnext_url = "menu/" + String(nnext_num) + ".html";
        if(checkFileExists(nnext_url)){
            $(document).ready(function(){
                $("#board_wrap").load(nnext_url);
            });
        }
    }
}