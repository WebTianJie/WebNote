#### 1:css
        当行内块元素里面有文字的时候,外面的文字会跟里面的文字对其,没有文字的时候回跟元素的低部对齐,图片底部对其
#### 2:浮动清除问题
        当子元素里面存在浮动元素(float)的时候,其后面的非文本属性的元素(inline)和非文本元素,都在不能看到浮动元素
        都会在浮动元素的下面,此时元素的父元素不会包裹子元素
####  3:浮动清除方法:
  #####    1:父级元素设置:
                position:absolute;float:left/right;(内部都是把元素转换成了inline-block)display:inline-block;overflow:hidden;
  #####    2:父元素:
                after{content:'',display:block;clear:"both"}(推荐用法) 伪元素清除
#### 3:relative absolute
       absolute:相对第一有定位relative的元素相对定位,如果都没有,则相对于body来定位
       relative:相对自己原来的位置进行定位
#### 4:css权重值 (256进制)
         !important    Infinty
            行内样式		 1000
         id            100
          类/属性/伪类      	 50
          标签/伪元素                10
          通配符                            0 
      
#### 5:margin-top 
	   margin-top塌陷:当父元素和子元素都有margin-top值的时候,除非子元素的margin-top大于父元素的margin-top,否则的话,间距无效,
	   如果超过父元素的margin-topd的值得话,则父元素margin-top距离会增加(margin-top值不会变大),子元素和父元素的距离也并没有拉开
	   解决办法:
	   父级元素:position:absolute;float:left/right;(内部都是把元素转换成了inline-block)display:inline-block;overflow:hidden
#### 6:margin-bottom
       两个相邻的元素(上下),上面元素的margin-bottom和下面的元素的margin-top只会选择大的值生效,
       解决办法:不解决(设置上忙元素和下面元素的值)
#### 7:body默认的margin值:8px  
#### 8:盒模型
          在w3c:标准下面,元素的高度=在传统浏览器的模式(IE6以下，不含IE6版本或"QuirksMode下IE5.5+")下元素的高度(内容高度+border+padding)+margin
#### 9:form表单怪异现象(有些元素使用了传统的浏览器的模式)
#####	 1:type="submit" type="reset" type="button",type="text" select textarea在默认的情况下都带有了1px的border
##### 	2:【type="submit"】、【type="reset"】、button默认情况下会有6px的左右padding；
 	      height在mac系统下会比在winxp win7系统下少1px,只有16px,（12px的字体时高度为17px）;著作权归作者所有。
#####	3:【type="text"】默认情况下会有1px的上下padding；WinXP和Win7下高度为15px，Mac系统下为14px
#####	4:【type="checkbox"】默认情况下会有margin：3px 3px 3px 4px,并且宽/高度默认为13px(IE6，IE7默认大约是15px，Mac系统下只有9px)
#####	5:【type="radio"】默认情况下会有margin: 3px 3px 0 5px的外边，并且宽/高度默认为13px（IE6,IE7默认大约是15px,Mac系统下只有9px）
####	6:textarea默认情况带有1px的上下margin；

   	总结:在表单元素里面只有input和textarea遵循了w3c的渲染模式,其它的元素都遵循了传统浏览器的渲染模式
