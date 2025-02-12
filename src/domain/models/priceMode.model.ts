import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";


@Entity("priceMode")
export class PriceMode{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}