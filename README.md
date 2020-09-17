# keyboard-events-web
## 移动端键盘事件集合
## 安装
```
npm install keyboard-events-plugin 
```
## 使用
### 1、键盘弹起收缩事件 inWithOut(<弹起回调>,<收缩回调>)
```
import KEYBOAD from 'keyboard-events-plugin'

//在声明周期中注册回调事件 例如
computed(){
   KEYBOAD.inWithOut(()=>{
       alert('软盘弹起');
   },()=>{
       alert('软盘收缩');
   })
}

```
