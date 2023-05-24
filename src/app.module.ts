import { Module } from '@nestjs/common';
import { userController } from './modules/users/controllers/user.controller';
import { SignUpUserProvider } from './modules/users/providers/signUpUser.provider';
import { GetUserByUIDProvider } from './modules/users/providers/getUserByUID.provider';
import { GetTokenProvide } from './modules/users/providers/getToken.provide';
@Module({
  imports: [],
  controllers: [userController],
  providers: [SignUpUserProvider, GetUserByUIDProvider, GetTokenProvide],
})
export class AppModule {}
