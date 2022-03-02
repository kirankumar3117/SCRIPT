function fibonacci(n, final=0,last=1){
    if (n == 0) {
       console.log(final)
       return;
        }
        if( n == 1){
            console.log(last);
            return;
        }
        
     fibonacci(n-1,last,final+last)//this part super impo never use `n--` use "" n-1  ""
     // if u use n-- u will get error like
    //  Maximum call stack size exceeded
    // at fibonacci (fibonacci.js:1:19)
    // at fibonacci (fibonacci.js:11:6)
    // at fibonacci (fibonacci.js:11:6)
    // at fibonacci (fibonacci.js:11:6)
    // at fibonacci (fibonacci.js:11:6)
    // at fibonacci (fibonacci.js:11:6)
    // at fibonacci (fibonacci.js:11:6)
    
}
fibonacci(4, final=0,last=1)