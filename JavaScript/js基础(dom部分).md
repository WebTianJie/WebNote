
#### 1:dom的基本操作 dom选取的数组都是类数组,(push方法可以验证)
	  1:页面的整个文档是document
	  2:document.getElementById();//在ie8以下不区分大小写,如果也可以根据name值来选取(当id不存在的时候)
	  3:document.getElementsByTagName();//,完全没有兼容性问题,选出来的是类数组,并不是真正的数组
	  4:document.getElementByName()//部分标签可以使用
	  5:document.getElementsByClassName()//ie9以下无法使用
	  6:document.querySelector();//css语法选取,ie6,ie7以下无效,选取的元素不是实时的,选取以后,动态删减元素,选取结果不变
	  7:document.querySelectorAll();//css语法选取,ie6,ie7以下无效,选取的元素不是实时的,选取以后,动态删减元素,选取结果不变
#### 2:不是方法选取节点,document是最顶级的节点
	  1:parentNode;//父节点
	  2:childNodes.//子节点,类数组,直接子元素,包括元素节点和文本节点,注释节点,属性节点,
	  3:firstChild//第一个节点
	  4:lastChilderen//最后一个节点
	  5:nextSiblings//下一个兄弟节点,previousSiblings;上一个兄弟节点
	  6:hasChildNodes();判断是否有节点子元素
#### 3:选取元素节点,除了children其它的方法在ie9一下都不支持
   1:parent.Element;//父元素节点,(没有document)
   2:children//元素子节点
   3:firstElementChild//第一个元素节点
   4:lastElementChild//最后一个元素节点
   5:netElementSiblings/previousElementSiblings//下一个/上一个兄弟元素
#### 4:节点属性
	nodeName;'#text #commont 区别标签',此属性只能读取不需修改或者复制
	nodeValue;只有文本节点才有的属性,可读可写
	nodeType;只读,1:元素节点,2:属性节点,3:文本节点,8:注释节点,9:document节点 ,11:DocumentFragment节点
#### 5:DOM节点树
		NODE是节点树的根节点
			Document,element是第一级别节点
		
			Document节点下一级节点是HTMLDocument节点,XMLDcoument节点
			Element节点的下一级节点是HTMLElement节点
			HTMLElement节点"下级节点是
				HTMLHeadElement
				HTMLBodyElement
				HTMLTitleElemnet
				HTMLParagraphElement
				HTMLInputElement
				HTMLlabelElement
				.....
			我们一般操作的元素的顶级元素都是Element
			

#####			1:根据参数n选择元素的n级的父级元素节点,类似jquery的parents方法
				function returnParent(ele,n){
				
					for(var i=0;i<n;i++;){
						ele=ele.parentElement;
					}
					return ele;
				}
				function returnParent(ele,n){
				
					while(ele&&n){
					 ele=ele.parentElement;
					 n--;
					}
					return ele;
				}
#####			2:实现children方法
				
				function myChildren(ele){
					var childs=ele.childNodes;
					var arr=[];
					for(var i=0;i<childs.length;i++){
						if(childs[i].nodeType==1){
							arr.push(childs[i]);
						}
					}
				}
				
				Element.prototype.myChildren=function(){
					var childs=this.childNodes;
					var arr=[];
					var len=childs.length;
					for(var i=0;i<len;i++){
						if(childs[i].nodeType==1){
							arr.push(childs[i]);
						}
					}
				}
				
#####			3:兄弟元素
			function retSiblings(e,n){
				while(n&&e){
					if(n>0)
					{
						
						if(e.nextElementSiblings){
							e=e.nextElementSiblings;
						}else{
							e=e.nextSiblings;
							for(e=e.nextSiblings;e&&e.nodeType!=1;e=e.nextSiblings)
						}
						n--;
					}else{
						if(e.previousElemntSiblings){
							e=e.previousElemntSiblings;
						}else{
							e=e.previousElemntSiblings;
							for(e=e.previousElemntSiblings;e&&e.nodeType!=1;e=e.previousElemntSiblings)
						}
						n++;
					}
				}
				return e;
			}	
#### 6:DOM的增,删,改,操作
#####	1:创建
		1:createElement();//增加元素节点
		2:createTextNode();//增加文本节点
		3:createCommont()//创建注释节点
		4:createDcoumentFragment();//创建文档碎片节点
#####	2:插入
		1:appendChild();//节点,插入到最后一个子元素,如果是选择元素后调用此方法,则相当于剪切操作
		2:insertbefore(a,b)//父级节点调用,a插入到b元素的前面
#####	3:删除
		1:removeChild(ele);//父级调用,删除子元素
		2:remove();//自己删除自己
#####	4:替换
		2:repplaceChild(a,p);//第一标签替换第二个标签
