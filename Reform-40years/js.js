// JavaScript Document
window.onload=function(){
	var wo=document.getElementsByTagName("span")[0];
	var li_cur=document.getElementsByTagName("li")[0];
	
	wo.onclick=function(){
		li_cur.style.display="block";
	}
	wo.ondblclick=function(){
		li_cur.style.display="none";
	}
	
	function header(){
		var speed = 50;
		var imgbox=document.getElementById("pi");
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
	header();
	
	function lunbo(){
		var speed = 50;
		var imgbox=document.getElementById("pict");
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
	lunbo();
}

