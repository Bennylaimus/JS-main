// 1.Exercise:
// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// LISTSFUNDAMENTALS

// function deleteNth(arr,n){
//     // ...
//   }

// MySolution:

// function deleteNth(arr, number) {
//     let count = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) {       // 20 == 37  // if 0 == 1 // 
//             count++
//         }
//         if (count == number) {
//             arr.splice(arr[i], 1);
//         }
//     }
//     return arr;
// }

// const allPhotos = [20, 37, 20, 21] // output if number = 1 should be 20, 37, 21
// const repeats = 1;

// console.log(deleteNth(allPhotos, repeats))

function deleteNth(arr, number) {
    let count = 0;
    arr.forEach(element => {
        for (i = 0; i < arr.length; i++) {
            if (element == arr[i]) {
                count++
                if (count == number) {
                    arr.splice(element);
                }
            }
        }
    });
}

const allPhotos = [20, 37, 20, 21, 3, 8, 9, 20, 20]; // output if number = 1 should be 20, 37, 21
const repeats = 2;

console.log(deleteNth(allPhotos, repeats));

// Solution - sozdavatj novij array!!!!!!!!, dobavljatj v nego vse chisla, krome teh, kotorije ne udovletvorjajut trebovaniju (count == number)
