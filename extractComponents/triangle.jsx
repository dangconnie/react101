class Triangle{
	constructor(side1, side2, side3) {
		this.name = "Triangle";
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;	
	}

	get area(){
		return this.calcArea();
	}

	calcArea(){
		var perim = (this.side1 + this.side2 + this.side3)/2;
		var area = Math.sqrt(perim*((perim - this.side1)*(perim - this.side2)*(perim - this.side3)));
		return area;
	}
}

//Equilateral
class EquiTriangle extends Triangle{
	constructor(side1) {
		super(side1, side1, side1);
		this.name = "EquiTriangle";
	}
}

//Isosceles
class Isosceles extends Triangle{
	constructor(side1, side2) {
		super(side1, side2, side2);
		this.name = "Isosceles"
	}
}

const triangle = new Triangle(10, 10, 15);
const equiTriangle = new EquiTriangle (10);
const isosceles = new Isosceles (10, 6);//Second value must be more than 1/2 of the first side for it to form a triangle


console.log(isosceles.area);