/**
 * Edit this file to launch or customize the site.
 * Ayushi & Sanket — Wedding Celebration
 */

export const site = {
  siteUrl: "https://ayushi-sanket.vercel.app/",
  defaultTheme: "ruby",
  themes: [
    { id: "ruby", label: "Ruby Maroon" },
    { id: "marigold", label: "Marigold" },
    { id: "lotus", label: "Lotus" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
  ],
  meta: {
    title: "Wedding Invitation",
    description:
      "Join Ayushi and Sanket at Welcomhotel by ITC Hotels, Prayagraj on 12th & 13th December 2026. Ceremony, celebrations, and all the details.",
  },
  couple: {
    partnerA: "Ayushi",
    partnerB: "Sanket",
    photo: null,
  },
  hashtag: "#AyushiSanket2026",
  weddingDateIso: "2026-12-12T19:00:00+05:30",
  displayDate: "Saturday, 12th December 2026",
  city: "Welcomhotel by ITC Hotels, Prayagraj",
  music: {
    src: "music/music.mp3",
    labelPlay: "Play Shehnai music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  hero: {
    kicker: "॥ श्री गणेशाय नमः ॥ • Together with our families",
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "A note from the Jaiswal family",
    heading: "Please celebrate with us",
    paragraphs: [
      "With the divine Blessings of Almighty God and our revered elders, Mr. Umesh Kumar Jaiswal & Mrs. Madhu Jaiswal cordially invite you to grace the auspicious Wedding celebrations of their beloved niece Ayushi with Sanket.",
      "Your gracious presence, warmth, and blessings are the greatest gift as they embark upon their sacred journey of love and togetherness.",
    ],
    signOff: "With all our love & blessings,",
    hosts: [
      {
        name: "Dinesh Kumar Jaiswal & Rekha Jaiswal",
        relation: "Parents of the Bride",
        phone: "+919811234567",
      },
      {
        name: "Abhinav - Nidhi & Avishkar",
        relation: "Brother, Bhabhi & Brother",
        phone: "+919811234567",
      },
    ],
  },
  countdown: {
    heading: "Until the Auspicious Hour",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    arrivedHeading: "The Day is Here",
    arrivedMessage:
      "The wedding celebrations have begun. We cannot wait to see you at Welcomhotel by ITC Hotels, Prayagraj!",
  },
  lineup: {
    eyebrow: "The Celebrations",
    heading: "Event Line-up",
    mapsLabel: "Open in Google Maps",
  },
  events: [
    {
      id: "wedding",
      title: "Wedding (Shubh Vivah)",
      date: "Saturday, 12th December 2026",
      time: "7:00 PM Onwards",
      venue: "Welcomhotel by ITC Hotels, Prayagraj",
      note: "The sacred Vedic pheras, exchange of garlands, and wedding rituals. Please grace the auspicious muhurat with your presence and blessings.",
      accent: "ruby",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Welcomhotel+by+ITC+Hotels+Prayagraj+Tashkent+Marg",
    },
    {
      id: "vidai",
      title: "Vidai",
      date: "Sunday, 13th December 2026",
      time: "Morning / Auspicious Muhurat",
      venue: "Welcomhotel by ITC Hotels, Prayagraj",
      note: "Blessing our beloved daughter Ayushi as she begins her happily ever after with Sanket, carrying our warmest love and prayers.",
      accent: "marigold",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Welcomhotel+by+ITC+Hotels+Prayagraj+Tashkent+Marg",
    },
  ],
  venue: {
    eyebrow: "Venue & Destination",
    heading: "The Celebration Venue",
    name: "Welcomhotel by ITC Hotels",
    subtitle: "Civil Lines, Prayagraj",
    photo: "venue.jpg",
    addressLines: [
      "16, Tashkent Marg, Agnipath Colony",
      "Civil Lines, Prayagraj",
      "Uttar Pradesh 211001",
    ],
    directions:
      "Centrally situated on Tashkent Marg in Civil Lines, Prayagraj, just 2 km (around 6-8 minutes) from Prayagraj Junction Railway Station. Dedicated complimentary valet parking and concierge will be available for all wedding guests at the main hotel porch.",
    mapsCta: "Open in Google Maps",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Welcomhotel+by+ITC+Hotels+Prayagraj+Tashkent+Marg",
    loadMapLabel: "Load Google Maps",
    mapTitle: "Map of Welcomhotel by ITC Hotels, Prayagraj",
    embedUrl:
      "https://maps.google.com/maps?q=Welcomhotel%20by%20ITC%20Hotels%20Prayagraj&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facadeCaption: "Tap to switch to interactive Google Map.",
  },
  footer: {
    closing: "We cannot wait to celebrate with you.",
    crafted: "Crafted with ❤️ by Avishkar for Ayushi Didi & Sanket Jija Ji",
  },
};

export const navItems = [
  { id: "invitation", label: "Invite", icon: "mail" },
  { id: "countdown", label: "When", icon: "clock" },
  { id: "lineup", label: "Events", icon: "calendar" },
  { id: "venue", label: "Venue", icon: "place" },
  { id: "rsvp", label: "RSVP", icon: "chat" },
];

export default site;
