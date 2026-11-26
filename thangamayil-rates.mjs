const SOURCE_URL = "https://www.thangamayil.com/";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    "Netlify-CDN-Cache-Control": "public, durable, max-age=300, stale-while-revalidate=1800"
  }
});

function extractRate(text, pattern, name) {
  const match = text.match(pattern);
  if (!match) throw new Error(`Could not read ${name} from Thangamayil's rate board.`);
  const value = Number(match[1].replace(/,/g, ""));
  if (!Number.isFinite(value) || value <= 0) throw new Error(`Thangamayil returned an invalid ${name} rate.`);
  return value;
}

export default async (request) => {
  if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);

  try {
    const response = await fetch(SOURCE_URL, {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "Mozilla/5.0 (compatible; AyyanarRateReader/1.0)"
      },
      signal: AbortSignal.timeout(10000)
    });
    if (!response.ok) throw new Error(`Thangamayil returned HTTP ${response.status}.`);

    const html = await response.text();
    const text = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;|&#160;|&#xA0;/gi, " ")
      .replace(/&#8377;|&#x20b9;|&rupee;/gi, "₹")
      .replace(/&amp;/gi, "&")
      .replace(/\s+/g, " ");

    const gold22k = extractRate(text, /GOLD\s*RATE\s*22\s*k\s*\(\s*1\s*gm\s*\)\s*:?\s*₹?\s*([\d,]+(?:\.\d+)?)/i, "22K gold");
    const gold24k = extractRate(text, /GOLD\s*RATE\s*24\s*k\s*\(\s*1\s*gm\s*\)\s*:?\s*₹?\s*([\d,]+(?:\.\d+)?)/i, "24K gold");
    const gold18k = extractRate(text, /GOLD\s*RATE\s*18\s*k\s*\(\s*1\s*gm\s*\)\s*:?\s*₹?\s*([\d,]+(?:\.\d+)?)/i, "18K gold");
    const silver = extractRate(text, /SILVER\s*RATE\s*\(\s*1\s*gm\s*\)\s*:?\s*₹?\s*([\d,]+(?:\.\d+)?)/i, "silver");
    const updatedAt = text.match(/Last\s*updated\s*Time\s*:?\s*([^|]{5,50}?)(?=\s+RATE\s+HISTORY|\s+Links|$)/i)?.[1]?.trim() || "Update time not shown";

    return json({
      gold22k,
      gold24k,
      gold18k,
      silver,
      updatedAt,
      fetchedAt: new Date().toISOString(),
      source: SOURCE_URL
    });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : "Unable to read Thangamayil rates." }, 502);
  }
};
