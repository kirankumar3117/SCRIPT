

function flatten(array){
    let arr=[];


    function helper(array){
        for(var i=0;i<array.length;i++){
            let element=array[i]
            if(Array.isArray(array[i])){
             helper(element)
            }
            else{
                arr.push(element)
            }

    }
}
 helper(array);// this step people forgot mostly.("very silly if u forgot it")
console.log(arr)
}
flatten([1,2,[3,4,[5]]])