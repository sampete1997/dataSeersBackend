const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    port: process.env.PORT || 3003,
    // BASE_URL: process.env.REACT_APP_BASE_URL,
    Base_Database: {
        
            "username": process.env.DATABASE_USERNAME,
            "password": process.env.DATABASE_PASSWORD,
            "database": process.env.DATABASE,
            "host": process.env.HOST,
            "dialect": "mysql"
    }

}
