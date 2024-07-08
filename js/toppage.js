'use strict';

// モーダルウィンドウとスタート画面

const modal = document.querySelector('#tp_modal');
const modal_content = document.querySelector('#tp_modal_contents');
const btn_close = document.querySelector('.tp_modal_closebtn');


//==============================================
//
//              モーダルウィンドウ画面
//
//==============================================


function last_page(){
    modal.style.display = 'block';
    console.log("処理完了");
    ShowLasttime(localStorage.Lasttime);
}

btn_close.addEventListener('click', modal_close());

function modal_close(){
    modal.style.display = "none";
}

modal.addEventListener('click', outside_close());
function outside_close(e){
    if (e.target == modal){
        modal.style.display = "none";
    }
}

//==============================================
//
//              スタート画面
//
//==============================================

function start(){
    location.href = "flow.html";
}

//==============================================
//
//              前回のやつを表示    localStorage.Lasttime;
//
//==============================================

const JSONFilePath = 'json/data.json';

const titleElement = document.getElementById('tp_modal_title');
const imageElement = document.getElementById("tp_modal_pic");
const loreElement = document.getElementById('tp_modal_text');

function ShowLasttime(menuKey){
    fetch(JSONFilePath)
        .then(response => {
            // レスポンスを JSON として解析
            return response.json();
        })
        .then(data => {
            const id = data[menuKey][0];

            let title = id.title;
            let lore = id.lore;
            let Path = id.image

            // 取得した title を h1 要素に表示
            titleElement.textContent = title;

            // 取得した lore を p 要素に表示
            loreElement.textContent = lore;

            // 取得した image を src 要素に表示
            imageElement.src = Path;
            imageElement.alt = title;

        })
        .catch(error => {
            // エラーが発生した場合の処理
            console.error('エラー(Jsonにデータがない場合があります):', error);
        });
}