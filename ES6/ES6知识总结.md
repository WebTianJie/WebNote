### 一:介绍
	1:低版本浏览器不支持
		可以使用babel来编译后转换为es5
	2:让javascript语言可以用于编写复杂的大型应用程序,成为企业级的开发语言
	3:ES6引入新特性,更具规范性,易读性,方便操作,简化了大型项目的复杂程度,降低了出错概率,
	提高了及开发效率
### 二:ES6转换工具Babel
	1:www.babeljs.cn在线转换js代码
	2:安装
	  cnpm init -y 初始化项目
	  cnpm install @babel/core 安装babel
	  cnpm install @babel/preset-env 安装工具库
	  cnpm install @babel/cli  提供babel的命令行的库

### 三:变量声明
####	1:let
		let a=10;
			1:不会导致变量声明提升,
			2不能重复变量声明,
			3:不会挂载到windows上面
			4:变量的声明作用域控制更精准
		let 和{}可形成块级作用域
		{
			let a=10;
		}
		console.log(a);//undefined
		(临时死区)
		let a=10;
		{
			console.log(a);//报错,a is not defined
			let a=20;
		}
		
		if(true){
		  let a=10;
		  console.log(a);//10
		}
		console.log(a);//报错a is not defined
		5:解决闭包问题
		for(let i=0;i<10;i++){//解决产生的闭包问题
			arr[i]=functon(){
			 console.log(i);
			}
		}
####	2:const(优先使用) 除了和let一样的优势外,const主要是用来声明产常量的
		常量:
		1:声明的时候必须复赋值,而且不允许被修改
		2:存储常量的空间的值不能被修改
		 const PI={};
		 PI.name=20;//可以修改
		 PI.name=30;//可以修改
		 PI={};//不可以被修改,
		 3:函数
		 console.log(a);//结果是undefied
		 {
		 	function a(){}//会转换成 var a=function (){}
		 }
		 
		 
		 functon test(x,y){
		 	var x=10;//不报错
		 	let x=10;//报错
		 }
### 四:...运算符 展开或者收集运算符
####	1:写场景,收集信息->[]
	
	function sum(...arg){
	
		console.log(arg);[1,2,3]是一个数组类型的值,arguments是一个类数组
	}
	sum(1,2,3);
####	2:读场景
	 function test(a,b,...arg){
		console.log(a,b,arg);1,2,['a','b','d']a,b分给对应的参数以后,剩下的参数都以数组的形式放在数组里面	 
	 }
	 test(1,2,'a','b','d')
	 
	 
	 function avearge(...arg) {
		arg.sort(function(a, b) {
			return a - b;
		})
		arg.pop(); //去掉最后一个.也就是最大值
		arg.shift(); //去掉最后一个,也就是最小值
		//return com.apply(this, arg); //之前用法
		return com(...arg);
	}

	function com(...arg) {
		let sum = 0;
		arg.forEach(function(ele) {
			sum += ele;
		})

		return sum / arg.length;
	}
	
	avearge(1,2,3);
	
####	3:数组拼接
	
	let arr1=[1,2,3,4];
	let arr2=[6,7,8];
	let newArr=[...arr1,...arr2]
### 五:ES7 中的...运算符
####	1:实现对象的拼接(浅层克隆 )
		let com={
			name:'duyi',
			age:'18'
		}
		
		let teachP={
			leader:{
				name:'cg',
				age:20
			},
			personNum:125
		}
		
		let obj={
			...com,
			...teachP
		}
####	2:实现对象的拼接(深层克隆 )
		let com={
			name:'duyi',
			age:'18'
		}
		
		let leader={
			name:'cg',
			age:20
		}
		
		let teachP={
			leader:{
				...leader
			},
			personNum:125
		}
		
		let obj={
			...com,
			...teachP,
			leader:{
				...leader
			}
		}

####	3:stringift()实现深克隆
		let obj=JSON.parse(json.stringify(teachP));//此种方法实现深克隆当,遇到有属性是方法的时候,该属性会被删除掉
