const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {
        user: "nasho16101999@gmail.com",
        pass: "perrosfalderos"
    },
});

const send = async(ganador, correos, premio) => {

    let mailOptions = {
        from: "nasho16101999@gmail.com",
        to: ["nasho16101999@gmail.com"].concat(correos),
        subject: `${ganador.nombre} ha ganado!`,
        html: `<h3>${ganador.nombre} ganó  ${premio} </h3> `
    };
    try{
        const result = await transporter.sendMail(mailOptions)
    } catch(e){
        throw e
    }
};



module.exports = {send}