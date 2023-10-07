import {Sequelize} from 'sequelize'
import envs from '../utils/envs'

const sequelize = new Sequelize(envs.DB_NAME, envs.DB_USERNAME, envs.DB_PASSWORD, {
    host: envs.DB_HOST,
    dialect: 'postgres'
})

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('DB connected Successfully')
    } catch (error) {
        console.log('Error', error)
    }
}

export default connectDB