export function getCommand(_state: any): Command{
    return{
        module: "Chassis",
        method: "move",
        data: "forward"
    }
}
getCommand(1)

interface Command {
    module: string
    method: string
    data: string
}

