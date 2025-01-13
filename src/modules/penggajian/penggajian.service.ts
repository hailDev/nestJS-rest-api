import { Injectable } from '@nestjs/common';
import { CreatePenggajianDto, deleteGajiDto, UpdateGajiDto } from './dto/create-penggajian.dto';
import prisma from '../../prisma.service';

@Injectable()
export class PenggajianService {

    async getPenggajian(): Promise<any> {
        const result = await prisma.penggajian.findMany();
        return result;
    }

    async createPenggajian(data: CreatePenggajianDto): Promise<any>{
        const gaji_bersih = data.gajiPokok + (data.gajiPokok * data.lembur * 0.04) - data.potongan;
        const result = await prisma.penggajian.create({
          data: {
            idKaryawan: data.idKaryawan,
            periodeGaji: data.periodeGaji,
            gajiPokok: data.gajiPokok,
            lembur: data.lembur,
            potongan: data.potongan,
            gajiBersih: gaji_bersih
          }

        });
        return result
    }

    async updatePenggajian(data: UpdateGajiDto): Promise<any>{
        const gaji_bersih = data.gajiPokok + (data.gajiPokok * data.lembur * 0.04) - data.potongan;
        const result = await prisma.penggajian.update({
          where:{id: data.id},
          data:{
            periodeGaji: data.periodeGaji,
            gajiPokok: data.gajiPokok,
            lembur: data.lembur,
            potongan: data.potongan,
            gajiBersih: gaji_bersih
          }
        });
        return result
    }

    async getGajiKaryawan(data: UpdateGajiDto): Promise<any>{
        const gaji_bersih = data.gajiPokok + (data.gajiPokok * data.lembur * 0.04) - data.potongan;
        const result = await prisma.penggajian.update({
          where:{id: data.id},
          data:{
            periodeGaji: data.periodeGaji,
            gajiPokok: data.gajiPokok,
            lembur: data.lembur,
            potongan: data.potongan,
            gajiBersih: gaji_bersih
          },
          include:{
            karyawan:{
              select:{
                nama: true
              }
            }
          }
        });
        return result
    }

    async deleteGaji(data: deleteGajiDto): Promise<any>{
      const result = await prisma.penggajian.delete({
        where:{ id: data.id},
      })

      return result
    }
}
