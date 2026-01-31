// scripts/verify-levels.js
// Verificatie script om te controleren of alle levels correct zijn ge-update

require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verifyLevels() {
  console.log('🔍 Verifying level migration...\n');

  try {
    // Get all workshops with their levels
    const workshops = await prisma.workshop.findMany({
      select: {
        id: true,
        title: true,
        level: true,
      },
      orderBy: {
        level: 'asc',
      },
    });

    console.log(`📊 Found ${workshops.length} workshops in database\n`);

    // Count by level
    const levelCounts = workshops.reduce((acc, w) => {
      acc[w.level] = (acc[w.level] || 0) + 1;
      return acc;
    }, {});

    console.log('✅ Level distribution:');
    Object.entries(levelCounts).forEach(([level, count]) => {
      const emoji = level === 'APRENDE' ? '🌱' : level === 'CONSTRUYE' ? '🔨' : level === 'DOMINA' ? '⭐' : '📚';
      console.log(`   ${emoji} ${level}: ${count} workshop${count !== 1 ? 's' : ''}`);
    });

    console.log('\n📋 All workshops:');
    workshops.forEach(w => {
      const emoji = w.level === 'APRENDE' ? '🌱' : w.level === 'CONSTRUYE' ? '🔨' : w.level === 'DOMINA' ? '⭐' : '📚';
      console.log(`   ${emoji} ${w.title} (${w.level})`);
    });

    // Check for any old values
    const oldLevels = ['BASICO', 'INTERMEDIO', 'AVANZADO'];
    const hasOldValues = workshops.some(w => oldLevels.includes(w.level));

    if (hasOldValues) {
      console.log('\n⚠️  WARNING: Found workshops with old level values!');
      console.log('   Run: node scripts/migrate-levels.js');
    } else {
      console.log('\n✅ All workshops have been successfully migrated to new level values!');
    }

  } catch (error) {
    console.error('❌ Error during verification:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the verification
verifyLevels()
  .then(() => {
    console.log('\n✨ Verification complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Verification failed:', error);
    process.exit(1);
  });
