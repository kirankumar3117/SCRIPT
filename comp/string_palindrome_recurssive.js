

function palindrome(string){
    return thatPalindrome(string,0,string.length-1)
}
function thatPalindrome(string,start,end){
    if(start>=end){
       console.log("true");
       return;   
    }
    if(string[start] != string[end]){
       console.log("false")
    }
    else{
        return thatPalindrome(string,start+1,end-1)
    }
}
palindrome("kikk")