"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleload);
    Asteroids.lineWidth = 2;
    const moveables = [];
    function handleload(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.crc2.lineWidth = Asteroids.lineWidth;
        // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height)
        Asteroids.createPaths();
        console.log("Asteroid paths: ", Asteroids.asteroidPaths);
        createAsteroids(10);
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        //     let asteroid: Asteroid = new Asteroid(1);
        //     console.log(asteroid);
        //     for (let i: number = 0; i < 100;i++){
        //     asteroid.draw();
        //     asteroid.move(0.1);
        //     }
        // }
        window.setInterval(update, 20);
    }
    function shootProjectile(_origin) {
        console.log("Schoot projectile");
        const velocity = Asteroids.Vector.getRandom(100, 100);
        const projectile = new Asteroids.Projectile(_origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("schoot laser");
        const hotspot = new Asteroids.Vector(_event.clientX - Asteroids.crc2.canvas.offsetLeft, _event.clientY - Asteroids.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (const moveable of moveables) {
            if (moveable instanceof Asteroids.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        // console.log("Update");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        for (const moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // console.log((moveables.length));
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map