####	4:Object.assign({},com,teachP);实现深克隆,类似jquery的extend
### 六:destructuring,解构化赋值(不是结构)
####	 1:解构对象
		let obj={
		  name:'cst',
		  age:18
		}
		let name,age;
		({name,ge}=obj);
		简写版
		let {name, age}=obj;
		console.log(name,age);//cst,18
		高级版
		let {name:oName,age:oAge}=obj;
		智尊版本
		let {name:oName, age:oAge,sex='male'}=obj;//带有默认值的写法
####	2:解构数组
		let {0:x,1:y,2:z}=[1,2,3,4]
		let {length}=[1,2,3]
		arr=[1,2,3,{name:'sss'}]
		let arr=[,,,{name}]=arr
### 七:箭头函数 指向性更强 可读性更好 简化代码 提升开发效率,
####	1:箭头函数的形参是不能相同的
	function sum(a,b){
	  return a+b;
	}
	var sum=function (a,b){
		return a+b;
	}
####	2:代替了function关键字,和()换了位置,箭头函数必须存在一个变量里面
	 let sum=(a,b)=>{//
	 
	 }
####	 3:当后面是对象的话,需要用小括号括起来
	 简写
	 let sum=(a,b)=>a+b;
	 let sum=(a,b)=>[a,b];
	 let sum=(a,b)=>({a:a,b:b});//
	用法
	//渐变成es6
	function sum() {
		return function(x) {
			return function(y) {
				return (z)=> x + y + z;
			}
		}
	}
	console.log(sum()(1)(2)(3));
	function sum1() {
		return function(x) {
			return (y)=>(z)=> x + y + z;
		}
	}
	console.log(sum1()(1)(2)(3));
	function sum2() {
		return (x)=>(y)=>(z)=> x + y + z
	}
	console.log(sum2()(1)(2)(3));
	
	let sum3=()=>(x)=>(y)=>(z)=> x + y + z;
	console.log(sum3()(1)(2)(3));
	
	let sum4=x=>y=>z=> x + y + z;//当每个函数只有一个参数的时候,小括号可以省略
	console.log(sum4(1)(2)(3));
####	4:箭头函数是不可以new的
	  new sum();//直接报错,sum is  not constructor
####	5:内部的arguments this 是由定义时外围的最接近一层的非箭头函数的arguments和this来决定其值的
#####		1:argumnets
		let sum=(a,b)=>{
			console.log(arguments,a,b);//arguments没有定义	
		}
		function outer(){
			let sum=(a,b)=>{
				console.log(arguments,a,b);//arguments:1,2,3	
			}
		}
		outer(1,2,3);
#####		2:this
		  1:箭头函数外围没有非箭头函数的时候,this是window
		  
		  
		  let obj={
		  	a:'innerObj',
		  	fn:function(){
		  		let sum=()=>{
		  			console.log(this.a);此处的this是obj
		  		}
		  	}	
		  }
		  
		  let outerSum=obj.fn();
		  
		  outerSum();//此时的this还是obj,arguments this 是由"定义时"外围的最接近一层的非箭头函数的arguments和this来决定
####	6:数组的特殊处理
		let arr=[10,20,30,40,50,60]
		arr.map(ele=>ele*ele);
### 八:属性定义 Object.defineProperty();

		var obj={
			
		}
		Object.defineProperty(obj,'name',{
			value:'cst',
			writable:false,//可写
			congigutable:true,//可配置,增删改
			eumerable:true,//可枚举
			get:function(){不能和value,writable同时使用 ,监控属性变化
			},
			set:function(){//不能和value,writable同时使用,监控属性变化
			
			}
		});
