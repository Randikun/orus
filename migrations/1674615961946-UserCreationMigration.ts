import { MigrationInterface, QueryRunner, Table, TableColumnOptions, TableOptions } from "typeorm";
import { appendTimestamps } from "./utils/timestamps.util";

export class UserCreationMigration1674615961946 implements MigrationInterface {
    name = 'UserCreationMigration1674615961946'


    public async up(queryRunner: QueryRunner): Promise<any> {
        const user = {
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'uuid',
                    type: 'varchar',
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'first_name',
                    type: 'varchar',
                    length: 25,
                },
                {
                    name: 'last_name',
                    type: 'varchar',
                    length: 25,
                    isUnique: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: 25,
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: 150,
                },
                {
                    name: 'role',
                    type: 'varchar',
                    length: 12,
                },
                {
                    name: 'is_active',
                    type: 'boolean',
                    default: true,
                }
            ] as TableColumnOptions[],
            engine: 'InnoDB',
        } as TableOptions;

        appendTimestamps(user, true);

        await queryRunner.createTable(new Table(user), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
