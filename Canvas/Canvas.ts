window.addEventListener('load', hndlLoad);


function hndlLoad(): void {
    console.log('Alles geladen!');
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    crc2.fillStyle = "#00ffe1f9";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    crc2.beginPath();
    crc2.rect(200, 200, 200, 200)
    crc2.closePath();
    crc2.stroke();

    crc2.beginPath();
    crc2.arc(400, 400, 40, 0, 2 * Math.PI);
    crc2.stroke();


    crc2.beginPath();
    crc2.arc(400, 200, 40, 0, 2 * Math.PI);
    crc2.stroke();

    crc2.beginPath();
    crc2.arc(200, 200, 40, 0, 2 * Math.PI);
    crc2.stroke();

    crc2.beginPath();
    crc2.arc(200, 400, 40, 0, 2 * Math.PI);
    crc2.stroke();

    crc2.beginPath();
    crc2.ellipse(300, 300, 300, 100, Math.PI / 4, 0, 2 * Math.PI)
    crc2.stroke();

    crc2.beginPath();
    crc2.ellipse(300, 300, 300, 100, Math.PI / 1.3, 0, 2 * Math.PI)
    crc2.stroke();

    crc2.beginPath();
    crc2.moveTo(500, 500)
    crc2.lineTo(400, 400)
    crc2.lineTo(400, 300)
    crc2.closePath()
    crc2.stroke()

    crc2.beginPath();
    crc2.moveTo(500, 500)
    crc2.lineTo(400, 400)
    crc2.lineTo(300, 400)
    crc2.closePath()
    crc2.stroke()

    crc2.beginPath();
    crc2.moveTo(200, 200)
    crc2.lineTo(100, 100)
    crc2.lineTo(200, 300)
    crc2.closePath()
    crc2.stroke()

    crc2.beginPath();
    crc2.moveTo(300, 200)
    crc2.lineTo(100, 100)
    crc2.lineTo(300, 200)
    crc2.closePath()
    crc2.stroke()



   



    //    function drawArc (_v1: Vector, _radius: number): void {

    //         const pathtriangle: Path2D = new Path2D();
    //          crc2.arc(_v1.x1, _v1.x2, _radius, 0, 2 * Math.PI);

    //         // crc2.fillStyle = _colorfill;
    //         // crc2.strokeStyle = _colorstroke;
    //         // crc2.fill(pathtriangle);
    //         crc2.stroke(pathtriangle);
    //     }

    //         for (let i: number = 0; i <= 100; i++) {

    //             function randomNumber(): number{
    //                 return Math.floor(Math.random()*800);
    //             }
    //             function randomRadius(): number{
    //                 return Math.floor(Math.random()*100)
    //             }

    //             const v1: Vector = {x1: randomNumber(), x2: randomNumber()};
    //             const radius: number = randomRadius()



    //             drawArc(v1, radius);
    //         }
    
    
    let prompt = window.prompt("hello")
    
    let numpieces: number;

     type Vector = {
        x: number
        y: number
    }
    
    function rotateVector(_v: Vector, _angle: number): Vector {
  const cosA = Math.cos(_angle);
  const sinA = Math.sin(_angle);
  return {
    x: _v.x * cosA - _v.y * sinA,
    y: _v.x * sinA + _v.y * cosA
  };
}
const center: Vector = { x: 0, y: 0 }
const v: Vector = { x: 2, y: 0 }; // Startvektor nach rechts
// const rotated = rotateVector(v, Math.PI / 2); // 90° Drehung
// console.log(rotated);


function rotateAroundPoint(p: Vector, center: Vector, _angle: number): Vector {
  const translated = { x: p.x - center.x, y: p.y - center.y };
  const rotated: Vector = rotateVector(translated, _angle);
  console.log(rotated);
  
  return {
    x: rotated.x + center.x,
    y: rotated.y + center.y
  };
}


    function drawTriangle(_v1: Vector, _v2: Vector, _v3: Vector, _colorfill: string, _colorstroke: string): void {

        const pathtriangle: Path2D = new Path2D();
        pathtriangle.moveTo(_v1.x, _v1.y);
        pathtriangle.lineTo(_v2.x, _v2.y);
        pathtriangle.lineTo(_v3.x, _v3.y);
        pathtriangle.lineTo(_v1.x, _v1.y);
        crc2.fillStyle = _colorfill;
        crc2.strokeStyle = _colorstroke;
        crc2.fill(pathtriangle);
        crc2.stroke(pathtriangle);
    }

    for (let i = 0; i < numpieces; i++) {

    //     function getRandomColor(): string {
    //         console.log("color");

    //         const letters: string= '0123456789ABCDEF';
    //         let color: string = '#';
    //         for (let i: number = 0; i < 6; i++) {
    //             color += letters[Math.floor(Math.random() * 16)];
    //         }
    //         return color;

    //     }

    //     function getRandomNumber() {
    //         return Math.floor(Math.random() * 800);
    //     }

    //     let v1: Vector = { x: getRandomNumber(), y: getRandomNumber() };
    //     let v2: Vector = { x: getRandomNumber(), y: getRandomNumber() };
    //     let v3: Vector = { x: getRandomNumber(), y: getRandomNumber() };
    //     let colorfill = getRandomColor();
    //     let colorstroke = getRandomColor();


    //     drawTriangle(v1, v2, v3, colorfill, colorstroke);
    // }


    // crc2.fillText("Hello",350, 350)
    crc2.strokeText("Hello", 350, 350)

    const path: Path2D = new Path2D();
    path.arc(600, 600, 50, 0, 2 * Math.PI);
    crc2.stroke(path);




}
}