#####	5:属性:
		1:innerHtml;//可以设别标签
		2"innerText;(ie浏览器)//不可以识别标签,textContent();(火狐浏览器)
		
		方法:
			setAttribute('a','b');//设置属性a属性名字,b属性值
			getAttribute('a');//根据属性的名字获取属性
#### 7:定时器
	1:setInterval(function(){
		console.log(123);//每隔200毫秒打印一次
	},200)	
	2:settimeout(function(){
	},200)//200毫秒后执行一次,只执行一次	
#### 8:查看滚动条的滚动距离
	1:window.pageXOffset/pageYOffset ie以及ie8以下不支持
	2:document.body/documentElement.scrollleft/scrollTop 兼容性比较混乱 两个方法不能同时兼容,取值相加是最好的办法
	function getScrollOffset(){
		if(window.pageXOffset){
			return {
				x:window.pageXOffset,
				y:window.pageYOffset
			}
		}else{
			return {
				return {
					x:document.body.scrollLeft+document.documentElement.scrollLeft,
					y:document.body.scrollTop+document.documentElement.scrollTo;
				}
			}
		}
		
	}
##### 9:查看视口的大小
	1:window.innerWidth/window.innerHeight(ie8以及以下浏览器不兼容)
	2:document.documentElement.clientWidth/clientHeight(标准模式下(标准文档声明DocType,DTD ),浏览器都兼容)
	3:document.body.clientWidth/clientHeight(怪异模式下生效,没有标准文档声明的)
	function getViewOffset(){
		if(window.innerWidth){
			return {
				w:window.innerWidth,
				h:window.innerHeight
			}
		}else{
			if(document.compatMode=='BackCompat'){
				return {
					w:document.body.clientWidth,
					h:document.body.clientHeight
				}
			}else{
				return {
					w:document.documentElement.clientWidth,
					h:document.documentElement.clientHeight
				}
			}
		}
	}
#### 10:查看元素的几何尺寸 document.documentElement.getBoundingClientRect() 
	1:返回值是一个对象,height和width在老版本的浏览器里面并未实现
	2:返回的结果并不是实时的,获取结果之前元素的大小和位置发生了变化,并不能获取到
	3:元素.offsetWidth,元素.offsetHeight
#### 11:查看元素的位置
	1:元素.offsetLeft,元素.offsetTop,对于无定父级的元素则返回相对文档的坐标,对于有定位的父级元素则返回相对于最近有定位的父级的元素的坐标
	2:元素.offsetParent;返回有最近定位的父级元素
#### 12:window上面的三个方法
    1:window.scroll(),window.scrollTo(),window.scrollby();三个方法都是x,y坐标传入方法,实现让滚动条滚动到当前位置
    	唯一不同的是window.scrollby()是在前一次的基础上累加的
#### 13:脚本话css(用js操作css)
	1:元素.style是元素所有应用的css的行内样式,没有兼容性问题,需要注意的是遇到复合的样式(background-color)需要用小驼峰命名命名方法(backgroundColor)
#### 14:window.getComputedStyle();
 	1://ie,ie8以下不兼容,只读属性,获取的都是计算后的值(rem,en,vh,vw等计算成px后的值),获取当前元素所展示的一切css的展示值(行内的,样式表的都有显示)(一个元素可能用到多个样式,包括默认值),区别于元素.style样式的默认值获取到的是空
 	2:div.currtentStyle();//ie8,ie8以下使用,获取的不是计算后的值,em.就是em,rem是rem
	function getStyle(ele,prop){
		if(window.getComputedStyle){
			return window.getComputedStyle(ele,null)[prop];//第二个参数,null,after;after时候是获取伪元素的样式表 
		}else{
			return ele.currentStyle[prop];
		}
	}
#### 15:left,right,top,bottom的默认是都是auto

#### 16:事件
#####	1:绑定事件
	function adEvent(ele,type,handle){
		if(ele.addListener){
			ele.addListener(type,handle,false);
		}else if(ele.attachEvent){
			ele.attachEvent('on'+type,handle,function(){
				handle.call(ele);
			})
		}else{
			ele['on'+type]=handle;
		}
	}
#####	2:解除事件
		1:onclick等事件
			ele.onclick=false/''/null;
		2:addListener
			ele.removeEventListener(type,fn,false)
		3:attachment
			ele.detachEvent('on'+type,fn);//ie
		4:经过匿名函数绑定的事件,是无法清除的
