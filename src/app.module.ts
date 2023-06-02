import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [UserModule],
})
export class AppModule {}
