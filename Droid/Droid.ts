export function getCommand(): Command{
    const command: Command = {

        module: "Chassis",
        method: "move",
        data: "forward"
    }
    console.log(command)
    return command;
}

interface Command {
    module: string
    method: string
    data: string
}

