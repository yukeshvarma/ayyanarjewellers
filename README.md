Ayyanar Jewellery — GitHub + Netlify site files (text-only assistant)

This static site is published from index.html. Photos and catalogue data are in assets/ and products.json.

Connect to Netlify
1. Create or open a GitHub repository for this site.
2. Copy the contents of this folder into the repository root (index.html should be directly at the top level).
3. In Netlify, choose Add new project → Import an existing project, select GitHub, then choose that repository.
4. Keep the publish directory as a single dot. There is no build command for this plain HTML site.
5. Each commit pushed to the connected branch triggers a new deploy.

Updating the catalogue
- Product records belong in products.json.
- Put SKU photos in assets/products/ and use the SKU in each filename.
- Keep the clean product photo and the photo of a model wearing that same design as separate files.
- The local Ayyanar catalogue manager can export an update ZIP. Extract its index.html, products.json, and assets/products files into this repository, then commit and push them so Netlify deploys the update.

Assistant
This version has Vapi voice calls removed. The website keeps its text chat, on-device photo styling and try-on features. Voice calls can be added back in a later update.