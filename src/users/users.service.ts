import { ErrorWithNested } from '@/application/ErrorWithNested';
import { UserCreateDto } from '@/auth';
import { User } from '@/entities/user.entity';
import { Cypher } from '@/utils/cypher';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: Repository<User>,
    private readonly cypher: Cypher,
  ) {}

  public async createUser(userDto: UserCreateDto) {
    const { firstName, lastName, email, password, role } = userDto;

    const user = await this.findUserByEmail(email);
    if (user.length) throw new HttpException('EMAIL ALREADY REGISTERED', 409);

    const uniqueHash = this.cypher.encryptSHA256(password);
    try {
      await this.userRepository.save({
        firstName,
        lastName,
        email,
        role,
        password: uniqueHash,
        isActive: true,
      });
    } catch (error) {
      throw ErrorWithNested.new(
        `Error while creating user: ${error.message}`,
        error,
      );
    }
  }

  public async findUserByEmail(email: string) {
    return await this.userRepository.find({ where: { email } });
  }
}
