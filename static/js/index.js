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
    Haka_init()
  }