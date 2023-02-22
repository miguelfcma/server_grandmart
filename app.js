import express from "express";
import cors from "cors";

const app = express();


import serviciosRoutes from "./routes/serviciosRoutes/servicios.routes.js";
import productoRoutes from "./routes/productosRoutes/productos.routes.js";
import usuariosRoutes from "./routes/usuariosRoutes/usuarios.routes.js";
import imagenUsuariosRoutes from "./routes/usuariosRoutes/imagenUsuario.routes.js";
import categoriaRoutes from "./routes/categoriasRoutes/categorias.routes.js";


//middlewares
//esto permitira que cada vez que se envia algo al servidor en formato json
//el servidor podra leerlo e interpretarlo guardandolo en req.body
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
app.use(usuariosRoutes);
app.use(categoriaRoutes);
app.use(imagenUsuariosRoutes);
app.use(productoRoutes);
app.use(serviciosRoutes);
export default app;
