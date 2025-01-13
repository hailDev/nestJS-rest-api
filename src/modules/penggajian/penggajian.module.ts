import { Module } from '@nestjs/common';
import { PenggajianController } from './penggajian.controller';
import { PenggajianService } from './penggajian.service';

@Module({
  imports: [],
  controllers: [PenggajianController],
  providers: [PenggajianService],
})
export class PenggajianModule {}
