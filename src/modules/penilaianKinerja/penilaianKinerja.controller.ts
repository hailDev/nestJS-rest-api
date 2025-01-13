import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { CreatePenilaianKinerja } from './dto/create-penilaianKinerja.dto';
import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
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
            const result = this.penilaianKinerjaService.getPenilaian()
            return res.status(HttpStatus.OK).send({
                data: result,
                message: 'penilaian found',
                method: req.method,
            });
        }
}