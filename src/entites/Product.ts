import {Entity,PrimaryGeneratedColumn,Column, ManyToOne} from 'typeorm';
import { Company } from './Company';

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @Column()
    price:number;

    @Column()
    description:string;

    @ManyToOne(()=> Company,(company)=> company.products)    
    company: Company;

}