-- AddForeignKey
ALTER TABLE "BookInfo" ADD CONSTRAINT "BookInfo_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
