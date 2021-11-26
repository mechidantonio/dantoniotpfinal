const { Router } = require("express");
const nodemailer = require("nodemailer");
const contacto = new Router();

contacto.get("/contacto", (req, res) => {
  res.render("contacto");
});

contacto.post("/send-email", (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const asunto = req.body.asunto;
  const mensaje = req.body.mensaje;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  const mailOptions = {
    from: "Remitente",
    to: "naranjaspintadas@gmail.com",
    subject: `${asunto}`,
    html: `<h1>Este es un mensaje de ${nombre} que consulta por ${asunto} y envía el siguiente mensaje: ${mensaje}. Responder a ${email}</h1>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.render("enviado");
      res.status(200).jsonp(reqbody);
    }
  });
});

module.exports = contacto;
