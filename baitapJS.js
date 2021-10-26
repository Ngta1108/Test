
let str_input = prompt("Nhap vao chu bat ky");
let reverse_str = ''

for (let i= str_input.length -1; i >= 0; i--){
  reverse_str += str_input[i];
}

console.log(reverse_str);
