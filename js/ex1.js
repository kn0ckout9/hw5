class Square {
    constructor(side) {
      this.side = side;
    }
    // Methods
    perimeter() {
      return this.side*4;
    }
    area() {
        return this.side**2;
      }
    diagonal() {
        return Math.sqrt(2*this.side**2);
    }
    describe() {
        return `Square has sides with length ${this.side}, perimeter is ${this.perimeter()}, area is ${this.area()}, and diagnol is ${this.diagonal()}.`;
    }
  }

  const square1 = new Square(2)
  console.log(`Square 1 has the following information: ${square1.describe()}\n`)

  const square2 = new Square(20)
  console.log(`Square 2 has the following information: ${square2.describe()}\n`)

  const square3 = new Square(200)
  console.log(`Square 3 has the following information: ${square3.describe()}\n`)