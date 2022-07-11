// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_ADDRESS,
    port: process.env.DB_PORT,
    dialect: 'mariadb',
    logging: false
});
 
// export connection
export default sequelize;