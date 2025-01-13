import { Controller, Get, Post, Param, Delete, Put, Req, Res, HttpStatus, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';

@Controller({
  path: 'api',
  version: '1',
})
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('/create')
  // postHello(): string {
  //   return 'Hello Bangg Post!';
  // }

  // @Get('/user/:name')
  // getUser(@Param('name') personName: string): string {
  //   return `Hello ${personName}!`;
  // }

  // @Delete('/user/:name')
  // deleteUser(@Param('name') personName: string): string {
  //   return `User ${personName} has been deleted!`;
  // }

  // @Put('/user/:name')
  // updateUser(@Param('name') personName: string): string {
  //   return `User ${personName} has been updated!`;
  // }

  // @Get('/address')
  // getAddress(
  //   @Req() req: Request, 
  //   @Res() res: Response,): Response<any> {
  //   return res.status(HttpStatus.OK).send({
  //     adress: [
  //       'Jl. Jendral Sudirman No. 1',
  //       'Gg. jati No. 2',
  //       'Jl. Jendral Gatot Subroto No. 3',
  //     ],
  //     request: req.method,
  //   });
  // }

  // @Post('/address')
  // postAddress(
  //   @Req() req: Request, 
  //   @Res() res: Response,
  //   @Body() data: object): Response<any> {
  //   return res.status(HttpStatus.OK).send({
  //     adress: [
  //       'Jl. Jendral Sudirman No. 1',
  //       'Gg. jati No. 2',
  //       'Jl. Jendral Gatot Subroto No. 3',
  //     ],
  //     request: req.method,
  //     bodyData: data,
  //   });
  // }

  // @Get('/userdata/dummy')
  // getDummyData(
  //   @Req() req: Request,
  //   @Res() res: Response,): Response<any> {
  //   const user =  this.appService.findUser('bangg'); 
  //   return res.status(HttpStatus.OK).send({
  //     data: user,
  //     request: req.method,
  //   });
  
  // }
  // @Delete('/userdata/dummy')
  // deleteDummyData(
  //   @Req() req: Request,
  //   @Res() res: Response,): Response<any> {
  //   const user =  this.appService.deleteUser('bangg'); 
  //   return res.status(HttpStatus.OK).send({
  //     data: user,
  //     request: req.method,
  //   });
  // }

  // @Get('/config')
  // getConfig(
  //   @Req() req: Request, 
  //   @Res() res: Response): Response<any> {
  //   return res.status(HttpStatus.OK).send({
  //     data: {
  //       appName: this.configService.get<string>('APPLICATION_NAME'),
  //       port: Number(this.configService.get<number>('APPLICATION_PORT')),
  //       request: req.method,
  //     }
  //   });
  // }

  // @Post('/create/users')
  // createBarang(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() data: CreateUserDto): Response<any> {
  //   const result = this.appService.saveUser(data);
  //   return res.status(HttpStatus.CREATED).send({
  //     data: result,
  //     message: 'Data has been created',
  //     request: req.method,
  //   });
  // }

  @Post('/create/pr/users')
  async createUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body() data: CreateUserDto,
  ): Promise<Response<any>> {
    const result = this.appService.createUser(data);
    return res.status(HttpStatus.CREATED).send({
      data: result,
      message: 'User has been created',
      request: req.method,
    });
  }

  @Delete('/delete/pr/users/:username')
  async deleteUser(
    @Res() res: Response, 
    @Param('username') username: string): Promise<Response<any>> {
    const result = await this.appService.deleteUser(username);
    return res.status(HttpStatus.OK).send({
      data: result,
      message: 'User has been deleted',
    });
  }

  @Get('/get/pr/users/:id')
  async getUser(
    @Res() res: Response,
    @Param('id') id: string): Promise<Response<any>> {
    const userId = Number(id);

    if (isNaN(userId)) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        message: 'Invalid user ID',
      });
    }

    const result = await this.appService.getUserById(userId);
    if (!result) {
      return res.status(HttpStatus.NOT_FOUND).send({
        message: 'User not found',
      });
    }

    return res.status(HttpStatus.OK).send({
      data: result,
      message: 'User has been found',
    });
  }

}
