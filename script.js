function mincost(arr)
{ 
//write your code here
// return the min cost
	let minCost=0;
	arr.sort((a,b)=>(a-b));
	while(arr.length>1){
		let first=arr.shift();
		let second=arr.shift();
		let sum=first+second;
		minCost+=sum;
		arr.push(sum);
		arr.sort((a,b)=>a-b);
		
	}
	return minCost;
}

module.exports=mincost;
