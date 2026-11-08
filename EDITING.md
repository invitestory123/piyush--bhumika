# Customer Editing Guide — Piyush & Bhumika (saga-of-love)

This invitation features floral motifs, royal archways, live countdown, multi-event festivities itinerary, venue location map, Vedic blessings, and family contact details for the wedding of Piyush & Bhumika.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: Piyush & Bhumika
- `brideShort` & `groomShort`: Piyush & Bhumika
- `hashtag`: `"#PiyushWedsBhumika"`

### Invitation Wording
Edit `invite` in `editable/wedding-data.js`:
- `kicker`: Header line on the door cover and hero section (left blank per customer request)
- `line`: Invitation line in hero section (left blank per customer request)

### Wedding Ceremony & Countdown
Edit `event` in `editable/wedding-data.js`:
- `title`: Main ceremony title (`"Wedding Ceremony"`)
- `startsAt` & `endsAt`: ISO timestamps (`"2026-11-25T11:00:00+05:30"`). Directly drives the live countdown timer.
- `dateLabel`: `"25 . 11 . 2026"`
- `dayLabel`: `"Wednesday"`
- `timeLabel`: `"11:00 AM"`
- `note`: Subtitle or note

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Jaypee Residency Manor
- `address`: Barlow Ganj, Mussoorie, Uttarakhand
- `mapsQuery`: Search query for Google Maps link
- `lat` / `lng`: GPS coordinates for directions

### The Wedding Card (Replaces Itinerary)
Edit `weddingCard` in `editable/wedding-data.js`:
- `subtitle`: `"OFFICIAL WEDDING INVITATION"`
- `title`: `"THE WEDDING CARD"`
- `buttonText`: `"VIEW ORIGINAL SCANNED CARD"` (opens modal displaying the scanned card)
- `scannedCardImage`: `"./editable/assets/card-invitation.jpg"`
- `shlokaTop` & `shlokaBottom`: Sanskrit Ganesh shlokas
- `grandparentsKicker` & `grandparentsNames`: Blessings of grandparents
- `hosts`: Host couple names
- `inviteLine`: Invitation phrasing
- `occasion`: `"Wedding Festivities"`
- `relationLine`: `"of their daughter"`
- `bride` & `brideParents`: Bride name and parents
- `groom` & `groomParents`: Groom name and parents

### Background Music (BGM)
- Audio file located at `editable/assets/bgm.mp3`
- Configured track: Jashn-E-Bahaaraa (Instrumental Music) - Jodhaa Akbar
- Automatically begins upon opening the invitation; floating button allows play/pause toggle.

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
3. Validate changes with `node --check editable/wedding-data.js`.
