import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateBarangDto {
    @IsNotEmpty()
    namaBarang: string;

    @IsNotEmpty()
    @IsNumber()
    hargaBarang: number;

    @IsNotEmpty()
    @IsNumber()
    stokBarang: number;
}