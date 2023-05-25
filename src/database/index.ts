// src/database/index.ts

import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'bitcoinschool_development',
    username: 'bitcoinschool',
    password: 'bitcoinschool',
    define: {
        underscored: true
    }
})