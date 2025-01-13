import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { AbsenPulangDto, CreateAbsensiDto } from './dto/create-absensi.dto';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { AbsensiService } from './absensi.service';

@Controller({
    path: 'api',
    version: '1'
})

export class AbsensiController {
    constructor(
        private readonly absensiService: AbsensiService,
        private readonly configService: ConfigService,
    ){}

    @Get('/absensi')
    async getAllAbsensi(
        @Req() req: Request,
        @Res() res: Response,): Promise<Response<any>>{
            const result = await this.absensiService.getAbsensi()
            return res.status(HttpStatus.OK).send({
                data: result,
                message: 'absensi found',
                method: req.method,
            });
        }

    @Post('/create/absensi')
    async createAbsensi(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: CreateAbsensiDto,
        ): Promise<Response<any>> {
        const result = await this.absensiService.createAbsensi(data);
        return res.status(HttpStatus.CREATED).send({
            data: result,
            message: 'Absensi has been created',
            request: req.method,
        });
    }

    @Put('/absen/pulang')
    async absenPulang(
        @Req() req: Request,
        @Res() res: Response,
        @Body() data: AbsenPulangDto,
        ): Promise<Response<any>>{
        const result = await this.absensiService.absenPulang(data);

        if(!result){
            return res.status(HttpStatus.NOT_FOUND).send({
                message: 'Absen not found',});
        }

        return res.status(HttpStatus.OK).send({
            data: result,
            message: 'Absen pulang berhasil',
            request: req.method,
        });
    }
    
    // @Delete('/delete/absensi/:id')
    // async deleteAbsensi(
    //     @Res() res: Response, 
    //     @Param('id') id: string): Promise<Response<any>> {
    //     const absensiId = Number(id);
    //     const result = await this.absensiService.deleteAbsensi(absensiId);
    //     return res.status(HttpStatus.OK).send({
    //         data: result,
    //         message: 'Absensi has been deleted',
    //     });
    // }

    // @Get('/get/absensi/:id')
    // async getAbsensi(
    //     @Res() res: Response,
    //     @Param('id') id: string): Promise<Response<any>> {
    //     const absensiId = Number(id);

    //     if (isNaN(absensiId)) {
    //         return res.status(HttpStatus.BAD_REQUEST).send({
    //         message: 'Invalid user ID',
    //         });
    //     }

    //     const result = await this.absensiService.getAbsensiById(absensiId);
    //     if (!result) {
    //         return res.status(HttpStatus.NOT_FOUND).send({
    //         message: 'Absensi not found',
    //         });
    //     }

    //     return res.status(HttpStatus.OK).send({
    //         data: result,
    //         message: 'Absensi has been found',
    //     });
    // }
}