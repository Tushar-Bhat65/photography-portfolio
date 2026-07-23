export interface FeedItem {
  id: string;
  title: string;
  tag: string;
  image?: string;
  video?: string;
  poster?: string;
  href: string;
  orientation: "portrait" | "landscape";
   imagePosition?: string;
}

export interface FeedSection {
  id: string;
  label: string;
  viewAllHref: string;
  items: FeedItem[];
}

export const sections: FeedSection[] = [
  {
    id: "events",
    label: "Event Coverage",
    viewAllHref: "/events",
    items: [
      { id: "e1", title: "Spotlight Solo Performance", tag: "EVT — 001", image: "/images/events/event1.jpg", href: "/events", orientation: "portrait" },
      { id: "e2", title: "Traditional Haldi", tag: "EVT — 002", image: "/images/events/event2.jpg", href: "/events", orientation: "portrait", imagePosition: "center top" },
      { id: "e3", title: "Podium & Keynote", tag: "EVT — 003", image: "/images/events/event3.jpg", href: "/events", orientation: "portrait" },
      { id: "e4", title: "Silhouetted Stage Performance", tag: "EVT — 004", image: "/images/events/event4.jpg", href: "/events", orientation: "portrait" },
      { id: "e5", title: "House Warming Pooja", tag: "EVT — 005", image: "/images/events/event5.jpg", href: "/events", orientation: "portrait" },
      { id: "e6", title: "Wide Stage Shot", tag: "EVT — 006", image: "/images/events/event6.jpg", href: "/events", orientation: "landscape" },
    ],
  },
  {
    id: "best-work",
    label: "My Best Work",
    viewAllHref: "/best-work",
    items: [
      { id: "b1", title: "Waterway Horizon", tag: "BST — 001", image: "/images/bestwork/best1.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b2", title: "Serene Forest", tag: "BST — 002", image: "/images/bestwork/best2.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b3", title: "Urban Nightscape", tag: "BST — 003", image: "/images/bestwork/best3.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b4", title: "Silhouette Aura", tag: "BST — 004", image: "/images/bestwork/best4.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b5", title: "Pet Portrait", tag: "BST — 005", image: "/images/bestwork/best5.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b6", title: "Weathered Wood", tag: "BST — 006", image: "/images/bestwork/best6.jpg", href: "/best-work", orientation: "portrait" },
    ],
  },
  {
    id: "portraits",
    label: "Portraits",
    viewAllHref: "/portraits",
    items: [
      { id: "p1", title: "Sunlit Outdoor Portrait", tag: "PRT — 001", image: "/images/portraits/portrait1.jpg", href: "/portraits", orientation: "portrait" },
      { id: "p2", title: "Creative Portrait", tag: "PRT — 002", image: "/images/portraits/portrait2.jpg", href: "/portraits", orientation: "portrait" },
      { id: "p3", title: "Editorial Male Profile", tag: "PRT — 003", image: "/images/portraits/portrait3.jpg", href: "/portraits", orientation: "portrait" },
      { id: "p4", title: "Ethnic Portrait", tag: "PRT — 004", image: "/images/portraits/portrait4.jpg", href: "/portraits", orientation: "portrait" },
    ],
  },
  {
    id: "product",
    label: "Product Photography",
    viewAllHref: "/product",
    items: [
      { id: "pr1", title: "Dew-Fresh", tag: "PRD — 001", image: "/images/product/product1.jpg", href: "/product", orientation: "landscape" },
      { id: "pr2", title: "Tech Macro", tag: "PRD — 002", image: "/images/product/product2.jpg", href: "/product", orientation: "landscape" },
      { id: "pr3", title: "Timepiece", tag: "PRD — 003", image: "/images/product/product3.jpg", href: "/product", orientation: "landscape" },
      { id: "pr4", title: "Roman Numeral Watch", tag: "PRD — 004", image: "/images/product/product4.jpg", href: "/product", orientation: "landscape" },
    ],
  },
  {
    id: "videography",
    label: "Videography",
    viewAllHref: "/videography",
    items: [
      { id: "v1", title: "Fashion Reel", tag: "FLM — 001", video: "/images/videography/fashion.mp4", poster: "/images/videography/fashion_poster.png", href: "/videography", orientation: "landscape" },
      { id: "v2", title: "Literature Club Scene", tag: "FLM — 002", video: "/images/videography/lit_sc.mp4", poster: "/images/videography/lit_sc_poster.png", href: "/videography", orientation: "portrait" },
      { id: "v3", title: "Cinematic Edit", tag: "FLM — 003", video: "/images/videography/media_new.mp4", poster: "/images/videography/media_new_poster.png", href: "/videography", orientation: "landscape" },
    ],
  },
];