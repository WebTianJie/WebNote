### write less do more
### 大公司依然使用1.x版本(兼容ie低版本),移动版本使用2.x
#### 一:jquery库 封闭作用域 闭包
```
(function(){
	function JQuery(selector){
		return new JQuery.prototype.init(selector);
	}
	jQuery.prototype.init=function(selector){
		//选出dom对象,封装成jquery对象,返回
		//id,class
		this.length=0;
		if(selector.index('.')!=-1){
			var dom=document.getElementsByClassName(selector.slice(1))
		}else if(selector.indexOf('#')!=-1){
			var dom=document.getElementById(selector.slice(1));
		}
		//基础
		if(dom.length==undefined){
			this[0]=dom;
		}else{
			for(var i=0;i<dom.length;i++){
				this[i]=dom[i];
				this.length++;
			}
		}
// 		return this;
	}
	jQuery.prototype.css=function(config){
		//循环操作
		for(var i=0;i<this.length;i++){
			for(var attr in config){
				this[i].style[atrr]=config[attr];
			}
		}
		//链式操作
		return this;
	}
	jQuery.prototype.init.prototype=jQuery.prototype;
	window.$=window.jQuery=jQuery;
})()
```
####  二:jquer选择器合集
```
$('div','.wrap');在wrap元素里面找到div元素
$('.demo').get(-1);//获取倒数第一个
$('.demo').get();//返回获取到的原生dom的数组
find
$('.demo').find('ul').find('li').prevObject;返回前一个执行的结果
filter 参数函数
$('ul li').filter(function(index,ele){
	return index%2==0;0
});
has();
$('li').has('ul')//选择后代元素有ul的
//is()
$('.demo').is('span');//demo里面有没有p,当前后都是单个元素而的话就可以做对比
//add集合操作,
$('.wrap').add('ul').css('height','100');//.wrap和ul元素同时应用样式
```
#### 三:属性获取
```
prop,attr
通过prop添加特性的话,标签上面可以显示出来,如果添加除了特性之外的属性的话,则不显示,但是可以取到值
通过attr来设置属性,在标签上均可以显示
通过attr来取属性,只要有checked属性在渠道的值都是ckecked,无论属性的值是true还是false,
没有的话取到的值是undefined
通过prop取值,如果没有checked属性的话取到的是false,有的话渠取到的值true
建议:通过prop来取值
```
#### html()
```
$('ul li').html()只能取到ul下面第一个li的内容
var  arrName=['aaa','css']
$('ul li').html(function(index,ele){
	return '<p>'+arrName[index]+'</p>';
});
```
#### //text()
```
//test()取值的时候是取得所有的
$('ul li ').text(function(index,ele){
	return arrName[index];
})
```
#### size
```
size,和length一样,为了获取字符串和数组的长度,length是js的,size是jquery的
```

