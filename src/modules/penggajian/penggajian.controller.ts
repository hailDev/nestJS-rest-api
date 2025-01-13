import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { CreatePenggajianDto, deleteGajiDto, UpdateGajiDto } from './dto/create-penggajian.dto';
import { Body, Controller, Get, HttpStatus, Req, Res, Post, Put, Delete } from '@nestjs/common';
import { PenggajianService } from './penggajian.service';
import { delayWhen } from 'rxjs';

@Controller({
    path: 'api',
    version: '1'
})

export class PenggajianController {
    constructor(
        private readonly penggajianService: PenggajianService,
        private readonly configService: ConfigService,
    ){}

    @Get('/gaji')
    async getGaji(
        @Req() req: Request,
        @Res() res: Response,): Promise<Response<any>>{
            const result = await this.penggajianService.getPenggajian();
            return res.status(HttpStatus.OK).send({
                data: result,
                message: 'gaji found',
                method: req.method,
            });
        }
    
    @Post('/add-gaji')
    async createGaji(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: CreatePenggajianDto,
        ): Promise<Response<any>>{
            const result = await this.penggajianService.createPenggajian(data);
            return res.status(HttpStatus.OK).send({
                data: result,
                message: 'gaji ditambahkan',
                method: req.method,
            });
        }

    @Put('/update-gaji')
    async getGajiKaryawan(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: UpdateGajiDto,
        ): Promise<Response<any>>{
            const result = await this.penggajianService.updatePenggajian(data);
            return res.status(HttpStatus.OK).send({
                data: result,
                message: `gaji karyawan ${data.idKaryawan} berhasil diupdate`,
                method: req.method,
            });
        }

    @Delete('delete-gaji')
    async deleteGaji(
        @Res() res: Response, 
        @Req() req: Request,
        @Body() data: deleteGajiDto): Promise<Response<any>> {
        try{
            const result = await this.penggajianService.deleteGaji(data);
            return res.status(HttpStatus.OK).send({
              data: result,
              message: `gaji karyawan ${data.idKaryawan} berhasil dihapus`,
              method: req.method,
            });
        }catch(error){
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            message: `Terjadi kesalahan: ${error.message}`,
            method: req.method,
            });
        }
      }
}