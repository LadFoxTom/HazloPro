// Script to create the first admin user
require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  const email = process.argv[2] || 'admin@tallerpro.es';
  const password = process.argv[3] || 'admin123';
  const name = process.argv[4] || 'Admin User';

  console.log(`Creating admin user: ${email}`);

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const admin = await prisma.adminUser.create({
      data: {
        email,
        passwordHash,
        name,
        role: 'SUPER_ADMIN',
        isActive: true,
      },
    });

    console.log('✅ Admin user created successfully!');
    console.log(`Email: ${admin.email}`);
    console.log(`Name: ${admin.name}`);
    console.log(`Role: ${admin.role}`);
    console.log('\n⚠️  Please change the password after first login!');
  } catch (error) {
    if (error.code === 'P2002') {
      console.error('❌ Admin user with this email already exists');
    } else {
      console.error('❌ Error creating admin user:', error);
    }
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
