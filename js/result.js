'use strict';

//==========================================
//
//          変数管理
//
//==========================================

const home_btn = document.getElementById("result_home");
//  ホームボタン

const tags_btn = document.getElementById("result_tag");
//  タグボタン

const search_btn = document.getElementById("result_search");
//  検索ボタン

const close_btn = document.querySelector(".r_modal_closebtn");
//  閉じるボタン

const tags_content = document.getElementById("r_modal_tags");
//  タグ一覧のコンテンツ

const reroll_btn = document.getElementById("result_reroll");
//  タグ一覧のコンテンツ

// -----------------------------------------------

const modal = document.getElementById("r_modal");
const footer = document.getElementById("footer");

//  ホームボタン

//==========================================
//
//          ボタン script (ホーム、検索)
//
//==========================================

home_btn.addEventListener('click', function() {
    location.href = "index.html";
});

//================================================================
//
//          検索function    (Googleマップに飛ばす。)
//
//================================================================

search_btn.addEventListener('click', search_function);

function search_function(){
    let result_title = document.querySelector("h1").textContent;
    console.log(result_title);
    let location = 'https://www.google.com/maps/search/' + result_title ; // URL挿入
    window.open(location, '_blank');
}

//================================================================
//
//          リロール処理
//
//================================================================

reroll_btn.addEventListener('click', reroll_function);

function reroll_function(){
    console.log("[システム] リロール処理の実行");
    random_cooked();
    //  再度読み込み処理
    let loading = document.querySelector(".loader");
    loading.classList.add("loading");
    setTimeout(function(){
        loading.classList.remove("loading");
    }, 500);
}

//================================================================
//
//          タグボタンをクリックするとモーダルウィンドウ
//
//================================================================

tags_btn.addEventListener('click', result_show_tags);
//  タグのアイコンをクリックするとモーダル表示
modal.addEventListener('click', outside_close);      
//  何もないところをクリックすると閉じる
close_btn.addEventListener('click', modal_close);


function result_show_tags(){
    modal.style.display = 'block';
    footer.style.display = 'none';
    tagshow();
    //    blockつけて表示
}

function modal_close(){
    modal.style.display = 'none';
    footer.style.display = 'block';
}


function outside_close(e){
    r_modal.style.display = "none";
    footer.style.display = 'block';
}

//================================================================
//
//          タグボタンをクリックするとモーダルウィンドウ
//
//================================================================

const Share_btn = document.querySelector("#result_share_icon");
const Share_modal = document.querySelector(".modal_share");
const Share_modal_close = document.querySelector(".share_modal_closebtn");

Share_btn.addEventListener('click', share_show);
//  タグのアイコンをクリックするとモーダル表示
Share_modal.addEventListener('click', outside2_close);      
//  何もないところをクリックすると閉じる
Share_modal_close.addEventListener('click', share_close);


function share_show(){
    Share_modal.style.display = 'block';
    footer.style.display = 'none';
    tweet_btm.innerHTML = link;
}

function share_close(){
    Share_modal.style.display = 'none';
    footer.style.display = 'block';
}


function outside2_close(){
    Share_modal.style.display = "none";
    footer.style.display = 'block';
}


//=========================================================
//
//          データベース
//
//================================================================

function arryMatchs(arr1, arr2){
    //  それぞれの要素を比較する
    let widthX = arr1.length;
    widthX = widthX - 1;
    for(let i = 0; i < widthX; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

let result_database = [];
let menuid = "";
let result_list = [];

window.addEventListener('load', function(){
    const paramlink = new URLSearchParams(window.location.search);
    const result_data = paramlink.get('value');
    result_database = result_data.split(',');
    console.log(result_database);
    for (let i = 1; i <= pattern_count; i++) {
        let pattern = eval('comp_pattern' + i);
        if(arryMatchs(result_database, pattern)){
            result_list.push(`${pattern[4]}`);
            //  結果の値が入ってるのは「4」
        }
    }
    for (let e = 0; e < result_list.length; e++) {
        console.log(`[システム] 一致リスト：${result_list[e]}`);
    };
    random_cooked();
});

function random_cooked(){
    if(result_list){
        console.log("[システム] 結果があります。");
        let random = Math.floor( Math.random() * result_list.length);
        console.log(`[システム] 結果：${result_list[random]}`)
        menuid = result_list[random];
        result(menuid);
        localStorage.Lasttime = menuid;
    }
    else{
        console.log("[システム] 結果がありません。");
    }

    //
}


function tagshow(){
    // ul要素を取得します
    let ulElement = document.getElementById('r_modal_tags'); // yourUlIdは対象のul要素のIDに置き換えてください

    // ul要素が存在するか確認します
    if (ulElement) {
        // ul要素内のすべてのli要素を取得します
        let liElements = ulElement.getElementsByTagName('li');

        // li要素を削除します
        for (let i = liElements.length - 1; i >= 0; i--) {
            let li = liElements[i];
            li.parentNode.removeChild(li);
        }
    }
    if(result_database === undefined){
        console.log("[システム] result_databaseが存在しません");
        return
    }
    else{
        console.log("[システム] result_databaseが存在します");
        for(let i = 0; i < result_database.length; i++){
            let list = document.createElement('li');
            list.textContent = result_database[i];
            tags_content.appendChild(list);
        }
    }
}

//
//
//
//
//
//

const JSONFilePath = 'json/data.json';

//  let menuid = 'hamber';  //  変更するメニュー名

const titleElement = document.getElementById('result_title');
const imageElement = document.getElementById("result_pic");
const loreElement = document.getElementById('result_text');

// window.addEventListener('load', function(){
//     console.log(menuid);
//     result(menuid);
// });

function result(menuKey){
    fetch(JSONFilePath)
        .then(response => {
            // レスポンスを JSON として解析
            return response.json();
        })
        .then(data => {
            const id = data[menuKey][0];

            // data[menuKey][0].title
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

            //  Twitter
            
            const tweet_title = title;

            let data_text = `今食べたいものは「${tweet_title}」でした！みんなはどうかな？`; // ボタンをはりつけたページのタイトルでなくてもOK
            let data_url = 'https://tkmt-takashi.main.jp/nanitaberu/'; // ボタンをはりつけたページ以外のurlも指定できる
            let data_hash = "今日何食ベル"


            let link = `<a href="https://twitter.com/intent/tweet?text=${data_text}&url=${data_url}&hastags=${data_hash}" target="_blank" class="X-btn"><i class="fa-brands fa-square-x-twitter X-btn"></i></a>`;
            const tweet_btm = document.querySelector(".tweet");
            tweet_btm.innerHTML = link;


        })
        .catch(error => {
            // エラーが発生した場合の処理
            console.error('エラー(Jsonにデータがない場合があります):', error);
        });
}

//
//
//
//
//
//

