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
