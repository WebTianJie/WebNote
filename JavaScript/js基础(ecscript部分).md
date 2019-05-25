# JSEcscript部分
### 1:typeof类型装换,六大数据类型,Blean,Number,string,object,null,undefined
####    特殊例子:
   - parseInt();可以转换数字开头的字符串
   - Number();转换数字开头的字符串是'NaN'
   - typeof(null)="object"
   - typeof(Nan)="Number"
   - typeof(undefined)="undefined"
#### 2:函数 代码的大量重复(叫做耦合),把相同功能的代码抽离出来放在一个黑匣子(黑匣子就是函数)里面
#####	1:命名函数表达式
	       function theFirstName(){}//函数的name属性是theFirstName
#####	2:匿名函数表达式(忽略定义的函数名字)
	      var theFirstName=function(){//函数的name属性是theFirstName
	      }
	      var theFirstName=fucntion abc (){//abc并没有什么用,函数的name是abc(函数的name属性是abc)
		
	     }
#####	3:参数
		 1:无论是实参多,还是形参多都可以
		 2:arguments:实参参数的数组(隐形),argunments和形参之间互为映射,一个改变另一个也改变(arguments和实参之间个数相等的时候才互为映射,不相等的话,之映射到实参或者形参的最后一位)
		 3:sum.length:形参参数的数组的长度
##### 4:返回值:
	      return res; 返回函数执行后的结果,return 后面的代码不执行
##### 5:递归,最大好处就是代码简洁
######		1:阶乘
				function mul(n){\
					if(n==0||n==1){
						return 1;
					}
					return n*mul(n-1);
				}
######		2:费波那西数列
				function fb(n){
					if(n==1||fn==2){
						return 1;
					}
					return fn(n-1)+fn(n-1)
				}
		
#####       3:作用域
	js运行三部曲
		语法分析
		预编译
		解释执行
	js:单线程,解释性

####	执行过程(三部曲)
#####	1:语法分析:在执行之前,扫描低级的语法错误,少个大括号,中文字符呢
#####   2:预编译,变量声明提前,函数声明整体提前
   		1:暗示全部变量,(变量未经声明就赋值,默认归全局对象window所有,一切声明的全局变量都归window所有,window就是全局)
####   		预编译过程
   			1:创建AO对象Aativation Object(),执行期上下文,全局的叫GO
   			2:找形参和变量声明,将变量的名和形参的名作为AO对象的属性,值为undefined
   			3:将实参值和形参值相统一
   			4:在函数体里面的找到函数声明,赋值予函数体
####   	3:执行
   		解释每一段代码,并执行(变量赋值等,注意:在执行期间的的属性 ,操作的时候也是操作的AO里面的属性)
   

### 4:立即执行函数
	1:只有表达式才能被执行符号执行,a();//()执行符号,+,-等
	
#### 5:闭包
#####	   1:把函数内部函数,保存到函数外面来使用,就会产生闭包
######		好处:
			1:(实现公有变量)函数累加器
			2:实现缓存
			3:实现封装,属性私有化
			function Deng(name,wife){
				var  prepaireWife='小郑';
				this.name=name;
				this.wife=wife;
				this.divorce=function(){
					this.wife=prepareWife;
				}
				this.changePrepareWife=function(target){
					prepareWife=target;
				}
				this.sayPrapremWife=functon(){
				 console.log(prepaireWife);
				}
			}
			//此对象里面的prepairWife只有通过.this.sayPrapreWifw()方法才能访问,对象本身也无法访问,形成了属性私有化,外部无法看到
			4:模块化开始,防止污染全局变量
######		坏处:
			闭包会长期占有作用域链,大量占用内存,导致内存泄漏
#####	2:逗号运算符
	var a=(1+1,2+2);//会返回后一个表达式的值4
#####	3:例子分析
		var x=1;
		if(function(){}){
			x+=typeof f;
		}
		console.log(x);

#### 6:对象包装类
	定义对象:
#####	1:字面量定义法 
	var obj={}
#####	2:构造函数
		1:var obj=new Object();
		2:自定义
		function Person(){}
		var person=new Person();
		构造函数内部的原理
		   1:在函数体最前面隐式加上this={}
		   2:this.xxx=xxx;
		   3:隐式返回this(可以手动修改返回的值,但是返回值的不能是原始值(字符串,boolean,undefined,等))
