## 一:vue的基础知识
### 1:性能好
	操作dom是影响性能,因为操作DOM代价是昂贵的,重绘,重排,
	vue使用的虚拟Dom,也称为伪Dom
	所谓虚拟的dom即为伪dom,假的dom,它不是一个真实的dom,而是有js来模拟的出来具有dom结构的一个树形结构;
### 2:视图,数据分离
	只关心数据的变化,视图会跟着更新
### 3:维护成本低
	跟jquery相比,代码更小,更少,更简洁,开发维护比价放方便
### 4:MVVM
	数据逻辑层:model
	视图呈现:view
	数据到视图的桥梁:viewmodel
## 二:vue使用
#### 1.:插值表达式 {{'aaa'}}//字符串显示
#### 2.:{{1+1}} //计算表达式,js语句,不能写在里面但是三元表达式是可以的
#### 3.:{{name}}//差值表达式里面用到的值必须在data里面是定义过数据,只有数据先存在的时候,才能进行数据的双向绑定,第一次渲染后,动态添加的数据是不具备动态渲染的能力的;
```
 const app= new Vue({
		el:'#app',
		data:{
			name:"beiming",
			desc:"haha"
		}
	})
```
#### 4:通过索引方式改变,通过修改数组长度的方式,不能重新渲染视图
####	5:数组编译方法
   #####		1:push,prop,shift,unshift,reverse,splice 通过这些方法,修改数组,可以渲染视图
####	5:对象:新添加的属性, 不会渲染视图
   #####	1:app.$set(app.obj,'xxx','90');//vue提供方法
   #####		2:app是new vue()实例返回,app.obj是要修改的对象,xxx是要修改的属性,90是要修改的值
####	6:app.$el //vue挂载的dom对象,渲染视图是异步的
####	7:$nextTick
		```
		$nextTick(()=>{
				console.log('数据改变以后,视图已经修改完毕,才会执行该方法');
			})
		```
		
####	8:app.$mout('#app');动态挂载元素
## 三:常用命令
#####   1:v-pre:不会渲染的内容,v-cloak文件编译之前存在,编译之后就不存在了,v-once:始终显示第一次渲染的值,不会再被修改,v-html:显示字符串类型的代码,代码会被编译,v-text:文字处理,就算有代码的话,也会被当做字符串处理
#####	2:v-if:根据值显示是否显示里面的元素 元素会被先删除,再添加,v-else if:配合v-else来使用,v-else上面不能出现其他元素,v-else:配合v-else来使用,v-else上面不能出现其他元素,v-show:根v-if功能是一样的:控制元素的css显示和隐藏,不支持Template
#####	3:Template,模板,不会显示在页面
#####	4:v-bind:绑定属性
		v-bind:src,v-bind:href,v-bind:data-src
		简写: :src,:href,:data-src
		注意:class多个class用数组 :class="[red,blue]" 根据一个值确定是否添加(使用对象的方式):class="{red:true}"
#####	5:绑定style :style="{width:100px,height:100px}"
#####	6:绑定事件:v-on:click,简写@click,methods里面的函数不能和data里面的函数重名
#####	7:v-for
```
 <div v-for="{item,index} in arr" :key="index"></div>//在脚手架搭建的项目总必须要有key,key的值是唯一的,key值不能给Template
 注意:v-for="(key,value) in 8" 是循环的1-8的值
```
		
#####	 8:模板字符串:"`你好我是{{name}}_li`" name会和_li拼接出来的字符换
#####	 9:v-model:数据的双向绑定,radio,checkbox数据双向绑定,绑定是的多选框/单选框的value值,checkbox值也是放在数组里,,select绑定的值是option的value值,多选的时候绑定对应的是数组,input事件的时候触发
		v-model:lazy 触发input的change事件
		v-model:trim 删除值的前后空格
#####	 10:$event 在vue中,传递参数多个参数的话,e就不会被传递,vue使用$event来代替e传入
#####	 11:修饰符`<input @keyup.enter="add">` 按下enter的时候,触发事件
		配置键盘的值
		Vue.config.keyCode={
			f1-Key:112//必须是短横线分隔符,才可以
		}
		<input @keyup.f1-Key="add">//按下了键值是112的键
