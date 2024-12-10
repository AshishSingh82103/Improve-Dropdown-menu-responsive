// // ----------------- Dom(data object model) -----------

// const object1 = {
//     name: ["ashish", 'ankit', 'neha'],
//     age: 28,
//     id: 832109,
//     password: 'singh@82103',
//     bio: function() {
//         console.log(`${this.name[0]} ${this.name[1]} ${this.name[2]} years`);
//     },
//     introduceSelf: function() {
//         console.log(`Hi! I'm ${this.name[0]}.`)
//     },
// };

// object1.name;
// object1.name[0];
// object1.age;
// object1.bio();
// object1.introduceSelf();

// const new_object = 
//     {
//         object_query: true,
//         API: 'singhashish82103@gmail.com',
//         fecthingId: 'concateniated-id',
//         const_id: 'apireserve',
//         "id": 117755948,
//         "node_id": "U_kgDOBwTQLA",
//         "site_admin": false,
//         bio: function() {
//             console.log(`this is ${this.node_id} node id`)
//         }
//     }

//     console.log(new_object.object_query);
//     new_object.bio();


//     const myObject = {
//         city: "Denmark",
//         greet() {
//           console.log(`Greetings from ${this.city}`);
//         },
//       };
      
//       myObject.greet()



//       const myDate = new Date();
//       let object = myDate;
      
//       do {
//         object = Object.getPrototypeOf(object);
//         console.log(object);
//       } while (object);
      
//       // Date.prototype
//       // Object {}
//       // null

//     let promise_One = new Promise((resolve, reject) => {

        
//         setInterval(()=>{
//             let items_value = undefined;
//             if(items_value === undefined) {
//                 resolve('Api issue reolved');
//             } else  {
//                 reject('resolved is solved with the Issue');
//             }
//         }, 2000)
        
//     })

//     promise_One
//     .then((user) => {
//         console.log(user, "userlogIn!")
//     })
//     .catch((error)=> {
//         console.log(error, "find error with the logIn time");
//     })
//     .finally(() => {
//         console.log('finally we got here from the usser');
//     })


//     const button = document.getElementById('button');

//     function randomColor(number) {
//         return Math.floor(Math.random * number + 1);
//     }

//     function colorChanger() {
//         const col = `rgb${randomColor(255)} ${randomColor(255)} ${randomColor(255)}`;
//         col.document.querySelector(button); 
//         clo.document.API = "https://api.github.com/users/ashishsingh82103"

//         let obj = {
//             "starred_url": "https://api.github.com/users/AshishSingh82103/starred{/owner}{/repo}",
//             "organizations_url": "https://api.github.com/users/AshishSingh82103/orgs",
//             "subscriptions_url": "https://api.github.com/users/AshishSingh82103/subscriptions",
//         }
//         console.log(obj.starred_url);

//         setInterval(() => {
//             let the_extract = new Promise((rsolve, reject) => {
//                 let value = 48;
//                     if(value >= 48) {
//                         console.log('exit to user');
//                     } else if (value < 20 & value > 40) {
//                         console.log('user is using form themain value');
//                     } else {
//                         console.log('logIn value is soo important to fecthing from behinde the secene');
//                     }
//             });
//         },4000)
        
//     }

//     console.log(colorChanger());

// // ----------------  height and width -----------------------

// function init() {
//     const arrImages = new Array(3);
//     arrImages[0] = document.getElementById('image1');
//     arrImages[1] = document.getElementById('image2');
//     arrImages[2] = document.getElementById('image3');

//     const objOutput = document.getElementById("output");

//     let strHtml = '<ul>'

//     for(let i = 0; i < arrImages.length; i++) {
//         function colorChanger() {
//             const col = `rgb${randomColor(255)} ${randomColor(255)} ${randomColor(255)}`;
//             col.document.querySelector(button); 
//             clo.document.API = "https://api.github.com/users/ashishsingh82103"
    
//             let obj = {
//                 "starred_url": "https://api.github.com/users/AshishSingh82103/starred{/owner}{/repo}",
//                 "organizations_url": "https://api.github.com/users/AshishSingh82103/orgs",
//                 "subscriptions_url": "https://api.github.com/users/AshishSingh82103/subscriptions",
//             }
//             console.log(obj.starred_url);
    
