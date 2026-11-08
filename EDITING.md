# Customer Editing Guide — Bhumika & Piyush (Bride Side Invitation)

This invitation is tailored for the bride's side (**Bhumika & Piyush**), featuring floral motifs, royal archways, live countdown, the official wedding card with modal viewer, multi-event directions for all wedding venues, Vedic Ganesh blessing, interactive RSVP contact cards with Call and WhatsApp buttons, and a clean family footer.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple Information (Bride Side)
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `brideShort`: `"Bhumika"`
- `groom` & `groomShort`: `"Piyush"`
- `hashtag`: `"#BHUMIKAANDPIYUSH"`

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

### Multiple Event Venues & Directions
Edit `venues` array in `editable/wedding-data.js`:
- **Wedding Ceremony**: Jaypee Residency Manor, Barlow Ganj, Mussoorie
- **Lagan Sagai Ceremony**: Bhagmalpuram, Chi-2, Greater Noida
- **Reception**: The Weddings Dot (Hall Darbar), Opp. Sparsh Global School, Noida Greater Noida Link Road, Dadri
Each entry includes `eventTitle`, `date`, `time`, `name`, `address`, and `directionsUrl` (which powers the `Get directions` button for Google Maps).

### The Wedding Card (Replaces Itinerary)
Edit `weddingCard` in `editable/wedding-data.js`:
- `subtitle`: `"OFFICIAL WEDDING INVITATION"`
- `title`: `"THE WEDDING CARD"`
- `buttonText`: `"VIEW ORIGINAL SCANNED CARD"` (opens modal displaying the scanned card)
- `scannedCardImage`: `"./editable/assets/card-invitation.jpg"`
- `shlokaTop` & `shlokaBottom`: Sanskrit Ganesh shlokas
- `grandparentsKicker` & `grandparentsNames`: Blessings of grandparents
- `hosts`: Host couple names (*Deepanjali Nagar & Vijay Nagar*)
- `inviteLine`: Invitation phrasing
- `occasion`: `"Wedding Festivities"`
- `relationLine`: `"of their daughter"`
- `bride` & `brideParents`: Bride name and parents (*Bhumika*, *D/o Late Mr. Kuldeep Poswal & Anita Poswal*)
- `groom` & `groomParents`: Groom name and parents (*Piyush*, *S/o Mr. Harish Kasana & Madhu Kasana*)

### Sacred Blessing & Vedic Shloka
Edit `blessing` in `editable/wedding-data.js`:
- `title`: `"॥ श्री गणेशाय नमः ॥"`
- `shloka1`: `"वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।"`
- `shloka2`: `"निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"`
- `quote`: `"May your intentions be one, may your hearts beat as one."`
- `translation`: `"Two families, one thread of gold — and a lifetime of happiness made luminous together."`
- `source`: `"A BLESSING FROM BOTH FAMILIES"`

### Interactive RSVP
Edit `rsvp` in `editable/wedding-data.js`:
- `contacts`: Array of contact cards with `name`, `phone`, `phoneLink` (`tel:...`), and `whatsappLink` (`https://wa.me/...`):
  - Ajay Nagar (+91 98110 68888)
  - Sandeep Poswal (+91 97566 00111)

### Footer
Edit `footer` in `editable/wedding-data.js`:
- `coupleTitle`: `"BHUMIKA & PIYUSH"`
- `message`: `"With love & warm wishes from both the families"`
- `hashtag`: `"#BHUMIKAANDPIYUSH"`
- `instagramText`: `"FOLLOW @INVITESTORY.IN ON INSTAGRAM"`

### Background Music (BGM)
- Audio file located at `editable/assets/bgm.mp3`
- Configured track: Jashn-E-Bahaaraa (Instrumental Music) - Jodhaa Akbar
- Automatically begins upon opening the invitation; floating button allows play/pause toggle.

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
3. Validate changes with `node --check editable/wedding-data.js`.