#####	3:包装类
		数字对象,字符串对象
		var num=new Number();//数字对象参加运算后,就变回了数字(原始值)
		var str=new String();
		1:原始值是不能有属性的
			
			原值值添加属性然后被销毁的过程
			
			var  num=1234;
			 num.len=2;//防止报错,系统隐式操作:new Number(num).len=2;生成后,就立即销毁
			 console.log(num.len);//同样防止报错,重新new Number(num).len(这里面的new Number()并不是上一句里面的new Number(),上一句的已经被销毁),结果是undefined
			 
#####	4:命名冲突的函数,后者会覆盖前者
#### 7:原型,原型链
#####	1:原型
		1:原型是function对象的一个属性,它定义了构造函数制造出来的独享的公共祖先,,通过该构造函数的产生的对象,可以继承该原型的属性和方法
		2:对象的原型是可以通过 Person.prototype={}改变
		 function Person(){
		 		var this={
		 			__proto__:Person.prototype;//在new的时候,创建
		 		}
		 }
		 var obj={
		 }
		 var  person=new Person();
		 person.__proto__=obj;//修改默认的Person原型
		3:person.constructor:可以产看对象的构造函数
			person.constructor//结果是Person
		4:person.__proto__:指向对象的原型(Person.prototype)
	
		5:
		1==========================================
		Person.prototype.name="sunny";
		function Person(){
		}
		Person.name="shaly";//在同一个对象上面修改属性
		var  person=new Person();
		Person.prototype={//此处直接修改了原型对象,但是指向原型的__proto__指向并没有改变,还是指向的原来的地址(值是sunny),
			name:'cherry'
		}
		console.log(person.name);//结果是sunnny
		2=======================================
	
		Person.prototype.name="sunny";
		function Person(){
				var this={
		 			__proto__:Person.prototype;//在new的时候,创建
		 		}
		}
		Person.name="shaly";//在同一个对象上面修改属性
		Person.prototype={
			name:'cherry'
		}
		var  person=new Person();//创建对象的时候Person.__proro__已经被改变;
			
		console.log(person.name);//结果是cherry
#####	2:原型链
			Object.prototype是所有对象的最顶级的对象
			1:原型链中:
				每一个对象只能删除和修改自己的小属性,不能修改父级的属性,
				当父级元素的属性是引用值(对象)的时候,子元素可以在该父元素中属性中添加值
			2:原型链中,谁调用的方法,this就是该对象
				Person.prototype={
					heightL100;
				}
				function Person(){
					this.eat=function(){
						this.height++;//拿到父级的属性,操作后,添加为自己的属性
					}
				}
				var person=new Person();
				console.log(person.height);
				person.height:101;
				Person.prototype.height:100;
			4:Objcet.create();创建对象里面必须传入对象或者null
				var obj={name:'objname'}
				var person=Object.create(obj);//传入对象,person的原型是obj
			5:绝大多数都最终会继承自Object.prototype除了下面的例子
				var obj=Object.create(null);//通过这样的创建对象的原型是null
			6:null和undefined没有原型,所以无法调用toString();tostring方法是在object原型上面的
			7:js存在无法解决的bug,js的精度问题
				0.14*100=14.000000000000002;
				
				js可以处理前16位的数字相加,到底17位出现偏差
				1000000000000000
				0.000000000...000000001
				
####	3:call(),apply()
#####		1:call(obj,arg1,arg2)//改变对象内部的this指向
			function Person(name,sex,age){
				this.name=name;
				this.sex=sex;
				this.age=age;
			}
			
			function obj(name,sex,age,grade,address){
				Person.call(this,name,sex,age);//利用person的构造函数,来为自己声明属性使用
				this.grade=grade;
				this.addess=address;		
			}
			
#####		2:apply(obj,[arg1,arg2])//改变对象内部的this指向
			function Person(name,sex,age){
				this.name=name;
				this.sex=sex;
				this.age=age;
			}
			
			function obj(name,sex,age,grade,address){
				Person.call(this,[name,sex,age]);//利用person的构造函数,来为自己声明属性使用
				this.grade=grade;
				this.addess=address;		
			}
			
			call和apply唯一不同就死,call除了传递对象,后面的参数可以一次写在后面,而apply除了传递对象以外,剩下的传递的参数都是在一个数组中,这是两者唯一的区别
	
#### 8:继承模式,命名空间,对象枚举				

#####	1:继承模式
######	  	1:传统型->原型链,过多继承了没用的属性.
			Grand.prototype.lastName='ji';
			function Grand(){
			
			}
			var grand=new Grand();
			
			Father.prototype=grand;
			function Father(){
				this.name="li";
			}
			var father=new Father();
			Son.prototyoe=father;
			function Son(){
			}
			var  son=new Son(){};//如果son想要继承lastName,它需要继承父级一级父家之前的所有的父级的属性,导致一些无用的属性也继承了
