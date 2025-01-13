import { Injectable } from '@nestjs/common';
import { CreatePenilaianKinerja } from './dto/create-penilaianKinerja.dto';
import prisma from '../../prisma.service';

@Injectable()
export class PenilaianKinerjaService {

    getPenilaian(): string {
        return 'Hello Penilaian!';
  }
}
