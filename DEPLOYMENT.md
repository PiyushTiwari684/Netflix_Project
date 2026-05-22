# Vercel Deployment Guide

This project deploys as **two separate Vercel projects**: one for the backend API and one for the frontend SPA.

## ⚠️ Before You Deploy — Critical Security Steps

1. **Rotate your MongoDB password immediately.** The current password was committed to git history at `Backend/.env`. Go to MongoDB Atlas → Database Access → Edit the `tiwaripiyush89555` user → reset password.
2. **Generate a real JWT secret.** Use a long random string (32+ chars). Example: run `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`.
3. **(Optional) Rotate your TMDB API key** since it was previously exposed. Get a new one from https://www.themoviedb.org/settings/api.
4. **Scrub git history.** The leaked credentials still live in old commits. After rotating, consider using `git filter-repo` or BFG to purge them, then force-push.

## 1. Deploy the Backend

From the Vercel dashboard:
1. New Project → import this repo.
2. **Root Directory**: `Backend`
3. Framework Preset: **Other**
4. Build Command: leave empty
5. Output Directory: leave empty
6. Install Command: `npm install`
7. Add Environment Variables:

| Key | Value |
|---|---|
| `MONGODB_URL` | `mongodb+srv://<new_user>:<new_password>@cluster0.hzemat5.mongodb.net` |
| `JWT_SECRET` | (your generated long random string) |
| `CORS_ORIGIN` | `https://your-frontend-domain.vercel.app` (set after step 2; can be multiple comma-separated) |
| `NODE_ENV` | `production` |

8. Deploy. Note the URL, e.g. `https://netflix-backend-xyz.vercel.app`.
9. **MongoDB Atlas → Network Access**: add `0.0.0.0/0` (Vercel functions don't have fixed IPs).

## 2. Deploy the Frontend

1. New Project → import the same repo.
2. **Root Directory**: `Frontend`
3. Framework Preset: **Vite** (auto-detected)
4. Build Command: `npm run build` (default)
5. Output Directory: `dist` (default)
6. Add Environment Variables:

| Key | Value |
|---|---|
| `VITE_API_END_POINT` | `https://netflix-backend-xyz.vercel.app/user/v1` (from step 1) |
| `VITE_TMDB_API_KEY` | Your TMDB API key |

7. Deploy. Note the URL.
8. **Go back to the Backend project** → Settings → Environment Variables → update `CORS_ORIGIN` to this frontend URL → redeploy backend.

## 3. Verify

- Open the frontend URL. Sign up, log in, browse, search — all should work.
- If cookies don't persist across requests, confirm both projects use HTTPS (Vercel does by default) and that the backend sets `sameSite: "none"` + `secure: true` (already handled in `NODE_ENV=production` mode).

## Local Development

```bash
# Terminal 1 - Backend
cd Backend
npm install
npm run dev        # uses nodemon, listens on :8000

# Terminal 2 - Frontend
cd Frontend
npm install
npm run dev        # Vite on :5173
```

Local `.env` files (already created, gitignored):
- `Backend/.env` — `PORT`, `MONGODB_URL`, `JWT_SECRET`, `CORS_ORIGIN`, `NODE_ENV=development`
- `Frontend/.env` — `VITE_API_END_POINT`, `VITE_TMDB_API_KEY`

## Known Limitations

- Auth uses cookies; the frontend and backend must be on the **same parent domain** OR the browser must allow third-party cookies. If you hit cookie issues across `.vercel.app` subdomains, switch the auth flow to send the JWT in an `Authorization: Bearer` header instead.
- The `Register.jsx` component is a stub — registration happens inside `Login.jsx`.
- No protected-route middleware is wired up on the backend yet (only login/register/logout exist).