#### 18:事件处理模型,事件冒泡和事件捕获
	ele.addListener(type,handle,false);//第三个参数false是事件冒泡,true的事件事件捕获
	1:事件冒泡:结构上存在嵌套关系的元素,会存在事件冒泡的功能,即同一事件,自子元素冒泡向父元素
	2:事件捕获:结构上存在嵌套关系的元素,会存在事件捕获的功能,即同一事件,自父元素捕获向子元素
	3:触发顺序,先捕获后冒泡
	4:一个事件类型,冒泡和捕获不能同时存在,目前只有google浏览器实现了事件的捕获功能
	5:focus,blur,change,submit,reser,select等事件没有冒泡捕获功能,不是所有的事件都有冒泡捕获功能
	6:jquery中的事件委托,就是利用了js的冒泡功能,和事件原对象
	7:事件对象,function (e)//e就是事件对象
		阻止冒泡
		e.stopPropagation();
		e.cancelBubble=true;
	8:阻止默认事件
		1:return false;
		2:e.preventDefault();
		3:e.returnValve=false;//ie9以下
#### 19:事件源对象,e.target或e.srcElement
	 ele.onclick=function(e){
	 	var e=e||window.event;
	 	var target=e.target||e.srcElement;
	 }	
#### 20:
	ie才有效果
	ele.setCapture();//捕获页面上面的所有事件,添加到自己身上
	ele.releaseCapture();//取消捕获页面上的所有事件
	解决类似拖拽的效果移动过快导致拖拽的元素丢失的问题
#### 21:事件
	鼠标事件:
		1:事触发的顺序 mousedown,mouseup,click
		2:只有mosedown和mouseup可以区分左右键,其它的事件都不能区分
	移动端没有mosedown和mousemovemmouseup的事件对应的是touchstart,touchmove,touchend
	键盘事件:
		keydown,keypress,keyup键盘的执行顺序
		keydown和keypress的区别
		keydown可以检测到所有的键盘按键,除了功能fn键,keypress只能检测到字符按键,上下左右,shif等无法检测到
		keydown检测字符类按键,并且想要区分大小写的话,是不准确的
	表单事件:
		onInput:文本框内容发生改变,就触发
		change:鼠标进去,鼠标移出,内容比较,内容变化了触发
		focus:文本框获得焦点事件
		blur:文本框失去焦点事件
	窗体类事件
		scroll:滚动条滚动的时候触发事件
		onload:页面加载完毕事件
#### 23:json,异步加载,时间线
#####	1:json数据传输格式,json是以对象为模板,但是实际上有区别去对象
		JSON.stringify();//json数据转化为json格式字符串
		JSON.parse(str);//json格式字符串转换json类型的数据
#####	2:浏览器解析html的过程
		domTree:深度优先原则,html,head,body
		1:浏览器会先解析html里面的内容(head,body)
		2:只有解析完了head里面标签才会去解析body的标签,先深度后广度(这应该就是js写在头部会导致问题的原因)
			domTree解析完成以后,就先等待
		cssTree:浏览器会像生成domTree一样,生成cssTree
		3:等cssTree生成完了,cssTree和domTree一起形成了renderTree
		4:浏览器渲染引擎会按照renderTree来绘制页面
		 dom操作优化
		 重排:dom增删改查询,宽高变化,尺寸变化,内容改变,窗口改变,位置变化,clientWidth/clinetHeight,scrollWidth/scrollHeight,display:none,block,offsetLeft,offsetWidth,都会导致重排(reflow),会重新渲染renderTree
		 重绘:基于css的颜色进行构建的话,重绘的是一部分,性能相对来说比较高,效率浪费的比较少
#####	3:异步加载js 三种方法,不会阻断html和css的下载
######		1:defer,只有ie能用,可以在代码内部使用,可以把js写在标签里面,文档全部解析完加载完执行,异步执行,不影响其他的加载
		<script type="text/javascript" src="demo.js" defer="defer">
			var demo=0;
		</scrpt>
######		2:aysnc,ie9以及以上可以用,主流浏览器都兼容,只能加载外部脚本,不能把js写在标签里面,加载完毕立即立即执行,异步执行,不影响其他的加载
		<script type="text/javascript" src="demo.js" aysnc="aysnc"></scrpt>
######		3:按需加载,异步加载(推荐)
		var script=document.createElement('script');
		script.type="text/javascript";
		script.src="../demo/demo.js";
		script.onload=function(){//除了ie其他浏览器支持
			test();//demo.js里面的方法
		}
		script.onreadystatechange=function(){
			if(script.readeyState=="complete"||script.readyState=="loaded"){
				test();//demo.js里面的 方法
			}
		}
		document.body.appendChild('script');//添加到页面里面的时候才会执行js
		 
		
		封装
		var tools={
			test:function(){
			
			},
			demo:function(){
			}
		}
		function loadScript(src,callback){
			var script=document.createElement('script');
				script.type="text/javascript";
				if(script.readyState){
					script.onreadystatechange=function(){
						if(script.readyState=="complete"||script.readyState=="loaded"){
							tools[callback]();//demo.js里面的 方法
						}
					}
				}else{
					script.onload=function(){//除了ie其他浏览器支持
						tools[callback]();//demo.js里面的方法
					}
				}
				script.src=src;
				document.body.appendChild('script');//添加到页面里面的时候才会执行js
				 
		}
		loadScript(src,'test');
