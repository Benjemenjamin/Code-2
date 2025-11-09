"use strict";
var Test;
(function (Test) {
    var f = FudgeCore;
    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("resize", handleResize);
    let viewPort;
    // let node: f.Node;
    // let cmpMesh: f.ComponentMesh;
    const sun = new Test.Body("Sun", 5, "yellow", 2, 0, 0, 0.001);
    sun.createChild("mercury", 0.8, "green", 10, 20, 4, 0.2);
    sun.createChild("venus", 1, "blue", 1, 1, 5, 5);
    sun.createChild("earth", 1.3, "purple", 1, 1, 6, 5);
    sun.createChild("mars", 0.9, "pink", 1, 1, 7, 5);
    sun.createChild("jupiter", 4, "red", 1, 1, 13, 5);
    sun.createChild("saturn", 3, "orange", 1, 1, 18, 5);
    sun.createChild("uranus", 1.4, "yellow", 1, 1, 24, 5);
    sun.createChild("neptune", 1.1, "yellow", 1, 1, 30, 5);
    function handleLoad(_event) {
        Test.canvas = document.querySelector("canvas");
        Test.canvas.width = window.innerWidth;
        Test.canvas.height = window.innerHeight;
        const cmpCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(-60);
        cmpCamera.mtxPivot.translateY(50);
        cmpCamera.mtxPivot.rotateX(40);
        viewPort = new f.Viewport();
        // const mesh: f.Mesh = new f.MeshSphere("Bob", 64, 64);
        // const material: f.Material = new f.Material("BobMaterial", f.ShaderLit);
        // node = new f.Node("BobNode");
        // node.addComponent(new f.ComponentMesh(mesh));
        // cmpMesh = node.getComponent(f.ComponentMesh);
        // cmpMesh.mtxPivot.translateX(1);
        // node.addComponent(new f.ComponentMaterial(material));
        // node.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(1,0,0);
        // node.addComponent(new f.ComponentTransform());
        viewPort.initialize("BobsViewport", sun, cmpCamera, document.querySelector("canvas"));
        f.Loop.start();
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
    }
    function handleResize() {
        Test.canvas.width = window.innerWidth;
        Test.canvas.height = window.innerHeight;
    }
    function update() {
        // const rotSpeed: number = 360/5;
        // const deltaTime: number = f.Loop.timeFrameGame / 1000;
        // node.getComponent(f.ComponentTransform).mtxLocal.rotateY(rotSpeed * deltaTime, true);
        sun.update();
        viewPort.draw();
    }
})(Test || (Test = {}));
//# sourceMappingURL=FudgeMain.js.map