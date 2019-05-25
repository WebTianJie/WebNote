html5的概况
### 一:新增属性
####	1:placeholder信息提示
####	2:
		calender,//chrome支持,safari ie不支持
		date,
		time,
		week,
		datetime-lolcal,
		
		number,//chrome支持,safari ie不支持
		email,//chrome,火狐支持,safari ie不支持
		color,//chrome支持,safari ie不支持
		range,//safari,chrome支持,火狐,ie不支持
		url,//chrome,火狐支持,safari,ie不支持
		search,//输入框类型.自动提示上次提交过的功能,chrome支持,safari,支持一点, ie不支持
####	3:contenteditable//没有兼容性问题,普通的div元素,,设置成可以编辑的状态,父级元素设置了该属性后,里面的子元素会有这样的属性
		如果父元素设置了true以后,子元素设置了false也无效,因为父元素里面会把子元素标签一起删除了
####	4:dragable,//元素课拖拽,chrome,safari,可以正常使用,firefox下不支持,a,img标签默认是可拖拽的
		//所有的标签元素,当所有的拖拽结束以后,都是默认的回到标签的原处
		4.1:拖拽元素的生命周期,拖拽开始,拖拽进行中,拖拽结束
		4.2:被拖拽的物体.目标区域
		4.3:事件
			ondragstart:按下的瞬间是不会出发事件的e.dataTransfer.effectAllowed="link"(link,copy,move,copymove,linkmove,all),修改指针的形状
			ondrag:移动事件
			ondragend:结束事件
####		5:目标区域
			5.1:事件
			ondragenter//不是元素,图形进入就触发的,鼠标进去之后才触发的
			ondragover://在区域内部移动就会触发,在此处阻止默认事件,才会触发ondrop
			ondragleave://离开目标区域触发
			ondrop://在目标区域,在ondragover事件中阻止默认的事件,e.dataTransfer.dropEffect='link'
	5:hidden
	6:content-menu
	7:data-val资指定属性
#### 二:新增的标签
####	1:语义化标签,(全部都是div的变异,都是块级元素)
		1.1:header
		1.2:footer
		1.3:nav
		1.4:article//文章,可以直接被引用,拿走的
		1.5:section//一块,一块的块计区域
		1.6:aside,侧边栏
####	2:canvas,画布
#####		2.1:css卸载行内才有效果,写在页面才有效果
#####		2.2:lineWidth:写在什么地方都相当于写在moveTo前面画笔的宽度
#####		2.3:moveto;//开始画任何图形的,开始都是moveto
#####		2.4:lineto//开始画
#####		2.5:stroke()//绘制
#####		2.6:fill()//填充
#####			2.6.1:filleStyle='blue';//填充颜色
#####			2.6.7:填充图片
			var img=new Image();
			img.src="/me.jpg";
			img.onload=function(){
			
				cts.beginPath();//
				cts.tranlate(100,100);//改变坐标写的原点
				var bg=cts.createPattern(img,'no-repeat');//文理和图片的填充都是从坐标系的原点开始填充的
			}
#####			2.6.8:渐变填充
				var bg=cts.createLinearGradinet(0,0,200,0);//线性渐变的填充起始位置也是从坐标系的原点开始的
				bg.addColorStop(0,'white');
				bg.addColorStop(1,'black');
				//辐射渐变
				var bg=cts.createRadiaGradinet(x1,,y1,r1,x2,y2,r2);//x,y是圆心r是半径
				bg.addColorStop(0,'green');
				bg.addColorStop(0.5,'red');
				bg.addColorStop(0,'blue');
#####		2.7:benginPath()//重新开始绘制
#####		2.7:closePath();//闭合,只能闭合一条线
#####		2.8:rect();//画矩形,
#####		2.9:strokeRect();//画空心的矩形
#####		2.3.0:fillRect();//画填充的矩形,默认是黑色
#####		2.3.1:clear();
#####		2.3.2.0 画圆
			1:圆心(x,y),半径(r),开始弧度,结束弧度,方向(顺时针,逆时针)
			2:
			 2.1:.arc(100,100,50,0,Math.PI/2,0);//Math.PI是180度,0是顺时针,1是逆时针
#####		2.3.3 圆角矩形 
			1:arcTo();
#####		2.3.4 贝赛尔曲线
			1:quadraticCurveTo(200,200,300,100);//二次
			2:bezierCureTo(200,200,300,100,400,200);
#####		2.3.5:变换
			1:cts.route(Nath.PI/6);//旋转,以坐标系原点为中心,是对整个画布起作用的
			2:cts.translate(100,100);//改变坐标系的原点
			3:cts.scale(2,2,);//
			4:cts.save();//保存画布的原点和状态,平移缩放,选装
			5:cts.restore();//还原画布的原点和状态
