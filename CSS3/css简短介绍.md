
####	1:http://css.doyoe.com //权威的参考手册
####	2:http://wwww.caniuse.com//css兼容性支持实时的权威网站//css3补全兼容性插件 autoprefixer(后处理器)
### 1:预处理器(pre-processer)
	less/sass cssnext插件(用来实现一些未来的标准,未完全兼容各大浏览器的标准)

### 2:后处理器(post-processer)
	autoprefixer
	
	postCss+插件  (充分体现了扩展性,200多个)
	用js实现的css抽象语法树
	AST(Abstract Syntax Tree)
	剩下的事情交给后人来做
#### css选择器
	关系选择器
	E+F 下一个满足条件的兄弟元素的节点 
	E~F	 满足条件的兄弟元素节点
	属性选择器
	E[attr~="val"] E[attr|="val"]val值开头的   E[attr^="val"] E[attr$="val"] E[attr*="val"]
#### 伪元素选择器
	E::placeholder E::selection 必须是两个冒号才能使用(鼠标 选中字体后的颜色)
	伪类选择器 被选中元素的一种状态
	div:not(.demo)选择类名不是demo的元素
	div:not([class])选择有class属性的元素
	:root 根节点选择器,在html里面跟html标签选择器是一样的
	:target被标记为锚点之后的元素
#### =====================================
	p:first-child{} 所有元素里面,p是第一个子元素
	p:last-child{} 所有元素里面,p是第一个子元素
	P:only-child{} 所有元素里面,p唯一的一个子元素
	p:nth-child(n){} 第n个元素,n从1开始的
	p:nth-last-child(n){} 从后面开始数,第n个元素
#### =====================都考虑其它元素的影响=======================
	p:first-of-type{}p标签类型的第一个元素
	p:last-of-type{}p标签的最后一个元素
	p:only-of-type{}p标签是唯一的子元素
	p:nth-of-type(n) 第n个元素,n从1开始数
	p:nth-of-last-type(n) 第n个元素,n从后面开始数
#### =================不考虑其它元素的影响====================
	:empty{}元素里面什么都没有,注释的内容,也会被选中
	:checked 有checked的元素
	:enabled{}可用元素
	:disable{}不可用元素
==============================================css3样式解析=================

#### 计算属性:calc(50% - 50px);减号两边必须有空格,不然的话无效
### 样式
#### 1:border-radius 圆角的半径
	
	border-top-right-radius:
	border-top-right-radius:10px 20px;//每一个圆角的x,y半径的
	border-radius:10px 20px 30px 40px/10px 20px 30px 40px;//其中前后两个10px就是左上,两个20是右上.以此类推

#### 2:box-shadow

 box-shadow:inset  10px 5px 3px  60px #f40;//默认是的外阴影,加了inset之后是内阴影 

	 第一个参数阴影类型内阴影还是外阴影, 	
	 第二个参数水平偏移量,正右负左
	 第三个参数垂直偏移量,正上负下
	 第四个参数模糊值,基于边框的位置向两边同时展开模糊
	 第五个参数,同时给水平,垂直(四个方向)增加的偏移量
	 第六个参数是颜色
	 
	 box-shaodw:0 0 10px #000,
	 			3px 0 10px @f40,
	 			0px -3px 10px #ff5,
	 			-3px 0px 10px #ff8,
	 			0px 3px 10px #f55;
//首先设置的阴影在最上面,以此类推,背景在阴影的下面,文字在阴影的上面
#### 3:border-image :
	border-image-source:line-gradinet(yellow,blue);//渐变色
	border-image-source:url(bg.png);/背景图片
	border-image-slice:10 20 30 40;//四条分割线,一般情况下都是值都是相等的,(一般都是border一样的)
	border-image-reapeat:reapeat;//repeat,strenth,round,space,streth默认值,最多支持同时存在两个参数
	border-image-outside:100px;背景图片向外延伸
	border-image-width:1;默认值是1,如果是auto的话则向slice看齐,如果是直接填写数值,则是该值乘以boder的值