//             setInterval(() => {
//                 let the_extract = new Promise((rsolve, reject) => {
//                     let value = 48;
//                         if(value >= 48) {
//                             console.log('exit to user');
//                         } else if (value < 20 & value > 40) {
//                             console.log('user is using form themain value');
//                         } else {
//                             console.log('logIn value is soo important to fecthing from behinde the secene');
//                         }
//                 });
//             },4000)
            
//         }
    
//         console.log(colorChanger());
    
//     // ----------------  height and width -----------------------
    
//     function init() {
//         const arrImages = new Array(3);
//         arrImages[0] = document.getElementById('image1');
//         arrImages[1] = document.getElementById('image2');
//         arrImages[2] = document.getElementById('image3');
    
//         const objOutput = document.getElementById("output");
    
//         let strHtml = '<ul>'

//         strHtml +=
//         "<li>image" +
//         (i + 1) +
//         ": height=" +
//         arrImages[i].height +
//         ", width=" +
//         arrImages[i].width +
//         ", style.height=" +
//         arrImages[i].style.height +
//         ", style.width=" +
//         arrImages[i].style.width +
//         "</li>";
    
//     } 
//     strHtml += "</ul>";

//     objOutput.innerHTML = strHtml;

//     }

// }

// function setBorderWidth(width) {
//     document.getElementById("img1").style.borderWidth = width + "px";
    
//   }


//   function changeText() {
//     const p = document.getElementById("pid");

//     p.style.color = "blue";
//     p.style.fontSize = "18pt";
//   }

//   const ss = document.styleSheets;

// for (let i = 0; i < ss.length; i++) {
//   for (let j = 0; j < ss[i].cssRules.length; j++) {
//     console.log(`${ss[i].cssRules[j].selectorText}\n`);
//   }
// }

// function stopEvent(event) {
//     const c2 = document.getElementById("c2");
//     c2.textContent = "hello";

//     // this ought to keep t-daddy from getting the click.
//     event.stopPropagation();
//     alert("event propagation halted.");
//   }


//   function load() {
//     const elem = document.getElementById("tbl1");
//     elem.addEventListener("click", stopEvent, false);
    
//   }
//   function cStyles() {
//     const RefDiv = document.getElementById("d1");
//     const txtHeight = document.getElementById("t1");
//     const h_style = document.defaultView
//       .getComputedStyle(RefDiv, null)
//       .getPropertyValue("height");

//     txtHeight.value = h_style;

//     const txtWidth = document.getElementById("t2");
//     const w_style = document.defaultView
//       .getComputedStyle(RefDiv, null)
//       .getPropertyValue("width");

//     txtWidth.value = w_style;

//     const txtBackgroundColor = document.getElementById("t3");
//     const b_style = document.defaultView
//       .getComputedStyle(RefDiv, null)
//       .getPropertyValue("background-color");

//     txtBackgroundColor.value = b_style;
//   }

// // txtBackgroundColor.value = b_style;

// //  let node_svalue = git.push(origin.main());
// //  console.log('react.js');

// //  let mode_value = script(() => {
// //     let value = "link the  main code";
// //  });

// //  return value;

// const inteval_code = new promise_One(() => {
//     let value = "Invited Group";
//     setInterval(() =>{
//         let item_s = console.log(value);
//         console.log("logIn!");
//     })
// })

// inteval_code = "script.js";
// console.log(inteval_code);

// let value = constant (() => {
//     console.log('hello');
//     if(value === null) {
//         console.log('null')
    
// });

// const interval_codes = new promise_One(() => {
//     let value_script  = "Invited Group";
//     if(value_script) {
//         console.log('hello');
//     } else if (vaue === null) {
//         console.log('null')
//     }
//     console.log('report by the');
//  });

//  let user_login = new login(() => {
//     console.log('hello user');
//  })

//  console.log("user");

//  let user = "login";
//  console.log(user);

//  const my_Name = new Promise((resolve, reject) => {
//         let resolve = new((resolve, reject) {
//             let value = (() => {
//                 console.log("Script.js");
//             })
//             console.log(value);
//         })
//  })

//  console.log(my_Name);

//  let myUser = new Promise((resolve, reject) => {
//     const new_user = new Promise((resolve, reject) => {
//             console.log('node script js');
//     })

//     new_user = scope.js;
//     console.log("new_user");
//  })

// console.log("muUser");

// let myName1 = new Promise(() => {
//     setInterval(() => {
//         console.log("soemthing missing");
//     })
// });

