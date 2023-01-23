import express, { NextFunction, urlencoded } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
	(
		err: Error,
		req: express.Request,
		res: express.Response,
		next: NextFunction
	) => { res.status(500).json({message: err.message})}
);
// app.use('/wallet', walletRouter)

app.get('/', (req, res) => {
	res.send('Welcome to my MVP wallet service');
});

// const PORT = process.env.PORT || 6000;
// app.listen(PORT, () => {
// 	Console.log(`My server is running on port ${PORT}....`);
// });

const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`My server is running on port ${PORT}....`);
});