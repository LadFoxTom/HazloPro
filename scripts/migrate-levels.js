// scripts/migrate-levels.js
// Script to migrate existing workshop levels from old to new values
// Run this AFTER running the Prisma migration

require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migrateLevels() {
  console.log('🔄 Starting level migration...\n');

  try {
    // Get current workshops count by level
    const workshops = await prisma.workshop.findMany({
      select: {
        id: true,
        title: true,
        level: true,
      },
    });

    console.log(`📊 Found ${workshops.length} workshops in database\n`);

    // Count by level before migration
    const levelCounts = workshops.reduce((acc, w) => {
      acc[w.level] = (acc[w.level] || 0) + 1;
      return acc;
    }, {});

    console.log('Current level distribution:');
    Object.entries(levelCounts).forEach(([level, count]) => {
      console.log(`  - ${level}: ${count} workshops`);
    });
    console.log('');

    // Mapping of old values to new values
    const levelMapping = {
      'BASICO': 'APRENDE',
      'INTERMEDIO': 'CONSTRUYE',
      'AVANZADO': 'DOMINA',
      'TODOS': 'TODOS', // Stays the same
    };

    let updatedCount = 0;

    // Update each workshop
    for (const workshop of workshops) {
      const oldLevel = workshop.level;
      const newLevel = levelMapping[oldLevel];

      if (newLevel && newLevel !== oldLevel) {
        await prisma.workshop.update({
          where: { id: workshop.id },
          data: { level: newLevel },
        });

        console.log(`✅ Updated "${workshop.title}": ${oldLevel} → ${newLevel}`);
        updatedCount++;
      } else if (!newLevel) {
        console.log(`⚠️  Warning: Unknown level "${oldLevel}" for "${workshop.title}"`);
      }
    }

    console.log(`\n✨ Migration completed!`);
    console.log(`   - ${updatedCount} workshops updated`);
    console.log(`   - ${workshops.length - updatedCount} workshops unchanged`);

    // Show final distribution
    const updatedWorkshops = await prisma.workshop.findMany({
      select: { level: true },
    });

    const finalCounts = updatedWorkshops.reduce((acc, w) => {
      acc[w.level] = (acc[w.level] || 0) + 1;
      return acc;
    }, {});

    console.log('\n📊 Final level distribution:');
    Object.entries(finalCounts).forEach(([level, count]) => {
      console.log(`  - ${level}: ${count} workshops`);
    });

  } catch (error) {
    console.error('❌ Error during migration:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateLevels()
  .then(() => {
    console.log('\n✅ All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  });
