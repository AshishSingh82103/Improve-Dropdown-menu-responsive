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












  



