-- AlterTable
ALTER TABLE "PageVisit" ADD COLUMN     "textExtractedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "PageVisit_textExtractedAt_idx" ON "PageVisit"("textExtractedAt");
