require('dotenv').config()

module.exports = {
    app: {
        port: process.env.PORT || 3000,
    },
    mysql2: {
        host: process.env.HOST || "127.0.0.1",
        database: process.env.DATABASES || 'finhogar',
        user: process.env.USER || 'root',
        password: process.env.PASSWORD || 'Basile13',
    }
}