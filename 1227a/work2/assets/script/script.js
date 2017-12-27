function countSelf () {
    var counter = 0;
    function countInc() {
        counter++;
        console.log(counter);
    }
    return countInc;
}
    
var myFun = countSelf();
myFun();
myFun(); 
myFun();

var myFun2 = countSelf();
myFun2();
myFun2();
myFun2();
myFun2();

myFun();
myFun();