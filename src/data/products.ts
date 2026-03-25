export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  price: number;
  category: Category;
  categoryLabel: string;
  dimensions?: string;
  weight: number; // in lbs, for shipping calculation
  /* Placeholder image from Unsplash — REPLACE with real product photos */
  image: string;
  images: string[];
  inStock: boolean;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  label: string;
  price: number;
}

export type Category = "antennas" | "pyramids" | "handwear" | "drinkware" | "accessories";

export const CATEGORIES: Record<Category, { label: string; filterKey: string; description: string }> = {
  antennas: { label: "Antennas", filterKey: "ant", description: "Copper electroculture antennas for gardens" },
  pyramids: { label: "Pyramids", filterKey: "pyr", description: "Copper pyramid structures" },
  handwear: { label: "Handwear", filterKey: "hand", description: "Spiraled copper rings and bracelets" },
  drinkware: { label: "Drinkware", filterKey: "drink", description: "Copper mugs and water bottles" },
  accessories: { label: "Accessories", filterKey: "acc", description: "EMF shields and copper tools" },
};

export const products: Product[] = [
  // ── Antennas ──────────────────────────────────────────
  {
    id: "ant-single-crystal",
    slug: "single-crystal-electroculture-antenna",
    name: "Single Crystal Electroculture Antenna",
    tagline: "Start simple. Start here.",
    description: "One crystal. One copper rod. One purpose. This is the entry point to electroculture — stake it in your garden bed and let atmospheric energy do what it does. No complicated setup, no learning curve. Just copper and crystal doing quiet work in the soil.",
    features: ["Single genuine crystal", "Solid copper construction", "Easy garden stake design", "Perfect for beginners"],
    price: 20,
    category: "antennas",
    categoryLabel: "Antennas",
    weight: 0.3,
    /* REPLACE: Real product photo of the single crystal antenna */
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "ant-multi-crystal",
    slug: "multi-crystal-electroculture-antenna",
    name: "Multi Crystal Electroculture Antenna",
    tagline: "More crystals. More coverage.",
    description: "Multiple crystals set along a copper rod for broader energy distribution across your garden bed. Same simple design philosophy — stake and grow — but with expanded crystal coverage for larger plots or raised beds.",
    features: ["Multiple genuine crystals", "Broader energy distribution", "Solid copper construction", "Garden stake design"],
    price: 30,
    category: "antennas",
    categoryLabel: "Antennas",
    weight: 0.4,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "ant-7-chakra",
    slug: "7-chakra-stone-spiraled-copper-antenna",
    name: "7 Chakra Stone Spiraled Copper Tubing Antenna",
    tagline: "Seven stones. Full spectrum.",
    description: "Seven chakra stones set into spiraled copper tubing. Each stone corresponds to an energy center — from root to crown. The spiral copper tubing amplifies atmospheric energy while the stones bring balance to the soil and the space around it. This is electroculture meets intentional energy work.",
    features: ["7 genuine chakra stones", "Spiraled copper tubing", "Full spectrum energy alignment", "Handcrafted spiral pattern"],
    price: 175,
    category: "antennas",
    categoryLabel: "Antennas",
    weight: 1.2,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1518882575940-6b5e8a0b6a22?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518882575940-6b5e8a0b6a22?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "ant-quartz-spiraled",
    slug: "quartz-continuous-spiraled-copper-antenna",
    name: "Quartz Continuous Spiraled Copper Antenna",
    tagline: "Continuous spiral. Continuous energy.",
    description: "A single continuous spiral of copper wire wrapped around a quartz crystal core. The unbroken spiral creates a consistent energy field from base to tip. This design draws from the principle that a continuous copper coil acts as an antenna for atmospheric electrical current.",
    features: ["Genuine quartz crystal core", "Continuous copper spiral — no breaks", "Strong atmospheric energy collection", "Garden or indoor use"],
    price: 125,
    category: "antennas",
    categoryLabel: "Antennas",
    weight: 0.9,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "ant-quartz-obsidian",
    slug: "quartz-obsidian-combination-spiraled-copper-antenna",
    name: "Quartz and Obsidian Combination Spiraled Copper Antenna",
    tagline: "Two stones. Dual purpose.",
    description: "Quartz amplifies. Obsidian protects. Together in spiraled copper, they create a balanced electroculture tool that works both as an atmospheric energy collector and a grounding element. The dual-crystal approach is for growers who want to address both growth and soil stability.",
    features: ["Genuine quartz and obsidian crystals", "Spiraled copper construction", "Dual energy approach: amplify and ground", "Handcrafted with intention"],
    price: 150,
    category: "antennas",
    categoryLabel: "Antennas",
    weight: 1.0,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "ant-straight-tubed",
    slug: "straight-tubed-copper-antenna",
    name: "Straight Tubed Copper Antenna",
    tagline: "Clean. Simple. Copper.",
    description: "No spirals, no crystals — just a solid copper tube designed to collect atmospheric energy and channel it into your soil. This is the stripped-down, no-frills electroculture antenna for people who want copper in the ground without the extras. Works well in rows or grid patterns across larger garden areas.",
    features: ["Solid copper tubing", "No-frills design", "Ideal for grid placement", "Works in any garden bed"],
    price: 60,
    category: "antennas",
    categoryLabel: "Antennas",
    weight: 0.7,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "ant-quartz-spiraled-pyramid",
    slug: "electroculture-quartz-spiraled-pyramid",
    name: "Electroculture Quartz Spiraled Pyramid",
    tagline: "Pyramid power. Copper soul.",
    description: "A 9x9 inch copper pyramid with a spiraled quartz crystal core. The pyramid shape concentrates atmospheric energy into a focused point, while the spiraled quartz amplifies the signal. Place it in the center of a garden bed or use it indoors to energize a growing area.",
    features: ["9\" x 9\" copper base", "Spiraled quartz crystal", "Concentrated energy focus", "Indoor or outdoor use"],
    price: 150,
    category: "antennas",
    categoryLabel: "Antennas",
    dimensions: "9\" x 9\" base",
    weight: 1.5,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "ant-large-pyramid",
    slug: "large-quartz-crystal-pyramid-electroculture-antenna",
    name: "Large Quartz Crystal Pyramid Electroculture Antenna",
    tagline: "Go big. Grow bigger.",
    description: "The full-size build. A large copper pyramid antenna with genuine quartz crystal, designed for serious growers covering substantial garden areas. The larger surface area collects more atmospheric energy, and the quartz crystal amplifies it into the surrounding soil. This is the centerpiece.",
    features: ["Large-format copper pyramid", "Genuine quartz crystal", "Maximum atmospheric energy collection", "Statement piece for any garden"],
    price: 200,
    category: "antennas",
    categoryLabel: "Antennas",
    weight: 2.0,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "ant-hanging-center",
    slug: "hanging-center-stone-antenna",
    name: "Hanging Center Stone Antenna",
    tagline: "Suspended energy. Constant flow.",
    description: "A copper antenna with a suspended crystal at its center. The hanging stone creates a pendulum effect, responding to atmospheric currents and energy shifts. Designed for greenhouse use, indoor gardens, or any covered growing space where a vertical hang works better than a ground stake.",
    features: ["Suspended center crystal", "Pendulum-responsive design", "Ideal for greenhouses & indoor gardens", "Handcrafted copper framework"],
    price: 175,
    category: "antennas",
    categoryLabel: "Antennas",
    weight: 1.3,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },

  // ── Pyramids ──────────────────────────────────────────
  {
    id: "pyr-counter",
    slug: "counter-pyramid",
    name: "Counter Pyramid",
    tagline: "Tabletop copper. Kitchen-ready.",
    description: "A 12x12 inch copper pyramid built for countertops, windowsills, and indoor spaces. Place it near potted herbs, on a kitchen counter over produce, or in any space where you want to introduce copper energy without going outdoors. Clean lines, solid construction, compact enough to fit anywhere.",
    features: ["12\" x 12\" copper construction", "Tabletop-friendly size", "Indoor use — kitchen, windowsill, shelf", "Solid copper — no plating"],
    price: 75,
    category: "pyramids",
    categoryLabel: "Pyramids",
    dimensions: "12\" x 12\"",
    weight: 1.8,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "pyr-large-quartz",
    slug: "large-quartz-sphere-pyramid",
    name: "Large Quartz Sphere Pyramid",
    tagline: "The centerpiece. Built to command a garden.",
    description: "A 16x16 inch copper pyramid crowned with a genuine quartz sphere. This is the flagship build — hours of handwork in every joint, every angle, every bend. The quartz sphere at the apex focuses and amplifies atmospheric energy downward through the pyramid structure. For growers who are all in.",
    features: ["16\" x 16\" copper construction", "Genuine quartz sphere apex", "Maximum energy concentration", "Hours of handcrafted construction"],
    price: 500,
    category: "pyramids",
    categoryLabel: "Pyramids",
    dimensions: "16\" x 16\"",
    weight: 4.5,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1518882575940-6b5e8a0b6a22?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518882575940-6b5e8a0b6a22?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },

  // ── Handwear ──────────────────────────────────────────
  {
    id: "hand-palm-ring",
    slug: "spiraled-copper-palm-ring",
    name: "Spiraled Copper Palm Ring",
    tagline: "Wear the copper. Feel the difference.",
    description: "A spiraled copper ring shaped to sit across your palm. Worn during gardening, meditation, or daily life — the copper rests against your skin, and you feel it working. Each ring is hand-spiraled, so no two are exactly alike.",
    features: ["Hand-spiraled copper", "Palm-width design", "Each one unique", "Wear during gardening or daily life"],
    price: 15,
    category: "handwear",
    categoryLabel: "Handwear",
    weight: 0.1,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "hand-reiki-bracelet",
    slug: "reiki-spiraled-bracelet",
    name: "Reiki Spiraled Bracelet",
    tagline: "Copper on your wrist. Energy in your hands.",
    description: "A spiraled copper bracelet designed for Reiki practitioners and energy workers. The spiral pattern follows traditional energy flow principles, and the copper naturally conducts. Whether you practice Reiki or just like how copper feels on your skin, this bracelet was built with intention.",
    features: ["Spiraled copper design", "Reiki-aligned energy flow pattern", "Adjustable fit", "Handcrafted — each one unique"],
    price: 20,
    category: "handwear",
    categoryLabel: "Handwear",
    weight: 0.15,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "hand-tensor-ring",
    slug: "tensor-ring",
    name: "Tensor Ring",
    tagline: "Sacred geometry. Solid copper.",
    description: "Tensor rings are closed loops of copper wire cut to specific cubit lengths. When the ends are twisted together and the loop is closed, it creates a measurable energy field within the ring. Place one around a water glass, a plant pot, or wear it. Sizes from 2 inches to 12 inches — pick the one that fits your purpose.",
    features: ["Cubit-length copper wire", "Closed-loop tensor technology", "Available in 2\" to 12\" diameter", "For water, plants, or personal use"],
    price: 15,
    category: "handwear",
    categoryLabel: "Handwear",
    weight: 0.2,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
    ],
    inStock: true,
    variants: [
      { id: "tensor-2", label: "2\" Diameter", price: 15 },
      { id: "tensor-4", label: "4\" Diameter", price: 30 },
      { id: "tensor-6", label: "6\" Diameter", price: 45 },
      { id: "tensor-8", label: "8\" Diameter", price: 60 },
      { id: "tensor-10", label: "10\" Diameter", price: 75 },
      { id: "tensor-12", label: "12\" Diameter", price: 90 },
    ],
  },

  // ── Drinkware ─────────────────────────────────────────
  {
    id: "drink-bottle",
    slug: "copper-water-bottle-30oz",
    name: "30oz Copper Water Bottle",
    tagline: "Drink from copper. Like they used to.",
    description: "A 30-ounce pure copper water bottle. Copper has been used to store and purify water for thousands of years — Ayurvedic tradition calls it a \"tamra jal\" vessel. Fill it at night, drink in the morning. The copper naturally ionizes the water over time. Heavy, solid, and built to last.",
    features: ["30oz capacity", "Pure copper construction", "Traditional water purification", "Naturally antimicrobial surface"],
    price: 40,
    category: "drinkware",
    categoryLabel: "Drinkware",
    weight: 1.0,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "drink-mug",
    slug: "copper-mug-10oz",
    name: "10oz Copper Mug",
    tagline: "Morning copper. Every morning.",
    description: "A 10-ounce copper mug for your morning water, tea, or whatever you start the day with. The copper keeps your drink cool longer and adds trace minerals over time. Solid construction, comfortable handle, looks good on any counter.",
    features: ["10oz capacity", "Pure copper construction", "Naturally cool to the touch", "Comfortable handle"],
    price: 25,
    category: "drinkware",
    categoryLabel: "Drinkware",
    weight: 0.6,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },

  // ── Accessories ───────────────────────────────────────
  {
    id: "acc-emf-shield-small",
    slug: "emf-radiation-shield-20x40",
    name: "EMF RF/WIFI/LF Radiation Shield",
    tagline: "Block what doesn't belong.",
    description: "A 20x40 inch copper mesh shield designed to block EMF, RF, WiFi, and low-frequency radiation. Hang it behind your router, place it behind your bed, or use it anywhere you want to reduce electromagnetic exposure. Real copper mesh — not a gimmick fabric with a fancy name.",
    features: ["20\" x 40\" coverage", "Blocks EMF, RF, WiFi, LF radiation", "Pure copper mesh construction", "Hang, mount, or lay flat"],
    price: 25,
    category: "accessories",
    categoryLabel: "Accessories",
    dimensions: "20\" x 40\"",
    weight: 0.8,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
  {
    id: "acc-emf-shield-large",
    slug: "emf-radiation-shield-30x40",
    name: "EMF RF/WIFI/LF Radiation Shield — Large",
    tagline: "More coverage. Same protection.",
    description: "The larger 30x40 inch version of our copper mesh EMF shield. More surface area for bigger spaces — behind a desk setup, across a headboard, or covering a larger section of wall. Same pure copper mesh, same real protection.",
    features: ["30\" x 40\" coverage", "Blocks EMF, RF, WiFi, LF radiation", "Pure copper mesh construction", "Larger format for bigger spaces"],
    price: 35,
    category: "accessories",
    categoryLabel: "Accessories",
    dimensions: "30\" x 40\"",
    weight: 1.2,
    /* REPLACE: Real product photo */
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=750&fit=crop",
    ],
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getAllCategories(): Category[] {
  return Object.keys(CATEGORIES) as Category[];
}
