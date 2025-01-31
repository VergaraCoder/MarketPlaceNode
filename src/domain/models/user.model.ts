import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({})
export class User extends Model {
    @Column({
        autoIncrement:true,
        type: DataType.NUMBER,
    })
    id: number=0;

    @Column({
        type:DataType.STRING
    })
    name: string;

    @Column({
        type:DataType.STRING
    })
    email:string;

    @Column({
        type:DataType.STRING
    })
    password:string;
}