## 四:全局自定义指令,局部自定义指令
### 1:Vue.directive
	Vue.directive('slice',(el,bingding,vnode)=>{//函数方式
			el指令绑定的元素,
			binding:绑定的信息,
			vnode虚拟节点,修改虚拟节点就会触发视图更新
	})//自定义质量,可以通过v-slice使用指令
	```
	Vue.directive('slice',//对象方式,//全局自定义指令
		{
			bind(el,bingding,vnode){//第一绑定的时候触发
				const context=vnode.context;
				let length=bingding.arg||5;
				let initValue=context[bingding.expression].slice(0,length);
				var  numberFlag=bingding.modified.number;
				if(numberFlag){
					initValue=initValue.replace(/[^0-9]/,'');
				}
				initValue=initValue.slice(0,length);
				el.value=initValue;
				context[bingding.expression]=initValue;
				el.oninput=e=>{
					let value=e.target.value;
					if(numberFlag){
						value=value.replace(/[^0-9]/,'');
					}
					let val=value.slice(0,length);
					context[bingding.express]=val;
					el.value=val;
				}
			}
			update(el,bingding,vnode){//虚拟节点更新/修改的时候触发
				let content=vnode.context;
				var  numberFlag=bingding.modified.number;
				let value=content[bindings.expression];
				if(numberFlag){
					value=value.replace(/[^0-9]/,'');
				}
				el.value=value;
			},
			inserted(el){//获得焦点时触发
				el.focus();
			}
		}
	)//自定义质量,可以通过v-sclice使用指令
	const vm=new Vue({//局部自定义指令,只能在#app元素内部使用
		el:"#app",
		directive:{
			slice:(ele.bindings,vnode){
				
			}
		}
	})
	const vm=new Vue({
		el:"#app1"
	})//此处vm,vm1都是局部指令
	```
## 五:过滤器
####	1:不改变原有数据的情况,修改数据的展示格式,过滤器可以有多个,过滤器也可以定义局部的
	```
	data:{
		money:10000
	}
	{{money|toMoney(2)|ceshi}}
	Vue.filter('toMoney',(value,times)=>{
		consoe.log(value);1000
		return (value*2).toLocalString();
	})
	Vue.filter('ceshi',value=>{
		console.log(value);20000
		return value;
	})
	```
## 六:el,Template,render
####	1://渲染过程:先检测el绑定的元素->查看是否存在template,如果存在的话->查看是否存在render函数,如果存在render函数,按照render函数来渲染,如果不存在的话,就按照template来渲染
	
	const vm=new Vue({
		el:"#app",
		template:'<h2>{{msg}}</h2>',
		render(createElement){
			return createElement('h1',
			{
				class:'demo',
				style:{
					width:'100px';
					height:'2001px'
				}
			},
			'我是一个标题',
			['我是一个标题'.
			 createElement('p','我是一个p标签')
			]
			)
		}
	})
#### 2:jsx语法(rect中使用)
	const vm=new Vue({
		el:"#app",
		template:'<h2>{{msg}}</h2>',
		render(h){
			const tag="div";
			<tag class="demo" style={{color:'red',fontSize:'12px'}} on-click={{()=>{console.log('demo')}}}>
			我是标题一
			<p>我是一个p标签</p>
			</tag>
		}
	})
## 七:vue的生命周期
####	1:周期函数 $created,类似这样调用,可以调用vue里面的函数,和属性
	const vm=new Vue({
		el:'#app',
		data:{
			name:'111'
		}
		beforeCreate(){
			//不能获取data $data
		},
		created(){
			//可以拿到data
			//ajax
		},
		beforeMount(){
			//el还没有进行虚拟dom的编译,{{name}}还没有被编译
		},
		mounted(){
			//也可以调用ajax,推荐在这里,
			//挂载完毕,{{name}}已经被编译为具体的数据
		},
		beforeUpdate(){
			//更新之前,可以在这里面操作需要修改的data里面的数据
		},
		updated(){
			//更新完毕,不要再这里进行数据操作,不然的话可能导致死循环
		},
		beforeDestroy(){
			//销毁之前,销毁定时器
		},
		destroyed(){
			
		}
		
	})
	周期函数不是methods里面的函数

