// TODO: conxept of querySelector 

var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// ? after creating the variable now we can perform actions

let count = 1;
setInterval(  // for how much time the function will be executed 
    () => {
        if(count<1000)
            { count++;
            counter.innerText = count ;
    }
}, 10);

setTimeout(    // takes a function and milliseconds, after which time "milliseconds"  everything executes according to the "function"
    () => {
    followers.innerText = "Followers on Instagram";
            }, 10000
);

//   *   TODO:
//   ?   FIXME:
//   !   