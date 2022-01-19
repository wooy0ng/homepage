
const content = "안녕하세요. \n 성장하는 개발자 wooy0ng 입니다.";
const text = document.querySelector(".text");
var time_id = null;
let i = 0;

function typing(){
    if (i < content.length) {
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
    }
    else{
        clearInterval(time_id);
        setTimeout(function(){
            i = 0;
            text.textContent = "";
            time_id = setInterval(typing, 200)
        }, 1000 * 20);
    }
}
time_id = setInterval(typing, 200);