#### addclass,removeClass
```
$('.demo').addClass(function(index,ele){
	if(index>10){
		return 'red';
	}else{
		return 'green';
	}
})
$('.demo').removeClass(function(index,ele){
	if(index>10){
		return 'red';//删除red的类型
	}else{
		return 'green';//删除green的类名
	}
//})
```
#### 其它选择器
```
hasclass('.demo'),判断选择的元素或者元素的集合里面有没有包含的类型名.demo的元素
val(),跟input框添加的value属性并不是映射关系,通过val()来估值的话,行间的属性value并不会发生改变
$('.demo').val();//只会获取到第一个demo元素的val的值
$('form').serialize()//表单序列化表单的内容为字符串,name为key,val为值name="00"&pwd="geiyhei"
$('form').serializeArray()//表单元素学序列化为对象数组
$('.demo').val(function(index,oldval){
	return oldval+index;
})
.next(),nextAll(),prev(),prevAll()
.nextUntil('.end'),到哪一个元素为止,到带有类名第一个.end的元素为止
.nextUntil('.end','p')到.end元素之前的p元素
.siblings();.siblings('p');同级节点的p元素
parent();parents();
parent('.demo')选择父级是.demo,如果不是.demo择获取不到元素
parents('.demo')选择父级是.demo的元素
closest('.demo');选择结构上最近,符合条件的父级,这里面是找到最近.demo父元素
offsetParent();找到最近的有定位的父级
slice();//截取选择到的元素,从多个选择元素的中截取到底几个到底几个
insertBefore();before();insertafter(),after();append();
before(),after(),如果里面是选择的元素则会把元素剪切走,放在前后
appendTo($('.wrap'))把元素添加到.wrap元素里面去
append($('.wrap'));把.wrap元素添加到元素里面
prepend($('.conter'));//吧.conter元素放在第一个子元素的位置
prependTo($('.wrap'))//把元素添加到.wrap元素里面第一个子元素的位置
remove(),detach();
remove()返回删除的元素,而且吧元素的本身的事件去掉了,删除的元素再添加到body事件不存在
detach()返回删除的元素,元素本身的事件没去掉,删除的元素再次添加到body的时候,事件还存在
.wrap(),wrapinner()
wrap('<div></div>');元素div来包裹
```
#### 特殊选择器
```
wrap($('.demo'));用选择的对象来包裹元素
$('.demo').wrap(function(index){
	return '<div>'+index+'</div>'
})

//$('.demo').wrapInner('<div></div>');//.demo里面的子元素用div来包裹
//wrapAll();
//$('.demo').wrapAll('<p></p>');//给所有的.demo加p的父级
////问题
//类似这样的结构
<div class='demo'></div>
<div class="wrap">
	<div class='demo'></div>
	<div class='demo'></div>
</div>
当执行$('.demo').wrapAll('<div></div>')以后会变成这样的机构;
<div class="wrap">
	<div class='demo'></div>
	<div class='demo'></div>
	<div class='demo'></div>
</div>
unwrap();
$('.demo').unwrap();//去掉.demo的父级元素,如果父级是body则无法去掉
clone();克隆出一个选择出来的元素,可以克隆属性和样式,当clone(true)的时候,可以时间一起克隆,添加prop的特性是没有办法克隆的
需要借助data
data,
通过data可以在元素上面存储值,还可以保存存储数据的类型,通过data可以取到自定义的属性
```
### 事件
```
on,one.on事件可以绑定多个相同事件事件,比如说多个click事件
$('.demo').on('click','.button',{name:'林晨'},function(e){
	console.log(e);
	console.log(e.data);//{name:'林晨'},
});
one(),绑定的事件只执行一次
off(),解绑事件,如果不传递参数的话,会解绑所有的事件,如果传递参数的话,则可以解对应的事件
如果事件绑定的是函数的则需要传递对应的函数名字.off('click',fnname)
如果是通过事件委托的方法来解绑事件的话,则需要使用委托的方法来解除绑定事件
$('.demo').on('click','.button',fn);
trigger,主动触发事件
$('.demo').on('click',function(10,20,30,40){
	console.log('click');
});
$('.demp').trigger('click',[10,20,30,40]);//第一个参数是触发事件,第二个是参数
$('.demo').on('beiming',function(){
	console.log(';beimin');
});
$('.demo').trigger('beiming');//触发自定义事件
hover
click,mousedown,mouseout,keydown,blur,focus,keyup,mouseenter,mousewheel
e.pageX,e.pageY,e.which,e.button
hide(),show(),toggle(),如果设置了元素是block,或者inlineblock,则会还原成设置的,如果没有设置,则还原为默认的
shwo(1000,'swing');//变化时间,变化的方式,宽,高透明度都变化了
fadein(),fadeout(),fadeToggle(),fadeto()
fadein(1000,'liner');//变化的时间,变化的方式,只变化了透明度
fadeto(1550,0.1,'swing',function(){
	console.log('over');
});
slideDown(),slideUp(),slideToggle();
slideDwon(1500,200,'swing',function(){});//变化的时间,变化的方式,只变化了高度});
```

#### animate
```
队列,先执行第一个,再执行第二个,delay(1000),延迟1秒执行
$('.demo').animate({width:+=50,height:+=30},300,'liner').delay(1000).animate({width:+=50,height:+=30},300,'liner');
$('button').on('click',function(){
	$('.demo').stop();//跳过当前运动,执行下一个运动
	$('.demo').stop(true);//停止当前运动,以后的也不执行
	$('.demo').stop(true,true);//停止当前运动,并且移动到目标点
	$('.demo').finish();//完成所有的运动,到达目标点
})
jQuery.fx.off=true;关闭动画效果,直接到目标点
```

