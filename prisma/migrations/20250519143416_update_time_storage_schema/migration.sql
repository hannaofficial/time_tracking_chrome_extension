-- CreateTable
CREATE TABLE "DomainStat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "totalTimeSpentSeconds" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DomainStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageVisit" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT,
    "timeSpentSeconds" INTEGER NOT NULL DEFAULT 0,
    "domainName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageVisit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DomainStat_name_key" ON "DomainStat"("name");

-- CreateIndex
CREATE INDEX "DomainStat_name_idx" ON "DomainStat"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PageVisit_url_key" ON "PageVisit"("url");

-- CreateIndex
CREATE INDEX "PageVisit_url_idx" ON "PageVisit"("url");

-- CreateIndex
CREATE INDEX "PageVisit_domainName_idx" ON "PageVisit"("domainName");

-- AddForeignKey
ALTER TABLE "PageVisit" ADD CONSTRAINT "PageVisit_domainName_fkey" FOREIGN KEY ("domainName") REFERENCES "DomainStat"("name") ON DELETE CASCADE ON UPDATE CASCADE;
