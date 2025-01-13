import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { CreatePenilaianKinerja, deletePenilaianDto, getKaryawanPenialainDto, UpdatePenilaianDto } from './dto/create-penilaianKinerja.dto';
import { Body, Controller, Get, Put, HttpStatus, Req, Res, Post, Delete } from '@nestjs/common';
import { PenilaianKinerjaService } from './penilaianKinerja.service';


@Controller({
    path: 'api',
    version: '1'
})

export class PenilaianKinerjaController {
    constructor(
        private readonly penilaianKinerjaService: PenilaianKinerjaService,
        private readonly configService: ConfigService,
    ){}

    @Get('/penilaian-kinerja')
    async getPenilaian(
        @Req() req: Request,
        @Res() res: Response,): Promise<Response<any>>{
            const result = await this.penilaianKinerjaService.getPenilaian()
            return res.status(HttpStatus.OK).send({
                data: result,
                message: 'penilaian found',
                method: req.method,
            });
        }

    @Post('/add-penilaian')
    async createPenilaian(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: CreatePenilaianKinerja): Promise<Response<any>>{
            const result = await this.penilaianKinerjaService.createPenilaian(data)
            return res.status(HttpStatus.OK).send({
                data: result,
                message: "berhasil membuat penilaian",
                method: req.method,
            });
        }

    @Put('/update-penilaian')
    async updatePenilaian(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: UpdatePenilaianDto): Promise<Response<any>>{
            const result = await this.penilaianKinerjaService.updatePenilaian(data);
            return res.status(HttpStatus.OK).send({
                data: result,
                message: "penialaian berhasil diupdate",
                method: req.method,
            });
        }

    @Get('/get-penilaian-karyawan')
    async getPenilaianKaryawan(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: getKaryawanPenialainDto): Promise<Response<any>>{
            const result = await this.penilaianKinerjaService.getPenilaianKaryawan(data);
            return res.status(HttpStatus.OK).send({
                data: result,
                message: `penilaian karyawan ${data.idKaryawan} ditemukakn`,
                method: req.method,
            })
            
        }

    
    @Delete('/delete-penilaian')
    async deletePenilaian(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: deletePenilaianDto): Promise<Response<any>>{
            const result = await this.penilaianKinerjaService.deletePenilaian(data);
            return res.status(HttpStatus.OK).send({
                data: result,
                message: "penilaian berhhasil dihapus",
                method: req.method,
            })
        }
}