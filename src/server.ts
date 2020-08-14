import express from 'express';
import routes from './routes';
import cors from 'cors';

console.log("Iniciei aqui seu chupeta");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



// localhost:3333
app.listen(3333);
