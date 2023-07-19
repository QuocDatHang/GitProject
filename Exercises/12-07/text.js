/* var arr = [
    [[1,1],[2,2],[3,3]],
    [[10,10],[20,20],[30,30]],
    [[100,100],[200,200],[300,300]]
]
let str="";
for(let x = 0; x < arr.length; x++){
    for (let y = 0; y < arr[x].length; y++){
        for (let z = 0; z < arr[x][y].length; z++){
            str += arr[x][y][z];
        }
    }
    console.log(str);
} */

/*
var arr1 = [
    [3,1,5,3],
    [4,4,2,2],
    [1,1,1,1],
    [3,0,3,5]
]
let sum=0;
for (let i=0; i<arr1.length; i++){
    for (let j=0; j<arr1[i].length; j++){
        if (i == j || i+j == arr1.length-1){
            sum += arr1[i][j];
        }
    }
}
console.log(sum);
*/

// bài 1: hiển thị các cột chẵn

/*
var arr1 = [
   [3,1,5,3],
   [4,4,2,2],
   [1,1,1,1],
   [3,0,3,5]
]
for (let i=0; i<arr1.length; i++){
   let str = '';
   for (let j=0; j<arr1[i].length; j++){
       if (j%2 == 0){
           str += arr1[i][j];
       }
   }
   console.log(str);
}
*/


// bài 2: tính tổng đường viền

/*
var arr1 = [
    [3, 1, 5, 3],
    [4, 4, 2, 2],
    [1, 1, 1, 1],
    [3, 0, 3, 5]
]
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    if (i == 0 || i == arr1.length - 1) {
        for (let j = 0; j < arr1[i].length; j++) {
            sum += arr1[i][j];
        }
    }
    else {
        sum = sum + arr1[i][0] + arr1[i][arr1[i].length - 1];
    }
}
console.log(sum);
*/

// bài 3: tính  tổng tam giác trên trái, trên phải, dưới trái, dưới phải

/*
var arr1 = [
    [3, 1, 5, 3],
    [4, 4, 2, 2],
    [1, 1, 1, 1],
    [3, 0, 3, 5]
]
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        if (i == 0 || j == 0 || i+j == arr1[i].length-1){
            sum += arr1[i][j];
        }
    }
}
console.log(sum);
*/

// bài 4: tính tổng các số nguyên tố - 26

/*
var arr1 = [
    [3, 1, 5, 3],
    [4, 4, 2, 2],
    [1, 1, 1, 1],
    [3, 0, 3, 5]
]
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        let flag = true;
        if (arr1[i][j] < 2) {
            flag = false;
        }
        else {
            for (let x = 2; x < arr1[i][j]; x++) {
                if (arr1[i][j] % x == 0) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag == true) {
            sum += arr1[i][j];
        }
    }
}
console.log(sum);
*/

 // bài 5: tìm ra vị trí [i,j] của số chẵn thu hai

 var arr1 = [
    [3, 1, 5, 3],
    [4, 4, 2, 2],
    [1, 1, 1, 1],
    [3, 0, 3, 5]
]
var count =0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] % 2 == 0) {
            count++;
            if (count == 2) {
                console.log('vi tri cua so chan thu hai la ' + [i,j]);
            }
        }
    }
}
