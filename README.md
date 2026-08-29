# ZENORT Mobile Publication

Mobile-first ZENORT publication pilot.

## Files
- `index.html` — publication interface
- `style.css` — visual design
- `app.js` — response form
- `functions/api/respond.js` — Cloudflare Pages API endpoint
- `schema.sql` — Cloudflare D1 database table

## Cloudflare database connection
The public interface can deploy without a database. For permanent online response capture:

1. Create a Cloudflare D1 database.
2. Run `schema.sql` in the D1 console.
3. In the Pages project settings, add a D1 binding:
   - Variable name: `ZENORT_DB`
   - Database: your ZENORT D1 database
4. Redeploy.

Once the binding exists, the form posts to `/api/respond` and stores responses in D1.

## Important
Do not collect sensitive personal information in this pilot.
