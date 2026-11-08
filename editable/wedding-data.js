/**
 * wedding-data.js — Customer-facing editable data layer for saga-of-love
 * Edit this file to update couple names, dates, events, venue, wedding card, blessing, and contacts.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Piyush",
    brideShort: "Piyush",
    groom: "Bhumika",
    groomShort: "Bhumika",
    hashtag: "#PiyushWedsBhumika",
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

  venue: {
    name: "Jaypee Residency Manor",
    address: "Barlow Ganj, Mussoorie, Uttarakhand",
    mapsQuery: "Jaypee Residency Manor, Mussoorie, Uttarakhand",
    lat: 30.4548,
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
    line: "विघ्न हरण मंगल करण, श्री गणपति महाराज । प्रथम निमंत्रण आपको, पूर्ण कीजें काज ॥",
    translation: "वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः । निर्विघ्नं कुरु मे देव, सर्व कार्येषु सर्वदा ॥",
    source: "॥ श्री गणेशाय नमः ॥",
  },

  footer: {
    families: `With Blessings & Best Compliments From:
Late Smt. Kusum Lata & Late Sh. Satyapal Poswal
Late Smt. Dayawati & Late Sh. Balram Singh Kasana

Deepanjali Nagar & Vijay Nagar
Mr. Satish Kasana & Mr. Harish Kasana
Bhagmalpuram, Chi-2, Greater Noida
M: +91 98101 70905, +91 99119 66888

R.S.V.P. — Entire Kasana & Nagar Families`,
    contacts: [
      { name: "Mr. Satish Kasana", phone: "+91 98101 70905" },
      { name: "Mr. Harish Kasana", phone: "+91 99119 66888" },
    ],
  },

  bgm: {
    src: "./editable/assets/bgm.mp3",
    title: "Jashn-E-Bahaaraa (Instrumental Music) - Jodhaa Akbar",
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
