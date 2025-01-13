import { Module } from '@nestjs/common';
import { PenilaianKinerjaController } from './penilaianKinerja.controller';
import { PenilaianKinerjaService } from './penilaianKinerja.service';

@Module({
  imports: [],
  controllers: [PenilaianKinerjaController],
  providers: [PenilaianKinerjaService],
})
export class PenilaianKinerja {}
