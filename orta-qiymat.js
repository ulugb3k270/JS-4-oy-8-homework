var x = +prompt ('1-raqamni kiriting');
var y = +prompt ('2-raqamni kiriting');
var z = +prompt ('3-raqamni kiriting');

if        (y < x && x < z){
    alert(x)

} else if (z < x && x < y){
    alert(x) 

} else if (x < y && y < z){
    alert(y)

} else if (z < y && y < x){
    alert(y)

} else if (y < z && z < x){
    alert(z)

} else if (x < z && z < y){
    alert(z)

} else if (x === y){
    alert('2ta son bir xil')
} else if (x === z){
    alert ('2ta son bir xil')
} else if (y === z) {
    alert ('2ta son bir xil')
} else (
    alert('Son kiriting !!!')
)