##  八:计算属性和侦听器
####	1:computed//计算属性,可以使用多个属性得到一个新的属性,计算属性不是data里面的属性,定义在data的外面 
	const vm=new Vue({
		el:'#app',
		data:{
			name:'shanshan',
			age:'18',
			p:''
		},
		methods:{
			getPerson(){
				this.p=`姓名+${this.name}+年龄+${this.age}`;
			}
		},
		computed:{
			person(){//{{person}} 这样可以调用.如果数据不修改,则不会执行该舒心
				return `姓名+${this.name}+年龄+${this.age}`
			},
			person1:{
				get(){
					return this.n+this.n1;
				},
				set(val){
					const avg=val/2;
					this.n=this.n1=avg;
				}
			}
			
		},
		mounted(){
			this.getPerson();
		}
		,
		watch:{//不会再第一次渲染页面的执行,可以在首次加载的时候,手动触发
			name(){//监听name值的变化
				this.p=`姓名+${this.name}+年龄+${this.age}`;
			},
			age(){//监听age的变化
				this.p=`姓名+${this.name}+年龄+${this.age}`;
			}
			复杂写法
			name:{
				handler(){
					this.p=`姓名+${this.name}+年龄+${this.age}`;
				},
				immediate:true;是否立即执行这个函数,在第一次渲染时候,会执行handler函数
			},
			age:{
				handler(){
					this.p=`姓名+${this.name}+年龄+${this.age}`;
				}
			}
		}
	})
	vm.$watch('name',()=>{
		console.log('侦听name的变化');
	})
####	1:计算属性computed和method区别,
		computed,有缓存机制,数据发生改变才会触发,method没有缓存机制,每次都会触发
####	2:computed和wathc区别,
		computed可以一次观察多个属性,相当于给vue添加了一个属性,不可执行异步
		watch一个函数只能观察一个属性,观察的是vue本身的属性,可以执行异步
####	3:数据查找顺序 data->methods->computed,在其中一个找到,就不会继续往下找

## 九:组件初识
	Vue.components('hellow-word',{//,全局组件,在命名时候就算是使用大驼峰和小驼峰命名的时候,调用组件的时候还是使用中划线连接
			data(){
				return {
					msg:'hellow world'
				}
			},
			template:'<div>{{msg}}<div/>'
		})
		const vm=new Vue({
			el:'#app',
			components:{//局部组件,使用方式和全局组件一致
				hellow-word:{
					data(){
						return msg:'hellow word'
					},
					template:`<div>{{msg}}</div>`
				}
				
			}
		})
## 十:组件传递数据和属性校验
	const vm=enw Vue({
		el:'#app',
		components:{
			props:['a','b'],组件使用到的属性,这些属性不会保留到组件上,
			prop:{
				content:{
					type:Array,
					default:()=>[1,2,3]//当属性类型是Array或者是对象的时候,设置默认值必须是一个函数返回默认值
				},
				title:{
					type:String,
					required:true,//必填属性
					default:'默认值'
				},
				count:{
					type:number;
					validator(value)=>{
						return value>=10;
					},
					required:true;
				}
			}
			myContent:{
				template:'<div><h3><p></p></h3></div>'
			}
		}
	})
## 十一:组件间通信
###  1:父组件向子组件传值 
		方法:属性,$parent,provide
####		1:父组件向子组件传值,$atrr获得所有的绑定属性,$parent父组件实例,可以链式调用,$parent.$parents,子组件是在挂载完以后才出现的,
			const vm=enw Vue({
				el:'#app',
				data:{
					content:'我是内容,我是内容,我是内容我是内容我是内容',
					title:'我是标题'
				}
				components:{
					props:['a','b'],组件使用到的属性,这些属性不会保留到组件上,
					prop:{
						content:{
							type:Array,
							default:()=>[1,2,3]//当属性类型是Array或者是对象的时候,设置默认值必须是一个函数返回默认值
						},
						title:{
							type:String,
							required:true,//必填属性
							default:'默认值'
						},
						count:{
							type:number;
							validator(value)=>{
								return value>=10;
							},
							required:true;
						}
					}
					myContent:{
						inheritAttrs:false,//没有被注册的属性,不会在行间显示
						template:'<div><h3><p></p></h3></div>'
					}
				}
			})


