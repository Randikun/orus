import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserCreationMigration1674509155622 implements MigrationInterface {
  name = 'UserCreationMigration1674509155622';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS users (
            id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
            user_uuid varchar(36) NOT NULL,
            email varchar(36) NOT NULL,
            first_name varchar(36) NOT NULL,
            last_name varchar(36) NOT NULL,
            password varchar(100) NOT NULL,
            is_active BOOLEAN NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE users');
  }
}
