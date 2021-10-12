// JavaScript Document
window.onload=function(){
	function hotChange(){
		var current_index=0;
		var timer=window.setInterval(autoChange,3000);
		var button_li=document.getElementById("button").getElementsByTagName("li");
		var pic_li=document.getElementById("banner_pic").getElementsByTagName("li");
		for(var i=0;i<button_li.length;i++){
			button_li[i].onmouseover=function(){
				if(timer){
					clearInterval(timer);
				}
				for(var j=0;j<pic_li.length;j++){
					if(button_li[j]==this){
						current_index=j;
						button_li[j].className="current";
						pic_li[j].className="current";
					}else{
						button_li[j].className="but";
						pic_li[j].className="pic";
					}
				}
			}
			button_li[i],onmouseout=function(){
				timer=setInterval(autoChange,3000);
			}
		}
		function autoChange(){
			++current_index;
			if(current_index==button_li.length){
				current_index=0;
			}
			for( var i=0;i<button_li.length;i++){
				if(i==current_index){
					button_li[i].className="current";
					pic_li[i].className="current";
				}else{
					button_li[i].class="but";
					pic_li[i].className="pic";
				}
			}
		}
	}
	hotChange();
	
	function school(){
		var speed = 50;
		var imgbox=document.getElementById("imgbox");
		imgbox.innerHTML += imgbox.innerHTML;
		var span = imgbox.getElementsByTagName("span");
		var timer1 = window.setInterval(marquee,speed);
		imgbox.onmouseover = function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout = function(){
			timer1=setInterval(marquee,speed);
		};
		function marquee(){
			if(imgbox.scrollLeft > span[0].offsetWidth){
				imgbox.scrollLeft =0;
			}else{
				++imgbox.scrollLeft;
			}
		}
	}
	school();
	
	function tableChange(){
		var lis = document.getElementById("SwitchNav").getElementsByTagName("li");
		var spans=document.getElementById("SwitchBigPic").getElementsByTagName("span");
		var current_index=0;
		var timer=setInterval(autoChange,3000);
		for(var i=0;i<lis.length;i++){
			lis[i].onmouseover = function(){
				if(timer){
					clearInterval(timer);
				}
				for(var i=0;i<lis.length;i++){
					if(lis[i]==this){
						span[i].className = "sp";
						current_index = i;
					}else{
						span[i].className = "";
					}
				}
			}
			lis[i].onmouseout=function(){
				timer = setInterval(autoChange,3000);
			}
		}
		function autoChange(){
			++current_index;
			if(current_index == lis.length){
				current_index=0;
			}
			for(var i=0;i<lis.length;i++){
				spans[i].className ="";
			}
			spans[current_index].className = "sp";
		}
	}
	tableChange();
}