// nyName1.
// then((user) => {
//     console.log('something error');
// })
// .catch(()=> {
//     console.log("Something exact");
// })
// .promise(() => {
//     console.log('something');
// });

// let varibale = new promise((resolve, reject) => {
//     console.log('script server issue');
// })
// console.log('sacerutiy issue is fromly ended with the main issue');

// let userLoginId = "new userId";
// console.log('secytriy and element');

// let user_id = "secur-Reason";

// console.log(user-id);

// let consume_user = net.value(() => {
//     console.log('something error');
// })

// const new_user = new promise((resolve, reject) => {
//     const new_user2 = undefined;
//     setInterval(() => {
//         if(new_user2 === undefined) {
//             console.log('something error');
//         } else if (new_user2 === null) {
//             console.log('fetching data');
//         }
//     }, 4000)
// })

// new_user
// .then((user) => {
//     console.log(user, "user");
// })
// .catch((error) => {
//     console.log(error, 'error');
// })
// .finally(() => {
//     console.log('hello user');
// })

// --------- Array fillter -------------

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result);


// function isBigValue(value) {
//     return value >= 10;
// }
// const filtterd = [12, 5, 8, 130, 44].filter(isBigValue);

// console.log(filtterd);


// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//     for(let i = 2; i < num; i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1
// }
// console.log(array.filter(isPrime));

// const arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: "undefined" },
//   ];

//   let invalid_Entries = 0;

//   function filterByID(item) {
//     if(Number.isFinite(item.id) && item.id !== 0) {
//         return true;
//     }

//     invalid_Entries++;
//     return false;
    

//   }
//   const arrByID = arr.filter(filterByID);

//   console.log("Filteared Array\n", arrByID);

//   console.log("Number of Invalid Entries =", invalid_Entries);

//   const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
// const greatIDs = names
//   .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
//   .filter((id, idx, arr) => {
//     // Without the arr argument, there's no way to easily access the
//     // intermediate array without saving it to a variable.
//     if (idx > 0 && id <= arr[idx - 1]) return false;
//     if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
//     return true;
//   });
// console.log(greatIDs);

// // let new_array_find = [20, 40, 50, 80];
// // function new_func() {
// //     CSSFontPaletteValuesRule.log('new_find the method of the array id is resolving from the array which is produced by the msin target');
// //     console.log('array find the targeting value from the user fro it is null value the undefined it is a good practices');
// // }

// // console.log(new_func());

// // let find_user = [20, 40, 50, 80];
// // function find_user() {
// //     console.log('security targeting value from the user fro it is value undefined fro the user');
// // }

// if(value === null) {
//     console.log('getting_value');
// } else if(value !== undefined) {
//     console.log(find_user());
// } else if(value === null) {
//     console.log('newly added data');
// }

// let new_user5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let item_s = 'segressive_value';
//         console.log('security reason for while a reason');
//     }, 4000)
// })

// console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
// console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]

// let user_Login = undefined;

// console.log(user_Login);

// let nespormisess = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         console.log('securtiy reason is random of the main user from the user');
//     },2000)

// })

// console.log('secrity reason is the main cause which is the reason');

// let user_login = true;

// let Id = 832109;

// let password = '*****';

// let securityReason = 'security@3243';

// if(Id === 832109) {
//     console.log('Id');
// } else if(securityReason) {
//     console.log('securityReason');
// } else if(password === '****') {
//     console.log('password');
// }

// let new_constUSer = function(num) {
//     console.log('script.js', num);
// }

// const arrayLike = {
//     length: 3,
//     0: "a",
//     1: "b",
//     2: "c",
//     3: "a", // ignored by filter() since length is 3
//   };
//   console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
//   // [ 'a', 'b' ]

  
//   const array1 = [5, 12, 8, 130, 44];

//   const found = array1.find((element) => element > 10);
  
//   console.log(found);
//   // Expected output: 12

//   const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   function isCherries(fruit) {
//     return fruit.name === "cherries";
//   }
  
//   console.log(inventory.find(isCherries));
//   // { name: 'cherries', quantity: 5 }


//   const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   const result = inventory.find(({ name }) => name === "cherries");
  
//   console.log(result); // { name: 'cherries', quantity: 5 }

