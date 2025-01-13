import { Module } from '@nestjs/common';
import { AbsensiController } from './absensi.controller';
import { AbsensiService } from './absensi.service';

@Module({
  imports: [],
  controllers: [AbsensiController],
  providers: [AbsensiService],
})
export class AbsensiModule {}
