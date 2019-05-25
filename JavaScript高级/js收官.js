url请求过程
1:ns解析url映射到服务器的IP
2:建立tcp的链接
3:js,html,css,img
4:js时间线
5:渲染过程->渲染引擎
6:tcp四次握手,
浏览器的组成
1:用户界面
2:浏览器引擎
3:选渲染引擎
4:网络
5:UI后端
6:js引擎
7:数据存储
属性和特性
特性:属性之中包含特性,元素本身所具有的属性,如input的type,id,都是特性(也叫属性)
元素的特性,可以通过.的方式来获取或者设置特性,通过js的获取dom后,修改之后,元素身上对应的元素特性已经发生了修改
属性:不是元素所具有的,是被添加上去的,跟元素不是映射的,可以通过getattribulte来获取
属性的话的直接无法获取,
预加载,懒加载
1:预加载
var oImg=new Image();
oImg.onload=functiion(){
	var odiv=document.getElementById('demo');
	odiv.appendChild(this;
}
oImg.src="图片地址";
2:懒加载
在页面高度非常高的时候,超出屏幕元素不加载
当页面滚动的时候,元素进入屏幕最下方的时候,
去服务器请求元素,(为了提高页面的体验,懒加载和预加载同时使用)
随机数Math.random();
Math.random()*()+12;12到36随机数
文档碎,解决的在操作dom,导致重绘和重排,影响性能
var oF=document.createDocumentFragment();
var  oUl=document.getElementById('ul');
for(){
var newLi=document.createElement('li');
oF.appendChild(newLi);
}
oUl.appendChild(oF);
虚拟dom(vue)
断点调试
Element.prototype.getElementsByClassName=Document.prototype.getElementsByClassName=document.getElementsByClassName||function(className){
//_calssName
//获取document下面的所有标签

var  allDomArray=document.getElementByTagName('*');
}
运动
匀速运动
匀速运动
function move(dom,target){
	clearInterval(timer);
	var speed=target-dom.offsetLeft>0?7:-7;
	timer=setInterval(function(){
		if(Math.abs(target-dom.offsetLeft)<Math.abs(speed)){
			clearInterval(timer);
			dom.style.left=distance+'px';
		}else{
			dom.style.left=dom.offsetLeft+speed+'px';	
		}
		
	},30);
	
}
//缓冲运动
function bufferMove(dom,target){
	clearInterval(timer);
	var speed;
	timer=setInterval(function(){
		speed=(target-dom.offsetLeft)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(dom.offsetLeft==target){
			clearInterval(timer);
		}else{
			dom.style.left=dom.offsetLeft+speed+'px';						
		}
	},30);
}
 //加速运动
function plusMove(dom){
	clearInterval(timer);
	var speed=20;
	var a=2;
	timer=setInterval(function(){
		speed=speed+a;
		dom.style.left=dom.offsetLeft+speed+'px';
	},30);
}
//数组方法,
//foreach,filter,map,every,some,reduice,reduceright
var personArr=[
{name:'aaa',src:'images/1.jpg',des:'很好55',sex:'m',age:18},
{name:'ccc',src:'images/2.jpg',des:'很好44',sex:'f',age:16},
{name:'bbb',src:'images/3.jpg',des:'很好33',sex:'m',age:13},
{name:'ddd',src:'images/4.jpg',des:'很好22',sex:'f',age:12},
{name:'eee',src:'images/5.jpg',des:'很好11',sex:'m',age:19}
]
1:foreach
personArr.forEach(function(){ele,index,self},currobj);
//第二参数是表示当前的this是谁,如果是一个数组,则this[index]则是数组中每一个元素
//模拟foreach方法,三个参数,fn,length,function this->arguments[1]
Array.prototype.myForeach=function(fn){
	var  _arr=this,len=_arr.length,para2=arguments[1]|window;
	for(var i=0;i<len;i++){
		fn.apply(para2,[_arr[i],i,_arr]);
	}
}
personArr.myForeach(function(ele,index,self){
	this[index].innerText=ele.name;
},document.getElementsByTagName('li'))
2:filter,返回一个新数组,如果是引用值,原来数组里面的值还是会变
personArr.filter(function(ele,index,self){
	return item.sex.indexOf('m')>-1;
},document.getElementsByTagName('li'))
Array.prototype.myfilter=function(fn){
	var  _arr=this,len=_arr.length,para2=arguments[1]|window,newArr=[];
	for(var i=0;i<len;i++){
		fn.apply(para2,[_arr[i],i,_arr])?newArr.push(arr[i]):'';
	}
	return  newArr;
}
3:map,地图,映射,返回新数组,如果是引用值,原来数组里面的值还是会变
pesonAarr.map(function(ele,index,self){
	return ele.name+'duyi';
},document.getElementsByTagName('li'));
Array.prototype.myMap=function(fn){
	var  _arr=this,len=_arr.length,para2=arguments[1]|window,newArr=[];
	for(var i=0;i<len;i++){
		newArr.push(fn.apply(para2,[_arr[i],i,_arr]));
	}
	return newArr;
}
4:erery,数组中每一个元素都是true的返回值是true,否则是false
var flag=personArr.every(function(fn){
	return ele.age>15;
},document.getElementsByTagName('span'))
Array.prototype.myevery=function(ele,index,self){
	var _arr=this,len=this.length,para2=arguments[1]||window,flag=true;
	
	for(var i=0;i<len;i++){
		if(!fn.apply(para2,[_arr[i],i,_arr]))){
			flag=false;
			break;
		}
	}
	return flag;
}
5:some,所有的元素都是false返回false,否则返回true
var flag=personArr.some(function(ele,index,self){
	return ele.age>15;
},document.getElementsByTagName('span'))
6:reduce,从左向右遍历,reduiceRight(),从右向左遍历,返回一个值
参数:function preveVlaue,currValue,index,self,initialValue//初始值
initialValue第一次函数执行返回值,
var initialVale={name:'cst'}
var lastVlaue=personArr.reduce(function(pre,curr,index,self){
	return ;
},initialVale,{dom:'dom'})
var initialVale={name:'cst'}
var lastVlaue=personArr.myReduice(function(pre,curr,index,self){
	return ;
},initialVale,{dom:'dom'})
Array.prototype.myReduice=function(fn,initialVale){
	var _arr=this,len=this.length,para2=arguments[2]||window;
	for(var i=0;i<len;i++){
		initialVale=fn.apply(para2,[initialVale,_arr[i],i,_arr]);
	}
	return initialVale;
}
