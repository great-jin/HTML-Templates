// JavaScript Document
window.onload=function(){
	var box=document.getElementById("box");
	var gg_box=document.getElementsByClassName("gg_box");
	var gg_close=document.getElementsByClassName("gg_close");
	
	gg_close[0].onclick=function(){
		box.style.display="none";
		gg_box[0].style.display="none";
		}
	
	var g_left=document.getElementById("g_left");
	var g_right=document.getElementById("g_right");
	var g_close=document.getElementsByClassName("g_close");
	
	g_close[0].onclick=function(){
		g_left.style.display="none";
		}
	g_close[1].onclick=function(){
		g_right.style.display="none";
		}
		
	var con=document.getElementById("content");
	con.onmousemove=function(){
		con.style.background="#f10";
		}
	con.onmouseout=function(){
		con.style.background="green";
		}
}