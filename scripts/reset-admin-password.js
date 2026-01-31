// Script to reset admin user password
require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function resetPassword() {
  const email = process.argv[2] || 'admin@hazlopro.es';
  const newPassword = process.argv[3];

  if (!newPassword) {
    console.error('❌ Please provide a new password as the second argument');
    console.log('Usage: node scripts/reset-admin-password.js <email> <new-password>');
    process.exit(1);
  }

  console.log(`Resetting password for: ${email}`);

  try {
    const user = await prisma.adminUser.findUnique({
      where: { email },
    });

    if (!user) {
      console.error(`❌ Admin user with email ${email} not found`);
      process.exit(1);
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await prisma.adminUser.update({
      where: { email },
      data: { passwordHash },
    });

    console.log('✅ Password reset successfully!');
    console.log(`Email: ${email}`);
    console.log(`New password: ${newPassword}`);
  } catch (error) {
    console.error('❌ Error resetting password:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

resetPassword();
