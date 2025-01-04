function mincost(arr)
{ 
//write your code here
// return the min cost
	let minCost=0;
	arr.sort((a,b)=>(a-b));
	while(arr.length>1){
		let first=arr.shift();
		let second=arr.shift();
		minCost=first+second;
		arr.push(minCost);
		arr.sort((a,b)=>a-b);
		
	}
	
}

module.exports=mincost;
