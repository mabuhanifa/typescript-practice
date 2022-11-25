interface isPlayer {
  name: string;
  age: number;
  country: string;

  play(): void;
  // private properties can not be declared in interfaces
}

class Player implements isPlayer {
  constructor(
    public name: string,
    public age: number,
    public country: string
  ) {}
  play() {}
}

// interface can be implemented to create a object using class methods

let sakib: isPlayer;

const players: Player[] = [
  /*only data created using interface isPlayer can be pushed into this array*/
];

let newPlayer = "Nizam";

sakib = new Player("Sakib", 25, "Bangladesh");

players.push(sakib);
// players.push(newPlayer); -> error -> argument of type 'string' is not assignable to parameter of type 'Player'.
