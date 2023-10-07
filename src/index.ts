import express,{Express} from 'express'
import envs from './utils/envs'
import connectDB from './db/db_conn';

const app: Express = express()
const port: string | 3000 = envs.PORT;

app.use(express.json())

//DB connection
connectDB()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
