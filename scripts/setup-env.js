// scripts/setup-env.js
// Helper script om DIRECT_URL te genereren vanuit DATABASE_URL
require('dotenv').config({ path: '.env.local' });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('❌ DATABASE_URL not found in .env.local');
  process.exit(1);
}

// Voor Neon.tech: verwijder "-pooler" uit de hostname
const directUrl = databaseUrl.replace(/-pooler\./, '.');

console.log('📝 Add this to your .env.local file:');
console.log('');
console.log(`DIRECT_URL="${directUrl}"`);
console.log('');
