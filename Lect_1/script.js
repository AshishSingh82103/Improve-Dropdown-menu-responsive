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
      // Object { }
      // null



