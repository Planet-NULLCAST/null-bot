import sequelize from './db_config.js'

const dbAuth = () => {

    try {

        sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (error) {
        
        throw new Error('Unable to connect to the database:'+ error); 
    }

}

export default dbAuth;