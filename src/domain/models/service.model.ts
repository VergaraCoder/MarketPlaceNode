import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";


@Entity("services")
export class Service{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    idPriceMode:number;

    @Column()
    idUser:number;
}