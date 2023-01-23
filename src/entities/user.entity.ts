import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    name: 'first_name',
    type: 'varchar',
    length: '36'
  })
  uuid: string;

  @Column({
    nullable: false,
    name: 'first_name',
    type: 'varchar',
    length: '36'
  })
  firstName: string;

  @Column({
    nullable: false,
    name: 'last_name',
    type: 'varchar',
    length: '36'
  })
  lastName: string;

  @Column({
    nullable: false,
    name: 'email',
    type: 'varchar',
    length: '36'
  })
  email: string

  @Column({
    nullable: false,
    name: 'password',
    type: 'varchar',
    length: '100',
  })
  password: string;

  @Column({
    default: true,
    name: 'is_active',
    type: 'boolean'
  })
  isActive: boolean;
}
