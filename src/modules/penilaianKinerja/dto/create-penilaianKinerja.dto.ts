import { IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";


export class CreatePenilaianKinerja {
    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;

    @IsNotEmpty()
    @IsString()
    tanggalPenilaian: string;

    @IsNotEmpty()
    @IsNumber()
    skorKinerja: number;

    @IsString()
    komentar: string;

    @IsNotEmpty()
    @IsNumber()
    dinilaiOleh: number;

}

export class UpdatePenilaianDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;

    @IsNotEmpty()
    @IsString()
    tanggalPenilaian: string;

    @IsNotEmpty()
    @IsNumber()
    skorKinerja: number;

    @IsString()
    komentar: string;

    @IsNotEmpty()
    @IsNumber()
    dinilaiOleh: number;
}

export class getKaryawanPenialainDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;
}

export class deletePenilaianDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    idKaryawan: number;
}
