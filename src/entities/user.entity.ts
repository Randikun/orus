import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, name: 'first_name' })
  firstName: string;

  @Column({ nullable: false, name: 'last_name' })
  lastName: string;

  @Column({ nullable: false, name: 'email' })
  email: string

  @Column({ nullable: false, name: 'password' })
  password: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;
}
