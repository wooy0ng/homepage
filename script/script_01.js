
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

function getPrevUrlTitle(){
    // To Do : dynamic title
    const request = require('request'),
        cheerio = require('cheerio');
    var url = getPrevUrl();

    request(url, function(err, res, html){
        if(!err){
            var $ = cheerio.load(html)  
        }
    })
}

function goPrevMenu(){
    var url_num = Number(document.getElementsByClassName("click")[0].text);
    prev_url_num = url_num - 1;
    prev_url = "menu/" +String(prev_url_num) + ".html"
    if(checkFileExists(prev_url)){
        $(document).ready(function(){
            $("#board_wrap").load(prev_url)
        })
    }
}
function goNextMenu(){
    var url_num = Number(document.getElementsByClassName("click")[0].text);
    next_url_num = url_num + 1;
    next_url = "menu/" + String(next_url) + ".html"
    if(checkFileExists(next_url)){
        $(document).ready(function(){
            $("#board_wrap").load(next_url)
        })
    }
}