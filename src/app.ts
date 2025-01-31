import express,{Express} from 'express';

const server:Express=express();

const StartServer = async () => {

    server.use(express.json());
    server.use(express.urlencoded({extended:false}));
    server.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
}

console.log("melo");
console.log("melo");

export default StartServer();
