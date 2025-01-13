import { isNotEmpty, IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";


export class CreatePenggajianDto {
    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;

    @IsNotEmpty()
    @IsString()
    periodeGaji: string;

    @IsNotEmpty()
    @IsNumber()
    gajiPokok: number;

    @IsNotEmpty()
    @IsNumber()
    lembur: number;

    @IsNotEmpty()
    @IsNumber()
    potongan: number;

    // @IsNotEmpty()
    // @IsNumber()
    // gajiBersih: number;
}

export class UpdateGajiDto{

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;

    @IsNotEmpty()
    @IsString()
    periodeGaji: string;

    @IsNotEmpty()
    @IsNumber()
    gajiPokok: number;

    @IsNotEmpty()
    @IsNumber()
    lembur: number;

    @IsNotEmpty()
    @IsNumber()
    potongan: number;
}

export class deleteGajiDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;
}