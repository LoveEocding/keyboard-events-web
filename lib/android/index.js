 //安卓键盘弹出回落事件
 const keybordForAndroid=(focusHander,blurHander)=>{
    //视窗高度
    const H= document.documentElement.clientHeight||document.body.clientHeight;
    //视窗变化
    window.onresize=function(){
        let reH=document.documentElement.clientHeight||document.body.clientHeight;
        if(reH<H){
            //键盘弹起
            focusHander();
        }else{
            blurHander(); 
        }
    }
}


export default {
   keybordForAndroid
}