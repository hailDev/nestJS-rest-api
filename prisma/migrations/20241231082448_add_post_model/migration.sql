-- CreateEnum
CREATE TYPE "ActiveStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "master_user" (
    "user_id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "is_actived" "ActiveStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "master_user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "master_barang" (
    "barang_id" SERIAL NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "harga_barang" INTEGER NOT NULL,
    "stok_barang" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "master_barang_pkey" PRIMARY KEY ("barang_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "master_user_user_email_key" ON "master_user"("user_email");

-- CreateIndex
CREATE INDEX "master_user_is_actived_user_email_idx" ON "master_user"("is_actived", "user_email");
