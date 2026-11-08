/**
 * wedding-data.js — Customer-facing editable data layer for saga-of-love
 * Bride side invitation configuration: Bhumika & Piyush
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Bhumika",
    brideShort: "Bhumika",
    groom: "Piyush",
    groomShort: "Piyush",
    hashtag: "#BHUMIKAANDPIYUSH",
  },

  invite: {
    kicker: "",
    line: "",
  },

  event: {
    title: "Wedding Ceremony",
    startsAt: "2026-11-25T11:00:00+05:30",
    endsAt: "2026-11-25T16:00:00+05:30",
    dateLabel: "25 . 11 . 2026",
    dayLabel: "Wednesday",
    timeLabel: "11:00 AM",
    dressCode: "Traditional Wedding Attire",
    note: "Reception to follow on Tuesday, 01 December 2026",
  },

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
    shlokaTop: "विघ्न हरण मंगल करन श्री गणपति महाराज ।",
    shlokaBottom: "प्रथम निमंत्रण आपको पूरन करियो काज ॥",
    grandparentsKicker: "With the blessings of Grandparents",
    grandparentsNames: "Late Smt. Kusum Lata & Late Sh. Satyapal Poswal",
    hosts: "Deepanjali Nagar & Vijay Nagar",
    inviteLine: "request the pleasure of your company on the auspicious occasion of the",
    occasion: "Wedding Festivities",
    relationLine: "of their daughter",
    bride: "Bhumika",
    brideParents: "(D/o Late Mr. Kuldeep Poswal & Anita Poswal)",
    withWord: "with",
    groom: "Piyush",
    groomParents: "(S/o Mr. Harish Kasana & Madhu Kasana)",
  },

  blessing: {
    title: "॥ श्री गणेशाय नमः ॥",
    shloka1: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।",
    shloka2: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
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
        name: "Ajay Nagar",
        phone: "98110 68888",
        phoneLink: "tel:+919811068888",
        whatsappLink: "https://wa.me/919811068888",
      },
      {
        name: "Sandeep Poswal",
        phone: "97566 00111",
        phoneLink: "tel:+919756600111",
        whatsappLink: "https://wa.me/919756600111",
      },
    ],
  },

  footer: {
    coupleTitle: "BHUMIKA & PIYUSH",
    message: "With love & warm wishes from both the families",
    hashtag: "#BHUMIKAANDPIYUSH",
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
  },
};