### 九:数据劫持
		var oDiv=document.getElementById("show");
		var oInput=document.getElementById("demo")
		var  oData={
			obj:{
				value:"duyi",
				name:'呵呵'
			}
		}
		oInput.oninput=function(){
			oData.obj.value=this.value;
		}
		function upDate(){
			oDiv.innerText=oData.obj.value;
		}
		upDate();
		function Oberver(data){
			if(!data||typeof(data)!="object"){
				return data;
			}
			Object.keys(data).forEach(function(key){
				defineRective(data,key,data[key])
			})
			
		}
		function defineRective(data,key,val){
			Oberver(val);
			Object.defineProperty(data,key,{//监控属性的变化
				get:function(){
					return val;
				},
				set:function(newvalue){
					if(newvalue==val){
						return;
					}
					val=newvalue;
					upDate();
				}
			})
			
		}
		Oberver(oData);此中处理思路,在新增加属性的时候,可能会出现问题,放弃
####		//vue3.0以前版本使用处理数组方法,放弃
		let arr=[];
		let {push}=Array.prototype;
		function arrUpDate(){
			console.log('更新了');
		}
		Object.defineProperty(Array.prototype,'push',{
			value:(function(arg){
				return (...arg)=>{
					push.apply(arr,arg);
					arrUpDate();
				}
			}())
		})
		
 		现在使用 Proxy Reflect 来处理类似问题
### 十:Proxy Reflect(浏览器兼容性问题不好)
	
	var  oData={
			obj:{
				value:"duyi",
				name:'呵呵'
			},
			sex:'male'
		}
		let newData=new Proxy(oData,{
			set:function(target,key,value,receiver){
				Reflect.set(target,key,value);
				upDate();
			},
			get:function(target,key,receiver){//target,数据,key属性,reserver:代理属性
				return  Reflect.get(target,key);
			},
			has:function(target,key){//in 操作符 触发
				return key.indexOf('_')!=-1?false:key in oData;
			},
			deleteProperty:function(){
				console.log('删除了元素');
			}
		});
		//读写控制
		function upDate(){
			console.log('更新啦');
		}
### 十一:Class 构造函数
	构造对象,私有属性,共有属性,私有属性继承,共有属性继承
####	1:es5
	```
	//1:之前的封装类
		//ES5
		Plane.prototype.fly=function(){
			console.log('fly');
		}
		function Plane(name){
			this.name=name;
			this.flood=100;
		}
		var oPlane1=new Plane();
		var oPlane2=new Plane();
		var temp=function(){}
		temp.prototype=Plane.prototype;
		AttackPlane.prototype=new temp();
		AttackPlane.prototype.__proto__=Plan.prototype;//慎用
		AttackPlane.prototype=Object.create(Plane.prototype,function(){
			constructor:AttackPlane;//修改构造函数
		})
		Object.setPrototypeOf(AttackPlane.prototype,Plane.prototype);//ES6
		AttackPlane.prototype.dan=function(){//继承了多余的私有属性
			console.log('biubiubiubiubniu');
		}
		function AttackPlane(name){
			Plane.call(this,name);
		}
		```
		
#####		//除了圣杯模式外,其它三种继承模式
		```
		AttackPlane.prototype.__proto__=Plan.prototype;//慎用
		AttackPlane.prototype=Object.create(Plane.prototype,function(){
			constructor:AttackPlane;//修改构造函数
		})
		Object.setPrototypeOf(AttackPlane.prototype,Plane.prototype);//ES6
		```
####	2:ES6:class,contructor,static,extends,super
	
		//class实现继承 ,如果父类有返回值,而且返回值还是一个对象的话,子类继承的就是这个返回的对象
		//私有属性,共有属性(原型属性),静态属性
		class Plane {
			//静态属性,es6中不能直接设置静态的普通属性,是只能设置静态方法属性
			//ES7可以设置静态的普通的属性
			static  alive (){
				return true;
			}
			constructor (name){
				this.name=name||'普通飞机';//私有属性
				this.blood=100;
			}
			fly(){//共有方法属性,不能以这种方法,声明普通属性
				console.log('fly');
			}
		}
		var  oP=new Plane();
		class AttackPlane extends Plane{
			constructor(name){
				super(name);
				this.logo="duyi";
			}
			dan(){
				console.log('biubiubiubiubiu');
			}
		}
		var oP1=new AttackPlane('攻击机');
		console.log(AttackPlane.alive());//静态属性,的访问方式,跟普通的属性区别,通过类名.静态类名直接访问
		//1:只能通过new 来访问,不能通过Plane()来访问
		//2:class Plane.prototype 不能被枚举(遍历访问)
		//3:静态属性放到了类Plane上面,而不是原型上面,访问的时候通过类名.静态类名来访问