//   function isPrime(element, index, array) {
//     let start = 2;
//     while (start <= Math.sqrt(element)) {
//       if (element % start++ < 1) {
//         return false;
//       }
//     }
//     return element > 1;
//   }
  
//   console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
//   console.log([4, 5, 8, 12].find(isPrime)); // 5

//   const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
// const firstTrough = numbers
//   .filter((num) => num > 0)
//   .find((num, idx, arr) => {
//     // Without the arr argument, there's no way to easily access the
//     // intermediate array without saving it to a variable.
//     if (idx > 0 && num >= arr[idx - 1]) return false;
//     if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
//     return true;
//   });
// console.log(firstTrough); // 1

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// // Expected output: 3

// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

// function isPrime(element) {
//     if (element % 2 === 0 || element < 2) {
//       return false;
//     }
//     for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
//       if (element % factor === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
//   console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)


//   const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
//   const firstTrough = numbers
//     .filter((num) => num > 0)
//     .findIndex((num, idx, arr) => {
//       // Without the arr argument, there's no way to easily access the
//       // intermediate array without saving it to a variable.
//       if (idx > 0 && num >= arr[idx - 1]) return false;
//       if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
//       return true;
//     });
//   console.log(firstTrough); // 1

//   const arrayLike = {
//     length: 3,
//     "-1": 0.1, // ignored by find() since -1 < 0
//     0: 2,
//     1: 7.3,
//     2: 4,
//   };
//   console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
//   // 7.3

//   const array8 = [5, 12, 50, 130, 44];

// const found1 = array8.findLast((element) => element > 45);

// console.log(found1);
// Expected output: 130

const and_someofThe = [20, 30, 40, 40 ];
console.log(and_someofThe);

const new_user = [30, 40, 50, 60, 70];
console.log(new_user);

const new_userbid = ["for-in", "for-let", 'for-each'];

for(let i = 0; i < new_userbid.length; i++) {
    console.log(new_userbid[i]);
}

new_userbid.forEach((key, value) =>{
    console.log(key, value);
});

new_loginID = 'new-login';
console.log(new_loginID);


const importID = function import_user(value) {
    const rename = userByID(value)
    console.log(rename);
    if(rename === 'value') {
        console.log('rename the value');
    } else if(rename === 'undefined') {
        console.log('rename undefined');
    }
    return rename;
}

const rename_undefined = new Promise(() => {
    setInterval(() => {
        let user_id = null;
    }, 2000)
});

console.log(rename_undefined);


const the_value = 30;
if(the_value === 30) {
    console.log('array is fined');
} else if(the_value === 'fined value is the main crucx') {
    console.log('new_user logIn!');
}

else {
    console.log('login');
}

console.log('logIn between the main blocks');

let the_cell = [30, 49];
console.log(the_cell);


console.log('resume the all of code which is code!');

let singh = "singh@ashish82103";
console.log(singh);


let promise = new Promise(() => {
    console.log('resolve the issue');
})


import { notDeepEqual } from 'assert';
// This script exists to workaround create-react-app's limitation around importing outside /src
// Once this moves out of docs/beta, we could just drive readme generation out of docs/src/data instead of docs/data and not copy

import { copyFile, mkdir } from 'fs/promises'

let run = async () => {
  await mkdir('./docs/beta/src/data', { recursive: true })
  await copyFile('./docs/data/docs.json', './docs/beta/src/data/docs.json')
  await copyFile(
    './docs/data/tag-docs.json',
    './docs/beta/src/data/tag-docs.json'
  )
  await copyFile('./docs/data/tests.json', './docs/beta/src/data/tests.json')
}

run();


// import { mkdir } from 'fs/promises'

// let run1 = () => mkdir('./docs/data', { recursive: true })

// run1();

nextTick.js = new_userbid(() => {
    new promise(() => {
        setImmediate(() => {
            let user = null;
            console.log(user);
        }); 

        if(item_user === null) {
            console.log(loginId);
        }
            else if (user !== null) {
                console.log('login-id');
            }
        })
    
})

console.log('config new');

console.log('resgine not the main of the value of the code which is given from the master regime');


if(value != 'not_user_login') {
     console.log('next.js');
} else if (value != nextTick.js) {
    console.log('prime.js');
}

//  d, i, o, u, x, X, a, A, e, E, f, F, g, h, i, j, k, l, m, n, o, p, q, r, s ,t, u, v, w, x, y, z;



