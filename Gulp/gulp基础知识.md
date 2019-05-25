#### 1:gulp也是构建工具,相对一webpack gulp配置更为简单,基于文件流对文件流进行操作,任务运行器,webpack则是把每一个文件当做模块来处理,webpack更加灵活,强大
#### 2:四个API
	1:gulp.src();
		输出（Emits）符合所提供的匹配模式（glob）或者匹配模式的数组（array of globs）的文件。 将返回一个 Vinyl files 的 stream 它可以被 piped 到别的插件中
	2:gulp.dest();
		能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它
	3:gulp.task();
		定义一个使用 Orchestrator 实现的任务（task）。
	4:gulp.watch();//监听当前文件的改变
		监视文件，并且可以在文件发生改动时候做一些事情。它总会返回一个 EventEmitter 来发射（emit） change 事件。
### 3:插件:
		var gulp = require('gulp');
		
		//压缩html
		var  htmlclean=require('gulp-htmlclean');
		//压缩处理图片
		var imgMin=require('gulp-imagemin');
		//压缩js
		var ugliFy=require('gulp-uglify');
		//去掉js中的调试语句
		var stripDebug=require('gulp-strip-debug');
		//less转换为css
		var less=require('gulp-less');
		//压缩js
		var cleanCss=require('gulp-clean-css');
		//添加前缀
			var postCss=require('gulp-postcss');
			var autoprefixer=require('gulp-autoprefixer');
		//构建本地服务器+
		var connect=require('gulp-connect');
		//自动监听
		
		
		
		
		var  folder={
			src:'src/',
			dist:'dist/'
		}
		var devMod=process.env.NODE_ENV=="development";
		gulp.task('html',function(){
			var page=gulp.src(folder.src+'html/*')
			.pipe(connect.reload());
			if(!devMod){
				page.pipe(htmlclean());		
			}
			page.pipe(gulp.dest(folder.dist+'html/'));//gulp.dist写入文件里面是文件地址
		});
		gulp.task('css',function(){
			var page=gulp.src(folder.src+'css/*')
			.pipe(connect.reload())
			.pipe(less());
		//	.pipe(postCss([autoprefixer()]))
			if(!devMod){
				page.pipe(cleanCss());
			}
			page.pipe(gulp.dest(folder.dist+'css/'));//gulp.dist写入文件里面是文件地址
		});
		gulp.task('js',function(){
			var page=gulp.src(folder.src+'js/*')
			.pipe(connect.reload());
			if(!devMod){
				page.pipe(stripDebug());
				page.pipe(ugliFy());
			}
			page.pipe(gulp.dest(folder.dist+'js/'));//gulp.dist写入文件里面是文件地址
		});
		gulp.task('img',function(){
			gulp.src(folder.src+'images/*')
			.pipe(imgMin())
			.pipe(gulp.dest(folder.dist+'images/'));//gulp.dist写入文件里面是文件地址
		});
		gulp.task('server',function(){
			connect.server({
				port:8888,
				livereload:true
			});
		});
		//监听文件变化,当文件被修改的时候,自动打包文件
		gulp.task('watch',function(){
			gulp.watch(folder.src+"html/*",['html']);
			gulp.watch(folder.src+"js/*",['js']);
			gulp.watch(folder.src+"css/*",['css']);
		})
		gulp.task('default',['html','css','js','img','server','watch']);//html为依赖任务,执行default,依赖html