var stone_top_width =  window.innerHeight * 0.3;
var stone_top_height = stone_top_width*1.9;

var stone_bottom_width = stone_top_width*1.5;
var stone_bottom_height = stone_bottom_width/2;

var stone_shelf_width = stone_bottom_width*0.8;
var stone_shelf_height = stone_shelf_width/6;

var stone_shelf_center_width = stone_shelf_width*0.8;
var stone_shelf_center_height = stone_shelf_height;

var Name ="饗\n庭\n　\n陽\n月"
function Haka_init(userName){
  var stone_top = new fabric.Rect({
    left: canvasWidth/2 - stone_top_width/2,			//左
    top: canvasHeight/2 - stone_top_height/2,			//上
    width: stone_top_width,		//幅
    height: stone_top_height,		//高さ
    angle: 0,			//角度
    strokeWidth: 5,	//線の幅
    fill:"#D9D9D9",
    stroke: '#595959',	//線の色
    rx: 30 ,
    ry: 30 ,
  });

  var stone_bottom = new fabric.Rect({
    left: canvasWidth/2 - stone_bottom_width/2,			//左
    top: canvasHeight/2 - stone_bottom_height/2 + stone_top_height/2,			//上
    width: stone_bottom_width,		//幅
    height: stone_bottom_height,		//高さ
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

  var stone_shelf = new fabric.Rect({
    left: canvasWidth/2 - stone_shelf_width/2,			//左
    top: canvasHeight/2 - stone_bottom_height/2
                        + stone_top_height/2 + stone_bottom_height
                        - stone_shelf_height,			//上
    width: stone_shelf_width,		//幅
    height: stone_shelf_height,		//高さ
    angle: 0,			//角度
    strokeWidth: 5,	//線の幅
    fill:"#EEEEEE",
    stroke: '#595959',	//線の色
  });

  var stone_shelf_center = new fabric.Rect({
    left: canvasWidth/2 - stone_shelf_center_width/2,			//左
    top: canvasHeight/2 - stone_bottom_height/2
                        + stone_top_height/2 + stone_bottom_height
                        - stone_shelf_center_height,			//上
    width: stone_shelf_center_width,		//幅
    height: stone_shelf_center_height,		//高さ
    angle: 0,			//角度
    strokeWidth: 5,	//線の幅
    fill:"#EEEEEE",
    stroke: '#595959',	//線の色
  });



  stone_top.selectable = false;
  stone_bottom.selectable = false;
  text.hasControls = false;
  stone_shelf.selectable = false;
  stone_shelf_center.selectable = false;

  canvas.add(stone_top,stone_bottom,text,stone_shelf,stone_shelf_center)

  canvas.renderAll();
}

function addSenkou(){
    fabric.Image.fromURL('/static/pic/incense.png', function(oImg) {
        scale = canvasHeight/3500; 
        oImg.scale(scale);
        oImg.top =(canvasHeight/2 - stone_bottom_height/2 + stone_top_height/2 - oImg.height*scale);			//上
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