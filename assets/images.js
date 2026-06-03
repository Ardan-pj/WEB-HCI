/**
 * eNVision Image Asset Registry
 * All images sourced from Unsplash (free to use, no attribution required)
 * These URLs are used directly in HTML via <img src="...">
 *
 * FORMAT: ?w=WIDTH&q=QUALITY&fit=crop
 * Resize by changing ?w= parameter (e.g. ?w=400 for thumbnails)
 */

const ASSETS = {
  // ── HOME PAGE ─────────────────────────────────────────────────────────
  hero: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=85&fit=crop",

  // New Arrivals (4 cards)
  ev_classic_shadow:  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&q=80&fit=crop",
  ev_aurora_gold:     "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80&fit=crop",
  ev_urban_clear:     "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&q=80&fit=crop",
  ev_vision_pro:      "https://images.unsplash.com/photo-1625591342274-013866180a44?w=500&q=80&fit=crop",

  // ── PRODUCT PAGE (9 products) ─────────────────────────────────────────
  ev_retro_round:     "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80&fit=crop",
  ev_light_titanium:  "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=500&q=80&fit=crop",
  ev_black_edition:   "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&q=80&fit=crop",
  ev_transparent:     "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=500&q=80&fit=crop",
  ev_polarized_elite: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80&fit=crop&crop=center",

  // ── REWARDS PAGE ──────────────────────────────────────────────────────
  rewards_hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85&fit=crop",

  // ── ABOUT US PAGE ─────────────────────────────────────────────────────
  about_store:       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85&fit=crop",
  about_display:     "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=85&fit=crop",
  about_workshop:    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=85&fit=crop",
  about_frames_1:    "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=85&fit=crop",
  about_frames_2:    "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&q=85&fit=crop",
};

export default ASSETS;
