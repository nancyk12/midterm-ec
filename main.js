
/*sfunction twoSmallest(array){

}


 if (typeof twoSmallest === 'undefined') {
    twoSmallest = undefined
  }


 module.exports = {
    twoSmallest,
  }
*/

  //let arr = [ 6, 3, 5, 2, 9 ];
  function twoSmallest(arr){
		let smallest = arr[0]; 
		let secondSmallest = arr[1]; 

		for(var i = 0; i < arr.length; i++) { 
			if(arr[i] < smallest) {  
				smallest = arr[i];  
        //console.log(smallest);
			}  
      if (arr.length < 2){
        return undefined;
      }
			if(arr[i] > smallest && arr[i] < secondSmallest ) { 
				secondSmallest = arr[i]; 
        //console.log(secondSmallest);
			} 
		} let newArray = [smallest, secondSmallest];
    return newArray;
  }
		console.log(twoSmallest([10]));

    

