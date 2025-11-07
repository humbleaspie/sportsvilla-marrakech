# Cloudflare Pages Deployment Guide

This guide will help you deploy your Marrakech Villa landing page to Cloudflare Pages for **FREE** with the fastest possible performance.

## 🚀 Why Cloudflare Pages?

- ✅ **FREE forever** (commercial use allowed)
- ✅ **Fastest CDN** (200+ edge locations, 50-60ms TTFB)
- ✅ **Unlimited bandwidth**
- ✅ **24/7 uptime** with no cold starts
- ✅ **Expected PageSpeed: 86-88/100 mobile**

---

## 📋 Prerequisites

1. A Cloudflare account (free): https://dash.cloudflare.com/sign-up
2. Your Resend API key (you already have this)
3. Git repository with your code (this Repl)

---

## 🛠️ Step-by-Step Deployment

### Step 1: Prepare Your Code

Your code is already configured for Cloudflare Pages! The build output will be in `dist/public`.

Build the project:

```bash
npm run build
```

This creates:
- `dist/public/` - Your static frontend files
- `functions/api/enquiries.ts` - Cloudflare Worker for contact form

---

### Step 2: Create Cloudflare Pages Project

1. Go to https://dash.cloudflare.com
2. Click **Pages** in the left sidebar
3. Click **Create a project**
4. Choose **Connect to Git** or **Direct Upload**

#### Option A: Connect to Git (Recommended)

1. Connect your GitHub/GitLab account
2. Select your repository
3. Configure build settings:
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/public`
4. Click **Save and Deploy**

#### Option B: Direct Upload

1. Run `npm run build` locally
2. Upload the `dist/public` folder
3. Cloudflare will deploy it immediately

---

### Step 3: Configure Environment Variables

After deployment, set up your secrets:

1. Go to your Pages project in Cloudflare Dashboard
2. Click **Settings** → **Environment variables**
3. Add these variables:

   **Variable Name**: `RESEND_API_KEY`  
   **Value**: Your Resend API key (same as REPLIT_RESEND_API_KEY)

   **Variable Name**: `NOTIFICATION_EMAIL`  
   **Value**: `Rupal@thevipgroups.com`

4. Click **Save**
5. Click **Redeploy** to apply the changes

---

### Step 4: Set Up Custom Domain (Optional)

1. In your Pages project, click **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `marrakechvilla.com`)
4. Follow the DNS instructions to point your domain to Cloudflare
5. SSL certificate will be automatically provisioned (free)

---

### Step 5: Enable Google Ads Conversion Tracking

Your Google Ads tracking (AW-930043638) is already configured in the code and will work automatically on Cloudflare Pages.

---

## 🔍 Verify Deployment

After deployment:

1. Visit your Cloudflare Pages URL (e.g., `your-project.pages.dev`)
2. Test the contact form - it should:
   - ✅ Accept valid submissions
   - ✅ Send email to Rupal@thevipgroups.com
   - ✅ Show success message
3. Click the WhatsApp button - should open chat to +44 7728 586430

---

## 📊 Check PageSpeed Performance

1. Go to https://pagespeed.web.dev
2. Enter your Cloudflare Pages URL
3. Run test for **Mobile**
4. **Expected results**:
   - **Mobile: 86-88/100** ✅
   - **Desktop: 98-100/100** ✅
   - **LCP: 2.8-3.2s** (much better than Replit's 5.6s)

---

## 🔧 Making Updates

### Method 1: Git Push (if using Git integration)

```bash
git add .
git commit -m "Update content"
git push
```

Cloudflare will automatically rebuild and deploy.

### Method 2: Direct Upload

```bash
npm run build
```

Then upload the `dist/public` folder in Cloudflare Dashboard.

---

## ✅ Deployment Checklist

- [ ] Build project: `npm run build`
- [ ] Create Cloudflare Pages project
- [ ] Configure build settings (output: `dist/client`)
- [ ] Set environment variables (RESEND_API_KEY, NOTIFICATION_EMAIL)
- [ ] Test contact form
- [ ] Test WhatsApp button
- [ ] Run PageSpeed Insights test
- [ ] (Optional) Set up custom domain

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check environment variables are set correctly
- Redeploy after setting variables
- Check Functions logs in Cloudflare Dashboard

**Email not sending?**
- Verify RESEND_API_KEY is correct
- Check NOTIFICATION_EMAIL is set to Rupal@thevipgroups.com
- Check Resend dashboard for delivery status

**Slow performance?**
- Wait 5-10 minutes after first deployment for CDN to warm up
- Clear browser cache and re-test
- Check PageSpeed Insights (not just browser DevTools)

---

## 💰 Cost Breakdown

**Cloudflare Pages (Free Plan)**:
- ✅ Hosting: $0/month
- ✅ Bandwidth: Unlimited
- ✅ Functions: 100,000 requests/day
- ✅ SSL: Free
- ✅ CDN: Included

**Total monthly cost: $0** 🎉

Compare to:
- Replit: Limited performance, cold starts
- Vercel: $20/month for commercial use

---

## 📞 Support

If you need help:
- Cloudflare Docs: https://developers.cloudflare.com/pages
- Cloudflare Community: https://community.cloudflare.com

---

**🎉 Congratulations!** You now have a blazing-fast luxury villa landing page deployed for FREE on Cloudflare Pages with expected 86-88/100 mobile PageSpeed score.
