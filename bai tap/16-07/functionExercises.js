/*
Bài 1: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực
Bài 2: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực
Bài 3: Đưa các số chia hết cho 3 về đầu mảng
Bài 4: Đảo ngược mảng ban đầu
Bài 5: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước
Bài 6: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó
Bài 7: Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên
Bài 8: Đếm số dương chia hết cho 7 trong mảng
Bài 9: Đếm số nguyên tố trong mảng
Bài 10: Hãy xác định số lượng phần tử kề nhau mà cả 2 đều chẵn
Bài 11: Kiểm tra mảng có đối xứng không? Có trả về 1, không có trả về 0
Bài 12: Kiểm tra mảng có tăng dần hay không
Bài 13: Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không
Bài 14: Kiểm tra ma trận 2 chiều có toàn dương hay không
Bài 15: Kiểm tra một cột ma trận có giảm dần hay không
Bài 16: Kiểm tra ma trận có tồn tại số lẻ hay không
Bài 17: Liệt kê các dòng giảm dần trong ma trận
Bài 18: Tìm số chẵn đầu tiên trong ma trận
Bài 19: Tìm số chẵn lớn nhất trong ma trận
Bài 20: Liệt kê các dòng có tổng lớn nhất
*/

function creatArray(num1, min, max) {
    var arr = new Array(num1);
    for (var i = 0; i < num1; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}

//Bài 1: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực

/*
var arr1 = [1, 3, 6, 4, 2, 5, 7];
function sumNextValue(num) {
    var sum = 0;
    for (let i = 0; i < num.length-1; i++){
        if (num[i] < num[i+1]){
            sum += num[i+1];
        }
        else 
            sum += 0;
    }
    return sum;
}
let total = sumNextValue(arr1);
console.log(total);
*/

// Bài 5: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước

/*
let arr = creatArray(7,0,10);
console.log(arr);
function showNumInArray(array,x,y){
    var numbers = ''
    for (let i = 0; i<array.length; i++){
        if (array[i] >= x && array[i] <= y){
            numbers += `${array[i]} `;
        }
    }
    return numbers;
}
console.log(showNumInArray(arr, 3,7));
*/

// Bài 17: Liệt kê các dòng giảm dần trong ma trận

/*
let arr = [
    [1,3,5,7],
    [2,8,4,7],
    [9,5,2,0],
    [7,5,4,2,0]
]
function numDecreaseRow(array){
    let row = '';
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length-1; j++){
            if (array[i][j] >= array[i][j+1]){
                if (j == array[i].length-2){
                    console.log(array[i]);
                }
            }
            else
                break;
        }
    }
}
numDecreaseRow(arr);
*/

// Bài 3: Đưa các số chia hết cho 3 về đầu mảng
/*
let arr = [0,1,0,1,0,1,15,3];
let arr1 = [];
let arr3 = [];
for (let i=0; i< arr.length; i++){
    if (arr[i] % 3 != 0){
        arr1.push(arr[i]);
    }
    else
        arr3.push(arr[i]);
}
arr = arr3.concat(arr1);
console.log(arr);
*/

// Bài 19: Tìm số chẵn lớn nhất trong ma trận

var arr = [
    [1, 2, 5, 7, 9, 3],
    [4, 6, 12, 20, 14, 2],
    [3, 4, 6, 8, 23]
]
function getEvenMax(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 == 0){
                let Max = array[i][j]
            }
        }
    }
}