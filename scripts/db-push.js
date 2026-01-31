// scripts/db-push.js
// Script om database schema te pushen met .env.local support
require('dotenv').config({ path: '.env.local' });
const { execSync } = require('child_process');

console.log('📦 Pushing database schema...');
console.log('🔗 DATABASE_URL:', process.env.DATABASE_URL ? '✅ Set' : '❌ Missing');
console.log('🔗 DIRECT_URL:', process.env.DIRECT_URL ? '✅ Set' : '❌ Missing');

try {
  execSync('npx prisma db push', { 
    stdio: 'inherit',
    env: { ...process.env }
  });
  console.log('✅ Database schema pushed successfully!');
} catch (error) {
  console.error('❌ Error pushing database schema');
  process.exit(1);
}
