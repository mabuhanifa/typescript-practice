class Player {
  name: string;
  age: number;
  country: string;

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 40, "Bangladesh");

// Class can be used as a type in typescript

const players: Player[] = []; // Class Player is used as a type

players.push(sakib); //okay
players.push(mashrafi); //okay
// players.push("sakib"); //error

export {};
