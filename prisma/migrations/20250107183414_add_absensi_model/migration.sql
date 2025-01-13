-- CreateTable
CREATE TABLE "absensi" (
    "absensi_id" SERIAL NOT NULL,
    "karyawan_id" INTEGER NOT NULL,
    "waktu_masuk" TIMESTAMP(3) NOT NULL,
    "waktu_keluar" TIMESTAMP(3),
    "status" TEXT NOT NULL,

    CONSTRAINT "absensi_pkey" PRIMARY KEY ("absensi_id")
);
