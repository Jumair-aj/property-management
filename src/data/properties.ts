export interface Property {
  id: string;
  title: string;
  location: string;
  rent: number;
  deposit: number;
  beds: number;
  baths: number;
  area: number;
  tags: string[];
  img: string;
  furnished: boolean;
  pets: boolean;
  rating: number;
  reviews: number;
}

export interface Review {
  name: string;
  duration: string;
  rating: number;
  text: string;
  avatar: string;
}

export const PROPERTIES: Property[] = [
  {
    id: "p1",
    title: "Sloane Residence",
    location: "Indiranagar, Bangalore",
    rent: 84000,
    deposit: 168000,
    beds: 3,
    baths: 2,
    area: 1450,
    tags: ["Verified", "Managed"],
    img: "",
    furnished: true,
    pets: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: "p2",
    title: "Atelier 12",
    location: "Koramangala 4th Block",
    rent: 62000,
    deposit: 124000,
    beds: 2,
    baths: 2,
    area: 1080,
    tags: ["Verified", "New"],
    img: "",
    furnished: true,
    pets: false,
    rating: 4.7,
    reviews: 12,
  },
  {
    id: "p3",
    title: "North Tower Penthouse",
    location: "HSR Layout, Sector 2",
    rent: 145000,
    deposit: 290000,
    beds: 4,
    baths: 4,
    area: 2380,
    tags: ["Managed", "Verified"],
    img: "",
    furnished: true,
    pets: true,
    rating: 4.9,
    reviews: 31,
  },
  {
    id: "p4",
    title: "Linden House",
    location: "Whitefield, ITPL Road",
    rent: 48000,
    deposit: 96000,
    beds: 2,
    baths: 2,
    area: 980,
    tags: ["Verified"],
    img: "",
    furnished: false,
    pets: true,
    rating: 4.6,
    reviews: 18,
  },
  {
    id: "p5",
    title: "The Mews",
    location: "Sadashivanagar",
    rent: 96000,
    deposit: 192000,
    beds: 3,
    baths: 3,
    area: 1620,
    tags: ["Managed", "New"],
    img: "",
    furnished: true,
    pets: true,
    rating: 4.8,
    reviews: 9,
  },
  {
    id: "p6",
    title: "Studio Nord",
    location: "Jayanagar 7th Block",
    rent: 32000,
    deposit: 64000,
    beds: 1,
    baths: 1,
    area: 620,
    tags: ["Verified", "New"],
    img: "",
    furnished: true,
    pets: false,
    rating: 4.5,
    reviews: 7,
  },
  {
    id: "p7",
    title: "Ashwood Villa",
    location: "Bellandur Lake View",
    rent: 118000,
    deposit: 236000,
    beds: 4,
    baths: 3,
    area: 2100,
    tags: ["Verified", "Managed"],
    img: "",
    furnished: false,
    pets: true,
    rating: 4.7,
    reviews: 22,
  },
  {
    id: "p8",
    title: "Bellevue Apartments",
    location: "MG Road, Central",
    rent: 76000,
    deposit: 152000,
    beds: 2,
    baths: 2,
    area: 1180,
    tags: ["Verified"],
    img: "",
    furnished: true,
    pets: false,
    rating: 4.8,
    reviews: 14,
  },
  {
    id: "p9",
    title: "The Foundry",
    location: "Frazer Town",
    rent: 58000,
    deposit: 116000,
    beds: 2,
    baths: 1,
    area: 920,
    tags: ["New"],
    img: "",
    furnished: false,
    pets: true,
    rating: 4.6,
    reviews: 5,
  },
];

export const GALLERY: string[] = ["", "", "", "", ""];

export const REVIEWS: Review[] = [
  {
    name: "Aarav Mehta",
    duration: "Tenant — 14 months",
    rating: 5,
    text: "Move-in was effortless. The team handled everything from documentation to inventory. The apartment looked exactly like the listing — sometimes that's a rare thing to say.",
    avatar: "",
  },
  {
    name: "Sara Iyer",
    duration: "Tenant — 8 months",
    rating: 5,
    text: "Low deposit was the reason I picked North. Stayed because of how responsive they are. Plumbing issue at 9pm — sorted by next morning.",
    avatar: "",
  },
  {
    name: "Vikram Rao",
    duration: "Tenant — 22 months",
    rating: 4,
    text: "The unit is exceptionally well maintained. Light, quiet, and the building staff are great. Rent collection is one tap.",
    avatar: "",
  },
  {
    name: "Priya Shah",
    duration: "Tenant — 11 months",
    rating: 5,
    text: "Genuinely feels like a managed product, not a side-business. Clean handover, fair walkthrough, refund came on day three.",
    avatar: "",
  },
];
