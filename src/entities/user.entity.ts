import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({
    nullable: false,
    name: 'first_name',
    type: 'varchar',
    length: '36',
  })
  firstName: string;

  @Column({
    nullable: false,
    name: 'last_name',
    type: 'varchar',
    length: '36',
  })
  lastName: string;

  @Column({
    nullable: false,
    name: 'email',
    type: 'varchar',
    length: '36',
  })
  email: string;

  @Column({
    nullable: false,
    name: 'password',
    type: 'varchar',
    length: '100',
  })
  password: string;

  @Column({
    nullable: false,
    name: 'role',
    type: 'varchar',
    length: '16',
  })
  role: string;

  @Column({
    default: true,
    name: 'is_active',
    type: 'boolean',
  })
  isActive: boolean;
}