#### 插件jquery.easing
```
队列,queue
$('.demo').queue('chain',function(next){
	console.log('over1');
	next();//出第一个队,会把下面队列中所有的方法都执行了
}).queue('chain',function(next){
	console.log('over2');
	next();
}).queue('chain',function(next){
	console.log('over3');
})//入队
console.log($('.demo').queue('chain'));
$('.demo').dequeue('chain')//出队
$('.demo').clearQueue();//清空队列
模拟ainmate().animate()效果;
$('.demo').css({widht:100,height:200,position:relative}).on('click',function(){
	$(this).dequeue('chain');
}).queue('click',function(next){
	$(this).animate({widht:100,height:200,left:100,top:200});
	next();
}).queue('click',function(next){
	$(this).animate({widht:300,height:300,left:400,top:300});
	next();
}).queue('click',function(next){
	$(this).animate({widht:400,height:400,left:500,top:400});
})
```
#### 宽高相关
```
offset();获取对象距离文档边界的距离(left,top),offset({top:100,left:100}),不考虑父级时候是否有定位
position();//相遇有定位的父级的距离(left,top);//不支持赋值,没有定位的父级则相对于文档定位
scrolLTop(),scrollLeft();
获取滚动条距离顶部,右侧的距离,可以取值,可以赋值
widht(),height(),innerWidth(),innerHeight(),outerWidth(),outerHeight()
width() 不包含padding和border,返回的是数字
innierWidth(),包含padding,不包含border
outerWidth(),包含border和padding,如果是outerWidth(true),margin也会被包括进去
.each()
$('li').each(function(index,ele){
	$(ele).text(index).addClass('demo'+index)
});
.children()//拿到所有的子元素
.index(),当前元素在同级元素中的索引,index('span'),在同级的span元素的中的索引
```
#### 工具方法
```
typeof ()//返回的数据类型,undefined,String,Boolean,Object,Function
$.type();//里面的数据到底是什么
$.isArray()//判断是不是数组类型,$.isFunction(),$.isWindow()
$.trim();//去除首尾的空格
$.proxy();//改变this的指向
function(){
	console.log(this);
}
var obj={
	name:'beiming',
	age:123
}
$.proxy(show,obj);//把show里面的this改变为obj
$.noConflict();//防止$和别的变量冲突
var  $c=$.noConflict();//$c代替了$
$.each();//工具的方法,$('.demo')实例方法,处理数组,对象,类数组
$.each(array, function(index,ele) {
	
});
$.parseJSON();JSON.parse()//吧json类型的字符串,转换成字符串
$.makeArray();//传递一个数组,变成数组
var obj={
	a:'0',
	b:'1',
	c:'3',
	length:10,
	slice:Array.prototype.slice
	
}
var arr=[1,3,4];
$.makeArray('b',obj);//把b元素添加到类数组obj里面去,
$.makeArray(obj,arr);//会把类数组中的元素合并到数组中
```
####  $.extend();
```
$.extend();//this--->$;把自己定义的方法,添加到工具方法里面
$.fn.extend();//this-->this.fn//自己定义的方法,添加到实例方法里面
1:扩展插件
2:浅层克隆
3:深层克隆
$.extend();//把自己定义的方法,添加到工具方法里面,通过$.方法名可以调用
$.extend({
	definedMandom:function(start,final){
		//[0,1]*len+start
		var  len=final-start;
		return Math.random()*len+start;
	},
	myfn:function(){
		console.log('我也是自定义的工具方法');
	}
});
//也可以多次使用$.extend();方法
$.extend({
	myfn:function(){
		console.log('我也是自定义的工具方法1');
	}
});
$.extend({
	myfn:function(){
		console.log('我也是自定义的工具方法2');
	}
});
$.fn.entend
$.fn.extend({
	drag:function(){
		//this,哪个元素调用的,this就是谁
		console.log('我是自定义的实例扩展方法');
		return '自定义实例扩展方法成功';
	},
	move:function(){
		console.log('我也是实例扩展方法');
	}
})
```
#### //2:浅层克隆
```
var obj1={
	name:'deng',
	age:6
}
var obj2={
	name:'laodeng',
	age:39,
	smoke:true,
	friend:function(){
		name:"wang"
	}
}
var obj3={
	name:'liudaye',
	age:65
}
$.extend(obj1,obj2);//obj2里面的方法,克隆到obj1,没有的添属性则添加,有的则覆盖,如果是引用值,一个修改,另一个也会被修改,引用值的属性相同会覆盖,例如obj2里面的friend的name
$.extend(obj1,obj2,obj3);//所有的属性和方法都添加到obj1里面,没有的添属性则添加,有的则覆盖,如果是引用值,一个修改,另一个也会被修改,引用值的属性相同会覆盖,例如obj2里面的friend的name
```
#### 3:深层克隆
```
var obj1={
	name:'deng',
	age:6,
	friend:function(){
		name:"wang"
	}
}
var obj2={
	name:'laodeng',
	age:39,
	smoke:true,
	friend:function(){
		name:"wang"
	}
}
var obj3={
	name:'liudaye',
	age:65
}
$.extend(true,obj1,obj2);//obj2里面的方法,克隆到obj1,没有的添属性则添加,有的则覆盖,如果是引用值,一个修改,另一个则不会改变,引用值的属性相同会覆盖,没有则添加,例如obj2里面的friend的name
```
#### $.ajax();
```
$.ajax({
	type:"get",
	url:"http://www.baidu.com//port",
	async:true,//是否异步,true,同步的话,false
	timeout:3000,//设置请求的时间毫秒
	success:function(){},
	error:function(e){},
	complete:function(){},
	context:$('.demo')//改变ajax中的函数指向为$('.demo')对象
});
```
#### jsonp
```
function fn(res){console.log(res);}
$.ajax({
	type:"get",
	url:"http://www.baidu.com//port",
	data:{
		name:'图片',
		cb:'fn'//自定义的全局函数的名称,函数中的res就是请求结果
	}
	dataTye:'jsonp',
	async:true,//是否异步,true,同步的话,false
	timeout:3000,//设置请求的时间毫秒
	success:function(){},
	error:function(e){},
	complete:function(){},
	context:$('.demo')//改变ajax中的函数指向为$('.demo')对象
});
js单线程,异步(setInterval,ajax,绑定事件)编程机制,js是浏览器的一部分,异步百编程优化用户体验,防止页面阻塞,完成后,回调函数,回到主线程(浏览器内置的)
js执行的异步需要的浏览器线程,定时器发触发线程,http网络请求线程,事件监听线程(这三个都是浏览器的线程,这三个线程做完对应的事情的后,
	然后触发另一个事件,叫做回调)
```
#### 回调
```
$.CallBack()回调
		var  cb=$.Callbacks();
		var  cb=$.Callbacks('once');//cb.fire(),只执行一次
		var  cb=$.Callbacks('memory');//cb.fire(),第一次执行的时候就会把c函数添加进去,没此参数的话,则c函数不会被添加进去
		var  cb=$.Callbacks('unique');//同样的函数被添加的时候,则不会添加
		var  cb=$.Callbacks('stopOnFalse');//当遇到函数中有一个函数返回false的时候,后面的函数都不执行了
		function a(x,y){
			console.log('a',x,y);
			return false;
		}
		function b(x,y){
			console.log('b',x,y); 
		}
		cb.add(a,b);
		cb.fire(10,20);
		function c(x,y){
			console.log('c',x,y);
		}
		cb.add(c);
回调地狱
当一个ajax请求成功以后,在success函数里面再次进行ajax的请求,在内部的ajax的suess的函数里面,再次请求ajax请求
单一职责原则,开闭原则
```
#### $.Deferred()异步
```
$.ajax();的返回值就是$.Deferred().promise()对象;
var df=$.Deferred();
	//done(),成功,fail(),失败,preogress(),正在进行	
	df.done(function(){
		console.log('成功');
	})
	df.fail(function(){
		console.log('失败');
	})
	df.progress(function(){
		console.log('进行中');
	})
	setInterval(function(){
		var score=Math.random()*100;
		if(score>60){
			df.resolve();
		}else if(score<50){
			df.reject();
		}else{
			df.notify();	
		}
	},700)//这样的情况,外部可以随便触发,不合常理
////=============================升级====	
	function createScore(){
		var df=$.Deferred();
		setInterval(function(){
			var score=Math.random()*100;
			if(score>60){
				df.resolve('成功');
			}else if(score<50){
				df.reject('失败');
			}else{
				df.notify('继续努力');	
			}
		},700);
		return df.promise();
	}
	var df=createStore();
	df.done(function(msg){
		console.log(msg);
	})
	df.fail(function(msg){
		console.log(msg);
	})
	df.progress(function(msg){
		console.log(msg);
	})
```
#### then();
```
$.ajax().then(function(){console.log('成功的时候执行');},function(){console.log('失败的时候执行');})
var  df=$.Deferred();
df.then(
	function(msg){console.log(msg)},
	function(msg){console.log(msg)},
	function(msg){console.log(msg)}
).then(function(res){//这里面的res是前一个then成功函数的返回值
	
})
//$.when();里面可以出艾迪一个或者多个延迟对象
$.when(df1,df1,df1).then(function(){
	//三个延迟对象,全部执行成功的时候才执行这个方法,
	console.log('所有的延迟对都执行成功了');
},function(){
	//三个延迟对象,有一个执行不不成功的时候,就执行这个方法
	console.log('延迟对象有一个或者多个执行失败');
});
```