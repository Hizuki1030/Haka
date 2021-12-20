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


