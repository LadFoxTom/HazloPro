# Admin Dashboard Setup Guide

This guide will help you set up the HazloPro admin dashboard.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Neon.tech or local)
- Environment variables configured

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Database Schema

The Prisma schema has been updated with `AdminUser` and `AuditLog` models. Push the changes:

```bash
npm run db:push
```

### 3. Create First Admin User

Create your first admin user:

```bash
npm run create-admin [email] [password] [name]
```

Example:
```bash
npm run create-admin admin@tallerpro.es admin123 "Admin User"
```

If no arguments are provided, it defaults to:
- Email: `admin@tallerpro.es`
- Password: `admin123`
- Name: `Admin User`

**⚠️ IMPORTANT: Change the password after first login!**

### 4. Configure NextAuth

Add to your `.env.local`:

```env
AUTH_SECRET=your-secret-key-here
```

Generate a secret:
```bash
openssl rand -base64 32
```

### 5. Start the Development Server

```bash
npm run dev
```

The admin dashboard will be available at: `http://localhost:3000/admin`

## Admin Routes

- `/admin` - Dashboard
- `/admin/login` - Login page
- `/admin/workshops` - Workshop management
- `/admin/bookings` - Booking management
- `/admin/contacts` - Contact form submissions
- `/admin/users` - Admin user management (SUPER_ADMIN only)
- `/admin/settings` - Site settings

## Features

### Authentication
- Secure login with NextAuth.js
- Session management (8-hour timeout)
- Role-based access control (SUPER_ADMIN, ADMIN, EDITOR, VIEWER)

### Workshop Management
- Create, edit, delete workshops
- Manage workshop dates
- Duplicate workshops
- Image upload support
- Form validation

### Booking Management
- View all bookings
- Filter by status, payment status
- Update booking and payment status
- View booking details

### Contact Management
- View contact form submissions
- Mark as read/unread
- Reply via email
- Delete messages

### Audit Logging
- All admin actions are logged
- Track who made changes and when
- View change history

## Admin Roles

- **SUPER_ADMIN**: Full access, can manage other admins
- **ADMIN**: Full content access
- **EDITOR**: Can edit content, cannot delete
- **VIEWER**: Read-only access

## Troubleshooting

### Cannot log in
- Verify admin user exists: `npm run db:studio`
- Check AUTH_SECRET is set in `.env.local`
- Ensure database connection is working

### Database errors
- Run `npm run db:push` to sync schema
- Check DATABASE_URL in `.env.local`

### Build errors
- Run `npm run db:generate` to regenerate Prisma client
- Clear `.next` folder and rebuild

## Security Notes

1. Always use strong passwords for admin accounts
2. Change default admin password immediately
3. Use HTTPS in production
4. Regularly review audit logs
5. Limit SUPER_ADMIN access to trusted users only
