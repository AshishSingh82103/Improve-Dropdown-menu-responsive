// ----------------- Dom(data object model) -----------

const object = {
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

object.name;
object.name[0];
object.age;
object.bio();
