var storne_top_width =  window.innerHeight * 0.3;
var storne_top_height = storne_top_width*1.9;

var storne_bottom_width = storne_top_width*1.5;
var storne_bottom_height = storne_bottom_width/2;

var storne_shelf_width = storne_bottom_width*0.8;
var storne_shelf_height = storne_shelf_width/6;

var storne_shelf_center_width = storne_shelf_width*0.8;
var storne_shelf_center_height = storne_shelf_height;

var Name ="饗\n庭\n　\n陽\n月"
function Haka_init(userName){
  var storne_top = new fabric.Rect({
    left: canvasWidth/2 - storne_top_width/2,			//左
    top: canvasHeight/2 - storne_top_height/2,			//上
    width: storne_top_width,		//幅
    height: storne_top_height,		//高さ
    angle: 0,			//角度
    strokeWidth: 5,	//線の幅
    fill:"#D9D9D9",
    stroke: '#595959',	//線の色
    rx: 30 ,
    ry: 30 ,
  });

  var storne_bottom = new fabric.Rect({
    left: canvasWidth/2 - storne_bottom_width/2,			//左
    top: canvasHeight/2 - storne_bottom_height/2 + storne_top_height/2,			//上
    width: storne_bottom_width,		//幅
    height: storne_bottom_height,		//高さ
    angle: 0,			//角度
    strokeWidth: 5,	//線の幅
    fill:"#D9D9D9",
    stroke: '#595959',	//線の色
  });

  let fontsize = window.innerHeight /18
  let text = new fabric.Text('Hello', {
    left: canvasWidth/2 - fontsize/2,			//左
    top: canvasHeight/2 - fontsize * Name.length/2 *0.9,			//上
    strokeWidth: 0,
    fontSize: fontsize,
    fill:'#000000',
    fontFamily: 'Hina+Mincho',
    type:"components_text",
    });
  userName = addstr(userName,"\n")
  text.text = userName;  

  var storne_shelf = new fabric.Rect({
    left: canvasWidth/2 - storne_shelf_width/2,			//左
    top: canvasHeight/2 - storne_bottom_height/2
                        + storne_top_height/2 + storne_bottom_height
                        - storne_shelf_height,			//上
    width: storne_shelf_width,		//幅
    height: storne_shelf_height,		//高さ
    angle: 0,			//角度
    strokeWidth: 5,	//線の幅
    fill:"#EEEEEE",
    stroke: '#595959',	//線の色
  });

  var storne_shelf_center = new fabric.Rect({
    left: canvasWidth/2 - storne_shelf_center_width/2,			//左
    top: canvasHeight/2 - storne_bottom_height/2
                        + storne_top_height/2 + storne_bottom_height
                        - storne_shelf_center_height,			//上
    width: storne_shelf_center_width,		//幅
    height: storne_shelf_center_height,		//高さ
    angle: 0,			//角度
    strokeWidth: 5,	//線の幅
    fill:"#EEEEEE",
    stroke: '#595959',	//線の色
  });



  storne_top.selectable = false;
  storne_bottom.selectable = false;
  text.hasControls = false;
  storne_shelf.selectable = false;
  storne_shelf_center.selectable = false;

  canvas.add(storne_top,storne_bottom,text,storne_shelf,storne_shelf_center)

  canvas.renderAll();
}

function addSenkou(){
    fabric.Image.fromURL('/static/pic/incense.png', function(oImg) {
        scale = canvasHeight/3500; 
        oImg.scale(scale);
        oImg.top =(canvasHeight/2 - storne_bottom_height/2 + storne_top_height/2 - oImg.height*scale);			//上
        oImg.left = canvasWidth *0.55;
        oImg.hasBorders = false;
        oImg.hasControls=false;
        oImg.lockMovementY = true;
        canvas.add(oImg);
    });      
}


function addstr(result,tag){
  let newResult = "";
  for(let i = 0; i < result.length; i++){
    console.log(result[i])
    newResult +=  result[i] + tag;
  }
  return newResult
}