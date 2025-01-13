import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/users/user.module';
import { AbsensiModule } from './modules/absensi/absensi.module';
import { PenggajianModule } from './modules/penggajian/penggajian.module';
import { PenilaianKinerja } from './modules/penilaianKinerja/penilaianKinerja.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: process.cwd() + '.env',
      envFilePath: '.env',
      isGlobal: true,
    }),
    UserModule,
    AbsensiModule,
    PenggajianModule,
    PenilaianKinerja
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
