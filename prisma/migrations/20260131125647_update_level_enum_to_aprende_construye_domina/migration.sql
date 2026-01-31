-- AlterEnum: Update Level enum values from BASICO/INTERMEDIO/AVANZADO to APRENDE/CONSTRUYE/DOMINA
-- This migration updates the enum definition and existing data

-- Step 1: Create new enum type with both old and new values (for transition)
CREATE TYPE "Level_new" AS ENUM ('BASICO', 'INTERMEDIO', 'AVANZADO', 'APRENDE', 'CONSTRUYE', 'DOMINA', 'TODOS');

-- Step 2: Update the column to use the new enum type
ALTER TABLE "Workshop" ALTER COLUMN "level" TYPE "Level_new" USING ("level"::text::"Level_new");

-- Step 3: Drop the old enum
DROP TYPE "Level";

-- Step 4: Rename the new enum
ALTER TYPE "Level_new" RENAME TO "Level";

-- Step 5: Update existing workshop data to use new enum values
UPDATE "Workshop" SET "level" = 'APRENDE' WHERE "level" = 'BASICO';
UPDATE "Workshop" SET "level" = 'CONSTRUYE' WHERE "level" = 'INTERMEDIO';
UPDATE "Workshop" SET "level" = 'DOMINA' WHERE "level" = 'AVANZADO';

-- Step 6: Create final enum with only new values
CREATE TYPE "Level_final" AS ENUM ('APRENDE', 'CONSTRUYE', 'DOMINA', 'TODOS');

-- Step 7: Update column to final enum
ALTER TABLE "Workshop" ALTER COLUMN "level" TYPE "Level_final" USING ("level"::text::"Level_final");

-- Step 8: Clean up
DROP TYPE "Level";
ALTER TYPE "Level_final" RENAME TO "Level";
