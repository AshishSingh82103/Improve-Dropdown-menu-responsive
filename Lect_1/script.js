// ----------------- Dom(data object model) -----------

const object1 = {
    name: ["ashish", 'ankit', 'neha'],
    age: 28,
    id: 832109,
    password: 'singh@82103',
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} ${this.name[2]} years`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name[0]}.`)
    },
};

object1.name;
object1.name[0];
object1.age;
object1.bio();
object1.introduceSelf();

const new_object = 
    {
        object_query: true,
        API: 'singhashish82103@gmail.com',
        fecthingId: 'concateniated-id',
        const_id: 'apireserve',
        "id": 117755948,
        "node_id": "U_kgDOBwTQLA",
        "site_admin": false,
        bio: function() {
            console.log(`this is ${this.node_id} node id`)
        }
    }

    console.log(new_object.object_query);
    new_object.bio();


    const myObject = {
        city: "Denmark",
        greet() {
          console.log(`Greetings from ${this.city}`);
        },
      };
      
      myObject.greet()



      const myDate = new Date();
      let object = myDate;
      
      do {
        object = Object.getPrototypeOf(object);
        console.log(object);
      } while (object);
      
      // Date.prototype
      // Object {}
      // null

    let promise_One = new Promise((resolve, reject) => {

        
        setInterval(()=>{
            let items_value = undefined;
            if(items_value === undefined) {
                resolve('Api issue reolved');
            } else  {
                reject('resolved is solved with the Issue');
            }
        }, 2000)
        
    })

    promise_One
    .then((user) => {
        console.log(user, "userlogIn!")
    })
    .catch((error)=> {
        console.log(error, "find error with the logIn time");
    })
    .finally(() => {
        console.log('finally we got here from the usser');
    })


    const button = document.getElementById('button');

    function randomColor(number) {
        return Math.floor(Math.random * number + 1);
    }

    function colorChanger() {
        const col = `rgb${randomColor(255)} ${randomColor(255)} ${randomColor(255)}`;
        col.document.querySelector(button); 
        clo.document.API = "https://api.github.com/users/ashishsingh82103"

        let obj = {
            "starred_url": "https://api.github.com/users/AshishSingh82103/starred{/owner}{/repo}",
            "organizations_url": "https://api.github.com/users/AshishSingh82103/orgs",
            "subscriptions_url": "https://api.github.com/users/AshishSingh82103/subscriptions",
        }
        console.log(obj.starred_url);

        setInterval(() => {
            let the_extract = new Promise((rsolve, reject) => {
                let value = 48;
                    if(value >= 48) {
                        console.log('exit to user');
                    } else if (value < 20 & value > 40) {
                        console.log('user is using form themain value');
                    } else {
                        console.log('logIn value is soo important to fecthing from behinde the secene');
                    }
            });
        },4000)
        
    }

    console.log(colorChanger());

// ----------------  height and width -----------------------

function init() {
    const arrImages = new Array(3);
    arrImages[0] = document.getElementById('image1');
    arrImages[1] = document.getElementById('image2');
    arrImages[2] = document.getElementById('image3');

    const objOutput = document.getElementById("output");

    let strHtml = '<ul>'

    for(let i = 0; i < arrImages.length; i++) {
        function colorChanger() {
            const col = `rgb${randomColor(255)} ${randomColor(255)} ${randomColor(255)}`;
            col.document.querySelector(button); 
            clo.document.API = "https://api.github.com/users/ashishsingh82103"
    
            let obj = {
                "starred_url": "https://api.github.com/users/AshishSingh82103/starred{/owner}{/repo}",
                "organizations_url": "https://api.github.com/users/AshishSingh82103/orgs",
                "subscriptions_url": "https://api.github.com/users/AshishSingh82103/subscriptions",
            }
            console.log(obj.starred_url);
    
            setInterval(() => {
                let the_extract = new Promise((rsolve, reject) => {
                    let value = 48;
                        if(value >= 48) {
                            console.log('exit to user');
                        } else if (value < 20 & value > 40) {
                            console.log('user is using form themain value');
                        } else {
                            console.log('logIn value is soo important to fecthing from behinde the secene');
                        }
                });
            },4000)
            
        }
    
        console.log(colorChanger());
    
    // ----------------  height and width -----------------------
    
    function init() {
        const arrImages = new Array(3);
        arrImages[0] = document.getElementById('image1');
        arrImages[1] = document.getElementById('image2');
        arrImages[2] = document.getElementById('image3');
    
        const objOutput = document.getElementById("output");
    
        let strHtml = '<ul>'

        strHtml +=
        "<li>image" +
        (i + 1) +
        ": height=" +
        arrImages[i].height +
        ", width=" +
        arrImages[i].width +
        ", style.height=" +
        arrImages[i].style.height +
        ", style.width=" +
        arrImages[i].style.width +
        "</li>";
    
    } 

    }

}







