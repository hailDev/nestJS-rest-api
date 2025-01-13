import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateAbsensiDto {
    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;

    @IsNotEmpty()
    @Transform(({ value }) => new Date(value))
    @IsDate()
    waktuMasuk: Date;

    @IsNotEmpty()
    @IsString()
    status: string;
}

export class AbsenPulangDto{
    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    waktuKeluar: Date;
}