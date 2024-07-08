

//==========================================
//
//          変数管理
//
//==========================================

let issue_num = 0;
let database = [];
let Back = false;
let Path;

let ISSUE = [
    //  問題文が（ISSUE[0]）
    ['','どんなジャンルがいいかな？', '主食は何がいいかな？', '主菜はなにがいいかな？', 'どれくらいがいいかな？'],
    ['和風', '洋風', '中華風'],
    ['ご飯類', '麺類', 'その他'],
    ['お肉','お魚','その他'],
    ['しっかり', 'あっさり']
];


const back = document.querySelector("#back");       //  戻るボタンの出力場所

const result = document.querySelector(".result");   //  リザルト画面の出力場所


const issue_text_num = document.getElementById("issue_num");
const issue_text = document.getElementById("issue_qust");

window.addEventListener('load', function(){
    issue_num = 1;
    console.log(`[システム] 現在の問題番号：${issue_num}問目`)
});

function Question(e){
    let y = String(e);  //  選択されたValue値をyに代入
    database.push(y);   //  yをdatabaseに追加
    issue_num = issue_num + 1;    //  問題番号を追加      (※問1の時問2に設定 issue_num = 2)
    let Now = issue_num - 1;     //  現在の問題を作成    (※問1の時問1に設定 issue_num = 1)

    let Now_lv = document.querySelector('.lv' + Now); //    lv1をhidden
    let Next_lv = document.querySelector('.lv' + issue_num);       //    lv2のhiddenを削除

    Path = document.querySelector('.Path_' + Now);

    Path.textContent = y + '/';     //  パスを作成する

    console.log(`[システム] 「${y}」を選択しました。`);
    console.log('----------------------------------------');

    const underImage = document.querySelector(".underImage");
    if(issue_num == 5){      //  リザルトの場合は非表示プラス表示する。
        console.log(`[システム] 結果の表示`)
        document.querySelector(".issue").classList.add("hidden");
        result.classList.remove("hidden");

        underImage.src = "images/bikkuri.svg";
    }
    else{                   //  リザルト表示以外はファンクション実行
        QuestionShow();
    }
}

//  問題の配列


function QuestionShow(){

    console.log(`[システム] 現在の問題番号：${issue_num}問目`);

    //  ここでの issue_num は　次の問題番号になる。

    let issue_all = document.querySelector(".issue");
    let number = document.getElementById("issue_num");      //  問題番号を出力するため
    let title = document.getElementById("issue_question");  //  問題題材を出力するため
    let q1 = document.getElementById("issue_btn_1");        //  選択肢_1 を出力するため
    let q2 = document.getElementById("issue_btn_2");        //  選択肢_2 を出力するため
    let q3 = document.getElementById("issue_btn_3");        //  選択肢_3 を出力するため
    //  ここから処理する
    number.textContent = `Q.0${issue_num}`;      //  問題番号を出力
    issue_all.classList.add("fadeUp");

    q1.value =  ISSUE[issue_num][0];             //  選択肢を配列から受け取り。
    q2.value =  ISSUE[issue_num][1];             //  選択肢を配列から受け取り。

    const underImage = document.querySelector(".underImage");

    if(issue_num == 1){
        underImage.src = "images/0per.svg";
    }
    if(issue_num == 2){
        underImage.src = "images/30per.svg";
        q3.classList.remove("hidden");
    }
    if(issue_num == 3){
        underImage.src = "images/59per.svg";
        q3.classList.remove("hidden");
    }
    if(issue_num == 4){
        title.textContent = ISSUE[0][4];
        q3.classList.add("hidden");
        underImage.src = "images/78per.svg";
    }
    if(issue_num == 5){                          //  リザルト画面の場合
        title.textContent = ISSUE[0][issue_num];
        q3.value =  ISSUE[issue_num][3];
        underImage.src = "images/bikkuri.svg";
    }
    if(issue_num != 5){
        title.textContent = ISSUE[0][issue_num];
        q3.value =  ISSUE[issue_num][2];
    }
}



//==========================================
//
//          RESULT(結果)
//
//==========================================

const result_click = document.querySelector('#result');

result_click.addEventListener('click', show_result);

function show_result(){ 
    location.href = `result.html?value=${database}`;
}


//==========================================
//
//          戻るボタン
//
//==========================================

back.addEventListener('click', function() {
    console.log(`[システム] キャンセルされた問題：${issue_num}番`);
    console.log("-------------------------------------")
    issue_num = issue_num - 1;      //  問題番号を -1 にする。
    database.pop();                 //  データベースから一つ抜く。
    
    let Now = issue_num + 1;        //  前回の問題（戻る前の問題）を Now に設定

    Path = document.querySelector('.Path_' + issue_num);      //  パスを出力する。

    if(issue_num == 0){                 //  最初の時だけホームに戻す。
        location.href = `index.html`;   //  ホームに戻る。
    }
    else if(issue_num == 4){      //  最後だけ別のクラスを付ける
        Path.textContent = "";          //  パスを空白として入力
        result.classList.add("hidden");
        document.querySelector(".issue").classList.remove("hidden");

        const underImage = document.querySelector(".underImage");
        underImage.src = "images/78per.svg";
    }
    else{
        Path.textContent = "";          //  パスを空白として入力
        QuestionShow();
    }

})


