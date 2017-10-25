//toggle事件
$.fn.toggle = function( fn, fn2 ) {
    var args = arguments,guid = fn.guid || $.guid++,i=0,
    toggle = function( event ) {
      var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
      $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
      event.preventDefault();
      return args[ lastToggle ].apply( this, arguments ) || false;
    };
    toggle.guid = guid;
    while ( i < args.length ) {
      args[ i++ ].guid = guid;
    }
    return this.click( toggle );
};
$(function(){
	$('.warehouse a').click(function(){
		$('.meng').show();
		$('.choose-warehouse').show();
	})
	$('.choose-warehouse li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.choose-warehouse button').eq(0).click(function(){
		$('.meng').hide();
		$('.choose-warehouse').hide();
		$('.warehouse label').html($('.choose-warehouse ul').find('.active').html());
	})
	$('.choose-warehouse button').eq(1).click(function(){
		$('.meng').hide();
		$('.choose-warehouse').hide();
	})
	$('.choose-warehouse .close').click(function(){
		$('.meng').hide();
		$('.choose-warehouse').hide();
	})
	//首页input加减框
	$('.minus').click(function(){
		var num = $(this).parent().find('.num').val();
		num--;
		if(num<=1){
			num=1;
			$(this).parent().find('.num').css({'color':'#999'});
		}
		$(this).parent().find('.num').val(num);
	})
	$('.plus').click(function(){
		var num = $(this).parent().find('.num').val();
		num++;
		$(this).parent().find('.num').css({'color':'#000'});
		$(this).parent().find('.num').val(num);
	})
	$('.num').keyup(function(){
		if(this.value.length==1){
			this.value=this.value.replace(/[^1-9]/g,'')
		}else{
			this.value=this.value.replace(/\D/g,'')
		}
	})
	//分页
	$('.fenye .pagination li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	//商城筛选
	$(".filter .more").toggle(function(){
		$(this).find('label').html('收起');
		$(this).find('span').removeClass('fa-angle-down').addClass('fa-angle-up');
		$(this).parent().find('.filter-list').height('auto');
	},function(){
		$(this).find('label').html('更多');
		$(this).find('span').removeClass('fa-angle-up').addClass('fa-angle-down');
		$(this).parent().find('.filter-list').height('40px');
	})
	//排序
	$('.store-sort .sort').toggle(function(){
		$('.store-sort .sort span').removeClass('fa-sort-asc');
		$('.store-sort .sort span').removeClass('fa-sort-desc');
		$(this).find('span').removeClass('fa-sort-asc').addClass('fa-sort-desc');
	},function(){
		$('.store-sort .sort span').removeClass('fa-sort-asc');
		$('.store-sort .sort span').removeClass('fa-sort-desc');
		$(this).find('span').removeClass('fa-sort-desc').addClass('fa-sort-asc');
	})
	
	//商品详情tab
	$('.detail-left li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.left-content div').eq($(this).index()).show().siblings().hide();
	})
	
	//我的订单
	$('.myorder .tab li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//购物车全选
	$('.shopping-cart th input').change(function(){
		if($(this).is(':checked')) {
	    	$("input[type='checkbox']").each(function(){
				$(this).prop("checked",true);
			});
	
		}else{
			$("input[type='checkbox']").each(function(){
				$(this).prop("checked",false);
			});
	
		}
	})
	//帮助中心
	$('.help-left .flex').toggle(function(){
		$(this).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
		$(this).parent().css('height','auto');
	},function(){
		$(this).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
		$(this).parent().css('height','42px');
	})
	$('.help-left a').click(function(){
		$('.help-left a').removeClass('active');
		$(this).addClass('active');
		$('.help-right h4').html($(this).html());
	})
	//我要定制
	//颜色
	$('.color-input').click(function(){
		$('.meng').show();
		$('.choose-color').show();
	})
	$('.choose-color .flex span').click(function(){
		$('.meng').hide();
		$('.choose-color').hide();
	})
	$('.choose-color li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.choose-color .sub').click(function(){
		$('.color input').val($('.choose-color').find('.active').find('p').html());
		$('.meng').hide();
		$('.choose-color').hide();
	})
	$('.choose-color .cancel').click(function(){
		$('.meng').hide();
		$('.choose-color').hide();
	})
	//单选框
	$('.customize-classify input').click(function(){
		console.log($('.customize-classify input:checked').val())
		if($('.customize-classify input:checked').val()=='生态板'){
			$('.other').hide();
			$('.no-other').show();
			$('.duocheng').show();
			$('.color').show();
			$('.baozhuang').show();
		}else if($('.customize-classify input:checked').val()=='多层板'){
			$('.other').hide();
			$('.no-other').show();
			$('.duocheng').hide();
			$('.color').hide();
			$('.baozhuang').show();
		}else if($('.customize-classify input:checked').val()=='包装板'){
			$('.other').hide();
			$('.no-other').show();
			$('.duocheng').hide();
			$('.color').hide();
			$('.baozhuang').hide();
		}else if($('.customize-classify input:checked').val()=='其他'){
			$('.other').show();
			$('.no-other').hide();
		}
	})
	//--------------------获取验证码
	$('.getCheck').click(function(){
		$(this).attr('disabled','true');
		var i=60;
		var time='';
		time=setInterval(function(){
			i--;
			if(i>0){
				$('.getCheck').html(i+'秒');
			}else{
				clearInterval(time);
				$('.getCheck').html('免费获取');
				$('.getCheck').removeAttr('disabled');
			}
			
		},1000)
		
	})
})

