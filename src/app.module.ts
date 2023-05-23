import { Module } from '@nestjs/common';
import { userController } from './modules/users/controllers/user.controller';
import { UserRepository } from './modules/users/repositories/user.repository';
@Module({
  imports: [],
  controllers: [userController],
  providers: [UserRepository],
})
export class AppModule {}