### 十二:模拟class功能
		//1>must be new
		//2>原型不能被枚举
		//3>静态属性放在类上面
		function _classCheck(_this, constructor) {
			if(!(_this instanceof constructor)) {
				throw "Uncagught TypeError:Class constructor Plane cannot be invoked widthout new";
			}
		}

		function Plane() {
			_classCheck(this, Plane)
		}
		//处理共有属性和静态属性
		function _defineProperties(target, props) {
			props.forEach(function(ele) {
				Object.defineProperty(target, ele.key, {
					value: ele.value,
					writable: true,
					configurable: true
				})
			})

		}

		function _createClass(_contructor, _prototypeProperties, _staticProperties) {
			if(_prototypeProperties) {

				_defineProperties(_contructor.prototype, _prototypeProperties)
			}
			if(_staticProperties) {
				_defineProperties(_contructor, _staticProperties)
			}
		}
		var Plane = (function() {
			function Plane(name) {
				//判断是不是new 的方式来执行的
				_classCheck(this, Plane);
				this.name = name || '普通飞机';
				this.blood = 100;
			}
			_createClass(Plane, [{
				key: 'fly',
				value: function() {
					console.log('fly');
				}
			}], [{
				key: 'alive',
				value: function() {
					return true;
				}
			}])

			return Plane;
		}())

		var opt = new Plane('我是一道纸飞机');

		function _inherit(sub, sup) {
			Object.setPrototypeOf(sub.prototype, sup.prototype)
		}
		var AttachPlane = (function(Plane) {
			_inherit(AttachPlane, Plane)

			function AttachPlane() {
				_classCheck(this, Plane);
				this.logo = "diyi";
				Plane.call(this, name);
			}
			_createClass(AttachPlane, [{
				key: 'dan',
				value: function() {
					console.log('biubiubiubibuibubiubiubiubiubiubibuibuibuibuibuibui');
				}
			}], [{
				key: 'alive',
				value: function() {
					return true;
				}
			}])
			return AttachPlane;
		}(Plane))

		var np = new AttachPlane();
### 十三:ES7 Class提案属性
####	1:属性声明
	class Search {
			//es6
			static num() {
				return 6;
			}
			//ES7
			static num=10;
			constructor() {
				this.keuvalue = '';
			}
			getCount() {
				console.log('发送请求');
			}
		}
		
		
####	2:属性操作 demo input框
#####	@skin
	class Search {
		constructor() {
				this.keyvalue = '';
		}
		@myReadOnly
		url="url-a"
		@dealData
		getContent(a,b) {
			console.log('向'+this.url+'发送请求,数据:'+this.keyvalue);
			return 10;
		}
	}
#####	//修改私有属性
	function myReadOnly(proto,key,descriptor){
		//proto原型,key属性名字,desscritor属性修改器,object.defineProperties()
		descriptor.writable=false;
	//	descriptor.initializer();//属性值,url-a
		descriptor.initializer=function(){
			return 6;//url的值被写为6
		}
	}
#####	//修改原型上的属性
	function dealData(proto,key,descriptor){
		//proto原型,key属性名字,desscritor属性修改器,object.defineProperties()
		var  oldValue=descriptor.value;
		descriptor.value=function(){
			var  urlB='urlB';
			console.log('向'+urlB+'发送请求,数据:'+this.keyvalue);
			return oldValue.apply(this,arguments);
		}
	}