######		2:借用构造函数
		   不能继承借用构造展示的原型,
		  每次构造函数都要多走一个函数
		  function Person(name,sex,age){
				this.name=name;
				this.sex=sex;
				this.age=age;
			}
			
			function obj(name,sex,age,grade,address){
				Person.call(this,name,sex,age);//利用person的构造函数,来为自己声明属性使用
				this.grade=grade;
				this.addess=address;		
			}
			//只能借用别的构造函数的属性,不能借用别人原型上的属性,原型还是自己的,而且每次new obj一个对象,则需要执行很多个构造函数,obj(),person()
######		3:共享原型,不能随便改变自己的原型
			Father.prototype=grand;
			function Father(){
				this.name="li";
			}
			function Son(){
			}
			Son.prototype=Father.prototype;//两个原型指向同一个地址,修改其中一个原型属性,会改变另外一个对象的原型属性
			
			封装
			fucntion extend(Target,Origin){
				Target.prototype=Origin.prototype;
			}
######		4:圣杯模式
			
			Father.prototype.name="zhang";
			function Father(){
			}
			function Son(){
			}
			function Temp(){}//中间对象
			Temp.prototype=Father.prototype;
			Son.prototype=new Temp();//此时new Temp()生成了一个对象,相当于在这个对象上面添加属性,不会改变对象的原型链
			Son.prototype.address="河南";
			var son=new Son();
			
######			封装
			function extend(Target,Origin){
				function Temp(){};
				Temp.prototype=Origin.prototype;
				Target.prototype=new Temmp();
				Target.prototype.contractor=Target;//修改构造函数为自己的,解决构造函数混乱(继承后,构造函数显示的父级的构造函数)
				Target.prototype.uber=Origin.prototype;//记录自己的真正父类
			}
			
			原型身上才有constructor,
######			高端写法
			var extend=(function(){
				function Temp(){};
				return function(Target,Origin){
					Temp.prototype=Origin.prototype;
					Target.prototype=new Temmp();
					Target.prototype.contractor=Target;//修改构造函数为自己的,解决构造函数混乱(继承后,构造函数显示的父级的构造函数)
					Target.prototype.uber=Origin.prototype;//记录自己的真正父类
				}
			})()

#### 9:命名空间,对象枚举
#####	1:命名空间:为了防止在团队合作的时候,变量命名的冲突
		var ad=(function(){
			var name="abc";
			function callName(){//利用闭包,来实现变量的私有化,防止污染全局变量
				console.log(name);
			}
			return function(){
				callName();
			}
		})();
		
		//调用 ad();
#####	2:对象枚举(对象遍历)
		1:for(var pop in obj){}//变量对象的方法,无论该对象是自己的属性还是自己原型上的属性,for in都会遍历到
		2:hasOwnProperty();//obj.hasOwnProperty(pop) 判断该属性是不是对象自己的属性,原型链上的属性则不属于自己的属性
		3:instance of //a instance of(Person) a对象的原型链上面有没有Person的原型
		4:判断对象和数组的方法
		
			var obj=[]||{};
			var o={}
			1:obj.constractor  [].constractor Array,o.constractor  object
			2:obj instanceof [].instanceof Array true,o.instanceof Objec true
			3: Object.prototype.toString.call();
				Object.prototype.toString.call([]) "[object Array]"
				Object.prototype.toString.call(123) "[object Number]"
				Object.prototype.toString.call(o) "[object Object]"
			
			
	typeof()可以识别的数据类型
			
			Number,Boolean,String,undefined,Object,function
			null是历史遗留性的问题 typeof(null)="object"
	
			undefined==null
			NaN!=NaN 若要比较的话,需要先把返回的结果转换为字符串的NaN
			{}!={}对象比较的是引用值,比较的是引用地址
#### 10:this
#####	1:需要注意函数在函数中和在对象(new以后)中this的区别
		
		function test(){
			console.log(this);//window
		}
		function test1(){
			console.log(this);//test1
		}
		new test1();
	
#### 11:arguments.callee(),caller

#####	1:arguments.callee:指向函数(或者对象)本身的引用
######		1:阶乘
			var num=(function(n){
				if(n==1){
					return 1;
				}
				return n*arguments.callee(n-1);//立即执行函数,没有函数名字无法正常使用递归,使用argeuments.callee()来重新调用函数
			})
######	2:arguments.caller,指向函数运的时候所在的环境
		function test(){
			demo();
		}
		function demo(){
		    demo.calller//函数在test里面运行,结果为test
		}




#### 13:arguments,克隆
	
