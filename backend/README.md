# Nova Backend

## Setup

### 1. Install dependencies
```bash
cd index.NOVA
npm install
```

### 2. Configure .env
Copy `.env.example` to `.env` and fill in your values.

### 3. Setup MySQL
Run `database.sql` in MySQL Workbench or CLI:
```bash
mysql -u root -p < database.sql
```

### 4. Gmail App Password
- Go to Google Account → Security → 2-Step Verification → App Passwords
- Generate a password for "Mail"
- Put it in `EMAIL_PASS` in `.env`

### 5. Run
```bash
npm run dev
```

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login |
| GET | /api/auth/verify-email?token=... | Verify email |
| GET | /api/auth/me | Get current user (protected) |
