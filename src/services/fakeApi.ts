type Equipamento = {
    id:string;
    ip:string;
    name:string;
}

const equipamentos:Array<Equipamento> = [
    {id: "1", ip:"192.168.1.244", name:"Anderson CP"},
    {id:"2", ip:"192.168.1.167",name:"Edivar CP" },
    {id:"3", ip:"192.168.2.106",name:"Edivar CE" }
]

export const FakeAPI = () => {

    // const delay = (ms) =>  new Promise(resolve => setTimeout(resolve,ms))
    // delay(1000)

    return equipamentos;

}
