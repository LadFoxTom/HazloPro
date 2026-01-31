// Script to check admin user details
require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function checkAdmin() {
  const email = process.argv[2] || 'admin@hazlopro.es';

  try {
    const user = await prisma.adminUser.findUnique({
      where: { email },
    });

    if (!user) {
      console.error(`❌ Admin user with email ${email} not found`);
      process.exit(1);
    }

    console.log('✅ Admin user found:');
    console.log(`Email: ${user.email}`);
    console.log(`Name: ${user.name}`);
    console.log(`Role: ${user.role}`);
    console.log(`Active: ${user.isActive}`);
    console.log(`Created: ${user.createdAt}`);
    console.log(`Last Login: ${user.lastLoginAt || 'Never'}`);
    console.log(`Password Hash: ${user.passwordHash.substring(0, 20)}...`);

    // Test password
    const testPassword = process.argv[3] || 'Admin123!';
    console.log(`\nTesting password: ${testPassword}`);
    const isValid = await bcrypt.compare(testPassword, user.passwordHash);
    console.log(`Password valid: ${isValid ? '✅ YES' : '❌ NO'}`);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

checkAdmin();
