/**
 * wedding-data.js — Customer-facing editable data layer for saga-of-love
 * Edit this file to update couple names, dates, events, itinerary, venue, blessing, and contacts.
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
    kicker: "Late Smt. Dayawati & Late Sh. Balram Singh Kasana",
    line: "solicit your gracious presence on the auspicious occasion of the wedding ceremony of their beloved grandson Piyush with Bhumika",
  },

  event: {
    title: "Wedding Ceremony",
    startsAt: "2026-11-25T11:00:00+05:30",
    endsAt: "2026-11-25T16:00:00+05:30",
    dateLabel: "25 . 11 . 2026",
    dayLabel: "Wednesday",
    timeLabel: "Baraat Chadhat at 11:00 AM",
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

  story: [
    {
      year: "21 November 2026",
      title: "LAGAN SAGAI CEREMONY",
      text: "Lagan Sagai: 05:00 PM · Dinner: 06:00 PM\nVenue: Bhagmalpuram, Chi-2, Greater Noida",
      image: "story-2",
    },
    {
      year: "25 November 2026",
      title: "WEDDING CEREMONY",
      text: "Baraat Chadhat: 11:00 AM\nVenue: Jaypee Residency Manor, Mussoorie, U.K.",
      image: "story-1",
    },
    {
      year: "01 December 2026",
      title: "RECEPTION",
      text: "Dinner: 07:00 PM Onwards\nVenue: (Hall Darbar) The Weddings Dot, Opp. Sparsh Global School, Noida Greater Noida Link Road, Dadri",
      image: "story-3",
    },
  ],

  blessing: {
    line: "विघ्न हरण मंगल करण, श्री गणपति महाराज । प्रथम निमंत्रण आपको, पूर्ण कीजें काज ॥",
    translation: "वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः । निर्विघ्नं कुरु मे देव, सर्व कार्येषु सर्वदा ॥",
    source: "॥ श्री गणेशाय नमः ॥",
  },

  footer: {
    families: `With Blessings & Best Compliments From:
Late Smt. Dayawati & Late Sh. Balram Singh Kasana

Piyush (Son of Mrs. Madhu Kasana & Mr. Harish Kasana)
WITH
Bhumika (Daughter of Mrs. Anita Poswal & Late Mr. Kuldeep Poswal)
& Beloved Niece of Mrs Deepanjali Nagar & Mr. Vijay Nagar (Residence: Dehradun)

A Cordial Invitation From:
Mr. Satish Kasana & Mr. Harish Kasana
Address: Bhagmalpuram, Chi-2, Greater Noida
M: +91 98101 70905, +91 99119 66888

R.S.V.P. — Entire Kasana Family`,
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
    story1: "./editable/assets/story-1.webp",
    story2: "./editable/assets/story-2.webp",
    story3: "./editable/assets/story-3.webp",
  },
};