####	//删属性
	function dealData(ms){
		//proto原型,key属性名字,desscritor属性修改器,object.defineProperties()
	
		return function(proto,key,descriptor){
			var  oldValue=descriptor.value;
			descriptor.value=function(){
				var  urlB='urlB';
				console.log('向'+urlB+'发送请求,数据:'+this.keyvalue);
				return oldValue.apply(this,arguments);
			}
		}
	}
	//修改类
	function skin(target){
		target['属性名']='属性值';
	}
	var os=new Search();
	oInput.oninput=function(){
		os.keyvalue=this.value; 
	}
	oBtn.onclick=function(){
		os.getContent(1,2);
	}
### 十四:Set,Map新的数据存储方式
	Set
####	1:Set是es6提供给给我们的构造函数,能构造一种新的数据存储的结构
####	2:是有属性值,没有属性名,成员值唯一(不重复)
####	3:可以转成数组,其本身具备去重,交集,并集,差集等作用
	//值必须具备迭代接口,[],字符串,arguments,NodeList,一个值的原型具有Symbol Symbol.iterrator,都是具有迭代接口的
		let oS=new Set([1,2,3,4,[1,2],true,{name:'li'}]);
		//1:增加
		oS.add(1);
		oS.add([1,2]);
		oS.add(true);
		//2:删除
		oS.delete(1);
		//3:清空
		oS.clear();//清空所有的值
		//4:判断是否存在某个值
		oS.has(1);
		//5:遍历
		oS.forEach(function(value){
			console.log(value);
		})
		for(let prop of os){
			console.log(prop);
		}
		//6:数组和set转换
		let arr=[1,3,4,5];
		let oS=new Set(arr);//转换为set对象
		Array.from(oS);//转化为数组
		var arr1=[...oS];//转化为数组
####		//应用场景
		//1:去重
		let set=new Set([1,2,3,4,55,5,5,5]);
		//2:并集
		let arr1=[1,2,3,2,3];
		let arr2=[3,2,4,4,5];
		let os=new Set([...arr1,...arr2]);
		//3:交集
		let arr1=[1,2,3,2,3];
		let arr2=[3,2,4,4,5];
		let os1=new Set(arr1);
		let os2=new Set(arr2);
		[...os1].filter(ele=>os2.has(ele))
		//4:差集
		let arr1=[1,2,3,2,3];
		let arr2=[3,2,4,4,5];
		let os1=new Set(arr1);
		let os2=new Set(arr2);
		let newArr1=[...os1].filter(ele=>!os2.has(ele))
		let newArr2=[...os2].filter(ele=> !os1.has(ele))
		let arr=[...newArr1,...newArr2];
###	Map	
		1:Set是es6提供给给我们的构造函数,能构造一种新的数据存储的结构,本质上是键值对的集合
		2:key对应的value,key和value的唯一,任何值都可以当属性,
		3:可以让对象当属性,去重等
		4:原理实现:连接链表,hash的算法,桶
		//初始化.每一个元素都必须是数组
		let mp=new Map([['name','cst'],['age','12'],['sex','男'],[{},'我是一个对象哦']]);
		//增加
		mp.set('name','北冥');
		mp.set({},'我是第二对象');
		//查询
		mp.get('name');
		//mp.get({})//是无法取到值的,{}是新创建的对象
		var obj={};
		mp.set(obj,'我是obj的对象');
		mp.get(obj);
		//删除
		mp.delete(obj);//删除
		mp.clear();//清楚
		mp.size();//长度
		//遍历
		mp.keys();//所有的key值
		mp.entries();//属性和属性值遍历出来 
		mp.forEach((index,ele,self)=>{
			console.log(index,ele,self);
		})
		for(let prop of mp){
			console.log(prop);
		}
####		//map的原理
		//1:链表
		let node1={
			key:'name',
			value:'1',
			next:node2
		}
		let node2={
			key:'name2',
			value:'2',
			next:node3
		}
		let node3={
			key:'name3',
			value:'3',
			next:null
		}
		//hash算法,特定范围的值
