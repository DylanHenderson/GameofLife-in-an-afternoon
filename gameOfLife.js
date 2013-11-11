
var alivePointsX = [];
var alivePointsChangedX = [];
var deadPointsX = [];

var draw = [["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
];


var initialise = function(){
	
	alivePointsX = [[5,7],[4,7],[3,7]];
	alivePointsChangedX = [];
	deadPointsX = [];
	


	
	console.log(countNeighbours(5,6));
	update();
	console.log("");

	console.log("");
	update();
	console.log("");

	console.log("");
	update();
	console.log("");

	console.log("");
	update();
	
	
	
	
	
	//console.log(alivePointsChangedX);
	


};

var countNeighbours = function(k,i){
	
	var count = 0;
	for(var z =0; z<alivePointsX.length;z++){
		if(alivePointsX[z][0]===k+1 && alivePointsX[z][1]===i+1){
			count++;
			break;
			
		}
	}
	
	for(var z =0; z<alivePointsX.length;z++){
		if(alivePointsX[z][0]===k-1 && alivePointsX[z][1]===i+1){
			count++;
			break;
			
		}
	}
	
	for(var z =0; z<alivePointsX.length;z++){
		if(alivePointsX[z][0]===k && alivePointsX[z][1]===i+1){
			count++;
			break;
			
		}
	}
	for(var z =0; z<alivePointsX.length;z++){
		if(alivePointsX[z][0]===k+1 && alivePointsX[z][1]===i-1){
			count++;
			break;
			
		}
	}
	
	for(var z =0; z<alivePointsX.length;z++){
		if(alivePointsX[z][0]===k-1 && alivePointsX[z][1]===i-1){
			count++;
			break;
			
		}
	}
	
	for(var z =0; z<alivePointsX.length;z++){
		if(alivePointsX[z][0]===k && alivePointsX[z][1]===i-1){
			count++;
			break;
			
		}
	}
	
	for(var z =0; z<alivePointsX.length;z++){
		if(alivePointsX[z][0]===k+1 && alivePointsX[z][1]===i){
			count++;
			break;
			
		}
	}
	for(var z =0; z<alivePointsX.length;z++){
		if(alivePointsX[z][0]===k-1 && alivePointsX[z][1]===i){
			count++;
			break;
			
		}
	}
	return count;
};



var update = function(){
	
	deadPointsX = [];
	
	
	
	 draw = [["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
			["0","0","0","0","0","0","0","0","0","0"],
];
	
	
	
	
	
	
	for(var i = 0; i < alivePointsX.length; i++){
		
	
		
		
		
		var x = alivePointsX[i][0];
		var y = alivePointsX[i][1];
		
		
		if (x<=9 && y<=9){
			draw[x][y] = "x";
		
		}
		
		
		
		try{
			var count = countNeighbours(x,y);
			if(count === 2 || count ===3){
				alivePointsChangedX.push([x,y]);
			}else{
				deadPointsX.push([x,y]);
			}
			
			
			for(var z =0; z< alivePointsX.length; z++){
				if(!(alivePointsX[z][0] === x && alivePointsX[z][1]===y+1)){
					count = countNeighbours(x,y+1);
					
					if(count===3){
						alivePointsChangedX.push([x,y+1]);
					}
				
				}
			}
			
			for(var z =0; z< alivePointsX.length; z++){
				if(!(alivePointsX[z][0] === x && alivePointsX[z][1]===y-1)){
					count = countNeighbours(x,y-1);
					
					if(count===3){
						alivePointsChangedX.push([x,y-1]);
					}
				
				}
			}
			
			for(var z =0; z< alivePointsX.length; z++){
				if(!(alivePointsX[z][0] === x+1 && alivePointsX[z][1]===y)){
					count = countNeighbours(x+1,y);
					
					if(count===3){
						alivePointsChangedX.push([x+1,y]);
					}
				
				}
			}
			
			for(var z =0; z< alivePointsX.length; z++){
				if(!(alivePointsX[z][0] === x-1 && alivePointsX[z][1]===y)){
					count = countNeighbours(x-1,y);
					
					if(count===3){
						alivePointsChangedX.push([x-1,y]);
					}
				
				}
			}
			
			for(var z =0; z< alivePointsX.length; z++){
				if(!(alivePointsX[z][0] === x+1 && alivePointsX[z][1]===y+1)){
					count = countNeighbours(x+1,y+1);
					
					if(count===3){
						alivePointsChangedX.push([x+1,y+1]);
					}
				
				}
			}
			
			for(var z =0; z< alivePointsX.length; z++){
				if(!(alivePointsX[z][0] === x+1 && alivePointsX[z][1]===y-1)){
					count = countNeighbours(x+1,y-1);
					
					if(count===3){
						alivePointsChangedX.push([x+1,y-1]);
					}
				
				}
			}
			
			for(var z =0; z< alivePointsX.length; z++){
				if(!(alivePointsX[z][0] === x-1 && alivePointsX[z][1]===y+1)){
					count = countNeighbours(x-1,y+1);
					
					if(count===3){
						alivePointsChangedX.push([x-1,y+1]);
					}
				
				}
			}
			
			for(var z =0; z< alivePointsX.length; z++){
				if(!(alivePointsX[z][0] === x-1 && alivePointsX[z][1]===y-1)){
					count = countNeighbours(x-1,y-1);
					
					if(count===3){
						alivePointsChangedX.push([x-1,y-1]);
					}
				
				}
			}
		}catch(err){
			console.log(err);
		}
	
	}
	
	for(var i = 0; i< draw.length; i++){
		console.log(draw[i]);
	}
	alivePointsX = [];
	
	for(var i = 0; i < alivePointsChangedX.length; i++){
		var x = alivePointsChangedX[i][0];
		var y = alivePointsChangedX[i][1];
		
		
		alivePointsX.push([x,y]);
		
		
	}
	alivePointsChangedX = [];
	
	
	for(var i = 0; i < deadPointsX.length; i++){
		var x = deadPointsX[i][0];
		var y = deadPointsX[i][1];
		
		
	
	
	}
	

};





initialise();