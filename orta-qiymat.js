var x = +prompt ('1-raqamni kiriting');
var y = +prompt ('2-raqamni kiriting');
var z = +prompt ('3-raqamni kiriting');

if        (x < y < z){
    alert(y)
} else if (x > y > z){
    alert(y)
} else if (y < x < z){
    alert(x)
} else if (y > x > z){
    alert(x)
} else if (y < z < x){
    alert(z)
} else if (y > z > x){
    alert(z)
} else if (x == y){
    alert('2ta son bir xil')
} else if (x == z){
    alert ('2ta son bir xil')
} else if (y == z) {
    alert ('2ta son bir xil')
}