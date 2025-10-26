"use strict";
window.addEventListener('load', onLoadHandler);
function onLoadHandler() {
    console.log('Alles geladen!');
    const canvas = document.querySelector("canvas");
    const crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#00ffe1f9";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.rect(200, 200, 200, 200);
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
    crc2.ellipse(300, 300, 300, 100, Math.PI / 4, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.beginPath();
    crc2.ellipse(300, 300, 300, 100, Math.PI / 1.3, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(500, 500);
    crc2.lineTo(400, 400);
    crc2.lineTo(400, 300);
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(500, 500);
    crc2.lineTo(400, 400);
    crc2.lineTo(300, 400);
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(200, 200);
    crc2.lineTo(100, 100);
    crc2.lineTo(200, 300);
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(300, 200);
    crc2.lineTo(100, 100);
    crc2.lineTo(300, 200);
    crc2.closePath();
    crc2.stroke();
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
    function drawTriangle(_v1, _v2, _v3, _colorfill, _colorstroke) {
        const pathtriangle = new Path2D();
        pathtriangle.moveTo(_v1.x1, _v1.x2);
        pathtriangle.lineTo(_v2.x1, _v2.x2);
        pathtriangle.lineTo(_v3.x1, _v3.x2);
        pathtriangle.lineTo(_v1.x1, _v1.x2);
        crc2.fillStyle = _colorfill;
        crc2.strokeStyle = _colorstroke;
        crc2.fill(pathtriangle);
        crc2.stroke(pathtriangle);
    }
    for (let i = 0; i <= 200; i++) {
        function getRandomColor() {
            console.log("color");
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
            console.log();
        }
        function getRandomNumber() {
            return Math.floor(Math.random() * 800);
        }
        let v1 = { x1: getRandomNumber(), x2: getRandomNumber() };
        let v2 = { x1: getRandomNumber(), x2: getRandomNumber() };
        let v3 = { x1: getRandomNumber(), x2: getRandomNumber() };
        let colorfill = getRandomColor();
        let colorstroke = getRandomColor();
        drawTriangle(v1, v2, v3, colorfill, colorstroke);
    }
    // crc2.fillText("Hello",350, 350)
    crc2.strokeText("Hello", 350, 350);
    const path = new Path2D();
    path.arc(600, 600, 50, 0, 2 * Math.PI);
    crc2.stroke(path);
}
//# sourceMappingURL=Canvas.js.map