#####		2.3.6:添加阴影
			cts.shadowColor="black";
			cts.showBlur=20;//模糊
			cts.shadowOffsetX=15;//x方向的渐变,空心,文字描边
			cts.shadowOffsetY=15;//y轴方向的渐变,文字填充
#####		2.3.7:绘制文字
			cts.strokeText('panda',0,0);//文字,位置
			cts.filltText('monkey',0,0);//文字,位置
#####		2.3.8:线端样式;
			cts.lineCap="squire"//round,在两端添加半圆,添加矩形,butter,默认
			cts.lineJoin="round";//round:圆的,beval:砍掉尖儿,miter//默认的
			cts.materLimit=5;砍掉尖儿的长度,防止过分尖锐
####	3:svg 
		svg和canvas都是画图工具,s
		svg是矢量图,放大不会是真,通常动画较少或者简单,标签和css画法,
		canvas合适大面积的切图,适合小面积的绘图,合适动画
#####		3.1.1:画线
			svg
			line{
				stroke:'red';
				strokeWidth:5px;
			}
			<line x1="100" y1="100" x2="200" y2="200"></line>//line就是画直线的标签,x,y都是直线的坐标
#####		2.1.2画矩形
			<rect height="20" width="200" rx="10" ry="2"></rect>//rx,x轴上面你的圆角,ry ,y轴上面你的圆角
#####		2.1.3:画圆
			<circle r="50" cx="50" cy="220"></circle>//r是圆的半径
			<ellipse rx="100" ry="30" cx="400" cy="200"></ellipse>//椭圆形,rx,x轴上面的半径,ry,y轴上的半径
			polyline{fill:transparent;stroke:res;strokeWidth:3px;}
			<polyline points="0 0,50 50,100 100"></polyline>
#####		2.1.4:画多边形和文本
				polylion{fill:transparent;stroke:res;strokeWidth:3px;}
				<polylion points="0 0,50 50,100 100"></polyline>
				text{stoke:blue;}
				<text x="300" y="50" >哈哈哈哈</text>
#####		2.1.5透明度和线条样式
			circle{stroke-opaity:0.1;fill-opacity:0.5;stroke-linecap:butter,round,quires;//线端的样式
				stroke-line-join:miter,round,beval;
			}
#####		2.1.6:Path标签
			<path d="M 100 100 L 100 100"></path>//M moveto,L lineto,大写和小写有区别,大写且对位置,小写相对位置
			<path d="M 100 100 H 200 v 110 Z"></path>//M moveto,H竖直方向的距离,V是水平方向上的位置,Z是闭合区间,z不区分大小写
#####		2.1.7:圆弧
			<path d="M 100 100  A 100 50 0 1 1  150 200"></path>//100 100是七点,100 50是长短半径,0 是旋转弧度,第一个1(0):大弧度还是小弧度,1(0)是旋转方向(顺时针,逆时针)
#####		2.1.8:渐变
			<defs>
				<lineGradinet id="bg1" x1="0" y1="0" x2="0" y2="100%"  >
					<stop offset="0%" style="stop-color:green"></stop>
					<stop offset="100%" style="stop-color:red"></stop>
				</lineGradinet>
			<defs>
			<rect x="100" y="100" height="100" width="200" style="file:url(#bg1)">
#####		2.1.9:高斯模糊
			<filter id="gs">
				<feGaussianBlur in="SourceGraphic" stdDeviation="20"></feGaussianBlur>
				<rect x="100" y="100" height="100" width="200" style="filter:url(#bg1);filter:url(#gs);">
			</filter>
#####		2.3.0 :虚线和小动画
			line{
				stroke-dasharray:10px 20px 30px;//设置的是虚线和空白两种颜色,交替取值
				stroke-osashffset:10px;向左偏移10像素
			}
#####		2.3.1:viewbox
			<svg viewbox="0,0, 250,250"></svg> 	//设置比例尺
		
####	4:audio
		1:音频播放器
		<audio src="me.mp3"   controls></audio>
####	5:video 
		<video src="me.mp4"   controls></video>
### 三:API
	1:定位:需要地理位置的功能
	2:重力感应:需要手机装配了陀螺仪
	3:requuest-animation-frame(动画优化)
	4:history历史浏览记录
	5:localstorage(一直存在,关闭了浏览器也存在),sessionstorage(浏览器或者回话窗口关闭了就不存在了,信息存储)
	6:websocket 及时通信
	7:filereader 文件读取
	8:webworker (文件异步,提升性能,提升交互体验)
	9:fetch (传说中需要替代ajax的东西)
