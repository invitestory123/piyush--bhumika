# Customer Editing Guide — Piyush & Bhumika (saga-of-love)

This invitation features floral motifs, royal archways, live countdown, the official wedding card with modal viewer, multi-event directions for all wedding venues, Vedic blessing quote, interactive RSVP contact cards with Call and WhatsApp buttons, and family footer.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `groomShort`: `"Piyush"`
- `bride` & `brideShort`: `"Bhumika"`
- `hashtag`: `"#PIYUSHANDBHUMIKA"`

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
- `timeLabel`: `""` (time removed from countdown per customer request)
- `note`: Subtitle or note

### Multi-Event Arched Cards
Edit `events` array in `editable/wedding-data.js` to configure the arched event cards (Wedding Ceremony, Lagan Sagai Ceremony, Reception):
- `title`: Name of the event (e.g. `"Wedding Ceremony"`, `"Lagan Sagai Ceremony"`, `"Reception"`)
- `dateLabel`: Date in bold gold display font (e.g. `"25 . 11 . 2026"`, `"21 . 11 . 2026"`, `"01 . 12 . 2026"`)
- `dayLabel`: Day of the week (e.g. `"Wednesday"`, `"Saturday"`, `"Tuesday"`)
- `timeLabel`: Event timing (e.g. `"11:00 AM"`, `"5:00 PM Onwards"`, `"Dinner: 7:00 PM Onwards"`)
- `venueName`: Name of venue
- `venueAddress`: Full address
- `calendarUrl`: Google Calendar event URL for `"Add to calendar"` button
- `directionsUrl`: Google Maps directions URL for `"Directions"` button

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
- `shlokaHeader`: `"॥ श्री गणेशाय नमः ॥"`
- `shlokaLine1` & `shlokaLine2`: Sanskrit Ganesh shlokas
- `grandparents`: Blessings of grandparents (*Late Smt. Dayawati & Late Sh. Balram Singh Kasana*)
- `inviteLine`: Invitation phrasing (*Solicit your gracious presence...*)
- `groom` & `groomParents`: Groom name and parents (*Piyush*, *Son of Mrs. Madhu Kasana & Mr. Harish Kasana*)
- `withWord`: `"WITH"`
- `bride` & `brideParents`: Bride name and parents (*Bhumika*, *Daughter of Mrs. Anita Poswal & Late Mr. Kuldeep Poswal*)
- `brideRelation`: Niece relation (*and (Beloved Niece of Mrs Deepanjali Nagar & Mr. Vijay Nagar) (Residence : Dehradun)*)

### Sacred Blessing
Edit `blessing` in `editable/wedding-data.js`:
- `quote`: `"May your intentions be one, may your hearts beat as one."`
- `translation`: `"Two families, one thread of gold — and a lifetime of happiness made luminous together."`
- `source`: `"A BLESSING FROM BOTH FAMILIES"`

### Interactive RSVP
Edit `rsvp` in `editable/wedding-data.js`:
- `contacts`: Array of contact cards with `name`, `phone`, `phoneLink` (`tel:...`), and `whatsappLink` (`https://wa.me/...`):
  - SATISH KASANA (+91 99119 66888)
  - HARISH KASANA (+91 98101 70905)

### Footer
Edit `footer` in `editable/wedding-data.js`:
- `coupleTitle`: `"PIYUSH & BHUMIKA"`
- `message`: `"With love & warm wishes from both the families"`
- `hashtag`: `"#PIYUSHANDBHUMIKA"`
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
