import { DataTypes } from "sequelize";
import { sequelizeDB } from "../../database/db.js";

export const ProductosOrden = sequelizeDB.define(
  "productosordens",
  {
    id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DOUBLE(10, 2),
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      autoIncrement: false,
      allowNull: false,
    },
    id_orden: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      autoIncrement: false,
      allowNull: false,
    },
  },
  { timestamps: true }
);

