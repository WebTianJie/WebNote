### 1:webpack前端你自动化构建工具
### 2:前端工程化:
####  1:前端工程化是根据业务的特点,将前端的开发流程的规范化,标准化,它包括了的
		  	开发流程,基础选型,代码规范,构建发布等,用于提升前端工程师的的开发的开发
		  	效率和代码质量
####  2:前段工程化体系
			1:node服务层:
			2:web应用层:
			  2.1:模板,less,Es6
			  2.2:开发
			  2.3:测试
			  2.4:自动化检测(有bug)->回归开发
			  2.5: 测试
			  2.6:部署
			  	2.6.1:压缩
			  	2.6.2:md5
			  	2.6.3:合并
			3:前端运维层
####	3:工程化,模块化,组件化
		  
		   1:工程化,是一种思想
		   2:模块化:代码服用,封装模块(轮播图组件),工程化体现,高内聚,低耦合
		   3:组件化:页面上ui的拆分,工程化的体现.高内聚,低耦合
		   		3.1:页面上的每一个独立的,可视/可交互的区域,视为一个组件
		   		3.2:每个组件对应一个目录,组件需要的资源都在这个目录里面:
		   		3.3:组件的独立性
		   		3.4:页面可以有各个组件形成完整的界面
####	4:前端模块化(同步)
		
#####			1:将共同的代码抽离,达到最大的复用
#####			2:模块化实现
				1:函数形式
				2:命名空间形式
				3:立即执行函数
				4:模式增强(推荐)
#####			3:模式增强
				(function($){
					//里面可以直接使用$
					var a;
				})(jQuery)
			
				
#####			4:模块化规范
######				1:CommonJs
					1:每一个js文件,都是单独的文件,同步加载不用的模块的文件
					2:浏览器不自持commonjs
						1:核心思想
							暴露接口方式:module.exports=value;
										exports.XXX=value;
							暴露模块的本质是一个空对象
							引入模块    require(XXX);
				3:浏览器不兼容,浏览器缺少,module,exports,require,global四个环境变量,如果使用的话需工具转换
######		2:AMD(异步,浏览器支持AMD但是不支持require,需要require.js来支持),
			AMD的核心思想就是通过define来定义一个模块,然后使用require来加载一个模块
			AND的规范使用依赖于require.js
			define(moudleId,['moudle1','moudle2'],function(m1,m2){....})
######		3:CMD异步加载,跟AMD主要区别在于,AMD依赖前置,提前加载依赖,而CMD是就近加载,按需加载
				AMD的核心思想的就是使用define来定义一个模块使用requirejs来加载一个模块
				1:seajs,跟requiresJs使用有些相似
######		4:Es6	
			ES6自带模块化,可以使用import的关键字引入模块.可以通过export关键字来导出模块,功能比CMD,AMD
			更为强大,也是推荐使用的,但是由于ES6无法在浏览器中执行,所以,只能通过babel将不被支持的import的
			编译为当前受广泛支持的require
		
######		5:Less
		  1:注释://注释,只能被开发人员看到.不会编译到css的文件里面去,//**/的注释,是会被编译到css文件里面你的
		  2:变量:变量延迟加载,样式会找到自己的最近的变量使用{}
		  3:@import './trangle.less' 引入其它的less文件到本文件中          
		
####		6:webpack
#####			1:js:treeShaking:webpack:找到代码中真正被引用的代码,提出没有被使用的代码,     在打包的时候,开发环境:打包所有的方法,生产环境:会打印被使用到的到方法,没有用到的方法则不会被打包进去
						插件
						1:lodash-es:一致性,模块化的,高性能的js工具使用库,
						2:WebpackDeepScopeAnalysisPlugin:打包压缩代码的时候,深度去除无用代码
#####			2:css:treeShaking:找到样式中的没有使用到的样式,提出掉
				   	插件
	   			 1:css-loader,style-loader,打包样式文件
	   			 2:mini-css-extract-plugin,样式抽离到单独的文件
	   			 3:purifycss-webpack和puirify-css,剔除没引用到样式,html结构里面如果有注释的元素也还是会被匹配到的,无法剔除css样式
	   			 4:glob-all,群居匹配
				   			 
#####			3:less 打包less文件
						插件:
						1:less
						2:less-loader
#####			4:postcss
						插件:
						1:postcss,postcss-loader,autoprefixer(自动添加前缀),cssnano(css压缩),postcss-cssnext(把cssnext语法解析成css语法,本身会自动添加前缀,不和autoprefixer一起使用)
#####			5:html
					插件:
					1:html-webpack-plugin:自动添加打包生成的css和js文件
					2:clean-webpack-plugin:去掉重复的打包成的html或者js库
#####			6:图片
					插件:
					1:file-loader(打包输出图片)||url-loader(打包图片,可以设置把图片base64为编码输出),img-loader(压缩图片)
					2:html-loader
### 3:提取公共js代码(针对多入口文件)
				1:减少代码冗余,提高加载效率
### 4:本地服务器
				构建本地服务器
				插件
				1:webpack-dev-server(下载一个全局的),命令:webpack-dev-server,webpack-dev-server--open(自动在浏览器打开),webpack-dev-server--open--color(带上颜色提醒)
				2:监听:webpack-w,文件修改的时候,浏览器会实时的刷新(每次都会请求所有的数据)
				3:数据交互
						//引入式
						var json=require('../data.json')
						console.log(json);
						//ajax
						$.ajax({
							url:'http://localhost:9090/data.json',
							success:function(data){
								console.log(data);
							}
						})
				4:不刷新更新页面(每次请求修改过的数据)
						1:(style-loader)支持,css-loader不支持
						2:js开启热更新
							if(module.hot){
									module.hot.accept();
								}
		
				5:多套配置文件
						1:多个配置文件:webapck --config 配置文件名字
						2:配置文件中配置:
							  "scripts": {
								    "test": "echo \"Error: no test specified\" && exit 1",
								    "dev": "webpack --mode development",
								    "prod": "webpack --mod production"
								  }
										
		
		
		
		
		
		
		
		
		
		
		
		
		
		
