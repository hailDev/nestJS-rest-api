import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { CreateBarangDto } from './dto/create-barang.dto';
import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { BarangService } from './barang.service';

@Controller({
    path: 'api',
    version: '1'
})

export class BarangController {
    constructor(
        private readonly barangService: BarangService,
        private readonly configService: ConfigService,
    ){}

    @Get('/barang')
    async getBarang(
        @Req() req: Request,
        @Res() res: Response,): Promise<Response<any>>{
            const result = this.barangService.getBarangs()
            return res.status(HttpStatus.OK).send({
                data: result,
                message: 'barang found',
                method: req.method,
            });
        }
}