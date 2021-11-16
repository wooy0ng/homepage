
function getPrevUrl(){
    var url = window.location.href;
    var dir = url.split('/');
    dir.splice(0, 3);
    var idx = dir.pop().split('.')[0];
    if(idx == 'index'){
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
    if(idx == 'index'){
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
    if(url != 'None'){
        location.href = url;
    }
    
}

function goNextUrl(){
    var url = getNextUrl();
    if(url != 'None'){
        location.href = url;
    }
    else if(checkFileExists(url)){
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