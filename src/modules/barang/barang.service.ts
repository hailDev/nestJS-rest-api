import { Injectable } from '@nestjs/common';
import { CreateBarangDto } from './dto/create-barang.dto';
import prisma from '../../prisma.service';

@Injectable()
export class BarangService {

    getBarangs(): string {
        return 'Hello Bangg!';
  }
}
