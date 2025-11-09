namespace Test{
    import f = FudgeCore;
    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("resize", handleResize);
    let viewPort: f.Viewport;
    // let node: f.Node;
    // let cmpMesh: f.ComponentMesh;

    const sun: Body = new Body("Sun", 5, "yellow", 2, 0, 0, 0.001);
    sun.createChild("mercury", 0.8, "green", 10, 20, 4, 0.2);
    sun.createChild("venus", 1, "blue", 1, 1, 5, 5)
    sun.createChild("earth", 1.3, "purple", 1, 1, 6, 5)
    sun.createChild("mars", 0.9, "pink", 1, 1, 7, 5)
    sun.createChild("jupiter", 4, "red", 1, 1, 13, 5)
    sun.createChild("saturn", 3, "orange", 1, 1,18, 5)
    sun.createChild("uranus", 1.4, "yellow", 1, 1, 24, 5)
    sun.createChild("neptune", 1.1, "yellow", 1, 1, 30, 5)

    export let canvas: HTMLCanvasElement;
    
    function handleLoad(_event: Event): void{
        canvas = document.querySelector("canvas")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const cmpCamera: f.ComponentCamera = new f.ComponentCamera();
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

        viewPort.initialize("BobsViewport", sun, cmpCamera, document.querySelector("canvas") as HTMLCanvasElement);
        f.Loop.start();
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    }

    function handleResize():void{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function update():void {
        // const rotSpeed: number = 360/5;
        // const deltaTime: number = f.Loop.timeFrameGame / 1000;
        // node.getComponent(f.ComponentTransform).mtxLocal.rotateY(rotSpeed * deltaTime, true);
        sun.update();

        viewPort.draw();
    }
}