//  printf, fprintf, dprintf, sprintf, snprintf, vprintf, vfprintf,vdprintf, vsprintf, vsnprintf - formatted output conversion;


// {
//     "compilerOptions": {
//       "module": "CommonJS",
//       "target": "ES6"
//     },
//     "include": ["src/**/*"]
//   }


// nextTick.js();

// nettrick(() => {
//     const new_array = function() {
//         `backtick is norm with the const user finding value`
//     } 
//     return new_array;
// });
// nettrick();


// console.log('newly logIn!');

// let array = [2, 4, 5, 9, 10];

// array.forEach(() => {
//     console.log(array);
// })

// const header = (
//     <header>
//       <h1>Mozilla Developer Network</h1>
//       <p>is it paragraph tag</p>
//       <aside>aside to hover on the link of the code</aside>
//       <ol>
//         <li>
//             <li>One
//                 <li>Git-Repo</li>
//                 <li>Repo-link access</li>
//                 <li>link of the code!</li>
//             </li>
//             <li>Two
//                 <li>link to refer the count of the same purpose</li>
//                 <li>link to refer the count of the same purpose to one of the link ot genrate here..</li>
//                 <li>link relm of the synopsis here</li>
//             </li>
//             <li>Three</li>
//         </li>
//       </ol>
//     </header>
//   );

//  const new_user5 = function() {
//     console.log('new-login id existing');
//  } 

//  new_user5();


const function_settel = function() {
    let user_login = true;
    let id = 832109;
    if(user_login === true) {
        console.log('existing user is here');
    } else if (id === 832109) {
        console.log('id is correct')
    }
}
function_settel();

let item = null;

if(login === flase) {
    console.log('node value is here')
} else if(login_id === 'ishere') {
    console.log('null');
}

const o = {
    a: 1,
    b: 2,

    // __proto__ sets the [[prototype]]. it's sepecified here
    // as another object litreal.

    __proto__: {
        b: 3,
        c: 4,
    }
}

console.log(o.a);

console.log(o.b); // 2

const parent = {
    value: 2,
    method() {
      return this.value + 1;
    },
  };

  console.log(parent);

  console.log(parent.method()); // 3


  console.log('perfect-list which is porper');

  console.log('siinghashish82103@gmail.com');

  const boxes = [
    { value: 1, getValue() { return this.value; } },
    { value: 2, getValue() { return this.value; } },
    { value: 3, getValue() { return this.value; } },
  ];
  
console.log(boxes);

console.log('boxxes');

console.log('list of the resatart is the main cause.');

if(isPrime != 'consume') {
    console.log('security is the reason')
};


const fimily_return = new Promise((value) => {
    console.log(finding_followers);
    return value;
})

console.log('resume is the return offset is before and');


let length_undefined = 'node-script.js';
console.log(length_undefined);

let srr =[34, 50, 60 , 70 , 90];
console.log(srr.forEach((key, vaue))
)



let mufunc_user =  function() {
    let user_invalid = null;
    if(user_invalid === null) {
        console.log('nullifiy is over from it');
    } else if( user_invalid !== undefined) {
        console.log('user get access form its api');
    } else {
        console.log('something went worng');
    }
}

mufunc_user();


console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


console.log('Node-script.js');

Array.from(arrayLike);
Array.from(arrayLike, mapFn);
Array.from(arrayLike, mapFn, thisArg);

Array.from(arrayLike, mapFn, thisArg);

let promiseTwo = new Promise((resolve, reject) => {
    let new_user = function() {
        if(new_user === null) {
            console.log('new_user find the value is remarking');
        } else if(new_user === undefined) {
            console.log('new_user find the value is remarking');
        } else {
            console.log('new-user identified');
        }
    function let_user(num1) {
        console.log('logine user_exist');
        let result = num1 + num2;
        return result;
        }
        let_user();

        let find_value = 'sesional value';
        console.log(find_value);

        if(find_value === true) {
            result = num1 + num2;
            
        }

    }
    new_user();
})

promiseTwo();

LargestContentfulPaint = notDeepEqual

const promise_one = new Promise((resolve, reject) => {
    setInterval(() => {
        let value = true;
        if(value) {
            resolve(value);
        } else {
            reject('error printied');
        }
    }, 4000);

})
promise_one
.then((value) => {
    console.log(value, "execution api");
})
.catch((error) =>{
    console.log(error,'error printied');
})
.finally(() => {
    console.log('value find finally')
});

