# Deploy SmartPlate to Vercel

## Step 1: Export Your Code
1. Download/export your entire SmartPlate project from Replit
2. Create a new folder on your computer called "smartplate"
3. Copy all files to this folder

## Step 2: Prepare for Vercel
1. Go to https://vercel.com and sign up with GitHub
2. Install Vercel CLI: `npm i -g vercel`
3. Or use the web interface (easier)

## Step 3: Deploy via Vercel Website
1. Go to vercel.com/new
2. Import your project (upload the folder or connect GitHub)
3. Framework: "Other" 
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Install Command: `npm install`

## Step 4: Environment Variables (if needed)
- Add any environment variables in Vercel dashboard
- For now, no external APIs are needed

## Alternative: Static Build Only
If the full-stack deployment is complex, we can create a static version:
1. Remove server dependencies
2. Make calculations client-side only
3. Deploy as static site

Your SmartPlate app will be available at: https://smartplate.vercel.app

## Current Status
- Your app is ready to deploy
- All personalizations included (Georgia font, green headings, your footer)
- BMI calculator fully functional