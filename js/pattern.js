
//
//
//      使用するパターンを記載する。
//
// 

//  1st:    和風、洋風、中華風
//  2nd:    ご飯類、麺類、その他
//  3rd:    お魚、お肉、その他
//  4th:    しっかり、あっさり

const pattern_count = 75;    //  カウントを以下の数変更（重要）

//  patern_list = []    リスト化予定（二次元配列）

const comp_pattern1 = ['和風', '麺類', 'その他', 'しっかり', 'udon'];
const comp_pattern2 = ['和風', '麺類', 'その他', 'しっかり', 'soba'];
const comp_pattern3 = ['和風', '麺類', 'その他', 'しっかり', 'ramen'];
const comp_pattern4 = ['和風', '麺類', 'その他', 'しっかり', 'soba'];
const comp_pattern5 = ['洋風', '麺類', 'その他', 'しっかり','pasta'];
const comp_pattern6 = ['中華風', 'ご飯類', 'お肉', 'しっかり', 'curryrice'];
const comp_pattern7 = ['洋風', 'ご飯類', 'その他', 'しっかり', 'omurice'];
const comp_pattern8 = ['中華風', 'ご飯類', 'お肉', 'しっかり', 'chaahan'];
const comp_pattern9 = ['和風', 'ご飯類', 'お魚', 'しっかり', 'sushi'];
const comp_pattern10 = ['和風', 'ご飯類', 'お肉', 'しっかり', 'katsudon'];
const comp_pattern11 = ['和風', 'ご飯類', 'お肉', 'しっかり', 'yakiniku'];
const comp_pattern12 = ['和風', 'ご飯類', 'お肉', 'しっかり', 'gyudon'];
const comp_pattern13 = ['和風', 'ご飯類', 'お魚', 'しっかり', 'tendon'];
const comp_pattern14 = ['和風', 'ご飯類', 'お肉', 'しっかり', 'oyakodon'];
const comp_pattern15 = ['洋風', 'ご飯類', 'お肉', 'しっかり', 'hanbarg'];
const comp_pattern16 = ['洋風', 'その他', 'お肉', 'しっかり', 'steak'];
const comp_pattern17 = ['和風', 'その他', 'その他', 'あっさり', 'konamono'];
const comp_pattern18 = ['和風', 'その他', 'お肉', 'あっさり', 'yakitori'];
const comp_pattern19 = ['洋風', 'ご飯類', 'お肉', 'しっかり', 'frichick'];
const comp_pattern20 = ['和風', 'ご飯類', 'その他', 'しっかり', 'nabe'];
const comp_pattern21 = ['洋風', 'ご飯類', 'お肉', 'しっかり', 'syabu'];
const comp_pattern22 = ['中華風', 'ご飯類', 'お肉', 'しっかり', 'hinabe'];
const comp_pattern23 = ['和風', 'ご飯類', 'お魚', 'しっかり', 'kaisendon'];
const comp_pattern24 = ['中華風', 'ご飯類', 'その他', 'しっかり', 'china'];
const comp_pattern25 = ['中華風', '麺類', 'その他', 'しっかり', 'china'];
const comp_pattern26 = ['中華風', 'ご飯類', 'その他', 'しっかり', 'china'];
const comp_pattern27 = ['洋風', 'その他', 'お肉', 'あっさり', 'french'];
const comp_pattern28 = ['洋風', 'その他', 'お肉', 'しっかり', 'pizza'];
const comp_pattern29 = ['洋風', 'その他', 'お肉', 'あっさり', 'hamber'];
const comp_pattern30 = ['和風', '麺類', 'その他', 'しっかり', 'sioramen'];
const comp_pattern31 = ['中華風', '麺類', 'その他', 'しっかり', 'tantanmen'];
const comp_pattern32 = ['和風', 'ご飯類', 'お魚', 'しっかり', 'yakizakanateisyoku'];
const comp_pattern33 = ['和風', 'ご飯類', 'その他', 'あっさり', 'onigiri'];
const comp_pattern34 = ['洋風', 'ご飯類', 'その他', 'しっかり', 'rizotto"'];
const comp_pattern35 = ['洋風', 'ご飯類', 'お魚', 'しっかり', 'paeria'];
const comp_pattern36 = ['洋風', 'その他', 'お肉', 'あっさり', 'takosu'];
const comp_pattern37 = ['中華風', 'ご飯類', 'お肉', 'しっかり', 'bibinba'];
const comp_pattern38 = ['和風', 'ご飯類', 'お肉', 'しっかり', 'tonkatu'];
const comp_pattern39 = ['和風', 'その他', 'その他', 'しっかり', 'tenpura'];
const comp_pattern40 = ['中華風', 'その他', 'お肉', 'あっさり', 'syuumai'];
const comp_pattern41 = ['中華風', 'ご飯類', 'その他', 'しっかり', 'mabou'];
const comp_pattern42 = ['洋風', 'その他', 'その他', 'あっさり', 'pan'];
const comp_pattern43 = ['洋風', 'その他', 'お魚', 'しっかり', 'kaisen'];
const comp_pattern44 = ['和風', 'ご飯類', 'その他', 'あっさり', 'otyazuke'];
const comp_pattern45 = ['洋風', 'その他', 'お肉', 'あっさり', 'kebabu'];
const comp_pattern46 = ['洋風', 'その他', 'その他', 'あっさり', 'sanndo'];
const comp_pattern47 = ['和風', 'その他', 'その他', 'しっかり', 'oden'];
const comp_pattern48 = ['洋風', 'その他', 'その他', 'しっかり', 'nan'];
const comp_pattern49 = ['洋風', 'ご飯類', 'お魚', 'しっかり', 'pepparaisu'];
////////////////////////食べ放題達
/////////////新しく作ったもの
const comp_pattern50 = ['和風', 'その他', 'お肉', 'あっさり', 'oden'];
const comp_pattern51 = ['洋風', 'ご飯類', 'お肉', 'しっかり', 'yakiniku'];
const comp_pattern52 = ['和風', '麺類', 'その他', 'あっさり', 'udon'];
const comp_pattern53 = ['和風', '麺類', 'その他', 'あっさり', 'soba'];
const comp_pattern54 = ['洋風', '麺類', 'その他', 'しっかり', 'ramen'];
const comp_pattern55 = ['洋風', '麺類', 'お肉', 'しっかり', 'ramen'];
const comp_pattern56 = ['和風', '麺類', 'お肉', 'しっかり', 'ramen'];
const comp_pattern57 = ['和風', '麺類', 'その他', 'しっかり','pasta'];
const comp_pattern58 = ['和風', 'ご飯類', 'お肉', 'しっかり', 'curryrice'];
const comp_pattern59 = ['和風', 'ご飯類', 'その他', 'しっかり', 'curryrice'];
const comp_pattern60 = ['和風', 'ご飯類', 'その他', 'しっかり', 'omurice'];
const comp_pattern61 = ['中華風', 'ご飯類', 'その他', 'しっかり', 'chaahan'];
const comp_pattern62 = ['和風', 'ご飯類', 'お肉', 'しっかり', 'tendon'];
const comp_pattern63 = ['和風', 'ご飯類', 'その他', 'しっかり', 'tendon'];
const comp_pattern64 = ['洋風', 'その他', 'お肉', 'しっかり', 'hanbarg'];
const comp_pattern65 = ['洋風', 'ご飯', 'お肉', 'しっかり', 'steak'];
const comp_pattern66 = ['和風', 'その他', 'お肉', 'しっかり', 'yakitori'];
const comp_pattern67 = ['洋風', 'その他', 'お肉', 'しっかり', 'frichick'];
const comp_pattern68 = ['洋風', 'その他', 'お肉', 'しっかり', 'hamber'];
const comp_pattern69 = ['和風', '麺類', 'その他', 'あっさり', 'sioramen'];
const comp_pattern70 = ['和風', 'ご飯類', 'その他', 'しっかり', 'tonkatu'];
const comp_pattern71 = ['中華風', 'ご飯類', 'お肉', 'しっかり', 'mabou'];
const comp_pattern72 = ['中華風', 'その他', 'その他', 'しっかり', 'mabou'];
const comp_pattern73 = ['中華風', 'その他', 'お肉', 'しっかり', 'mabou'];
const comp_pattern74 = ['和風', 'その他', 'お肉', 'しっかり', 'oden'];
const comp_pattern75 = ['和風', 'その他', 'その他', 'あっさり', 'oden'];








