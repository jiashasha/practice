var op=new Array("北京","上海","深圳","成都","西安");

function tabclick(){
	var tab=document.getElementById("tab").getElementsByTagName("dt");
	var form=document.getElementById("div_tab").getElementsByTagName("form");
	for(i=0;i<tab.length;i++){
		tab[i].className='';
		form[i].className='';
		if(tab[i]==this){
			tab[i].className='tab';
			form[i].className='form_tab';
		}
	}
}

function changetab(){
	
	var tab = document.getElementById("tab").getElementsByTagName("dt");
	for(i=0;i<=tab.length;i++){
		tab[i].onclick=tabclick;
	}
}

function add(){
	var selobj=document.getElementById("address");
	var selobj2=document.getElementById("address2");
	//动态添加option
	for(var i in op){
		selobj.options.add(new Option(op[i],i));
		selobj2.options.add(new Option(op[i],i));
	}
}
window.onload=function(){
	add();
	changetab();
}