####		模拟实现:demo=============================
			function myMap(){
				this.bucketLength=8;
				this.init();
			}
			myMap.prototype.init=function(){
				//初始化桶
				this.bucket=new Array(this.bucketLength);
				for(var  i=0;i<this.bucketLength;i++){
					this.bucket[i]={
						type:'bucket_'+i,
						next:null
					}
				}
			}
			//1.[0,8);计算成特定范围内的值
			//2.重复算是固定值,
			myMap.prototype.makeHash=function(key){
				let hash=0;
				if(typeof key!=='string'){
					if(typeof key=='number'){
						//处理NaN
						hash=Object.is(key,NaN)?0:key;
					}else if(typeof key=='object'){
						hash=1;
					}else if(typeof key=="boolean"){
						hash=Number(key);
					}else{
						//function,undefined
						hash=2;
					}
				}else{
					//string
					//a,ab,afasdagasga,
					//长度值大于3,去前三个字符,ascii累加
					for(let i=0;i<3;i++){
						hash+=key[i]?key[i].charCodeAt(0):0;
					}
					return hash%8;
				}
			}
			myMap.prototype.set=function(key,value){
				let hash=this.makeHash(key);
				let oTemp=this.bucket[hash];
				while(oTemp.next){
					if(oTemp.next.key==key){
						oTemp.next.value=value;
						return;
					}else{
						oTemp=oTemp.next;
					}
				}
				oTemp.next={
					key:key,
					value:value,
					next:null
				}
				
			}
			myMap.prototype.get=function(key){
				var hash=this.makeHash(key);
				let oTemp=this.bucket[hash];
				while(oTemp){
					if(oTemp.key==key){
						return oTemp.value;
					}else{
						oTemp=oTemp.next;
					}
				}
				return undefined;
			}
			myMap.prototype.delete=function(key){
				var hash=this.makeHash(key);
				let oTemp=this.bucket[hash];
				while(oTemp.next){
					if(oTemp.key==key){
						oTemp.next=oTemp.next.next;
						return true;
					}else{
						oTemp=oTemp.next;
					}
				}
			}
			myMap.prototype.has=function(key){
				var hash=this.makeHash(key);
				let oTemp=this.bucket[hash];
				while(oTemp.next){
					if(oTemp.next&&oTemp.next.key==key){
						return true;
					}else{
						oTemp=oTemp.next;
					}
				}
				return false;
			}
			myMap.prototype.clear=function(key){
				this.init();
			}
		var  mp=new myMap();
		mp.set('name','sct');
	
### 1:十五:Promise异步编程 
####	1:异步编程
		无论是在浏览器环境中还是在node的环境中,我们都会使用Javascript完成各种的异步操作,如在浏览器的
		环境中的定时器,事件,ajax等或是node环境中的文件读取,事件等.伴随着异步变成的就是回调机制
		异步编程避免不了回调
		异步编程的问题:
		产生回调地狱,难于维护和扩展
		try catch只能捕获同步代码中出现的异常
		同步并发的异步存在一定的问题;
####	2:解决方案
		ES6 Psomise可以解决回调地狱,以及同步并发的异步问题(异步操作的异常捕获有其他的方式解决)
		但依旧会有明显的回调痕迹,之后学习的Es6de generator,es7的async,await争取到异步的代码
		看起来和同步的代码一样;写起来更优雅一些.
####	3:异步问题
		let fs=require('fs');
		//异步回调地狱
		fs.readFile('./data/name.txt','utf-8',(err,data)=>{
			if(data){
				fs.readFile(data,'utf-8',(err,data)=>{
					if(data){
						fs.readFile(data,'utf-8',(err,data)=>{
							console.log(data);
						})
					}
				})
			}
		});
		//无法捕获异常
		try {
			fs.readFile('./data/name.txt','utf-8',(err,data)=>{
				if(data){
					console.log(data):
					try {
						throw new Error('dadadadad');
						console.log(8);
					}
					catch (e){
						
					}
				}
			});
		}
		catch(e){
			console.log(e);
			throw new Error('aaa');
			console.log(data);
		}
		
