 //IOS 键盘弹起回落事件
const keybordForIos=(focusHander,blurHander)=>{
    document.body.addEventListener('focusin',focusHander);
    document.body.addEventListener('focusout',blurHander);
}

export default {
    keybordForIos:keybordForIos
}