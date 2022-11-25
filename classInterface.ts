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
