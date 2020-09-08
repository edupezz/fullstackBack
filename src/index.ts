import express from 'express';
import { AddressInfo } from 'net';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor sendo executado em: http://localhost:${address.port}`);
    }else{
        console.log('Falha ao iniciar servidor');
    }
});