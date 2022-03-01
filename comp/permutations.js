
let m=[]

function permutations(arr,total=[],final=[]){
  
    if(arr.length==0){
        final.push([...total])
        m.push(final)
    }

    for(var i=0;i<arr.length;i++){
        total.push(arr[i]);
         
        let ways= arr.filter((arr,index) => index !==i);
        // this is the part where every thing is changed and backtracking starts
        permutations(ways,total,final)//here this ways become arr and the entire loop becomes backtracking



        total.pop(arr[i])
    }

 

}
permutations([1,2,3,4])
console.log(m[m.length-1])