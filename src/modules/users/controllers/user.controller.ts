import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignUpUserProvider } from '../providers/signUpUser.provider';
import { GetUserByUIDProvider } from '../providers/getUserByUID.provider';

@Controller('user')
export class userController {
  constructor(
    private createUserProvider: SignUpUserProvider,
    private getUserByUIDProvider: GetUserByUIDProvider,
  ) {}
  @Post('/getUserByUID')
  async getUserByUID(@Body() body): Promise<any> {
    const response = await this.getUserByUIDProvider.getUserByUID(body.uid);
    return response;
  }
  @Post('/signUpUser')
  async signUpUser(@Body() body) {
    try {
      await this.createUserProvider.signUpUser(body.email, body.password);
      return 'Usuário adicionado com sucesso!';
    } catch (e) {
      return 'deu merda irmao';
    }
  }
}
