//задача 1

function parseCount(a) {
    let result = Number.parseFloat(a);
    if(isNaN(result)) {
        throw new Error("Невалидное значение")
    }
    return result;
    }
    
function validateCount(a) {
   try {
    return parseCount(a)
    } catch(error) {
     return (error);
    }
    }



    //задача 2

    class Triangle {
        constructor(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
        if(this.a + this.b <= this.c || this.b + this.c <= this.a || this.c + this.a <= this.b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        }
        get perimeter () {
            return this.a + this.b + this.c;
        }
        get area () {
            let p = 1/2 * (this.a + this.b + this.c);
            return parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
        }
    }

        function getTriangle(a, b, c) {
            try {
                return new Triangle(a, b, c)

            } catch(error) {
                return {
                    get area(){
                        return "Ошибка! Треугольник не существует";
                    },
                    get perimeter() {
                        return "Ошибка! Треугольник не существует";
                    }
                }
                };
            }


    
    
