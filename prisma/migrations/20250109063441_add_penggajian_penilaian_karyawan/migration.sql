-- CreateTable
CREATE TABLE "master_karyawan" (
    "karyawan_id" SERIAL NOT NULL,
    "nama_karyawan" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,

    CONSTRAINT "master_karyawan_pkey" PRIMARY KEY ("karyawan_id")
);

-- CreateTable
CREATE TABLE "penggajian" (
    "penggajian_id" SERIAL NOT NULL,
    "karyawan_id" INTEGER NOT NULL,
    "periode_gaji" TIMESTAMP(3) NOT NULL,
    "gaji_pokok" INTEGER NOT NULL,
    "lembur" INTEGER NOT NULL DEFAULT 0,
    "potongan" INTEGER NOT NULL DEFAULT 0,
    "gaji_bersih" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "penggajian_pkey" PRIMARY KEY ("penggajian_id")
);

-- CreateTable
CREATE TABLE "penilaian_kinerja" (
    "penilaian_id" SERIAL NOT NULL,
    "karyawan_id" INTEGER NOT NULL,
    "tanggal_penilaian" TIMESTAMP(3) NOT NULL,
    "skor_kinerja" DOUBLE PRECISION NOT NULL,
    "komentar" TEXT,
    "dinilai_oleh" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "penilaian_kinerja_pkey" PRIMARY KEY ("penilaian_id")
);

-- AddForeignKey
ALTER TABLE "penggajian" ADD CONSTRAINT "penggajian_karyawan_id_fkey" FOREIGN KEY ("karyawan_id") REFERENCES "master_karyawan"("karyawan_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penilaian_kinerja" ADD CONSTRAINT "penilaian_kinerja_karyawan_id_fkey" FOREIGN KEY ("karyawan_id") REFERENCES "master_karyawan"("karyawan_id") ON DELETE RESTRICT ON UPDATE CASCADE;
