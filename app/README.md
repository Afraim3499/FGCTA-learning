# FGC Training Academy - Application

This is the core application for the FGC Training and Learning Academy.

## 🔗 Live Deployment
**Production:** [https://fgcta-learning.vercel.app/](https://fgcta-learning.vercel.app/)

## 🛠 Technical Setup

### 1. Prerequisites
- Node.js 18+
- PostgreSQL (Supabase recommended)
- Prisma CLI

### 2. Installation
```bash
cd app
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the `app/` directory with the following variables:
```env
DATABASE_URL="your-postgresql-url"
DIRECT_URL="your-direct-postgresql-url"
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

### 4. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 5. Development
```bash
npm run dev
```

### 6. Production Build
```bash
npm run build
```
