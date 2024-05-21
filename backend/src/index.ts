import 'dotenv/config'

import { app } from './app'
import connectDB from './database/index';

connectDB();


// Routes Declarations
import userRoutes from './routes/user.route';
import healthCheck from './routes/health.route'

app.use("/",healthCheck);
app.use("/api/user",userRoutes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started running on http://localhost:${process.env.SERVER_PORT}`);
});