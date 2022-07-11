// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const sequelize = new Sequelize('lgbtwiki', 'foxieze', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
});
 
// export connection
export default sequelize;