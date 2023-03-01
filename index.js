import app from "./app.js";
import { sequelizeDB } from "./database/db.js";

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