const variable = 'find the get-log value';
console.log(variable);

let create_obj = {
    id: 117755948,
    login_id: 'ashish832109',
    node_value: '"U_kgDOBwTQLA"',
    login: true,
    password: 'singh@82103',
}
create_obj();

console.log(create_obj.id);

let funct_user = function() {
    let value = true;
    let id = 117755948;
    let login_value = false;

    if(value === true) {
        console.log('value identified by user');
    } else if (id === 117755948) {
        console.log('id has been excess');
    } else if(login_value === false) {
        console.log('value genrated');
    }  
}
Array.fromAsync(arrayLike);
Array.fromAsync(arrayLike, mapFn);
Array.fromAsync(arrayLike, mapFn, thisArg);

const asyncIterable = (async function* () {
    for (let i = 0; i < 5; i++) {
      await new Promise((resolve) => setTimeout(resolve, 10 * i));
      yield i;
    }
  })();
  
  Array.fromAsync(asyncIterable).then((array) => console.log(array));

  Array.fromAsync(
    new Map([
      [1, 2],
      [3, 4],
    ]),
  ).then((array) => console.log(array));

  Array.fromAsync(
    new map([
        [1, 2],
        [3, 4],

    ]),

  ).then((array) => console.log(array));

  Array.fromAsync(
    new set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),

  ).then((array) => console.log(array));

function delayedValue(v) {
    return new Promise((resolve) => setTimeout(() =>resolve(v), 1000));
}

Array.fromAsync(
    [delayedValue(1), delayedValue(2), delayedValue(3)],
    (element) => delayedValue(element * 2),
).then((array) => console.log(array));


function makeIterableOfPromise() {
    for (let i = 0; i < 5; i++) {
        yield new Promise((resolve) => setTimeout(resolve, 100));
    }
}
(async()=> {
    console.time("Array.fromAsync() time");
    await Array.fromAsync(makeIterableOfPromise());
    console.timeEnd('Array.fromAsync() time');
    // array.fromAsync() time : 502.610 ms

    console.time('Promise.all() time');
    await promise.all(makeIterableOfPromise());
    console.timeEnd("Promise.all() time");

    // promise.all() time: 101.728 ms

})

function* generatorWithRejectedPromises() {
    try {
        yield 0;
        yield Promise.reject(3);

    } finally {
        console.log('called finally');
    }
}

(async() => {
    try {
        await Array.fromAsync(generatorWithRejectedPromises);
    }
});


import _ from 'lodash/fp'

export let stringify = (data) => JSON.stringify(data, 0, 2)

export let joinWith = _.curry((f, data) => _.flow(_.map, _.join(''))(f, data))

// Gets a tag value from a jsdoc entry
export let getTag = (tag, x) => _.get('text', _.find({ title: tag }, x.tags))



import _ from 'lodash/fp'
import prettier from 'prettier'
import { readdir, writeFile } from 'fs/promises'
import { stringify } from './utils'


let getTests = async () => {
  // Collect tests into an object by overriding global test fns
  let tests = {}
  // Don't worry about `describe`, just execute
  global.describe = (name, fn) => fn()
  // Capture the tests in an object
  global.it = (name, fn) => {
    tests[_.replace('should ', '', name)] = fn
    tests[_.replace('should', '', name)] = fn
    return {
      timeout: _.noop,
      
    }
    // rendering from behinde it .



    
  }

  console.log('correct answer is the remaining part is blowing up towards the mind setting up from it behinde');

  console.log('sechduling from it none of the prompt');

  // Dynamically import tests to fill the test object
  await _.flow(
    _.filter((x) => x.match(/spec\.js$/)),
    _.map((path) => import(`../test/${path}`)),
    (x) => Promise.all(x)
  )(await readdir('./test'))

  return tests
}

