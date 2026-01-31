# Quick Start - Admin Dashboard

## 🚀 Setup in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Update Database
```bash
npm run db:push
```

### Step 3: Create Admin User
```bash
npm run create-admin admin@tallerpro.es yourpassword "Admin Name"
```

### Step 4: Add AUTH_SECRET
Add to `.env.local`:
```env
AUTH_SECRET=your-secret-key-here
```

Generate secret:
```bash
openssl rand -base64 32
```

### Step 5: Start Server
```bash
npm run dev
```

### Step 6: Login
Go to: `http://localhost:3000/admin/login`

Use the credentials you created in Step 3.

## 📋 Default Admin Credentials

If you used the default:
- **Email:** `admin@tallerpro.es`
- **Password:** `admin123`

**⚠️ Change this password immediately after first login!**

## 🎯 Key Features

- **Dashboard:** Overview of workshops, bookings, revenue
- **Workshops:** Create, edit, delete, manage dates
- **Bookings:** View, filter, update status
- **Contacts:** Manage contact form submissions
- **Users:** Admin user management (SUPER_ADMIN only)

## 🔐 Admin Roles

- **SUPER_ADMIN:** Full access + user management
- **ADMIN:** Full content access
- **EDITOR:** Edit content (no delete)
- **VIEWER:** Read-only

## 🆘 Troubleshooting

**Can't log in?**
- Check admin user exists: `npm run db:studio`
- Verify AUTH_SECRET is set
- Check database connection

**Database errors?**
- Run `npm run db:push`
- Check DATABASE_URL in `.env.local`

**Build errors?**
- Run `npm run db:generate`
- Clear `.next` folder

## 📚 More Info

See `ADMIN_SETUP.md` for detailed documentation.
