-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "fullDescription" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT,
    "images" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "highlights" TEXT NOT NULL,
    "presentations" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "youtubeVideoId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
