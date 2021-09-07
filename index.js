const http = require("http");
const fs  = require("fs");
const {newUser, saveUser} = require("./roommate")
const {send} = require("./mail")


http.createServer((req,res) => {

    if(req.url == '/' && req.method =='GET'){
        res.setHeader("content-type", 'text/html');
        res.end(fs.readFileSync("index.html","utf-8"));
    }

    
    //Roommates

    if(req.url.startsWith("/roommate") && req.method == "POST"){

        newUser()
        .then(async(usuario) =>{

            saveUser(usuario);
            res.end(JSON.stringify(usuario))
        
        })
        .catch(e => {
            res.statusCode = 500
            res.end();
            console.log("Error al registrar", e);
        })
    }

    // Por ahora los devuelve por consola
    if(req.url.startsWith("/roommate") && req.method == "GET"){

        res.setHeader("Content-type", "application/json");
        res.end(fs.readFileSync("roommates.json","utf8"));

    }

    // Gastos


    // Crea gasto
    if(req.url.startsWith("/gasto") && req.method == "POST"){
        
        
    }


    // Muestra Gastos
    if(req.url.startsWith("/gastos") && req.method == "GET"){
        
        res.setHeader("Content-type", "application/json");

    }

    // Modifica gasto
    if(req.url.startsWith("/gasto") && req.method == "PUT"){
        
    }

    // Borra gasto
    if(req.url.startsWith("/gasto") && req.method == "DELETE"){
        
    }


}).listen(3000, console.log("Server On"))      