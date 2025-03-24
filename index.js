//WE ARE CREATING A GAME!!

//Step 1 - Look up documentation to build understanding on:
//Object-Oriented Adventure
//Nested Arrays and Objects
//Combining objects, arrays, and function
//Create a class to define the blueprint for creating objects
//How to add a method to a class
//How to set properties on an instance of a class
//Make an instance of each class customizable 
//Create methods to alter the properties of an instance
//Develop a class that inherits attributes from a "parent" class.
//Create static properties for a class.
//Create a "factory."


//PART 1 - HUMBLE BEGINNINGS

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }

    //Example done for us: 
    //We can access Robin's inventory by using a cobination of dot notation and square bracket syntax.
    //For example, we could find a sword at adventurer.inventory[0].

   //As an additional practice exercise, create a loop that logs each item in Robin’s inventory

//    for (i = 0; i < adventurer.inventory.length; i++) {
//         console.log(adventurer.inventory[i])
//     }
   



   //Next, give Robin’s feline friend a friend of his own:
//Add a “companion” sub-object to “Leo” with the following properties:
//The companion’s name is “Frank.”
//The companion’s type is “Flea.”
//The companion has its own belongings, which includes a small hat and sunglasses.
//This is an example of an object, within an object, within an object

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["hat", "sunglasses"]
//         }
//     }
// }
    



// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"]
//         },
//     roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//     }
//     }
    
//     adventurer.roll()
//     adventurer.roll()
//     adventurer.roll()

//PART 2: CLASS FANTASY
//Not sure how companions can give it a try
//When creating classes, begin by searching for the simplest form your data takes.

//Here is what the basic Character class looks like so far, 
//including a constructor function that allows us to create 
//new characters with whatever name we would like:
//this is the blueprint on how we build more characters. This is not the Character itself
// class Character {
//     constructor (name) {
//       this.name = name;
//       this.health = 100;
//       this.inventory = [];
//     }
//     roll (mod = 0) {
//         const result = Math.floor(Math.random()*20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         return result
//       }
//   }


//Now, we can re-create Robin using the Character class
// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];


//PART 3 - CLASS FEATURES

// class Adventurer extends Character {
//     constructor (name, role) {
//       super(name);
//       // Adventurers have specialized roles.
//       this.role = role;
//       // Every adventurer starts with a bed and 50 gold coins.
//       this.inventory.push("bedroll", "50 gold coins");
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout () {
//       console.log(this.name + "is scouting ahead...");
//       super.roll();
//     }
//     run () {
//         console.log(this.name + "is running ahead...")
//         super.roll()
//     }
//   }

 // Next, create a Companion class with
//properties and methods specific to the companions.
// class companions extends Character{
//     constructor(name, role){
//     this.name = name,
//     this.role = role,
//     }
// }

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];


//PART 4 - CLASS UNIFORMS 

//USE STATIC PROPERTIES AND METHODS TO CREATE 
//UNIFORM ATTRIBUTES FOR THE CLASS ITSELF, DON'T DO INSTANCES OF THE CLASS
// class Character {
//    static MAX_HEALTH = 100

// constructor(name){
//     this.name = name,
//     this.health = Character.MAX_HEALTH,
//     this.inventory = []
// }

// roll(mod = 0){
//     const result = Math.floor(Math.random() * 20) + 1 + mod
//     console.log(this.name + " rolled a " + result)
//     return result
// }
// }


// class Adventurer extends Character {
//     static ROLES = ["Fighter", "Healer", "Wizard"]
    
//     constructor(name, role) {
//         super(name),
//         this.role = role,
//         this.inventory.push("bedroll"),
//         this.inventory.push("50 gold coins")
//     }

//     scout() {
//         console.log(this.name + " is scouting ahead...")
//         this.roll(),
//     }
// }

//PART 5 - Gather Your Party

// class AdventurerFactory {  
//     constructor (role) {
//       this.role = role;
//       this.adventurers = [];
//     }
//     generate (name) {
//       const newAdventurer = new Adventurer(name, this.role);
//       this.adventurers.push(newAdventurer);
//     }
//     findByIndex (index) {
//       return this.adventurers[index];
//     }
//     findByName (name) {
//       return this.adventurers.find((a) => a.name === name);
//     }
//   }
  
//   const healers = new AdventurerFactory("Healer");
//   const robin = healers.generate("Robin");

//PART 6 - Developing Skills

//   class Adventurer extends Character {
//     constructor (name, role) {
//       super(name);
//       // Adventurers have specialized roles.
//       this.role = role;
//       // Every adventurer starts with a bed and 50 gold coins.
//       this.inventory.push("bedroll", "50 gold coins");
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout () {
//       console.log(this.name + "is scouting ahead...");
//       super.roll();
//     }

//     duel(person){
//         if (this.health > 50 && person.health > 50) {
//             const theRoll = this.roll();
//             const theirRoll = person.roll()
//       }

//       if (theRoll > theirRoll) {
//         person.health = person.health - 1
//       }else if (person.roll > theRoll){
//         this.health = this.health - 1
//       }

//       let winner
//       if (this.health > 50) {
//         winner = this.name
//       } else {
//         winner = person.name
//       }

//       console.log("Congrats to " + winner)
//     }

