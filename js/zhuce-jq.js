// JavaScript Document
//选项卡
$(function(){
		$("#tab dt").eq(0).addClass("tab");
		$("#div_tab form").eq(0).addClass("from_tab");
		
		var sheng=new Array("北京","上海","深圳","成都","拉萨","杭州");
		
		for(var i in sheng){
			$("#address").append("<option value='"+i+"'>"+sheng[i]+"</option>");
			$("#address2").append("<option value='"+i+"'>"+sheng[i]+"</option>");
		}		
		$("#tab dt").click(function(){
			$("#tab dt").removeClass();
			$("#div_tab form").removeClass();
			$(this).addClass("tab");
			var i = $(this).index();
			$("#div_tab form").eq(i).addClass("form_tab");
		});	
		
		$("#changeimg").click(function(){
			$("#yz").attr("src","img/yzm.jpg");
		});		
		move();
});
function move(){
	var wid=$(document).width()+"px";
	$(".fu-down").animate({right:wid},10000);
	$(".fu-down").animate({right:"0px"},10000,move);
}
		
