let obj = {value: 10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj); // Output: 10, the original value of number remains unchanged.