let removeTestWrappers = _.flow(
  _.replace(
    /expect\((.+?)\)(\.not)?\.to\.be\.true/g,
    (a, b) => `${b}\n/* => true */`
  ),
  _.replace(
    /expect\((.+?)\)(\.not)?\.to\.be\.false/g,
    (a, b) => `${b}\n/* => false */`
  ),
  _.replace(
    /expect\((.+?)\)\.to\.have\.callCount\(([0-9]+)\)/g,
    (a, b, c) => `${b}\n/* => to have been called ${c} times */`
  ),
  _.replace(
    /expect\((\(\) => )?(.+?)\)(\.not)?\.to\.be\.a\((.+?)\)/g,
    (a, b, c, d, e) => `${c}\n/* => is a ${e} */`
  ),
  _.replace(
    /expect\((\(\) => )?(.+?)\)(\.not)?\.to\.throw\((.*?)\)/g,
    (a, b, c, d, e) => `${c}\n/* => throws ${e || 'exception'} */`
  ),
  _.replace(
    /expect\((.+?)\)(\.not)?\.to\.be\.rejectedWith\((.*?)\)/g,
    (a, b, c, d) => `${b}\n/* => throws ${d || 'exception'} */`
  ),
  _.replace(
    /expect\((.+?)\)(\.not)?\.to(\.deep)?(\.equal|\.eql)\((.+?)\)/gs,
    (a, b, c, d, e, f) => `${b}\n/* => ${f} */`
  )
)

let cleanup = _.flow(
  _.toString,
  _.split('\n'),
  // Remove the fn wrapper
  (x) => x.slice(1, -1),
  _.join('\n'),
  // remove newlines after `{` to force objects as compact as possible
  _.replace(/{\n|\r/g, '{')
)

let format = (code) =>
  prettier.format(code, {
    semi: false,
    singleQuote: true,
    parser: 'babel',
    arrowParens: 'avoid',
  })

let run = async () => {
  let tests = await getTests()

  let content = _.mapValues((test) => {
    let code = format(cleanup(test))
    try {
      // Attempt to remove test wrappers but fallback if prettier explodes due to invalid JS
      return format(removeTestWrappers(code))
    } catch (e) {
      return code
    }
  }, tests)

  let outputDir = './docs/data/'
  return writeFile(`${outputDir}tests.json`, stringify(content))
}

run()

// This script exists to workaround create-react-app's limitation around importing outside /src
// Once this moves out of docs/beta, we could just drive readme generation out of docs/src/data instead of docs/data and not copy

import { copyFile, mkdir } from 'fs/promises'
import { getPriority } from 'os';

let run2 = async () => {
  await mkdir('./docs/beta/src/data', { recursive: true })
  await copyFile('./docs/data/docs.json', './docs/beta/src/data/docs.json')
  await copyFile(
    './docs/data/tag-docs.json',
    './docs/beta/src/data/tag-docs.json'
  )
  await copyFile('./docs/data/tests.json', './docs/beta/src/data/tests.json');
  await copyFile('./docs/data/tests.json', './docs/beta/src/data/tests.json');
  await copyFile('./docs/data/tests.json', './docs/beta/src/data/test.json');
}

run2();
run3();


const promise2 = new Promise((resolve, reject) => {
  setInterval(() => {
    let valueUndefined = null;
    if(valueUndefined === null) {
      console.log('Value rejected');
    } else if (valueUndefined === error) {
      console.log('error handeling rejection issue')
    }
  }, 2000);
})
promise2
.then((user) => {
  console.log(user, "user error handeling resolve");
})
.catch((error) => {
  console.log(error, 'sample size resolve');
})
.finally((resolved) => {
  console.log(resolved,'solving resolve the issue');
});

const newResolveApi =  ((num1, num2) =>{
    return num1 + num2;
})

let objectOne = {
  finallay : true,
  resolvevalue : false,
  restart : 'On',
  return : value,
  git_commits_url: "https://api.github.com/repos/smartprocure/futil-js/git/commits{/sha}",
  git_url : "https://api.github.com/repos/smartprocure",
  git_hub: "singhashish82103@github.com",
  git_repo_count: 34,

}
objectOne();

let objTwo = {
  objectOne: "classified",
  comments_url: "https://api.github.com/repos/smartprocure/futil-js/comments{/number}",
  Comment: "https://apigithub.com/repos/comments{/numberCount}",
  nit_unit: 3000,
  getPriority: "https://api.github.com/repos/smartprocure/futil-js/priority",
  "key": "mit",
  "name": "MIT License",
  "spdx_id": "MIT",
  "url": "https://api.github.com/licenses/mit",
  "node_id": "MDc6TGljZW5zZTEz",
  "forks_count": 68,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 33,
}
objTwo();


let inside_value = 













i
// commit -m dose not refer to find the value of it's original value;
































