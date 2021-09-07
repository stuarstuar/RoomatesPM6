const axios = require("axios");
const {v4: uuidv4} = require("uuid");
const fs = require("fs");

const newUser = async() => {

    try{
        const {data} = await axios.get("https://randomuser.me/api");
        const usuario = data.results[0];

        const roommate = {
            id: uuidv4().slice(30),
            correo: usuario.email,
            nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`
        };
        return roommate
    }
    catch(e){

        throw e;
    }
} 

const saveUser = (usuario) => {

    const roommatesJSON = JSON.parse(fs.readFileSync("roommates.json","utf8"))
    roommatesJSON.roommates.push(usuario)
    fs.writeFileSync("roommates.json",JSON.stringify(roommatesJSON));

}


const newGasto = () =>{

       // const {data} = await axios.get("https://randomuser.me/api");
        const usuario = data.results[0];

        const roommate = {
            roommate: AA,
            descripción: BB,
            monto: CC
        };

        return roommate

}


const saveGasto = (gasto) => {

    const gastosJSON = JSON.parse(fs.readFileSync("gastos.json","utf8"))
    gastosJSON.gastos.push(gasto)
    fs.writeFileSync("gastos.json",JSON.stringify(gastosJSON));

}



module.exports = { newUser, saveUser }