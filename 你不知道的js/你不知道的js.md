### 1:bind,
```
function A(){}
var o={};
var x=1;
var y=2;
var z=3;
var  B=A.bind(o,x,y,z);
B('h');
1:函数A调用的时候bind()的时候,需要传递的参数,o,x,y,z...
2:返回新的函数B
3:函数B在执行的时候,具体的功能实际上还是使用的A,this的指向修改成了o
4:函数B在执行的时候,你传递参数,会拼接x,y,z后面到你所传的,一并传递给A执行等同于B(o,x,y,z,'h')
5:new B()构造函数依旧是A,而且o不会起到任何作用
var x=10;
function show(a,b){
	console.log(this.x);
}
show('a','b');
var obj={
	x:20
}
// var newShow=show.bind(obj,'a',b);
var newShow=show.bind(obj,'a');
newshow('b');//默认会转成(obj,a,b);
```
### 2:纯函数
```
对于相同的输入,永远会得到相同的输出,不依赖,不修改其作用域以外的变量
好处,bug守恒定律,代码量达到一定程度的时候,就会不可避免的产生bug,
通过纯函数可以使用纯函数避免因为修改全部变量导致函数的行为出现异常的情况;
健壮,就算修改顺序,也不会影响纯函数的执行结果;
组件开发,状体管理,更好的代码状体管理,使得可预测性增强,降低代码管理难度.
但是前端基本上都是和副作用打交道,所有的函数使用纯函数不可能
函数角度性能优化以及函数记忆
var count=0;
function factory(n){
	count++;
	if(n==0||n==1){
		return 1;
	}
	return n*factory(n-1);
}

function memorize(fn){
	var cache={};
	return function(){
		var key=arguments.length+Array.prototype.join.call(arguments);
		if(cache[key]){
			return cache[key];
		}else{
			cache[key]=fn.apply(this,arguments);
			return cache[key];
		}
	}
}
var newF=memorize(factory);
newF(5);
```
### 3:优化页面请求性能:网路请求,防抖和节流
#### 1:防抖
```
函数防抖是在函数需要频繁触发的情况的时候,只有
足够空闲的时候才会执行一次,就好像公交车司机会等所有的乘客都上车之后才会出站
实时搜索,拖拽
function debounce(handle,delay){
	var timer=null;
	return function(){
		var _self=this,_arg=arguments;
		clearTimeout(timer);
		timer=setTimeout(function(){
			handle.apply(_self,_arg);
		},delay);
	}
}
function ajax(e){console.log(e,this.value)}
inputObj.oninput=debounce(ajax,1000);
```
#### 2:节流
```
函数节流就是预定一个函数只有在大于等于执行周期的时候才会执行
周期之内调用不在执行;好像水滴积攒到一定的重量的时候才会掉下来一样
窗口调整,页面滚动,抢购疯点击
function throttle(handel,delay){
	var lasTime=0;
	return function(e){
		var nowTime=new Date().getTime();
		if(nowTime-lasTime>delay){
			handel.apply(this,arguments);
			lasTime=nowTime;
		}
	}
}
function buy(){
	console.log(this,e);	
}
btnObj.onclick=throttle(buy,1000);
js数学之美-拖拽公式
```
### 函数的柯里化
```
在数学计算机科学中,柯里化是一种将使用多个参数的函数的一个函数
转换成一系列使用一个函数的技术,
简化代码结构,提高维护性,提高函数单一性,降低代码的重复,提高代码,适应性
function add(a,b,c,d){
	
}
function FixedParamsCurry(fn){
	var _arg=Array.slice().call(arguments,1);
	return function(){
		var  newArg=_arg.concat(Array.slice().call(arguments,0));
	  	return fn.apply(this,newArg);
	}
}
var newAdd=FixedParamsCurry(add,1,2);
newAdd(2,3);
```