class Players {
  // By default all access are public
  private name: string;
  public age: number;
  readonly country: string;

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const mashrafi = new Players("Mashrafi", 40, "Bangladesh");
const sakib = new Players("Sakib", 40, "Bangladesh");

// Class can be used as a type in typescript

const players: Players[] = []; // Class Player is used as a type

players.push(sakib); //okay
players.push(mashrafi); //okay
// players.push("sakib"); //error

// modifying  access

sakib.age = 45; // okay as it set to public
// sakib.name = "Shakib"; //Property 'name' is private and only accessible within class 'Players'.
// console.log(sakib.name); //Property 'name' is private and only accessible within class 'Players'
// sakib.country = "England"; //Cannot assign to 'country' because it is a read-only property
console.log(sakib.country); // okay as it set to read-only property
