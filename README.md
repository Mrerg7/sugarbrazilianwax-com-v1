# SugarBrazilianWax.com

Premium domain-for-sale site for **sugarbrazilianwax.com** — built to convert buyers and strengthen SEO/topical authority around Brazilian sugar waxing.

## Stack

- [Astro](https://astro.build/) static site
- Tailwind CSS
- Cloudflare Worker + static assets (`wrangler deploy`)

## Local development

```bash
npm install
npm run dev
```

Dev server defaults to `http://localhost:4321`.

## Build & deploy

```bash
npm run build
npm run deploy
```

`deploy` runs Wrangler against the `sugarbrazilianwax-com-v1` Worker, serving `dist/` on `sugarbrazilianwax.com` and `www.sugarbrazilianwax.com` (www → apex 301).

## Conversion & SEO features

- Asking price + inquiry form (mailto prefill)
- FAQ with FAQPage structured data
- Product/Offer schema with price
- Educational guides under `/guides/` for topical DA signals
- Mobile sticky CTA, viewport meta, touch-friendly targets
- Sitemap, robots.txt, canonicals, OG/Twitter tags

## Contact

Acquisition inquiries: `sales@desertrich.com`
