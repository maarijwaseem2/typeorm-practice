import {Entity,PrimaryGeneratedColumn,Column, OneToOne, JoinColumn} from 'typeorm';
import { Profile } from './Profile';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @OneToOne(()=> Profile,{ eager:true , cascade:true,onDelete:"CASCADE"})
    @JoinColumn()
    profile: Profile
}