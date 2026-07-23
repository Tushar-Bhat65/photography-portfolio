export interface FeedItem {
  id: string;
  title: string;
  tag: string;
  alt: string;
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
      { id: "e1", title: "Spotlight Solo Performance", tag: "EVT — 001", alt: "Solo stage performance photography by event photographer near me", image: "/images/events/event1.jpg", href: "/events", orientation: "portrait" },
      { id: "e2", title: "Traditional Haldi", tag: "EVT — 002", alt: "Traditional Haldi ceremony photography by Indian wedding photographer", image: "/images/events/event2.jpg", href: "/events", orientation: "portrait", imagePosition: "center top" },
      { id: "e3", title: "Podium & Keynote", tag: "EVT — 003", alt: "Keynote speaker podium photography, corporate event photographer India", image: "/images/events/event3.jpg", href: "/events", orientation: "portrait" },
      { id: "e4", title: "Silhouetted Stage Performance", tag: "EVT — 004", alt: "Silhouette stage performance photography, cultural fest event coverage", image: "/images/events/event4.jpg", href: "/events", orientation: "portrait" },
      { id: "e5", title: "House Warming Pooja", tag: "EVT — 005", alt: "House warming pooja ceremony photography, traditional event photographer India", image: "/images/events/event5.jpg", href: "/events", orientation: "portrait" },
      { id: "e6", title: "Wide Stage Shot", tag: "EVT — 006", alt: "Wide angle stage event photography by event photographer near me", image: "/images/events/event6.jpg", href: "/events", orientation: "landscape" },
    ],
  },
  {
    id: "best-work",
    label: "My Best Work",
    viewAllHref: "/best-work",
    items: [
      { id: "b1", title: "Waterway Horizon", tag: "BST — 001", alt: "Waterway landscape photography, best photographer portfolio India", image: "/images/bestwork/best1.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b2", title: "Serene Forest", tag: "BST — 002", alt: "Serene forest landscape photography by professional photographer", image: "/images/bestwork/best2.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b3", title: "Urban Nightscape", tag: "BST — 003", alt: "Urban nightscape photography by city night photographer India", image: "/images/bestwork/best3.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b4", title: "Silhouette Aura", tag: "BST — 004", alt: "Creative silhouette photography, artistic photographer portfolio India", image: "/images/bestwork/best4.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b5", title: "Pet Portrait", tag: "BST — 005", alt: "Pet portrait photography by professional photographer near me", image: "/images/bestwork/best5.jpg", href: "/best-work", orientation: "portrait" },
      { id: "b6", title: "Weathered Wood", tag: "BST — 006", alt: "Weathered wood texture fine art photography by Indian photographer", image: "/images/bestwork/best6.jpg", href: "/best-work", orientation: "portrait" },
    ],
  },
  {
    id: "portraits",
    label: "Portraits",
    viewAllHref: "/portraits",
    items: [
      { id: "p1", title: "Sunlit Outdoor Portrait", tag: "PRT — 001", alt: "Natural light outdoor portrait photographer near me", image: "/images/portraits/portrait1.jpg", href: "/portraits", orientation: "portrait" },
      { id: "p2", title: "Creative Portrait", tag: "PRT — 002", alt: "Creative portrait photoshoot by portrait photographer India", image: "/images/portraits/portrait2.jpg", href: "/portraits", orientation: "portrait" },
      { id: "p3", title: "Editorial Male Profile", tag: "PRT — 003", alt: "Editorial male portrait photography by professional portrait photographer", image: "/images/portraits/portrait3.jpg", href: "/portraits", orientation: "portrait" },
      { id: "p4", title: "Ethnic Portrait", tag: "PRT — 004", alt: "Ethnic traditional attire portrait photography, portrait photographer India", image: "/images/portraits/portrait4.jpg", href: "/portraits", orientation: "portrait" },
    ],
  },
  {
    id: "product",
    label: "Product Photography",
    viewAllHref: "/product",
    items: [
      { id: "pr1", title: "Dew-Fresh", tag: "PRD — 001", alt: "Fresh product photography with dew droplets, product photographer India", image: "/images/product/product1.jpg", href: "/product", orientation: "landscape" },
      { id: "pr2", title: "Tech Macro", tag: "PRD — 002", alt: "Macro tech product photography by product photographer near me", image: "/images/product/product2.jpg", href: "/product", orientation: "landscape" },
      { id: "pr3", title: "Timepiece", tag: "PRD — 003", alt: "Watch product photography by professional product photographer India", image: "/images/product/product3.jpg", href: "/product", orientation: "landscape" },
      { id: "pr4", title: "Roman Numeral Watch", tag: "PRD — 004", alt: "Luxury watch product photography, product photographer India", image: "/images/product/product4.jpg", href: "/product", orientation: "landscape" },
    ],
  },
  {
    id: "videography",
    label: "Videography",
    viewAllHref: "/videography",
    items: [
      { id: "v1", title: "Fashion Reel", tag: "FLM — 001", alt: "Fashion videography reel by cinematic videographer India", video: "/images/videography/fashion.mp4", poster: "/images/videography/fashion_poster.png", href: "/videography", orientation: "landscape" },
      { id: "v2", title: "Literature Club Scene", tag: "FLM — 002", alt: "College literature club cinematic video shoot by videographer near me", video: "/images/videography/lit_sc.mp4", poster: "/images/videography/lit_sc_poster.png", href: "/videography", orientation: "portrait" },
      { id: "v3", title: "Cinematic Edit", tag: "FLM — 003", alt: "Cinematic video editing showcase by videographer India", video: "/images/videography/media_new.mp4", poster: "/images/videography/media_new_poster.png", href: "/videography", orientation: "landscape" },
    ],
  },
];