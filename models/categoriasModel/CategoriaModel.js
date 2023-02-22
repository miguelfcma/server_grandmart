import { DataTypes } from "sequelize";
import { sequelizeDB } from "../../database/db.js";

export const  Categoria = sequelizeDB.define(
    "categorias",
    {
      id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      id_categoria: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  