// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import sequelize from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Word = sequelize.define('Word', {
    word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wordslug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortdef: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    longdef: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {

});
 
// Export model Product
export default Word;