export var Droid;
(function (Droid) {
    // let counter: boolean = true
    let random = 1;
    function getCommand() {
        const command = {
            module: "Chassis",
            method: "move",
            data: "forward"
        };
        random = Math.floor(Math.random() * 5);
        switch (random) {
            case 0:
                command.data = "forward";
                break;
            case 1:
                command.data = "back";
                break;
            case 2:
                command.data = "left";
                break;
            case 3:
                command.data = "right";
                break;
            case 4:
                command.data = "stop";
                break;
        }
        // if (counter == false) {
        //   command.data = "left"
        //   counter = true;
        //} else {
        //     counter = false;
        // }
        console.log(command);
        return command;
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
//# sourceMappingURL=Droid.js.map