######	4:JS加载时间线
		1:创建Document对象,开始解析web页面.解析html元素和他们的文本内容后添加Element对象;这阶段
			document.readyState="loading"
		2:遇到link外部的css创建线程加载,并继续解析文档
		3:遇到script外部js,并且没有设置async,defer没浏览器加载,并阻塞,等待js加载完成并执行该
			脚本,然后继续解析文档
		4:遇到script外部的js并且设置有async,defer的浏览器创建线程加载,并继续解析我文档;对于
			async的属性脚本,脚本完成后立即执行(异步加载禁止使用doucment.write(),会清除所有的文档,保留他自己输出的内容)
		5:遇到img,先正常解析dom结构,然后异步加载src,并继续解析文档
		6:当文档解析 完成,document.readyState="interactive";//$(document).ready(function(){})在此时执行,js放在body下面引入,效果一样
		7:文档及解析完成后,所有设置的defer的脚本会按照顺序执行,(注意与async的不同,但同样禁止使用document.write())
		8:document对象触发DOMContentLoaded事件,这样标志着程序的执行从同步的脚本执行阶段,转为事件你驱动阶段
		9:当所的async脚本加载完成并执行后,img等加载完成后,document.readyState="complete",window对象触发load事件
			window.onload=functon(){}//在此时执行
		10:从此,以异步相应方式处理用户输入,网络事件等.
			
#### 24:正则表达式
	//RegExp创建的两种方法;
#####	1:字面量
		var reg="/abc/";reg="/abc/i":忽略大小写,reg="/abc/g":全局匹配,reg="/abc/m":多行匹配
		reg.test(str);
#####	2:对象创建
		var reg=/abc/;
		var reg=new RegExp(reg);//RegExp('abc','i');RegExp('abc','g');RegExp('abc','m');
			reg.test(reg);
			如果没有new直接reg1=RegExp(reg);只是返回了reg的一个引用 ,不是正比到时的对象
			reg.exec();
#####	3:字符串上的方法
		var reg=/abc/;
		str.match(reg);
#####	4:元字符
	  	1:^在表达式里面是非的意思,在开头则是以什么开头的意思
	  	2:\w [0-9A-z_]
	  	3:\b单词边界 
	  	4:.除了\r和\n以外的所有字符
#####	5:unicode编码,16进制
	\u010000-\u01ffff;第一层,第一层已经可以匹配一切汉子
	\u020000-\u02ffff;第二层
	\u100000-\u10ffff;第三层
#####	6:量词
	
	1:+一次到多次
	2:*零次到多次
#####	重点:reg.exec();//返回数据,匹配到的值,匹配到的位置;
		var reg="/ab/g";
		var str="abababab";
		console.log(reg.exec(str));//结果[ab,index:0],如果有子表达式则会返回子表达式匹配到的值
		console.log(reg.exec(str));//结果[ab,index:1]
		1:执行一次则匹配一次,
		2:reg.lastindex,游标,匹配位置的开始,可以手动设置,如果不是全局匹配的话,lastindex不会变化
		3:子表达式
			reg="/(a)\1/";括号里面的是子表达式\1是表达式的引用
		4:字符串表达式
		  test()//返回true,false
		  match()//全局下,返回匹配到的值,非全局返回匹配到的值,匹配到字符串的index,子表达式,子表达式的位置
		  search()//匹配到值返回大于0的值,未匹配到的返回-1
		  split()//按照匹配到的值分割字符串,返回分割后的字符串数组
		  replace()//匹配到的值替换为另一个字符串,如果里面放的不是正则表达式,只能匹配到一个
		  重点str.replace();
			var  reg=/(\w)\1(\w)\2/g;
			var str="aabb";
			str.replace(reg,"$2$2$1$1");//反向引用子表达式的值,如果要替换$字符串的话需要使用两个$,第一$用来转义
			str.replace(reg,function($,$1,$2){//$匹配到的值,$1第一个子表达式的值,$2第二个子表达式的值
				return $2+$2+$1+$1;
			})
			str.toUpperCase()转换为大写
			str.toLowerCase()转换为小写
		5:正向断言
		var str="abaaaa";
		var str=/a(?=b)/g;
		6:?可以打破贪婪模式
		7:例子
			1:字符串去重
			var str="aaaaaabbbbbbbvvvvcccc";
			var  reg=/(\w)\1*/g;
			str.replace(reg,$1);
			2:可续计数法
			var str="1000000000000000000";
			var  reg=/(?=(\B)(\d{3})+$)/g;
			console.log(str.replace(reg,'.'));
			
