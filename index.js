import app from "./app.js";
import { sequelizeDB } from "./database/db.js";
/*import cors from "cors";
app.use(cors());
*/
async function main() {
  try {
    await sequelizeDB.sync({ force: false });
    app.listen(4000);
    console.log("Servidor escuchando en el puerto: ", 4000);
  } catch (error) {
    console.log("Conexión a la base de datos incompleta ", error);
  }
}
main();
/*
import "./models/productosModel/FavoritoProductoModel.js";
import "./models/productosModel/ImagenesProductoModel.js";
import "./models/productosModel/PreguntasProductoModel.js";
import "./models/productosModel/ReviewsProductosModel.js";
import "./models/productosModel/CarritoProductos.js"
import "./models/productosModel/ProductoModel.js";


import "./models/blogModel/ComentariosBlogModel.js"
import "./models/blogModel/ImagenesBlogModel.js"
import "./models/blogModel/PublicacionesBlogModel.js"

import "./models/buzonModel/BuzonModel.js"
import "./models/buzonModel/ImagenBuzonModel.js"

import "./models/categoriasModel/CategoriaModel.js"

import "./models/ordenesModel/EstadoPago.js"
import "./models/ordenesModel/EstadoPedido.js"
import "./models/ordenesModel/ProductosOrdenModel.js"
import "./models/ordenesModel/OrdenModel.js"



import "./models/serviciosModel/ImagenesServiciosModel.js"
import "./models/serviciosModel/PreguntasServiciosModel.js"
import "./models/serviciosModel/ReviewsServiciosModel.js"
import "./models/serviciosModel/ServicioModel.js"
import "./models/serviciosModel/UbicacionServiciosModel.js"

import "./models/usuariosModel/DomicilioUsuarioModel.js"
import "./models/usuariosModel/ImagenesUsuarios.js"
import "./models/usuariosModel/UsuarioModel.js"


import "./models/foreignKeys/foreignKeys.js";
*/
//inicia el servidor en el puerto indicado