-- CreateTable
CREATE TABLE "keranjang" (
    "keranjang_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "barang_id" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "keranjang_pkey" PRIMARY KEY ("keranjang_id")
);

-- AddForeignKey
ALTER TABLE "keranjang" ADD CONSTRAINT "keranjang_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "master_user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keranjang" ADD CONSTRAINT "keranjang_barang_id_fkey" FOREIGN KEY ("barang_id") REFERENCES "master_barang"("barang_id") ON DELETE RESTRICT ON UPDATE CASCADE;
