type Equipamento = {
    id:string;
    ip:string;
    name:string;
}

const equipamentos:Array<Equipamento> = [
    {id: "1", ip:"192.168.5.108", name:"Lenovo Anderson"},
    {id:"2", ip:"192.168.5.105",name:"Anderson PC" },
    {id:"3", ip:"192.168.5.103",name:"A01" }
]

export const FakeAPI = () => {

    // const delay = (ms) =>  new Promise(resolve => setTimeout(resolve,ms))
    // delay(1000)

    return equipamentos;

}