####		//并发异步(存在问题)操作,最后我们想得到所有结果
		
		let ostudents={
			
		}
		function show(data){
			console.log(data);
		}
		function show1(data){
			console.log(data);
		}
		fs.readFile('./data/name.txt','utf-8',(err,data)=>{
			if (data) ostudents.name=data;
			Store.fire(ostudents);
		})
		fs.readFile('./data/number.txt','utf-8',(err,data)=>{
			if (data) ostudents.number=data;
			Store.fire(ostudents);
		})
		fs.readFile('./data/score.txt','utf-8',(err,data)=>{
			if (data) ostudents.score=data;
			Store.fire(ostudents);
		})
		
		//Psomise原理
		
		let Store={
			list:[],
			times:3,
			subscribe(func){
				this.list.push(func);
			},
			fire(...arg){
				--this.times==0&&this.list.forEach((ele)=>{
					ele.apply(null,arg)
				})
			}
		}
		Store.subscribe(show);
		Store.subscribe(show1);
### 十六:Promise的使用
####		1:例子
			let op=new Promise((resolve,reject)=>{
			//异步操作
				setTimeout(()=>{
					Math.random()*100>60?resolve('ok'):reject('no');
				},1000)
			})
			//then
			//异步执行
			//setTimeOut
			//宏任务:ajax 事件定义,微任务有优先执行权,promise是微任务的机制
			op.then((val)=>{
				console.log(val);
			},(reason)=>{
				console.log(reason);
			})
			
			
			
			let op=new Promise((resolve,reject)=>{
				//异步操作
				setTimeout(()=>{
					Math.random()*100>60?resolve('ok'):reject('no');
				},1000)
			})
			//链式操作
			//链式操作时候上一个不抛出错误的话,那下一个执行成功的函数,前面then的返回值会作为下一个注册函数执行的参数
			//如果上一个返回值是Promise对象,下一个then执行的函数,取决于上一个Promise执行的函数
			//如果上一个then抛出了一个错误,那下一个then执行的是失败的回调函数
			op.then((val)=>{
				console.log(val);
			//	return 20;
				return new Promise((resolve,reject)=>{
					resolve('newPromise ok');
				})
				
			},(reason)=>{
				console.log(reason);
				return 30;
			}).then((val)=>{
				console.log("then02:"+val);
			},(reason)=>{
				console.log("then02:"reason);
			})	
####		2:初步解决回调地狱的问题
			let fs=require('fs');
			function readFile(path){
				return new Promise((res,rej)=>{
					fs.readFile(path,'utf-8',(err,data)=>{
						if (data){
							res(data)
						}
					})
				})
			}
			readFile('./data/name.txt')
			.then((data)=>{
				return readFile(data);	
			},(data)=>{
				console.log(data);
			})
			.then((data)=>{
				return readFile(data);		
			},(data)=>{
			})
			.then((data)=>{
				console.log(data);
			},()=>{
				
			})
####		3:chatch()
			//1:catch异常捕获
			let op =new Promise((res,rej)=>{
			//	throw new Error('duyi');
				res();
			})
			//链式调用时候,如果有一个空then(没有回调函数),相当于没有then,直接忽略
			//在then捕获异常的时候,后一层then可以捕获的前一个then的抛出的异常,
			//如果跨越了很多个then函数,则需要当前then之前的所有的then没有捕获异常的函数才可以捕获到
			//否则无法捕获到异常
			//catch也一样
			//catch可以再进行then,但是参数就无法传递过去,then里面的成功回调函数可以执行
			//finally()结束当前的then链
			op.then((data)=>{
				throw new  Error('duyi3');
			},(data)=>{
				console.log(data);
			})
			.then(()=>{
				
			})
			.then(()=>{
				
			})
			.then((data)=>{
			}).catch((e)=>{
				console.log(e);
			}).then(()=>{
				
			},()=>{
				
			}).finally(()=>{
				consoe.log('over');
			});
