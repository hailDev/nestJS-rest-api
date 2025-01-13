import { Injectable } from '@nestjs/common';
import { CreatePenilaianKinerja, deletePenilaianDto, getKaryawanPenialainDto, UpdatePenilaianDto } from './dto/create-penilaianKinerja.dto';
import prisma from '../../prisma.service';

@Injectable()
export class PenilaianKinerjaService {

    async getPenilaian(): Promise<any> {
        const result = await prisma.penilaianKinerja.findMany();
        return result;
    }

    async createPenilaian(data: CreatePenilaianKinerja): Promise<any>{
      const result  = await prisma.penilaianKinerja.create({
        data: {
          idKaryawan: data.idKaryawan,
          tanggalPenilaian: data.tanggalPenilaian,
          skorKinerja: data.skorKinerja,
          komentar: data.komentar,
          dinilaiOleh: data.dinilaiOleh,
        }
      });
      return result;
    }

    async updatePenilaian(data: UpdatePenilaianDto){
      const result = await prisma.penilaianKinerja.update({
        where:{
          id: data.id,
        },
        data:{
          tanggalPenilaian: data.tanggalPenilaian,
          skorKinerja: data.skorKinerja,
          komentar: data.komentar,
          dinilaiOleh: data.dinilaiOleh,
        },
      });
      return result
    }

    async getPenilaianKaryawan(data: getKaryawanPenialainDto){
      const result = await prisma.penilaianKinerja.findFirst({
        where:{
          id: data.id,
          idKaryawan: data.idKaryawan,
        }
      });
      return result;
    }

    async deletePenilaian(data:deletePenilaianDto){
      const result = await prisma.penilaianKinerja.delete({
        where:{
          id: data.id,
          idKaryawan: data.idKaryawan,
        }
      });
      return result;
    }

}
