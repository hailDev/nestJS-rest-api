import { IsNotEmpty, IsNumber } from "class-validator";


export class CreatePenilaianKinerja {
    @IsNotEmpty()
    namaBarang: string;

    @IsNotEmpty()
    @IsNumber()
    hargaBarang: number;

    @IsNotEmpty()
    @IsNumber()
    stokBarang: number;
}