####		4:Promise.all和Promise.race()
			let fs=require('fs');
			function readFile(path){
				return new Promise((res,rej)=>{
					fs.readFile(path,'utf-8',(err,data)=>{
						if (data){
							res(data)
						}
					})
				})
			}
			//所有成功后返回结果,Promise.all()的返回结果还是Pomise对象
			Promise.all([readFile('./data/name.txt'),readFile('./data/number.txt'),readFile('./data/score.txt')]).then((val)=>{
				console.log(val);//[ './data/number.txt', './data/score.txt', '99分' ]
			})
			//有一个成功后就返回结果,不管是成功还是失败
			Promise.race([readFile('./data/name.txt'),readFile('./data/number.txt'),readFile('./data/score.txt')]).then((val)=>{
				console.log(val);//谁先成功就用谁的返回值
})
### 十七:lterator
####	1:迭代模式
		提供一种方法可以顺序获获得聚合对象中的各个元素,是一种最简单也最常见的设计模式,它可以让
		用户透过特定的接口,巡访集合中的每一个元素不用了解底层的实现.
	简介:
		按照迭代模式的思想而实现,可分为内部的迭代器和外部的迭代器
			内部迭代器:
				本身是函数,该函数的内部的定义好的迭代规则,完全接手整个迭代过程	
				外部只需调用一次初始调用.
				Array.prototype.forEach,JQuery.each 内部迭代器
			外部迭代器:
				本身是函数,执行返回迭代对象,迭代下一个元素必须显示调用.调用复杂度增加,但是灵活想强
				function outerLterator(){}外部迭代器
####	2:Symbol 第七种数据类型 Number,Bollean,String,null,undefined,Object
		
		特点:唯一性
					唯一性,可作为对象的属性,有静态属性Symbol.iterator
		演示:代码
			let os=Symbol('abc');
			let os1=Symbol('abc');//os==os1 返回值为false,唯一性
		静态属性 Symbol.iterator;
			var ot=new OuterLtertor(arr);
			
			let os=Symbol('abc');
			let os2=Symbol({
				name:"cst",
			})
			let prop="name";
			let obj={
				[prop]:'cst',
				[os2]:'北冥'//属性可以是对象
			}
			
			
			//不可迭代的对象,修改为可迭代的元素
			let obj={
				0:'a',
				1:'b',
				2:'c',
				[Symbol.iterator]:function(){
					let currIndex=0;
					let next=()=>{
						return {
							value:this[currIndex],
							done:this.length==++currIndex
						}
					}
					return {
						next
					}
				}
			}
####	3:Generator
		1:简介:
			生成器,本事是函数,执行后返回迭代对象,函数内部要配和yield使用Generator函数会分段执行,遇到yield立即暂停
		特点:
			function 和函数名之间需要带*
			函数内部的yield表达式,会产出不同的内部形态(值);
		demo:
		let fs=require('fs');
		function readFile(path){
			return new Promise((res,rej)=>{
				fs.readFile(path,'utf-8',(err,data)=>{
					if(data){
						res(data);
					}else{
						rej(err);
					}
				})
			})
		}
		// readFile('./data/name.txt').then((data)=>{
		// 	return readFile(data);
		// },(data)=>{
		// 	
		// }).then((data)=>{
		// 	return readFile(data);
		// },(data)=>{
		// 	
		// }).then((data)=>{
		// 	console.log(data);
		// });
		
		function *read(){
			let val1=yield readFile('./data/name.txt');
			let val2=yield readFile(val1);
			let val3=yield readFile(val2);
			return val3;
		}
		
		let og=read();
		// let {value,done} =og.next();
		// value.then((val)=>{
		// 	let {value,done} =og.next(val);
		// 	value.then((val)=>{
		// 		let {value,done} =og.next(val);
		// 		value.then((val)=>{
		// 			console.log(val);
		// 		})
		// 	})
		// })
		
		//递归优化
		function Co(oit){
			return new Promise((res,rej)=>{
				let next=(data)=>{
					let {value,done}=oit.next(data);
					if(done){
						res(value);
					}else{
						value.then((val)=>{
							next(val);
						})
					}
				}
				next();
			});
		}
		Co(read()).then((val)=>{
			console.log(65,val);
		})
		//引入Co插件命令行
		npm init
		npm install Co
		Co(read()).then((val)=>{
			console.log(65,val);
		})
十七:async-await