#####	1:浅克隆
	var obj={
		name="obj",
		sex:'males'
	}
	var obj={}
	
	function clone(origin,target){
		for(var prop in origin){
			target[prop]=target[prop];
		}
	}
#####	2:深度克隆
		function deepClone(origin,target){
				var target=target||{};
				var toStr=Object.prototype.toString;
				for(var prop in origin){
					if(origin.hasOwnProperty(prop)){
						if(typeof(origin[prop])=="object"&&origin[prop]!==null){
							target[prop]=(toStr.call(origin[prop])=="[object Array]") ?target[prop]=[]:target[prop]={};
							deepClone(origin[prop],target[prop])
							
						}else{
							target[prop]=origin[prop];
						}
					}
				}
				return target;
		}
#### 14:数组
	数组的常用方法
#####	1:改变原数组的:
		1:push()//数组最后一位添加元素
		2:pop()//数组最后一位删除元素
		3:shift()//数组第一位删除元素
		4:unshift()//数组第一
		5:sort()//数组排序,默认是按照asc码来排序
			var arry=[2,3,10,5];
			array.sort(function(a,b){
				return a-b;//a大于b的时候升序排列,a小于b的时候,降序排列
			})
			var arr=['aaa','ewewwerw','aaaa','ddddddd','cc']
			arr.sort(function(a,b){
				return a.length-b.length;
			});
		6:reverse()
		
		7:splice();第一个参数是插入元素的位置,后面是无穷个插入的元素
#####	2:不改变原数组(返回新数组)
		1:contrac();合并两个数组
		2:join();连接字符串
		3:split();按照元素分割字符串
		4:toString();数组转化为字符串
		5:slice(index,length,eles);从某一位开始截取,截取的长度,放进去的新元素
#####	3:例子乱序数组
	var arr=[1,2,3,4,5,6,7];
	arr.sort(function(){
		return Math.random()-0.5;
	})
#### 15:类数组

#####	1:类数组
	var obj={
		0:'a',
		1:'b',
		2:'c',
		3:'d',
		name:'abc',
		age:'123',
		length:3,
		push:Array.prototype.push,
		splice:Array.prototype.splice
	}
	对象变换成类数组
	1:属性要为索引属性(数字),必须要有length属性,最好加上push方法
	2:类数组具有对象和数组的双重特性,push方法,通过下标访问,调用数组的方法,同时还具有对象的属性
######	例子:
######	判断数据类型,null返回'null',包装类返回包装类
	function type(target) {
			var typeList = {
				"[object Array]": "array",
				"[object Object]": "object",
				"[object Number]": "number-object",
				"[object Boolean]": "boolean-object",
				"[object String]": "string-object"
			}
			if(target == null) {
				return 'null';
			}
			if(typeof(target) == "object") {
				var type = Object.prototype.toString.call(target);
				return typeList[type];
			} else {
				return typeof(target);
			}
		}
		
######		//数组去重
		Array.prototype.unique=functon(){
			var  temp={},len=this.length,arr;
			for(var i=0;i<len;i++){
				if(!this[i]){
					temp[this[i]]="1";//除了能转转换为false的值以外的值,0,undefined,null等除外
					arr.push(this[i]);
				}
			}
			return arr;
		}
#### 16:ES5 严格模式
		1:现在浏览器默认的情况下是按照es3.0的模式来执行的,如果产生冲突的则使用es3.0来执行
		2:es5.0的严格模式.如果是es3.0的方法和es5.0d的方法产生冲突则使用es5.0的方法否则则使用es3.0
		

#####		开启严格模式
    		"use strict" //放在代码的最顶端,也可以放在函数或者if判断的第一行
######		 1:es5里面不允许使用arguments.callee,argument.caller
######		 2:不允许使用with()函数(width改变作用域链)
		 var obJ={
		   name:"obj"
		}
		var name="window";
		function test(){
		  name:"test",
		  age:'12'
		  width(obj){
		    console.log(this.name);//,修改作用域链,此时打印的是obj,如果是打印age的话则还是12
		  }
			
		}
######		3:变量赋值必须声明,
		   1:暗示性全局变量,没有var就是用的变量
######		4:局部的this必须赋值.
######		5:es3,不允许重复的属性,不报错,在es5里面是直接报错的
		    
######		6:eval('console.log(123)');可以吧字符串当做代码来执行,也可以修改作用域链,传入的方法不一样的修改的内容就不一样
######		7:在严格模式下,通过call来改变this指向,可以传入原始值,但是如果实在es3.0 call里面传入的是原始值的话会被修改为包装类
		