####		2:provide 共享属性,子组件和后代组件都可以使用

		const vm=enw Vue({
				el:'#app',
				provide:{
					content:'我是内容,我是内容,我是内容我是内容我是内容',
					title:'我是标题'
				}
				components:{
					props:['a','b'],组件使用到的属性,这些属性不会保留到组件上,
					prop:{
						content:{
							type:Array,
							default:()=>[1,2,3]//当属性类型是Array或者是对象的时候,设置默认值必须是一个函数返回默认值
						},
						title:{
							type:String,
							required:true,//必填属性
							default:'默认值'
						},
						count:{
							type:number;
							validator(value)=>{
								return value>=10;
							},
							required:true;
						}
					}
					myContent:{
						inheritAttrs:false,//没有被注册的属性,不会在行间显示
						inject:['title']//可以拿到provide里面的title的数据
						template:'<div><h3><p></p></h3></div>'
					}
				}
			})
###		2:子组件向父组件传值  $children拿到子组件的实例,可以链式调用,
			方法:$chiildren,$refs,$listeners,$emit(),@click.native
			<div ref="dom"></div>
			<my-content @click.natvie="func"></my-content>//组件普通的绑定事件无法生效,通过@click.native可以把组件变成原生的dom元素,可以触发事件,不推荐使用
			<my-content @click="func"></my-content>
####			1:ref  
			所有通过v-on绑定事件都放在$listeners里面,this.$emit('click',msg);//msg是传递的参数,可以触发自定义事件
				const vm=new Vue({
						el:'#app',
						provide:{
							content:'我是内容,我是内容,我是内容我是内容我是内容',
							title:'我是标题'
						},
						methods:{
								func(data){
									console.log(data);
								}
						},
						mounted(){
							console.log(this.$refs.dom);//拿到绑定ref属性的元素,当有多个带有ref属性的元素,只会拿到一个,如果是通过for循环生成的元素,可以全部拿到,ref在子组件上,就可以拿到子组件的实例
						},
						components:{
							myContent:{
								inheritAttrs:false,//没有被注册的属性,不会在行间显示
								inject:['title']//可以拿到provide里面的title的数据
								methods:{
									cmpFunc(){
										console.log('cmp');
									},
									handleClick(){
										console.log(this.$listeners);
										this.$listeners.click();//执行的是父组件的函数
										this.$emit('click','传值给父组件');主动触发事件
									}
								},
								template:'<div><h3><p @click="handleClick"></p><button v-on="$listeners"></button></h3></div>' $listeners会把父组件所有的事件绑定在子组件上,不能传递参数呢
							}
						}
					})

###	3:组件兄弟间传递数据;
	 1:event bus事件总线
	 2:vue实例
		Vue.prototype.bus=new Vue();
		 
		const vm=new Vue({
			el:'#app',
			components:{
				con:{
					data(){
						return {
							content:'con1'
						}
					},
					created(){
						this.bus.$on('click',content=>{
							conssole.log(content);
							this.content=content;
						})
					}
					,
					template:'<div class="content">{{content}}</div>'
				},
				con1:{
					data(){
						return inputVlue:'';
					},
					methods:{
						this.bus.$emit('click',this.inputValue);
					}
					template:'<div class="content">
					 <input type="text" v-model="inputVal"/>
					 <button @click="handleClick">提交</button>
					</div>'
				}
			}
		})
### 3:组件双向通信
	1:<my-con :value="count" @input="handleInput" ></my-con>
	2:<my-con v-model="count" ></my-con>
	3:<my-con :value="count" @update:value="handleInput" ></my-con>
	4:<my-con :value.sync="count" ></my-con> 相当于第三种写法
	Vue.component('mycon',{
		props:['value'],
		mounted(){
			setinterval(=>{
				let value=this.value+1;
				//this.$emit('input',value);
				this.$emit('update:value',value);
			},1000)
		},
		temp;ate:`<div>{{value}}</div>`
	})
	const vm=new Vue({
		el:'#app',
		methods:{
			handleInput(value){
				this.count=value;
			}
		}
		data:{
			count:300
		}
	})


