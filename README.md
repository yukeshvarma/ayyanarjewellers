# Ayyanar Jewellers, Sayalgudi — GitHub & Netlify website

Official target website: **https://ayyanarjewellerssayalgudi.netlify.app/**

## What's included

- `index.html` — jewellery catalogue, gold/silver reference rates, bilingual sections, voice-enabled customer assistant (browser speech support required), savings scheme calculator, old-gold estimate, contact links and leadership.
- `scheme-poster-details.jpeg` — original Tamil promotional poster, preserved unchanged.
- `scheme-poster-aj-concept.webp` — **approved illustrative** poster graphic with a black-background AJ monogram and gift box. It is not the source of the business terms; use the unedited poster for exact conditions.
- `bridal-concept-approved.webp` — AI-generated bridal visual selected for the site. **Not a celebrity endorsement**.
- `admin.html` — local editor to export `products.json` and `rates.json`. **Not an authenticated database/admin portal**.
- `products.json` — published products, removed IDs and whether to hide the illustrative built-in catalogue.
- `rates.json` — shop-provided manual gold and silver reference rates, not an automatic Thangamayil feed.
- `google04118ca32b07924e.html` — exact Google Search Console HTML-file verification.
- `sitemap.xml`, `robots.txt`, `netlify.toml` — crawler and hosting configuration.

## Deploy on GitHub and Netlify

1. Create or open the GitHub repository connected to your Netlify site.
2. Unzip the package and upload **all files to the repository root** (not inside another folder).
3. Commit to the production branch (usually `main`).
4. On Netlify, set **Build command: empty**, **Publish directory: `.`**. Deploy the latest commit.
5. Check the homepage, `sitemap.xml` and `google04118ca32b07924e.html` under `https://ayyanarjewellerssayalgudi.netlify.app/`.
6. In Search Console, create a **URL prefix** property for the exact URL and select HTML-file verification. Once it verifies, submit `sitemap.xml`.

## Adding products in the product editor

1. Open `admin.html` in your own browser (local file or deployed page). It is a **draft/export tool**, not a secure login.
2. Choose **Import products.json** if you already have published products.
3. Add an item: **ID, SKU, Name, Metal (Gold/Silver), Category, Stock Quantity, Weight (grams), Wastage %, Making Charges per piece and/or per gram, GST %, Discount %, Image**.
4. Put product photo files into `assets/products/` in GitHub. Set image path such as `assets/products/AJ-SILVER-001.jpg`.
5. Choose **Save product**, then **Download products.json**. Commit it to the repository root. After Netlify builds, your new product appears on the website.
6. To remove an item, use **Remove** in the editor and export again. For built-in example designs, enter its ID under **Remove existing design ID** and export.
7. If you want only your real inventory (not the demo products), select **Show only products from products.json** and publish your full product set.

**Price calculation (per piece)**: metal weight × per-gram rate + wastage percentage of metal price + making charges, minus discount on the subtotal, plus GST on the discounted value. Change `rates.json` in the editor every time reference rates change and commit the file. The website recalculates current listed product prices from those rates when a visitor loads the page.

**Example of a silver product**:

```json
{
  "id": "AJ-SILVER-001",
  "sku": "AJ-S-001",
  "name": "Silver Anklet",
  "metal": "silver",
  "categoryId": "silver",
  "quantity": 2,
  "weightGrams": 20,
  "wastagePercent": 2,
  "makingCharges": 150,
  "makingChargePerGram": 0,
  "discountPercent": 0,
  "gstPercent": 3,
  "image": "assets/products/AJ-SILVER-001.jpg",
  "detail": "Silver anklet, price varies with rate"
}
```

## Savings plan calculator rules (shop-provided)

| Plan | Daily | Weekly | Monthly | Calculation |
|---|---:|---:|---:|---|
| Aishwaryam | 365 | 52 | 12 | Contribution × periods → estimated gold grams at reference rate |
| Amudha Surabhi | 332 | 47.5 | 12 | Contribution × periods × 1.10 benefit; scheme limits apply |
| Soubhagiyam | 396 | 59.4 | 13 | Illustrative grams = deposits / reference rate; actual deposit-date rates can vary |
| Special ₹100 | 510 | n/a | n/a | Contribution × 510 → illustrative gold grams |

The website supports a target-weight calculator. It does **not** make financial guarantees, waive legally required GST, or determine the final metal weight. Confirm the official signed terms with the shop.

## Old-gold example

The requested result of **₹41,274 for 4g** at **₹11,465/gram** corresponds to `4 × 0.90 × 11,465 = ₹41,274`. Since that per-gram rate is already for **22K/916 gold**, applying an additional `× 0.916` would double-count the purity. This is an estimate, not an authorized final valuation.

## Browser voice / AI

The voice controls use native browser speech recognition and speech synthesis and may not work in every browser. The basic chatbot answers common plan and rate questions locally; it is not a cloud AI service. The original virtual try-on and design features remain in the site code. No Vapi key is required for the browser speech controls.

## Publishing notes

- Rates start from shop-provided examples: **22K ₹11,465/g** and **silver ₹175/g**. They do not update automatically from an external jewellery site.
- Don't publish fictional shop items as if they are available stock. Replace/disable the original illustrative catalogue when your actual inventory is ready.
- The **“1 lakh+ beneficiaries”** figure is attributed to the business and is not independently verified.
- An AI-generated bridal illustration is not evidence of any celebrity collaboration or endorsement.
- The AJ redesign graphic is an illustrative poster; the **original unedited Tamil poster** remains included to validate exact scheme language.
- Browser-only admin pages are not a replacement for a secure backend or GitHub authorization.
