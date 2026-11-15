Ayyanar Jewellery — GitHub + Netlify site files

This package contains the website and a Vapi browser call button inside the chat window. It uses the saved Ayyanar Jewellery Customer Care assistant:
- Assistant ID: 6a4f8f23-bdca-41f4-acce-67d1906eec14
- Browser voice uses the Vapi Public API Key supplied by the owner. No private API key is included.
- The site starts the published assistant with its saved GPT-4.1-mini, Elliot voice, and Soniox transcription settings.
- Gold-price context and the estimate formulas are shared with the voice assistant at the start of each call.
- Uploaded try-on photos are analyzed on the device. During a call, the assistant receives a short styling summary, not the photo.

Upload to GitHub and Netlify
1. Download and extract this ZIP on your computer.
2. Open your connected GitHub repository: https://github.com/yukeshvarma/ayyanarjewellers
3. Choose Add file → Upload files.
4. Upload the extracted contents so index.html, assets/, products.json, and netlify.toml are at the repository's top level. Do not upload the ZIP as the only file.
5. Commit the changes to the branch connected to Netlify. Netlify should deploy automatically.
6. After deployment finishes, open https://ayyanarjewellers.netlify.app, refresh, open the chat button, and tap Call in the chat header. Allow microphone access.

If the call still fails
- Voice calls need the HTTPS site and microphone permission.
- In Vapi call logs, inspect the newest call's end reason if no speech is heard.
- The configured assistant ID and Public API Key are in index.html. Never replace the Public API Key with a private key.

Gold estimate reference
The configured 22K/916 reference is ₹12,615 per gram, checked 16 Nov 2026. It is a dated reference snapshot, not a guaranteed live quote. Confirm the store board rate before a purchase. Estimate rules are below 5 g: 17% margin, 1% discount, then 3% GST; above 6 g: 12.5% margin, 2% discount, then 3% GST. The site asks the shop to quote for 5 g through 6 g. Making and stone charges are excluded.

Updating the catalogue
- Product records are in products.json.
- Put each SKU's clean product photo and matching model-wearing photo in assets/products/.
- Keep SKU-based filenames and update the product record before committing.
- The local Ayyanar catalogue manager can export updates. Extract its index.html, products.json, and assets/products files into this repository, then commit them so Netlify deploys the update.