## 十二:插槽
```
<my-button type="success" content="成功按钮">自由定义的文字
	<template v-slot:second></template>//绑定使用命名的插槽,v-slot:简写是一个#
</my-button>
 const vm=new Vue({
	 el:'#app',
	 components:{
		 my-button:{
			 props:['type','content'],
			 template:`<button class="button" :class="type"><slot></slot><slot name="second"></slot></button>`//slot会被编译成"自由定义的文字",替换的是组件中间的区域,默认替换的是没有名字slot有的话则不替换
		 }
	 }
 })
 <template slot-scope="scope">
  <el-button @click="lookVideoInfo(scope.row)" size="mini" type="primary">查看</el-button>
  <el-button size="mini" @click="editVideoInfo(scope.row)" type="success">编辑</el-button>
   <el-button
	v-if="scope.row.isDisabled"
	type="success"
	size="mini"
	@click="enableVideo(scope.row)">
	启用
  </el-button>
  <el-button
	v-if="!scope.row.isDisabled"
	type="danger"
	size="mini"
	@click="disabledVideo(scope.row)"
  >禁用</el-button>
</template>
1.:这里slot-scope就是使用vue的插槽
2.:scope里面存储了两个值,scope.index,scope.row,前者是当前数据的index值,后者是一个对象里面包含了该条数据的所有的信息	
```
## 十三:子组件和父组件传值 prop
	子组件
	<template>
	  <div class="tag-input">
	    <el-input
	      v-show="inputVisible"
	      ref="saveTagInput"
	      v-model="inputValue"
	      class="input-new-tag"
	      size="small"
	      @keyup.enter.native="handleInputConfirm"
	      @blur="handleInputConfirm"
	    />
	    <el-button v-show="!inputVisible" class="button-new-tag" icon="el-icon-edit" size="small" @click="showInput">{{ content }}</el-button>
	  </div>
	</template>
	  props: {
	  valueObj: {父组件的属性值,父组件中划线命名的属性,在子组件用小驼峰属性接收
	    type: Object,
	    default: () => {
	      return {}
	    }
	  },
	  content: {父组件的属性值,父组件中划线命名的属性,在子组件用小驼峰属性接收
	    type: Number,
	    default: () => {
	      return 0
	    }
	  }
	},
	父组件
	<el-table-column label="排序编号" align="center" prop="sort" sortable>
	  <template slot-scope="scope">
	    <TagInput
	      :value-obj="scope.row"绑定属性,传递属性值给子组件
	      :content="scope.row.sort"绑定属性,传递属性值给子组件
	      @inputConfirm="inputConfirm"/>
	  </template>
	</el-table-column>
	import TagInput from '@/components/TagInput',父组件引入子组件
	components: { TagInput },父组件要注册子组件,
##  十四:路由跳转
####	1:跳转和传递值: this.$router.push({ name: 'lookVideoInfo', query: { relationId: videoInfo.relationId }})
		name是路由定义好的路由名称,query是路由传递的参数
####	2:接收值
		this.$route.query.relationId,//relationId是传递参数的名字,注意:接收参数用的是this.$route,传递参数使用的this.$router
####	3:接收url地址中的参数
		this.$route.query.pageNo//注意此处使用的是this.$route,pageNo是参数的名字
##  十五:脚手架
####	1:命令:
		  npm install -g @vue/cli 安装脚手架,用于生成项目
		  npm install -g @vue/cli-service-global  快速原型开发,编译vue文件,
		  npm uninstall vue-cli g //如果之前安装过旧版本(非3.x)的脚手架,需要先卸载旧版本
		  npm install -g @vue/cli-init ;拉取旧版本 如果仍然需要旧版本的vue init功能,可以全局安装一个桥接工具,
		  vscode 高亮插件 Vetur
####	  2:vue文件
		  <template></template>标签,中间放的是的dom元素
		  <script>
		  export default{
			  //写数据逻辑处理js文件的地方
		  }
		  </sctipt>
		  <style>
		  .demo{color:red}
		  </style>
####		3:启动vue项目
			vue serve App //默认是的app.vue,可以省略app 直接写 vue serve
####		4:在组件中,调用自己组件的名字,必须给组件一个name属性(树形例子)
## 十六:利用脚手架搭建项目
####	1:命令:
#####		1:创建项目;vue create vue-app vue-app是项目的名字,可以自定义
		  创建项目的时候会涉及到很多选择,要注意区分
#####		2:运行服务器 npm run serve
#####		3:在项目的根文件夹下,可以添加vue.config.js作为自己对项目的配置文件(例如webpack的一些配置)
####	2:vue ui 可以在线图形化管理界话创建项目
####	3:路由 router
		添加路由 vue add router 
		linkExactActiveClass: 'active-exact',当前路由包含该路由就渲染的当前样式
		linkActiveClass: 'active',当前路由,完全匹配才渲染的路由样式
		routes: [
		  {
		    path: '/',
		    name: 'home',
		    component: Home
		  },
		  {
		    path: '/about',
		    name: 'about',
		    // route level code-splitting
		    // this generates a separate chunk (about.[hash].js) for this route
		    // which is lazy-loaded when the route is visited.
		    component: function () { //这是为了懒加载,加快第一页面的加载速度,当组件被访问的时候才会加载
		      return import(/* webpackChunkName: "about" */ './views/About.vue')
		    }
		  }
		]
