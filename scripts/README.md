# Database Migration Scripts

## Level Migration (BASICO → APRENDE, etc.)

Dit script migreert bestaande workshop level waarden van het oude naar het nieuwe systeem.

### Mapping:
- `BASICO` → `APRENDE` (Learn/Beginners)
- `INTERMEDIO` → `CONSTRUYE` (Build/Intermediate)
- `AVANZADO` → `DOMINA` (Master/Advanced)
- `TODOS` → `TODOS` (All levels - blijft hetzelfde)

### Wanneer uitvoeren:

⚠️ **BELANGRIJK**: Voer dit script uit **NADAT** je de Prisma migration hebt gedraaid!

### Stappen:

1. **Eerst: Run de Prisma migration**
   ```bash
   npx prisma migrate dev --name update_level_enum_to_aprende_construye_domina
   ```

2. **Daarna: Run het data migration script**
   ```bash
   node scripts/migrate-levels.js
   ```

### Wat doet het script?

1. ✅ Toont huidige verdeling van levels
2. ✅ Update alle workshops met oude level waarden naar nieuwe waarden
3. ✅ Toont welke workshops zijn geupdate
4. ✅ Toont finale verdeling van levels
5. ✅ Geeft duidelijke feedback over het proces

### Veiligheid:

- Het script gebruikt Prisma transactions
- Foutafhandeling is ingebouwd
- Je kunt het script veilig meerdere keren draaien (idempotent)
- Alleen workshops met oude waarden worden geupdate

### Voorbeeld output:

```
🔄 Starting level migration...

📊 Found 12 workshops in database

Current level distribution:
  - BASICO: 7 workshops
  - INTERMEDIO: 3 workshops
  - AVANZADO: 1 workshop
  - TODOS: 1 workshop

✅ Updated "Fontanería Básica": BASICO → APRENDE
✅ Updated "Electricidad Doméstica": BASICO → APRENDE
...

✨ Migration completed!
   - 11 workshops updated
   - 1 workshops unchanged

📊 Final level distribution:
  - APRENDE: 7 workshops
  - CONSTRUYE: 3 workshops
  - DOMINA: 1 workshop
  - TODOS: 1 workshop

✅ All done!
```

### Troubleshooting:

**Error: DATABASE_URL not found**
- Zorg dat je `.env.local` bestand correct is ingesteld
- Controleer dat DATABASE_URL een geldige PostgreSQL connection string bevat

**Error: Unknown level**
- Dit gebeurt als er workshops in de database staan met onverwachte level waarden
- Controleer de database en pas het script aan indien nodig

**Error tijdens update**
- Check database connectie
- Controleer Prisma schema is up-to-date: `npx prisma generate`
