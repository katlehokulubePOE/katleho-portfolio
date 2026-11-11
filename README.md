# Katleho Kulube — Creative Portfolio

A responsive, single-page portfolio website rebuilt from the supplied 22-page PDF portfolio.

## Features
- Responsive layout for desktop, tablet and mobile
- Animated featured-work slideshow with previous/next controls
- Scroll-reveal transitions and hover interactions
- Portfolio category filters
- Accessible project preview dialog/lightbox
- Keyboard-friendly navigation, skip link and reduced-motion support
- SEO metadata and semantic HTML
- No build tools, frameworks, paid services or server-side code required

## Preview locally
Open `index.html` in a browser. For the closest match to hosting, use a local static server (for example, VS Code Live Server).

## Publish free with GitHub Pages
1. Create a public repository on GitHub, for example `katleho-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md` and the complete `assets` folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. Your public address will be shown in the Pages settings.

## Before publishing
- Confirm that you have permission to display all client, employer and third-party work shown in the original portfolio.
- Replace or remove any project visuals that are confidential or no longer approved for public display.
- Contact details are shown, but the residential street address from the source PDF has intentionally not been published for privacy.
- Check that the contact email addresses and phone number are still current.
- Add a custom domain later if desired; it is not required for GitHub Pages.

## CV and professional links
- The portfolio's downloadable CV has been updated to the supplied `Katleho_Kulube_CV.pdf` at `downloads/Katleho_Kulube_CV.pdf`.
- LinkedIn is linked from the main navigation, contact section and footer.
- To update the CV later, replace that PDF while keeping the same filename.
- The displayed contact number is 076 752 4890.

## Updating projects
Replace the corresponding JPG files in `assets/` and keep the same filenames, or edit the project cards in `index.html` to add or remove portfolio items.


## Google Tag Manager and Google Analytics 4

The Google Tag Manager container `GTM-5KRP4GRZ` is installed in `index.html`. The standard GTM loader is placed in the document head, and the noscript iframe fallback is placed immediately after the opening body tag. The website sets Google Consent Mode defaults before the container loads.

To start collecting GA4 data:
1. Open Google Tag Manager and select container `GTM-5KRP4GRZ`.
2. Create a **Google tag** (or GA4 configuration tag) and enter the GA4 Measurement ID for your web data stream (format `G-XXXXXXXXXX`).
3. Configure the tag to fire on all pages and respect the built-in `analytics_storage` consent check.
4. Use Preview to test the container. Confirm analytics remains denied until a visitor accepts the website's analytics banner.
5. Submit and **Publish** the GTM container. Changes made in the GTM workspace do not go live until published.
6. Verify visits in Google Analytics under **Reports → Realtime** after accepting analytics on the live website.

The website's `analytics.js` handles the visitor's accept/reject choice and updates Consent Mode. It does not load a second, direct GA4 tag, avoiding duplicate tracking. If you add more pages, include the same single GTM head snippet and body noscript fallback on each page. Do not install a second copy of the container.

## Portrait and favicon
The supplied professional portrait replaces the initials mark in the header and footer. It is optimised as `assets/katleho-kulube-portrait.webp` for the site identity and exported in ICO, PNG and Apple touch icon sizes for browser tabs and mobile bookmarks.

## Domain-dependent SEO launch tasks
Before publishing, replace `YOUR-DOMAIN-HERE` in `robots.txt` and `sitemap.xml` with the final HTTPS domain. Then add the live sitemap URL in Google Search Console and Bing Webmaster Tools. The Open Graph image currently uses a relative asset path; for best social preview compatibility, update `og:image` and `twitter:image` in `index.html` to the absolute HTTPS image URL after the domain is known.


## Software Learning Hub (new)

The homepage now includes a Software Learning Hub section with an 18-second portfolio introduction video and planned tutorial categories. The introduction video is a local placeholder, not a published YouTube lesson.

### Replacing the placeholder with a YouTube episode

When the first tutorial is published, replace the local `<video>` element in `index.html` with a responsive YouTube embed using the real video ID. Use the YouTube `youtube-nocookie.com` embed domain where practical, give the iframe a descriptive `title`, and add `loading="lazy"` and `allowfullscreen`. Do not publish a made-up channel URL or video ID.

### Suggested weekly production workflow

1. Choose one learner outcome and research the software version and official documentation.
2. Prepare a concise lesson plan, voice-over script and a small practical project.
3. Record the screen demonstration and narration; use licensed or original music and assets.
4. Edit, caption and quality-check the lesson, including the software version shown.
5. Publish with a clear title, chapters, description, relevant links and a practical exercise.
6. Add the real YouTube embed and episode details to this section; review audience questions for the next lesson.

