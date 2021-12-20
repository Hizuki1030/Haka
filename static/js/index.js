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
    const se1 = new Audio('https://drive.google.com/uc?id=1Ktle8PeKugV79ov5ZWuYDyzxZ407Zudz');
    [...document.getElementsByClassName('ti-n_button')].forEach(bt=>{
    bt.addEventListener('mousedown',()=>{
    se1.pause();
    se1.currentTime = 0;
    se1.play();
    });
    });

}


