let x = "";
let arr = [];
let newarr = [];

while (true) {
  value = prompt("Nhập vào một chuỗi.Nhập -1 để dừng");
  if (x == -1) {
    break;
  }
  arr.push(x);
}

for (let i = 0; i < arr.length; i++) {
  if (!newarr.includes(arr[i])) {
    newarr.push(arr[i]);
  }
}

console.log(newarr);