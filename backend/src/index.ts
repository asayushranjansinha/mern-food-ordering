import 'dotenv/config'

import { app } from './app'
import connectDB from './config/db.config';
import configureCloudinary from './config/cloudinary.config';

connectDB();

configureCloudinary();


// Routes Declarations
import healthCheck from './routes/health.route'
import userRoutes from './routes/user.route';
import restaurantRoutes from './routes/restaurant.route'

app.use("/", healthCheck);
app.use("/api/user", userRoutes);
app.use("/api/restaurant", restaurantRoutes);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started running on http://localhost:${process.env.SERVER_PORT}`);
});