import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { response } from 'express';

@Controller('user')
export class userController {
  constructor(private userRepository: UserRepository) {}
  @Post('/getById')
  async getUserById(@Body() body): Promise<any> {
    const response = await this.userRepository.getUser(body.uid);
    return response;
  }
  @Post('/signup')
  async signUp(@Body() body) {
    try {
      await this.userRepository.newUser(body.email, body.password);
      return 'Usuário adicionado com sucesso!';
    } catch (e) {
      return 'deu merda irmao';
    }
  }
}
