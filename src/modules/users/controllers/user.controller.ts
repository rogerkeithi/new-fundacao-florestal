import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { SignUpUserProvider } from '../providers/signUpUser.provider';
import { GetUserByUIDProvider } from '../providers/getUserByUID.provider';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUseCase } from '../useCases/login.useCase';
@ApiTags('User')
@Controller('user')
export class userController {
  constructor(
    private createUserProvider: SignUpUserProvider,
    private getUserByUIDProvider: GetUserByUIDProvider,
    private loginUseCase: LoginUseCase,
  ) {}
  @ApiOperation({ description: 'Busca os usuários no firebase pelo UID' })
  @Post('/getUserByUID')
  async getUserByUID(@Query('uid') uid: string): Promise<any> {
    console.log(uid);
    const response = await this.getUserByUIDProvider.getUserByUID(uid);
    return response;
  }
  @ApiOperation({
    description: 'Adiciona o usuário ao firebase authentication',
  })
  @Post('/signUpUser')
  async signUpUser(
    @Query('email') email: string,
    @Query('password') password: string,
  ) {
    try {
      await this.createUserProvider.signUpUser(email, password);
      return 'Usuário adicionado com sucesso!';
    } catch (e) {
      return 'deu merda irmao';
    }
  }
  @Get('/login')
  async login(){

  }
}
