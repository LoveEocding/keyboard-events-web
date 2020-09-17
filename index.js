/***
 * 对移动端键盘事件封装
 */
import androidTool from './lib/android/index.js';
import iosTool from './lib/ios/index.js';
const ANDROID='Android';
const IOS='IOS';

//键盘是安卓还是IOS
const jumpClient=()=>{
     let agentInfo=navigator.userAgent;
     let regExp=/iPhone/;
     if(regExp.test(agentInfo)){
         return IOS;
     }
     return ANDROID;
}

/**
 * 
 * @param {*} focusEvent 弹起回调
 * @param {*} blurEvent 收缩回调
 * @aim  监听IOS安卓键盘弹起收缩事件
 */
const inWithOut=(focusEvent,blurEvent)=>{
    if(jumpClient()===ANDROID){
        androidTool.keybordForAndroid(focusEvent,blurEvent);
    }else{
        iosTool.keybordForIos(focusEvent,blurEvent);
    }
}

export default {
   inWithOut
}








