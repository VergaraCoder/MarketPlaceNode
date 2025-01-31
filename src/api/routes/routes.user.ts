import express,{Express} from 'express';

const routes:Express=express();

routes.post("/user");
routes.get("/user");
routes.get("/user/:idUser");
routes.patch("/user/:idUser");
routes.delete("/user/:idUser");