// for loop

function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}


// do-while

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);


// while

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}