####	4:使用路由器 tag规定router-link用什么标签来渲染,router-view路由连接要显示的区域
		<div id="app">
		<div class="header">
		  <ul class="nav">
					<router-link tag="li" to="/">首页</router-link> |
					<router-link tag="li" to="/learn">课程学习</router-link>|
					<router-link tag="li" to="/student">学员展示</router-link> |
					<router-link tag="li" to="/about">关于</router-link>|
					<router-link tag="li" to="/community">社区</router-link> |
				</ul>
		</div>
		<router-view class="view" />
	  </div>
		注意:页面级组件放在view里面,在页面上引入的其它组件则放在components里面
		注意:redirect:'/community/academic',当进入当前路由的时候,默认展示重定向后路由的信息
####	5:路由操作
		this.$router.push(src);//
		[a,b,c]->[a,b,c,d]->回退->[a,b,c]->回到到c页面
		this.$router.replace(src);//替换当前页面,如果回退的话,直接回退到上一个页面
		[a,b,c]->[a,b,d]->回退->直接到b页面
		
		this.$router.go(0);0是刷新当前页面,-1向前跳一个页面,1向后跳转一个页面
##  十七:导航守卫(组件内守卫)
####	1:beforeRouteLeave//路由跳转之前
		beforeRouteLeave(to,from ,next){
				//to,要跳转的页面,from 当前页面,next 是否进行跳转 next()执行就跳转,不执行就不跳转
			},
####	2:beforeRouteEnter{//路由进来之前,
     	beforeRouteEnter(to,from,next){
			//to:当前页面, from:来源页面, next:执行就进来了,不执行就不进来,这个时候this是defined
			next(vm=>{});//vm就是vue的实例
	}
####	3:beforeRouteUpdate//这里面不能通过this.$route来获取参数,因为获取的还是之前的参数
		beforeRouteUpdate(to,from,next){
		const id=to.params.id;
		this.getId(id);
	},
####	4:路由地址传递信息
	路由配置设置
		{
			path:'/questioin/:id',
			name:'question',
			component:()=>import('./views/Questions.vue')
		}
		跳转页面静态设置
		<router-link
			:to="{name:'question',params:{id:question.questionId}}"
			tag="li"
		  v-for="question in questionList"
		  :key="question.questionId"
		>
		  {{ question.title }}
		</router-link>
		动态设置: this.$router.push({ name: 'lookVideoInfo', params: { relationId: videoInfo.relationId }})
				this.$router.push({ name: 'lookVideoInfo', query: { relationId: videoInfo.relationId }})
		页面接收
		this.id=this.$route.params.id;//注意这里是$route不是$router
		this.id=this.$route.query.id;//注意这里是$route不是$router
####	5:全局守卫
		在main.js里面,router.beforeEach((to,from,next)=>{
			//无论跳转到那个路由,都会进这个函数,如果没有next()执行就无法跳转
		}),
		beforeResolve(to,from,next);//路由加载完成
		afterEach(to,from,next)//路由加载完成以后
		
####	6:独享守卫,写在路由的配置文件里面
	
		{
			path:'/home',
			name:'home',
			component:Home,
			beforeEnter(to,from,next){//独享守卫,当跳转进home路由的时候触发,如果不next()执行,无法进入
				
			}
		},
		先全局守卫->独享守卫->组件内守卫
#### 全局守卫
- beforeEach
- beforeResolve
- afterEach

#### 路由独享守卫
- beforeEnter

#### 组件内守卫
- beforeRouteLeave 当离开这个路径时执行
- beforeRouteEnter 
- beforeRouteUpdate mounted
- to from next 


### 进入某一个路径时，执行顺序
- beforeEach -> beforeEnter -> beforeRouteEnter -> beforeResolve -> afterEach 
## 十八路由元信息
    应用场景 在需要登录的才能查看的页面进行去权限校验
