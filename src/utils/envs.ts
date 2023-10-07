import dotenv from 'dotenv'
dotenv.config()

const PORT: string | 3000 = process.env.PORT || 3000
const DB_NAME: string = process.env.DB_NAME!
const DB_USERNAME: string = process.env.DB_USERNAME!
const DB_PASSWORD: string = process.env.DB_PASSWORD!
const DB_HOST: string = process.env.DB_HOST!

export default { PORT, DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME }