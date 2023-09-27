let fruits = ["🍎", "🍊", "🍎", "🍊", "🍎", "🍎", "🍎", "🍊", "🍗", "🍗"];

let appleEl = document.getElementById("apple");
let orangeEl = document.getElementById("orange");
let meatEl = document.getElementById("meat");

// if(fruits === "🍎"){
//     appleEl.textContent = "🍎"
// }else if(fruits === "🍊"){
//     orangeEl.textContent = "🍊"
// }else{
//     meatEl.textContent = "🍗"
// }

function sort() {
  for (i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍎") {
      appleEl.textContent += "🍎";
    } else if (fruits[i] === "🍊") {
      orangeEl.textContent += "🍊";
    } else {
      meatEl.textContent += "🍗";
    }
  }
}

sort()
