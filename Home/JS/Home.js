// JavaScript Document
function change(myid,mode){
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){
		document.getElementById(myid).style.border="1px solid #eee";
		document.getElementById(myid).style.borderTop="none";
		
		document.getElementById(myid).parentNode.style.backgroundColor="#fff";
		document.getElementById(myid).parentNode.style.border="1px solid #eee";
		document.getElementById(myid).parentNode.style.borderBottom="none";
	}
	else{
		document.getElementById(myid).parentNode.style.backgroundColor="";
		document.getElementById(myid).parentNode.style.border="";
	}
}

function changeColor(){
	var trs = document.getElementById("tbl").getElementsByTagName("tr");
	for(var i=2; i<trs.length; i=i+2){
		trs[i].className = "even";
	}
}