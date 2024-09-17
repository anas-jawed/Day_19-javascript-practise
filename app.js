//  QS1 Write a javascript function that returns array elements larger than a number


// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5;

// function getElements(arr,num){
//      for(let i = 0; i<arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//      }
// }

// getElements(arr, num);

// QS Write a javascript function to extract unique characters from a string EXample: str = "abcdabcdefgh" ans = "abcdefgh"


// let str = "Anas Jawaid";
// let ans = "";

// function getInique(str){
//     for (let i = 0; i<str.length; i++){
//         let curchar = str[i];
//         if(ans.indexOf(curchar) == -1){
//             ans += curchar;
//         }
//     }

//     return ans;
// }

// let result = getInique(str);
// console.log(result);

// Qs3. Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
//  "United States of America"

let country = ["Australia","United States of America","germany"];

function longestName(country){
    let ansidx = 0;
    for(let i = 0; i<country.length; i++){
        let ansLen = country[ansidx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansidx = i;
        }
    }
    return country[ansidx];
}

let result = longestName(country);

console.log(result);