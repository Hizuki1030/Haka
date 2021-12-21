var canvas
var canvasHeight = window.innerHeight*0.8;
var canvasWidth ;


window.onload = function(){
    canvas = new fabric.Canvas('canvas',{
        hoverCursor: 'pointer',
        selection: false,
    });
    if(window.innerWidth > 767){
        canvasWidth = window.innerWidth * 0.7;
    }else{
        canvasWidth = window.innerWidth ;
     
    }
    canvas.setHeight(canvasHeight);
     canvas.setWidth(canvasWidth); 

    canvas.renderAll();


    queries = getUrlQueries();
    userName = queries["name"]
    Haka_init(userName)
    const se1 = new Audio('https://drive.google.com/uc?id=1Ktle8PeKugV79ov5ZWuYDyzxZ407Zudz');
    [...document.getElementsByClassName('ti-n_button')].forEach(bt=>{
    bt.addEventListener('mousedown',()=>{
    se1.pause();
    se1.currentTime = 0;
    se1.play();
    });
    });

}

var HTML_URLcopy='<div class="URL_input">'+
            '<input id="URL_text"></input>'+
            '<button class="copyURL"  onclick="copytoclipbox()" >コピー</button>'+        
            '</div>'


function generateURL(){
    var name = document.getElementById("Name").value;

    var URL_str = "https://web-haka.herokuapp.com/Haka?name="
    //var URL_str = "http://192.168.0.3:5000/Haka?name="


    URL_str =URL_str +name
    var qrtext = URL_str;
      var utf8qrtext = unescape(encodeURIComponent(qrtext));
    $("#qrcode").html("");
    $("#qrcode").qrcode({text:utf8qrtext});
    
    let element = document.getElementById('copyURL');
    element.insertAdjacentHTML('beforebegin', HTML_URLcopy);
    var URL_box = document.getElementById("URL_text");
    URL_box.value = URL_str
}

function getUrlQueries() {
    var queryStr = window.location.search.slice(1);  // 文頭?を除外
        queries = {};
  
    // クエリがない場合は空のオブジェクトを返す
    if (!queryStr) {
      return queries;
    }
  
    // クエリ文字列を & で分割して処理
    queryStr.split('&').forEach(function(queryStr) {
      // = で分割してkey,valueをオブジェクトに格納
      var queryArr = queryStr.split('=');
      queries[queryArr[0]] = decodeURIComponent(queryArr[1]);
    });
  
    return queries;
}

function copytoclipbox(){
    var URL = document.getElementById("URL_text");
    copyTextToClipboard(URL.value);
}

function copyTextToClipboard(textVal){
    // テキストエリアを用意する
    var copyFrom = document.createElement("textarea");
    // テキストエリアへ値をセット
    copyFrom.textContent = textVal;
   
    // bodyタグの要素を取得
    var bodyElm = document.getElementsByTagName("body")[0];
    // 子要素にテキストエリアを配置
    bodyElm.appendChild(copyFrom);
   
    // テキストエリアの値を選択
    copyFrom.select();
    // コピーコマンド発行
    var retVal = document.execCommand('copy');
    // 追加テキストエリアを削除
    bodyElm.removeChild(copyFrom);
    // 処理結果を返却
    return retVal;
  }


  