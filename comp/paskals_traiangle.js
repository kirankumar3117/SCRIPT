let num=4;
var number=1;
let space=num;
for(let i=0;i<num;i++){
    //this will repeate the loop for how many times we want
var bag=""

 for(var s=1;s<=space;s++){
     //for creating the spaces
    bag=bag+" "
 }
 number=1;
//every time it is rounding the llop number has to become 1 again

    for(var j=0;j<=i;j++){
       
        bag=bag+number+" ";
        // add the number to bag
        number=number*((i-j)/(j+1));
       
    }
    space--
    //on every round the space has to decrease
console.log(bag)

}

//i=0

//s is repeating from 1 to spcae which is actually num

//number is 1

// j=0

// add numcer which is one and already sum spaces are added then

//_ _ _ 1 _

//i=1

//_ _ 1 _ 1 _

//i=2

//_ 1 _ 2 _ 1 _

//i=3

//_ 1 _3 _3 _1 _