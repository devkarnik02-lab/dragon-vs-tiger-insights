# Rummy Loot App Landing Page

## Current State
Existing landing page promotes a Dragon vs Tiger Telegram channel with dark red/gold theme, Telegram CTA, Meta Pixel tracking.

## Requested Changes (Diff)

### Add
- New landing page for Rummy Loot mobile gaming app download
- Hero with "Get ₹101 Welcome Bonus" headline, glowing gradient animation background
- App preview section with floating phone mockup
- Features section: Instant signup, Smooth gameplay, Daily rewards, 24/7 support
- Big animated download CTA button linking to https://rummyloot.in?from_gameid=8979123&channelCode=8959779
- Social proof section with animated counters (users joined)
- Urgency section with countdown timer
- Floating notification popups ("User just joined")
- Sticky floating "INSTALL NOW 🚀" button
- Disclaimer: "Play responsibly. This app is for entertainment purposes only."

### Modify
- Complete redesign: black (#0d0d0d) + gold (#f5c542) + green (#00c853) palette
- Replace Telegram focus with app download focus
- Replace Dragon vs Tiger content with Rummy Loot app content

### Remove
- Telegram CTA and join links
- Dragon vs Tiger branding and Nav
- How It Works Telegram steps

## Implementation Plan
1. Rewrite App.tsx with all new sections: Hero, AppPreview, Features, CTA, SocialProof, Urgency, Footer
2. Add countdown timer logic (24h countdown)
3. Add animated counters for user stats
4. Add floating notification popup system (random user joined popups)
5. Sticky floating install button
6. Keep Meta Pixel tracking, fire DownloadApp custom event on CTA clicks
7. All CTAs link to https://rummyloot.in?from_gameid=8979123&channelCode=8959779
