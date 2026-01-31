// scripts/add-direct-url.js
// Script om DIRECT_URL automatisch toe te voegen aan .env.local
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env.local');

// Lees .env.local
let envContent = '';
if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, 'utf8');
}

// Check of DATABASE_URL bestaat
const databaseUrlMatch = envContent.match(/DATABASE_URL\s*=\s*"([^"]+)"/);
if (!databaseUrlMatch) {
  console.error('❌ DATABASE_URL not found in .env.local');
  process.exit(1);
}

const databaseUrl = databaseUrlMatch[1];

// Genereer DIRECT_URL (verwijder -pooler uit hostname)
const directUrl = databaseUrl.replace(/-pooler\./, '.');

// Check of DIRECT_URL al bestaat
if (envContent.includes('DIRECT_URL')) {
  console.log('✅ DIRECT_URL already exists in .env.local');
  console.log('📝 Current DIRECT_URL:', directUrl);
} else {
  // Voeg DIRECT_URL toe
  envContent += `\n# Direct connection URL (for migrations)\nDIRECT_URL="${directUrl}"\n`;
  fs.writeFileSync(envPath, envContent, 'utf8');
  console.log('✅ DIRECT_URL added to .env.local');
  console.log('📝 DIRECT_URL:', directUrl);
}
