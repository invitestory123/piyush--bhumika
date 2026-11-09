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
  },

  // Primary event (for countdown timer and meta tags)
  event: {
    title: "Wedding Ceremony",
    startsAt: "2026-11-25T11:00:00+05:30",
    endsAt: "2026-11-25T16:00:00+05:30",
    dateLabel: "25 . 11 . 2026",
    dayLabel: "Wednesday",
    timeLabel: "",
    dressCode: "Traditional Wedding Attire",
    note: "", // Reception note removed per customer request
  },

  // Multi-event arched cards (Wedding Ceremony, Lagan Sagai, Reception)
  events: [
    {
      title: "Wedding Ceremony",
      dateLabel: "25 . 11 . 2026",
      dayLabel: "Wednesday",
      timeLabel: "11:00 AM",
      venueName: "Jaypee Residency Manor",
      venueAddress: "Barlow Ganj, Mussoorie, Uttarakhand",
      dressCode: "Traditional Wedding Attire",
      note: "",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+%E2%80%94+Piyush+%26+Bhumika&dates=20261125T053000Z%2F20261125T103000Z&details=Wedding+Ceremony&location=Jaypee+Residency+Manor%2C+Barlow+Ganj%2C+Mussoorie%2C+Uttarakhand",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=30.4598,78.0742",
    },
    {
      title: "Lagan Sagai Ceremony",
      dateLabel: "21 . 11 . 2026",
      dayLabel: "Saturday",
      timeLabel: "5:00 PM Onwards",
      venueName: "Bhagmalpuram",
      venueAddress: "Chi-2, Greater Noida, Uttar Pradesh",
      dressCode: "",
      note: "",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lagan+Sagai+Ceremony+%E2%80%94+Piyush+%26+Bhumika&dates=20261121T113000Z%2F20261121T163000Z&details=Lagan+Sagai+Ceremony&location=Bhagmalpuram%2C+Chi-2%2C+Greater+Noida%2C+Uttar+Pradesh",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Bhagmalpuram%2C+Chi-2%2C+Greater+Noida",
    },
    {
      title: "Reception",
      dateLabel: "01 . 12 . 2026",
      dayLabel: "Tuesday",
      timeLabel: "Dinner: 7:00 PM Onwards",
      venueName: "The Weddings Dot (Hall Darbar)",
      venueAddress: "Opp. Sparsh Global School, Noida Greater Noida Link Road, Dadri",
      dressCode: "",
      note: "",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+%E2%80%94+Piyush+%26+Bhumika&dates=20261201T133000Z%2F20261201T183000Z&details=Wedding+Reception&location=The+Weddings+Dot+%28Hall+Darbar%29%2C+Opp.+Sparsh+Global+School%2C+Noida+Greater+Noida+Link+Road%2C+Dadri",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The+Weddings+Dot%2C+Opp+Sparsh+Global+School%2C+Dadri",
    },
  ],

  // Multiple event venues with Google Maps directions
  venues: [
    {
      eventTitle: "Wedding Ceremony",
      date: "Wednesday, 25 November 2026",
      time: "11:00 AM",
      name: "Jaypee Residency Manor",
      address: "Barlow Ganj, Mussoorie, Uttarakhand",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jaypee+Residency+Manor%2C+Mussoorie",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=30.4598,78.0742",
    },
    {
      eventTitle: "Lagan Sagai Ceremony",
      date: "Saturday, 21 November 2026",
      time: "Lagan Sagai: 05:00 PM · Dinner: 06:00 PM",
      name: "Bhagmalpuram",
      address: "Chi-2, Greater Noida, Uttar Pradesh",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bhagmalpuram%2C+Chi-2%2C+Greater+Noida",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Bhagmalpuram%2C+Chi-2%2C+Greater+Noida",
    },
    {
      eventTitle: "Reception",
      date: "Tuesday, 01 December 2026",
      time: "Dinner: 07:00 PM Onwards",
      name: "The Weddings Dot (Hall Darbar)",
      address: "Opp. Sparsh Global School, Noida Greater Noida Link Road, Dadri",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Weddings+Dot%2C+Opp+Sparsh+Global+School%2C+Dadri",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The+Weddings+Dot%2C+Opp+Sparsh+Global+School%2C+Dadri",
    },
  ],

  venue: {
    name: "Jaypee Residency Manor",
    address: "Barlow Ganj, Mussoorie, Uttarakhand",
    mapsQuery: "Jaypee Residency Manor, Mussoorie",
    lat: 30.4598,
    lng: 78.0742,
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
  },
};
