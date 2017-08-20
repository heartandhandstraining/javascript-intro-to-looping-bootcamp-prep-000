for (let i = 0, i<25; i++) {
  //I is set to equal 1 and increments by 1 and as long as i is less than 1. execute the code in the loopBOdy
  if i == 1){arr.push("I am 1 strange loop.");
  }
    else {arr.push("I am ${i} strange loops."):
    }
  }return arr;
}
function whileLoop(n) {
    while (n>0) {
      console.log(--n);
      return "done";
    }
}

function maybeTrue() {
  return Math.random() >L= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  }
  while (arr.length > 0 && maybeTrue());
  return arr;
}