Recommended first series: Photoshop foundations, selections and layers, masks, photo correction, typography and a final poster project. Keep early lessons beginner-friendly and build toward a finished portfolio-quality project.


## Security and privacy upgrade (November 2026)

### What was added
- `_headers`: response-security headers for **Cloudflare Pages and Netlify** deployments, including MIME-sniffing protection, clickjacking protection, a restrictive permissions policy, a referrer policy, HTTPS strict transport security and a Content Security Policy (CSP).
- `.well-known/security.txt`: a standard vulnerability-reporting contact file. Replace `YOUR-DOMAIN-HERE` after choosing the production domain.
- `script.js`: the interactive creative-process panel now creates text nodes with `textContent` and DOM methods rather than writing HTML with `innerHTML`, reducing the risk of accidental HTML/script injection if its content is ever made dynamic.

### Hosting limitation — important
The `_headers` file is recognised by Cloudflare Pages and Netlify, but **GitHub Pages does not support custom response headers through this file**. If the site remains on GitHub Pages, the browser security headers in `_headers` will not be sent. For the full header protection, deploy through Cloudflare Pages or Netlify (or put a correctly configured reverse proxy/CDN in front of the site). Do not assume that adding `_headers` alone activates protection on GitHub Pages.

The CSP permits the current Google Tag Manager / Google Analytics setup and Google Fonts. Third-party tags added later may be blocked until their required domains are reviewed and deliberately allowlisted. Test the live site and browser console after deployment. The policy includes inline scripts/styles and `unsafe-eval` to accommodate the existing GTM ecosystem; this is a compatibility trade-off, not the strictest possible CSP. A future improvement is to move inline code to external files and adopt nonce/hash-based script policies, then remove those allowances.

HSTS is intended only for a production site served exclusively over HTTPS. Do not deploy the HSTS header to a domain or subdomain that still needs HTTP access. `includeSubDomains` should only be retained when every subdomain is HTTPS-ready.

### Before launch checklist
1. Choose and connect the final custom domain, and enforce HTTPS.
2. Replace `YOUR-DOMAIN-HERE` in `robots.txt`, `sitemap.xml` and `.well-known/security.txt` with the exact domain (without a trailing slash in the hostname).
3. Deploy using Cloudflare Pages or Netlify if you want `_headers` applied automatically; otherwise configure equivalent headers at your hosting/CDN layer.
4. Test the CSP and security headers with browser Developer Tools and a reputable HTTP security-header scanner. Confirm that the analytics consent banner still works and that no required resources are blocked.
5. Keep the CV PDF and all dependencies updated; remove confidential work and any personal information that should not be public.
6. Use strong unique passwords and multi-factor authentication on the GitHub, domain registrar, Cloudflare/Netlify and Google accounts. Limit repository access and review changes before publishing.
7. Keep a clean backup of the last known-good site version before every update.

### Visibility, search and repeat visits
- Connect the production domain to Google Search Console and Bing Webmaster Tools, verify ownership, and submit `/sitemap.xml`.
- Add a real, absolute HTTPS social-sharing image URL to the Open Graph and Twitter metadata after the domain is finalised.
- Publish useful, original project case studies: the brief, your role, tools, process, outcome and a small set of well-optimised images. Do not publish confidential client material.
- Publish the Software Learning Hub lessons consistently. Give each lesson a descriptive title, a written summary, chapters, captions and links to related projects. Embed the real public video when available; do not use placeholder video IDs.
- Add a clear call to action for recruiters and clients, and link to the portfolio from LinkedIn and relevant professional profiles.
- Review Google Analytics 4 only after its Measurement ID and GTM tags are configured and published. Check consent behaviour, Realtime reporting and key events such as CV downloads, LinkedIn clicks and contact-email clicks. Do not count visits as success on their own: track relevant enquiries and recruiter engagement too.
- Refresh the sitemap whenever substantial indexable pages are added. A single-page site has limited search landing pages; individual project/tutorial pages can improve the range of search queries that lead visitors to you.

### What this upgrade does not do
This is a static front-end portfolio, not an account-based application or e-commerce platform. It has no visitor login, database, payment processing or server-side contact form. These changes cannot guarantee protection against compromised hosting accounts, malicious repository changes, phishing, denial-of-service attacks or third-party service incidents. Secure account access, trusted hosting, backups and ongoing maintenance remain essential.
