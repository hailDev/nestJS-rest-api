import { HttpStatus, Injectable } from '@nestjs/common';
import { AbsenPulangDto, CreateAbsensiDto } from './dto/create-absensi.dto';
import prisma from '../../prisma.service';

@Injectable()
export class AbsensiService {

    async getAbsensi(): Promise<any[]> {
      const result = await prisma.absensi.findMany();
      return result;
    }

    async createAbsensi(data: CreateAbsensiDto): Promise<any> {
      const result = await prisma.absensi.create({
        data: {
          idKaryawan: data.idKaryawan,
          waktuMasuk: data.waktuMasuk,
          status: data.status,
        },
      });
      return result;
    }

    async absenPulang(data: AbsenPulangDto): Promise<any> {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const absensi = await prisma.absensi.findFirst({
        where: {
          idKaryawan: data.idKaryawan,
          waktuMasuk:{
            gte: today,
            lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
          },
        },
      });

      if(!absensi){
        return null;
      }

      const result = await prisma.absensi.update({
        where:{id: absensi.id},
        data:{
          waktuKeluar:data.waktuKeluar,
        },
      })

      return result;
    }

}
