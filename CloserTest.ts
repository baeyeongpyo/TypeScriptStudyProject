var closerTest1 =( function (){
    function closerTest1() {
    }
    closerTest1.prototype.add = (x,y) => x+y
    return closerTest1
}());

var closerinstans = new closerTest1();
const closerResult = closerinstans.add(1,2)
console.log(closerResult)

