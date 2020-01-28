document.getElementById("cH").addEventListener('click',setColor);

function setColor(){
	var arr = [1,2,3,4,5,6,7,8];
	var a = 0;
	a = 20 + Math.floor(Math.random()*10);
	//console.log(a);
	var b = 0;
	var id = setInterval(colorLoop,100);
	
	function stopInterval(){
	
		clearInterval(id);
	}
	function colorLoop(){
		
		b++;
		//console.log(b);
		document.getElementById("demo"+arr[0]).style.fill = "rgba(0,57,255,0.6)";
		document.getElementById("demo"+arr[1]).style.fill = "rgba(0,170,0,0.8)";
		document.getElementById("demo"+arr[2]).style.fill = "rgba(255,183,0,0.8)"; 
		document.getElementById("demo"+arr[3]).style.fill= "rgba(197,0,0,0.8)";
		document.getElementById("demo"+arr[4]).style.fill = "rgba(0,57,255,0.6)";
		document.getElementById("demo"+arr[5]).style.fill = "rgba(0,170,0,0.8)";
		document.getElementById("demo"+arr[6]).style.fill = "rgba(255,183,0,0.8)"; 
		document.getElementById("demo"+arr[7]).style.fill= "rgba(197,0,0,0.8)";
		
		if (arr[0] !== 8)
			arr[0] += 1;
		else
			arr[0] -= 7;
		
		if (arr[1] !== 8)
			arr[1] += 1;
		else
			arr[1] -= 7;
		
		if (arr[2] !== 8)
			arr[2] += 1;
		else
			arr[2] -= 7;
		
		if (arr[3] !== 8)
			arr[3] += 1;
		else
			arr[3] -= 7;
		
		if (arr[4] !== 8)
			arr[4] += 1;
		else
			arr[4] -= 7;
		
		if (arr[5] !== 8)
			arr[5] += 1;
		else
			arr[5] -= 7;
		
		if (arr[6] !== 8)
			arr[6] += 1;
		else
			arr[6] -= 7;
		
		if (arr[7] !== 8)
			arr[7] += 1;
		else
			arr[7] -= 7;
		
		if(b == a){
		   	stopInterval(id);
		}
			
	}
}
