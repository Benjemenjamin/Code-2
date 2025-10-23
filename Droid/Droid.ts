export namespace Droid {

interface Command {
    module: string
    method: string
    data: string
}


export function getCommand(): Command{
    const command: Command = {

        module: "Chassis",
        method: "move",
        data: "right"
    }
    console.log(command)
    return command;
}

}