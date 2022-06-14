// 2. Write a JS code to print a 2D array
/*
function printArray(arr) {
    for(var i = 0; i<arr.length; i++){
        for(var j = 0; j<arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

printArray(arr)

printArray(arr) //1 2 3 4 5 6
*/

//3. Write a JS code to print Even numbers in given array

/*
var arr = [13,23,12,45,22,48,66,100]
function printEven() {
for (var i = 0; i < arr.length; i++) {
 //   console.log(arr[i])

    if(arr[i] % 2 == 0) {
        console.log(arr[i])
    } else {
        alert(arr[i])
    }
}
}
printEven(arr) //12 22 48 66 100
*/

//4. Write a JS code to delete all occurrence of element in given array

var arr = [23,56,4,78,5,63,45,210,56];

function deleteElement(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == ele) {
            arr.splice(i, 1);
        }
    }
    return arr;
}


console.log(arr)
deleteElement(arr, 4)

console.log(arr)