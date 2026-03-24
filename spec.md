# Dragon vs Tiger Insights

## Current State
New project. Empty backend and frontend.

## Requested Changes (Diff)

### Add
- Full single-page landing site targeting Telegram channel sign-ups
- Hero section with animated particle/gradient background, headline, subheadline, trust line, and primary CTA button
- Features section (4 cards: Daily insights, Strategy discussions, Real-time updates, Beginner-friendly guidance)
- How It Works section (3 numbered steps)
- Main CTA section with large animated gradient button linking to https://t.me/+Enkv9X8zDGc2NWJl
- Social proof section with animated counters
- Sticky floating bottom CTA button with same gradient animation
- Live engagement notifications (fake live join toasts)
- Disclaimer footer section
- Import Poppins/Montserrat from Google Fonts

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: minimal/empty (no data persistence needed)
2. Frontend: single-page React app with all sections above
   - Tailwind custom colors for neon palette
   - CSS keyframe animations for gradient button, pulse glow, particles
   - useEffect for animated counters and random join notifications
   - Sticky floating button always visible
   - Mobile-first layout
