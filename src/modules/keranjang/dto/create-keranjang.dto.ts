import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateKeranjangDto {

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    barangId: number;

    @IsNotEmpty()
    jumlah: number;
}