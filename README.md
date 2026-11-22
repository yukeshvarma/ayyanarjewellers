# Ayyanar Jewellers — Sayalgudi

Official website source files for **Ayyanar Jewellers, Sayalgudi, Tamil Nadu**.

Website: https://ayyanarjewellers.netlify.app/

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Main website (HTML, CSS, JavaScript in one file) |
| `md-profile.jpeg` | Managing Director photograph |
| `scheme-poster-overview.jpeg` | Jewellery savings scheme overview poster |
| `scheme-poster-details.jpeg` | Jewellery savings scheme terms poster |
| `robots.txt` | Search engine crawler guidance |
| `sitemap.xml` | Sitemap for search engine discovery |

**Keep all six website files in the repository root.** The HTML refers to the photos by these filenames.

## Upload to GitHub

1. Sign in at https://github.com/ and choose **New repository**.
2. Name it `ayyanar-jewellers` (or another name), and create the repository.
3. Choose **Add file → Upload files**.
4. Upload the six website files and this `README.md` (or drag all extracted repository contents into the upload area).
5. Choose **Commit changes**.

## Deploy to Netlify from GitHub

To connect this repository to your **existing** Netlify website:

1. In Netlify, open the existing site `ayyanarjewellers.netlify.app`.
2. In your site's configuration, find the repository / Git connection and link this GitHub repository.
3. Use the branch `main` (or the default branch you created).
4. The website is static. Leave the build command **empty** and use `.` (repository root) as the publish directory if Netlify requests a value.
5. Deploy and check the website, posters, images and mobile navigation.

**Don't create a new Netlify site** if you want to keep the existing website URL. Netlify's interface labels may vary.

## Editing

- Update page content, prices and contacts in `index.html`.
- Replace image files without changing their names, or update the image paths in `index.html`.
- Commit updates to GitHub; connected Netlify deployments can redeploy automatically.

## Important information

- The gold and silver figures in this website are reference values, **not a guaranteed live API feed**. Verify current rates before publishing them as today's prices.
- Voice chat uses browser capabilities, which vary by browser and device; it does not guarantee full support everywhere.
- Confirm the current savings scheme terms and benefits with the business before relying on the posters or descriptions.
- This is a static website. No API secrets should be committed to this repository.
