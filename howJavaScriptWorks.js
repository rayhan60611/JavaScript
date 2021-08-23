function x( a , b){
 return a+b;

} 

function y (a , b , callback){
    return callback(a,b);
}


var t = y(2 , 3, x)

console.log(t);