#### 1:配置需要使用权限的路由
		{
		path:'/student',
		name:'student',
		component:()=>import('./views/Student.vue'),
		meta:{
			login:true
		}
#### 2:在路由的全局守卫中进行登录校验
		router.beforeEach((to,form,next)=>{
			console.log();
			const needLogin=to.matched.some(item=>item.meta&&item.meta.login);
			if(needLogin){
				const isLogin=document.cookie.includes('login=true');
				if(isLogin){
					next();
				}else{
					const login=window.confirm('该页面需登录,请登陆后操作');
					if(login){
						next('/login');
					}
				}
			}else{
				next();
			}
		});
## 十九vuex状态管理

	命令:vue add vuex
	$store 状态管理对象
### state
	```
	 state: {
	  name:'ss',
		age:'18',
		look:'piaoliang',
		studentlist:[]
	}
	===========================
	this.$sotre.state.xxx 获取state里面的某个属性
	import {mapState} from 'vuex' 导入,mapState对象 
	mapState(['name','age','look');拿到vuex state里面的值 ,返回值是一个对象,正好对应计算属性
		{
			name:function(){},
			age:function(){},
			look:function(){}
		}
	computed:{
		...mapState('name','age','look')//三个点...计算符,拼接对象
	}
	...mapState({
		storeName:state=>state.name//修改vuex里面name的属性(解决和data里面name属性的冲突)
	})
	```
 ####    2:getters
   ```
   配置
   getters:{//类似于vue里面的计算属性,根据data里面的值得到一个新的值
     person(state){
   		return `姓名:${state.name} 年龄:${state.age}`;
   	},
   	newStudentList(state){
   		 return state.studentlist.map(student=>`这是姓名${student.name} 这是年龄:${student.age}`)
   	}
   }
   this.$store.getters.xxx 获取gettes里面的属性
   import {mapGetters} from 'vuex' 导入mapGetters
   mapGetter(['newStudentList','person']);拿到vuex state里面的值 ,返回值是一个对象,正好对应计算属性
   	{
		person(){
			return 'xxx'
		},
   		newStudentList:function(state,getters){
			return state.studentlist.map(student=>`这是姓名${student.name} 这是年龄:${student.age} 这是getters:${getters.person})`
		}
   	}
   computed:{
   	...mapGetters('name','age','look')//三个点...计算符,拼接对象
   }
   ...mapGetters({
		newPerson:'person'//修改vuex里面person的属性(解决和data里面name属性的冲突)
   })
   ```
#### 3:mutations 不能放异步代码
	 在严格模式下,vuex不允许外界修改vuex的state里面的数据,vuex提供了mutations函数,可以在里面声明方法,在外界调用,
#####	 1:第一种方法
	 ```
	 配置:mutations,不能放异步代码
	  mutations: {
	 		changeSudentList(state,{tepObj,name,age}){//第二个参数是传递进来的参数,所以所有的参数都放在第二个参数里面
	 			state.studentlist.push(tepObj);
	 			state.name=name;
	 			state.age=age;
	 		}
	 }
	 调用:
	  this.$store.commit('changeSudentList',{tepObj,name:'11',age:'222'})
	  ```
