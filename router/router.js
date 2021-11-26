const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = new Router();
const mysql = require("mysql");


router.get("/productos", (req, res) => {
  res.render("productos", {});
});

router.get("/contacto", (req, res) => {
  res.render("contacto", {});
});

router.get("/index", (req, res) => {
  res.render("index", {});
});



// Conexión a base de datos
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dantonio",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("CONEXION ESTABLECIDA...");
});

// SELECT - Ver tabla de base de datos
router.get('/', (req, res) => {
  let sql = "SELECT * FROM productos";
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.render('../views/productos', {
          results: results
      });
  });
});

// Insertar - Agregar un producto a la tabla
router.post("/save", (req, res) => {
  let data = {
    producto_nombre: req.body.producto_nombre,
    producto_precio: req.body.producto_precio,
  };
  let sql = "INSERT INTO productos SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});

//UPDATE - Editar un producto de la tabla
router.post("/update", (req, res) => {
  let sql =
    "UPDATE productos SET producto_nombre='" +
    req.body.producto_nombre +
    "', producto_precio='" +
    req.body.producto_precio +
    "' WHERE producto_id=" +
    req.body.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});

// DELETE - Eliminar un producto de la tabla
router.post("/delete", (req, res) => {
  let sql =
    "DELETE FROM productos WHERE producto_id=" + req.body.producto_id + "";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});

module.exports = router;
