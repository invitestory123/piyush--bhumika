/**
 * wedding-data.js — Customer-facing editable data layer for saga-of-love
 * Groom & Bride: Piyush & Bhumika
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Piyush",
    groomShort: "Piyush",
    bride: "Bhumika",
    brideShort: "Bhumika",
    hashtag: "#PIYUSHANDBHUMIKA",
  },

  invite: {
    kicker: "",
    line: "",
    heroVenue: "", // Hero venue removed per customer markup
  },

  // Primary event (for countdown timer and meta tags)
  event: {
    title: "Lagan Sagai Ceremony",
    countdownLabel: "Counting down to the Lagan Sagai Ceremony",
    startsAt: "2026-11-21T17:00:00+05:30",
    endsAt: "2026-11-21T22:00:00+05:30",
    dateLabel: "21 . 11 . 2026",
    dayLabel: "Saturday",
    timeLabel: "5:00 PM Onwards",
    dressCode: "",
    note: "",
  },

  // Event card (Lagan Sagai Ceremony only)
  events: [
    {
      title: "Lagan Sagai Ceremony",
      dateLabel: "21 . 11 . 2026",
      dayLabel: "Saturday",
      timeLabel: "5:00 PM Onwards",
      venueName: "Bhagmalpuram",
      venueAddress: "Chi-2, Greater Noida, Uttar Pradesh",
      dressCode: "",
      note: "",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lagan+Sagai+Ceremony+%E2%80%94+Piyush+%26+Bhumika&dates=20261121T113000Z%2F20261121T163000Z&details=Lagan+Sagai+Ceremony&location=https%3A%2F%2Fmaps.app.goo.gl%2FKQC2dWdGuCnG964r7",
      directionsUrl: "https://maps.app.goo.gl/KQC2dWdGuCnG964r7",
    },
  ],

  // Event venue with Google Maps directions (Lagan Sagai Ceremony only)
  venues: [
    {
      eventTitle: "Lagan Sagai Ceremony",
      date: "Saturday, 21 November 2026",
      time: "5:00 PM Onwards",
      name: "Bhagmalpuram",
      address: "Chi-2, Greater Noida, Uttar Pradesh",
      mapsUrl: "https://maps.app.goo.gl/KQC2dWdGuCnG964r7",
      directionsUrl: "https://maps.app.goo.gl/KQC2dWdGuCnG964r7",
    },
  ],

  venue: {
    name: "Bhagmalpuram",
    address: "Chi-2, Greater Noida, Uttar Pradesh",
    mapsQuery: "Bhagmalpuram, Chi-2, Greater Noida, Uttar Pradesh",
    mapsUrl: "https://maps.app.goo.gl/KQC2dWdGuCnG964r7",
  },

  weddingCard: {
    subtitle: "OFFICIAL WEDDING INVITATION",
    title: "THE WEDDING CARD",
    buttonText: "VIEW ORIGINAL SCANNED CARD",
    scannedCardImage: "./editable/assets/card-invitation.jpg",
    shlokaHeader: "॥ श्री गणेशाय नमः ॥",
    shlokaLine1: "वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः ।",
    shlokaLine2: "निर्विघ्नं कुरु मे देव, सर्व कार्येषु सर्वदा ॥",
    grandparents: "Late Smt. Dayawati & Late Sh. Balram Singh Kasana",
    inviteLine: "Solicit your gracious presence on the auspicious occasion of the wedding ceremony of their beloved Grand Son",
    groom: "Piyush",
    groomParents: "(Son of Mrs. Madhu Kasana & Mr. Harish Kasana)",
    withWord: "WITH",
    bride: "Bhumika",
    brideParents: "(Daughter of Mrs. Anita Poswal & Late Mr. Kuldeep Poswal)",
    brideRelation: "and\n(Beloved Niece of Mrs Deepanjali Nagar & Mr. Vijay Nagar)\n(Residence : Dehradun)",
  },

  blessing: {
    quote: "May your intentions be one, may your hearts beat as one.",
    translation: "Two families, one thread of gold — and a lifetime of happiness made luminous together.",
    source: "A BLESSING FROM BOTH FAMILIES",
  },

  rsvp: {
    kicker: "KINDLY RESPOND",
    title: "RSVP",
    subtitle: "We look forward to celebrating with you. For any queries or assistance, please reach out to:",
    contacts: [
      {
        name: "SATISH KASANA",
        phone: "99119 66888",
        phoneLink: "tel:+919911966888",
        whatsappLink: "https://wa.me/919911966888",
      },
      {
        name: "HARISH KASANA",
        phone: "98101 70905",
        phoneLink: "tel:+919810170905",
        whatsappLink: "https://wa.me/919810170905",
      },
    ],
  },

  footer: {
    coupleTitle: "PIYUSH & BHUMIKA",
    message: "With love & warm wishes from both the families",
    hashtag: "#PIYUSHANDBHUMIKA",
    instagram: "https://www.instagram.com/invitestory.in/",
    instagramText: "FOLLOW @INVITESTORY.IN ON INSTAGRAM",
  },

  images: {
    heroArch: "./editable/assets/hero-arch.webp",
    gatePanel: "./editable/assets/gate-panel.webp",
    mapPreview: "./editable/assets/map-preview.webp",
    footerFloral: "./editable/assets/footer-floral.webp",
    scannedCard: "./editable/assets/card-invitation.jpg",
    ganeshaIcon: "./editable/assets/ganesha-icon.png",
    groomIcon: "./editable/assets/groom-icon.png",
    brideIcon: "./editable/assets/bride-icon.png",
    ogImage: "./editable/assets/og-image.jpg",
    ogImageSquare: "./editable/assets/og-image-square.jpg",
    ogLogo: "./editable/assets/og-logo.png",
  },
};