#####	 2:第二种方法
	```
	 import {mapState,mapGetters,mapMutations} from 'vuex'
	 
	 methods:{
	 	...mapMutations(['changeSudentList']),//注意个state,getters的区别,这是在methods
	 	handleClick(){
	 		const tepObj={
	 			name:this.name,
	 			age:this.age,
	 			look:'漂亮',
	 			key:+new Date()
	 		}
	 		// this.$store.state.studentlist.push(obj);
	 		// this.$store.commit('changeSudentList',{tepObj,name:'11',age:'222'})
	 		this.changeSudentList(tepObj);
	 	}
	 }
```	 
#### 4:Actions 和mutations不同的地方就是可以使用异步代码
#####		1:配置
```
			mutations: {
				changeSudentList(state,{tepObj,name,age}){
					console.log(tepObj);
					state.studentlist.push(tepObj);
					state.name=name;
					state.age=age;
				}
			},
		actions: {
				changeSudentList({commit},payload){//commit是主动触发commit函数,payload是参数
					setTimeout(()=>{
						commit('changeSudentList',payload)//触发的是mutations的changeSudentList方法
					},1000)
				}
		}
```
#####		2:使用:第一种方法
```
		methods:{
			// ...mapMutations(['changeSudentList']),
			handleClick(){
				const tepObj={
					name:this.name,
					age:this.age,
					look:'漂亮',
					key:+new Date()
				}
				// this.$store.state.studentlist.push(obj);
				// this.$store.commit('changeSudentList',{tepObj,name:'11',age:'222'})
				// this.changeSudentList(tepObj);
				 this.$store.dispatch('changeSudentList',{tepObj,name:'11',age:'222'});
			}
		}
```
#####		3:抵用第二种方法
```
		import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
		methods:{
			// ...mapMutations(['changeSudentList']),
			...mapActions(['changeSudentList']),
			handleClick(){
				const tepObj={
					name:this.name,
					age:this.age,
					look:'漂亮',
					key:+new Date()
				}
				// this.$store.state.studentlist.push(obj);
				// this.$store.commit('changeSudentList',{tepObj,name:'11',age:'222'})
				// this.changeSudentList(tepObj);
				// this.$store.dispatch('changeSudentList',{tepObj,name:'11',age:'222'});
				this.changeSudentList({tepObj,name:'11',age:'222'})
			}
		}
```
## 二十:module
```
state 会放入到每一个模块下面,getters,mutations,actions会直放到全局里面
import student from './student'
import learn from './learn'
Vue.use(Vuex)
export default new Vuex.Store({
  strict:process.env.NODE_ENV!=='production',
  modules:{
	  student,//两个外部state模快 和index文件见在同一个文件夹下
	  learn
  }
})
```

#### student.js
```
export default{
	state: {
	  name:'ss',
		age:'18',
		look:'piaoliang',
		key:'',
		studentlist:[]
	},
	getters:{//类似于vue里面的计算属性,根据data里面的值得到一个新的值
		  person(state){
				return `姓名:${state.name} 年龄:${state.age}`;
			},
			newStudentList(state,getters){
				 return state.studentlist.map(student=>`这是姓名${student.name} 这是年龄:${student.age} 这是getters:${getters.person}`)
			}
		},
	mutations: {
				changeSudentList(state,{tepObj,name,age}){
					state.studentlist.push(tepObj);
					state.name=name;
					state.age=age;
				}
	},
	actions: {
				changeSudentList({commit},payload){
					setTimeout(()=>{
						commit('changeSudentList',payload)
					},1000)
				}
	}
}
```
#### lean.js
```
export default{
	namespaced:true,
	state:{
		courseName:'js精英课堂',
		price:10
	},
	getters:{
		coursePrice(state){
			return '¥'+state.price;
		}
	},
	mutations:{
		changePrice(state,{price}){
			state.price=price;
		}
	},
	actions:{
		
	}
}
```
### 获取vuex中的数据 无namespaced情况
	```
	获取state:this.$store.state.moduleName.xxx  {{$store.state.courseName}}
	获取getters,mutations,action:
	获取getters:this.$store.getters.xxx   {{$store.getters.coursePrice}}
	获取mutations:this.$store.commit('xxx'); this.$store.commit('changePrice',{price:20})
	获取actions:this.$store.dispatch('xxx'); this.$store.dispatch('changePrice',{price:20}})
	可以通过mapxxx的方可以拿到getters,mutations,action,但是拿不到state,如果想通过这样的方式获取state,需要在添加命名空间
	namespaced:true(在每一个模块的state的文件里面)
	```
### 获取cuex中的数据 有namespaced情况
	```
	获取state:this.$store.state.moduleName.xxx  {{$store.state.learn.courseName}}
	获取getters:this.$store['moduleName/getters'].xxx this.$store['learn/getters'].coursePrice  
	获取mutations:this.$store.commit('moduleName/xxx');  this.$store.commit('learn/changePrice',{price:20})
	获取actions:this.$store.dispatch('moduleName/xxx'); this.$store.dispatch('learn/changePrice',{price:20}})
	可以通过mapXXX:mapXXX('moduleName',['xxx']) 或者mapXXX('moduleName',{})
	
	{{courseName}}
	{{coursePrice}}
	import {mapGetters,mapState} from 'vuex'
	export default{
		methods:{
			handleClick(){
				this.$store.commit('learn/changePrice',{price:20})
			}
		},
		computed: {
			...mapGetters('learn',['coursePrice']),
			...mapState('learn',['courseName'])
		},
	}
	```