#### 4:background:
	background-image:url(),url(),...//可以引入多张图片,当一张图片加载没完成的时候,显示第二张图片
	background-size:100px 200px,100px,200px;//给两张图片设置大小
	background-origin://背景填充方式,从什么地方开始定位填充,content-box,border-box,padding-box
	background-position:10px 10px,和orgin配合背景的开始位置
	background-clip:border-box;//毕竟图片的从什地方开始截断,padding-box,border-box,content-box,text,当值是text的时候必须和text-fill-color:transpant;才有效果,这两个属性只有-webkit内核才支持,用文字来切割背景,只有文字后面有背景
	background-attachment:scroll,//当出现滚动条的时候,容器滚动的时候,背景滚动方式,scroll不滚动,local滚动.,fixed相对视口固定(但是不能超过可视区域)
	background-size:cover//
	cover,contain都是用一张图片来填充背景, 
	cover:不改变图片原始比例,,填充满背景(溢出风险,和短的边等比缩放,元素600*750,图片200*300,cover以后:图片300*900),
	contain:让容器包含一张完整的图片(repeat风险,长的边对齐,元素500*600,图片200*300,contain以后:图片400*600),
	background-repeat:no-repeat;//round,space(css3),可以同时设置两个值,不可以和repeat类型的使用
	background-position:0 0,10 100;//设置两张图片的位置
	background-image:line-gradinet();//line-gradinet,radial-gradinet()
	background-image:line-gradinet(0deg,#fff 20px,#000 60px);//后面的数值是渐变色的开始和结束的值,数值之外就是纯色了
	background-image:radial-gradinet(circle farthest-corner at 100px 100px,#ff0,#000);//前面的参数是圆形或者椭圆形渐变,放射半径,后两个参数是圆心位置
	//放射的半径
	closest-corner:最近的角落
	closest-side:最近的边
	farthest-corner:最远的角落
	farthest-size:最远的边
#### 5:border
	当你设置了boder的除了颜色之外其样式,border-color会默认继承color的颜色(css1,css2)
	在css3中会有有一个中转颜色,currentColor,currtColor赋值给border-color:
	
#### 6:text

	text-shadow: 10px 10px 10px #ccc;//x轴的距离,y轴的距离,模糊值,颜色,可以一次添加多个阴影值
	-webkit-text-stroke:1px red;//描边效果
	
#### 7:font-face
	@font-face {
		font-family: 'diyfont';
		src: url('diyfont.eot'); /* IE9+ */
			src: url('diyfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
				 url('diyfont.woff') format('woff'), /* chrome、firefox */
				 url('diyfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
			 url('diyfont.svg#fontname') format('svg'); /* iOS 4.1- */
	}
    truetype 微软 苹果 .ttf
    opentipe 微软 abode .opt(在.tff基础上扩展出来的)
    woff               .woff未来字体格式(.tff .opt)的合集版本
    
	mime协议,定义支持扩展的后缀名,根据后缀名找到对应的处理程序
	format:(猜测)在电脑里面添加一个映射,使用另一程序强制性打开,兼容老版本浏览器, 
#### 8:white-space
	white-sapce:pre//
	normal:默认处理方式,会序列的空格合并为一个,内部是否换行由换行规则决定,
	pre:保留输入时候的状态,空格,换行,都会保留,并且文字超出边界的时候不换行;等同pre
	nowrap:与nomal的值一致,不同的是会强制所哟逇文本都在同一行显示
	pre-wrap:与pre值一致,不同的是文字超边界的时候回自动换行
	pre-line:与normal一致,会保留文本输入的时候的换行
#### 9:word-break
	normal:
	keepall:强制在一行显示
	breakall:遇到边界换行
	breakword:保留单词的完整性
#### 10:word-wrap
	nomal:允许内用溢出或者顶开容器
	break-word:内容在边界换行,如果需要单词内部允许断行;
#### 11:列布局
	colums:100px 3//三列,100px,3列 
	colum-count:3;//列数
	colum-gap:列之间的距离
	colum-span:all;贯穿所有列
	coloum-break-before:
	
#### 13:盒模型
	box-sizing:border-box
	w3c的box宽度=设置宽度+2*border+2*padding
	ie6的混杂模式:box宽度=设置宽度,contentwidth=box宽度-2*padding-2*border
#### 14:resize
	resize:设置元素可以调节大小,both,horision,verlign,横向,竖向,双向,必须添加overflow属性,任意一个值都可以
#### 15:flex
#####	1:父元素display:flex
		flex-direction
		://row,row-reverse,colum,colum-reverse
		flex-wrap://wrap,nowrap遇到边界换行	
		justfy-content://主轴的对齐方向,flex-end,flex-start,center(居中),space-between(两边占个位置,中间的平均分配),space-round(盒子两边的间距相同)
		align-items://交叉轴的对齐方向,strectch(不设置子元素的 高度,内容区被撑开,),flex-start,flex-end,center(作用交叉轴于单行元素),baseline(基于元素的内容对齐底线)
		align-content://center作用于交叉轴多行元素,flex-end,flex-start,space-between(两边占个位置,中间的平均分配),space-round(盒子两边的间距相同)
		order:横向的排列顺序
		align-self://元素本身在交叉轴方向上的对齐方式(优先级大于(aligin-items)父元素设置的优先级,小于alin-content设置的优先级),,auto,flex-start,flex-end center baseline,stretch
#####	2:子元素
		flex-grow:会把剩余的空间,按照设置的比例来瓜分(flex-grow:1,flex-grow:1,flex-grow:1,)
		flex-shrink:1;//当所有元素的宽度家起来大于父级的宽度,按照算法比例设置子元素宽度,适应父级的宽度
		flex,shrink的算法公式,比例为1:1:3,宽度是200px 200px 400px
		加权:200px*1+200px*1+400px*3=1600px;(这里的宽度不是盒子的宽度,而是content的宽度,不算border和padding)
		占有一份的:200px*1
				  --------- * 200px=25px
				   1600px
		占有三分的:400px*3
				  -------- *200px =150px;
				    1600px
	
		200px是所有的元素加起来超过父级元素的总宽度
		
		flex-basic:150px;//设置元素的宽度,优先级高于width
		flex-bacis:当内容区变大的时候并且没有设置width的时候,如果不换行的话,flex-basic宽度会随着内容变化,就相当于min-width,当有设置width的时候,就会把width作为宽度上限,flex-basic宽度不会变化
					被内容区撑开的宽度,不参与flex-shrink的压缩,除非添加换行word-break:break-word;
					
		flex:0 0 200px;//固定宽度
		flex:1 1 auto;//占有一份可区瓜分的宽度
		
#####		流式布局:
		dislapy:flex;flex-warp"wrap";alin-content:flex-start;
#####		圣杯布局:
		//:上中下三行,上下两行高度固定中间只适应,中间部分左中右三列,左右两列宽度固定,中间自适应
		.wrapper{
		  width:300px;height:300px;display:flex;flex-direction:colum;//alingn-items:strech交叉轴没设置高度,高度就会被拉伸到容器大小
		}
		.header ,.footer{
		  flex:0 0 20%;//占有百分之二十的高度(因为此处已经改变列主轴的防线,所以百分二十占有的是看起来的高度)
		}
		.content{
			flex:1 1 auto;
			display:flex;
		}
		.left,.right{
		 flex:0 0  20%;//占有百分之二十的宽度
		 }
		.center{
		 flex:1 1 auto;
		}
##### 14:transitioin//过度动画,元素状态改变,以过度的方式进行,
 	transition//
 	transitiion-proerty:width//监听动画的属性,可以是all
 	transtiion-dytation:1s//动画间隔时间
 	transitiion-timing-funcntion:liner//动画类型,类似先快后慢,先慢后快,ease,ease-out,ease-in-out,step start,step-end等属性
 	transitition-delay:1s//动画持续时间
 	1:贝赛尔曲线
 	  transition:all 2s cubic-bezier(0.13,1,1,1)//x的值在0-1之间
#### 15:animation
	//关键帧:
	@keyframes name{
		 0%{}
		 10%{}
		 50%{}
		 80%{}
		 100%{}
	}
	@keyframes name{
		 from{}
		 10%{}
		 50%{}
		 80%{}
		 to{}
	}
	from代表百分之一,to代表百分之百
	div{animation: name 4s,name2 2s;}可以多个关键帧同时并行
	animation-name:关键帧的名字
	animation-timeing-function://是定义的每一段动画的运动状态,不是整个贞的运动状态
	animation-iteration-count:1;//动画的循环模式infinite,无限循环
	animation-dutation:关键帧的延迟执行时间
	animation-direction:reverse;//运动的方向//reverse,alternate,alternate-reverise
	animation-play-state:running//关键帧的运动状态//关键帧的运动状态,paused,running
	animation-fill-mode:both;//forwards,backwoards,both
	forwards://设置最后一贞作为动画结束后元素的状态	
	backwards://设置第一帧作为动画开始之前的元素状态
	
	step:
	div{
		animation:name 4s steps(1,red);//每一帧动画都一步跳到结束的时候状态,没有过度效果
		animation:name 4s steps(3,red);//每一帧动画都分3步跳到结束的时候状态,没有过度效果
		animation:name 4s steps(3,start);//保留下一帧动画状态,指导当前帧动画运动完
		animation:name 4s steps(3,end) fowards;//保留当前帧动画状态,指导当前帧动画运动完
	}
	steps(1,end)==step-end;//只有等于1的时候才可以
	steps(1,start)=step-srart; //只有等于1的时候才可以
#### 16:scale:伸缩的不是元素大小,是元素变化坐标轴的刻度伸缩
  scale(x,y);//x轴,y轴都扩张,可以同时存在多个
  scale(x);//x轴扩张
  scale(y);//y轴扩张
  scale(z);//z轴扩张
  scale3d();//3d扩张
#### 15:route旋转,坐标轴也一起跟着旋转
 routed旋转(x,y);//x轴,y轴都扩张,可以同时存在多个
  routex旋转(x);//x轴扩张
  routey旋转(y);//y轴扩张
  routez旋转(z);//z轴扩张
  routed3d旋转(x,y,z,0deg);//3d扩张,x,y比值,决定轴的方向
#### 17:skew:
	skew(x,y);//x轴和y轴的倾斜角度.倾斜的是坐标轴,不是元素背身,拉伸的同时,刻度同时被拉伸了
	skew(x);
	skew(y);
#### 18:translate,平移,参考的是自身的位置,注意坐标轴的影响
	translate(x,y,z);
	translate(x);//x轴平移,translate(50%);移动了自身的一半
	translate(y);
	translate(z);
	translate3d(x,y,z);
#### 19:perspective:景深	,基于元素在屏幕上的投影,如果tranlatez轴不移动话的,一半看不到效果,
	perspectice-origin:center center;//就是人的眼睛的位置,不能设置元素本身的perspecttive-origin的值,只有默认是的center center,如果父级可以设置perspectice-origin:100px 100px ,作用于子元素上面
	perspective:
	transform-style: preserve-3d;//设置3d立体效果,默认值:flat,
	transform-arigin:100px 100px 100px;
	当一个元素设置了perspective或者设置了transform-style:preserve-3d的时候会定位了的子元素当做参照元素,就像元素本身有了:position:relative一样

#### 20:matrix();//矩阵
#### 21:css3性能优化,处理一些计算
cpu:处理器
gpu:显卡,处理高精度的浮点数的计算,家用的:家用显卡(绘的是长方向,多边形),专业的:绘图显卡(绘的点)
区块链:区块链系统抛出一个算数(算法考题),谁先算出来,谁就可以在区块链的大网络上面增加一个区块(长度3m),
		这个区块是用来记账的,就会把交易的信息存到你的区块里面来,区块链网络就是奖励你比特币(BM1387,最强大的蚂蚁矿机)
#### 22:浏览器的渲染顺序
#### 23:css3的性能优化
 
	能出发GPU的操作:opacity,translate3d/translatez();
	性能优化:
			transform:.... 	translatez(0);//添加一个translatez();正好可以触发gpu	,这是gpu的hack
			will-change:transform;//设置使用gpu的加速问题,标准方法
			wil-cahnge:设置的太早的话,浏览器会一直监听,要变化的样式,所以最好的办法是在变化之前,才监听
			div{
			   will-change:transform;
			}
			div:avtive{
				transform:scale(1.5,4.5)
			}
#### 24:屏幕screen和px
	光学三原色:rgb,像素有三原色构成,一个像素里面有是三个像点
	空间混色法:,平排的三个像点,(人无法区分0.2毫米以下的颜色点)
	px:像素有三个像点来构成,按照空间混色法,来排列,品字形(松下),栅格形(索尼),不同屏幕的像素点排列不一样,
	点距:用来衡量像素的大小的,描述成像细腻的重要因素
	物理像素:设备出场的时候,像素大小
	ppi:一英寸里面有多少个像素
	dpi:一英寸所能容纳的像素点数 ,(一般是来表示打印机设备的,一个墨点(一像素)里面的多少个像素)
	参照像素:96dpi的电脑,一臂距离视角去看,显示出的具体大小(也叫css像素,逻辑像素)
	设备像素比dpr:物理想像素/css像素,
	crt显示器:win98使用的屏幕,crt显示屏求点距的方法意义,是几乎所有屏幕通用的
	led显示器:
	液晶材料:可以固态,可以液态(处理后)
	
#### 25:响应式网页开发
	1:流体网格,(flex布局)
	2:弹性图片
	3:媒体查询:不同设备上面展示的结果相同
	4:主要断点:设备宽度临界点
	
	<link media="screen and (max-width:375px)" src="mobile.css"></link>//屏幕的宽度在375以下引入的css
	<style>
	@impot 'mobile.css' screen and (max-width:375px) //屏幕的宽度在375以下引入的css
	</style>
	@media screen and (max-width:375px){
		...//屏幕宽度375px以下应用这段代码
	}
	vw:屏幕视口分成100份,vw就是每一份的宽度
	vh:屏幕视口分成100份,vw就是每一份的高度
	vmax:视口的的宽高取比较大的那一个,屏幕视口分成100份,vw就是每一份的宽度
	vmin:视口的的宽高取比较小的那一个,屏幕视口分成100份,vw就是每一份的宽度
