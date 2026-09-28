import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const VETEMENT_TAILLES = ["S", "M", "L", "XL"];
const CHAUSSURE_POINTURES = ["37", "38", "39", "40"];

interface ProductSeed {
  name: string;
  slug: string;
  description: string;
  categorySlug: string;
  basePrice: number;
  colors: string[];
  sizeType: "vetement" | "chaussure" | "unique";
}

const CATEGORIES = [
  { name: "Robes", slug: "robes", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { name: "Hauts & Chemisiers", slug: "hauts-chemisiers", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" },
  { name: "Jupes & Pantalons", slug: "jupes-pantalons", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" },
  { name: "Chaussures", slug: "chaussures", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80" },
  { name: "Sacs", slug: "sacs", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
  { name: "Bijoux & Accessoires", slug: "bijoux-accessoires", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80" }
];

const PRODUCTS: ProductSeed[] = [
  // Robes
  { name: "Robe wax élégante", slug: "robe-wax-elegante", description: "Robe en tissu wax, coupe fluide, idéale pour les grandes occasions.", categorySlug: "robes", basePrice: 35000, colors: ["Rouge", "Bleu"], sizeType: "vetement" },
  { name: "Robe droite en lin", slug: "robe-droite-lin", description: "Robe droite en lin léger, parfaite pour les journées chaudes.", categorySlug: "robes", basePrice: 27000, colors: ["Beige", "Blanc"], sizeType: "vetement" },
  { name: "Robe portefeuille imprimée", slug: "robe-portefeuille-imprimee", description: "Robe portefeuille à imprimé floral, nouée à la taille.", categorySlug: "robes", basePrice: 32000, colors: ["Vert", "Jaune"], sizeType: "vetement" },
  { name: "Robe de soirée satinée", slug: "robe-soiree-satinee", description: "Robe longue en satin, fente latérale, pour vos soirées habillées.", categorySlug: "robes", basePrice: 48000, colors: ["Noir", "Bordeaux"], sizeType: "vetement" },
  { name: "Robe bodycon moulante", slug: "robe-bodycon-moulante", description: "Robe moulante côtelée, encolure ronde.", categorySlug: "robes", basePrice: 24000, colors: ["Noir", "Camel"], sizeType: "vetement" },

  // Hauts & Chemisiers
  { name: "Chemisier en soie", slug: "chemisier-soie", description: "Chemisier fluide en soie, col cravate.", categorySlug: "hauts-chemisiers", basePrice: 26000, colors: ["Blanc", "Rose poudré"], sizeType: "vetement" },
  { name: "Top croisé sans manches", slug: "top-croise-sans-manches", description: "Top croisé, tissu léger, idéal en journée.", categorySlug: "hauts-chemisiers", basePrice: 15000, colors: ["Blanc", "Noir"], sizeType: "vetement" },
  { name: "Chemise oversize en lin", slug: "chemise-oversize-lin", description: "Chemise ample en lin, à porter ouverte ou nouée.", categorySlug: "hauts-chemisiers", basePrice: 21000, colors: ["Beige", "Bleu ciel"], sizeType: "vetement" },
  { name: "Blouse à volants", slug: "blouse-a-volants", description: "Blouse romantique à manches volantées.", categorySlug: "hauts-chemisiers", basePrice: 19000, colors: ["Blanc", "Terracotta"], sizeType: "vetement" },
  { name: "Débardeur côtelé", slug: "debardeur-cotele", description: "Débardeur basique côtelé, coupe ajustée.", categorySlug: "hauts-chemisiers", basePrice: 9000, colors: ["Noir", "Blanc", "Gris"], sizeType: "vetement" },

  // Jupes & Pantalons
  { name: "Jupe plissée midi", slug: "jupe-plissee-midi", description: "Jupe plissée mi-longue, taille haute.", categorySlug: "jupes-pantalons", basePrice: 23000, colors: ["Terracotta", "Vert bouteille"], sizeType: "vetement" },
  { name: "Pantalon large taille haute", slug: "pantalon-large-taille-haute", description: "Pantalon fluide coupe large, très confortable.", categorySlug: "jupes-pantalons", basePrice: 25000, colors: ["Noir", "Beige"], sizeType: "vetement" },
  { name: "Jupe droite en cuir synthétique", slug: "jupe-droite-cuir-synthetique", description: "Jupe droite mi-longue en simili cuir.", categorySlug: "jupes-pantalons", basePrice: 27000, colors: ["Noir"], sizeType: "vetement" },
  { name: "Jean taille haute évasé", slug: "jean-taille-haute-evase", description: "Jean évasé taille haute, coupe flatteuse.", categorySlug: "jupes-pantalons", basePrice: 29000, colors: ["Bleu délavé", "Noir"], sizeType: "vetement" },
  { name: "Short tailleur", slug: "short-tailleur", description: "Short habillé assorti aux vestes tailleur.", categorySlug: "jupes-pantalons", basePrice: 18000, colors: ["Beige", "Noir"], sizeType: "vetement" },

  // Chaussures
  { name: "Escarpins talon fin", slug: "escarpins-talon-fin", description: "Escarpins chic en simili cuir, talon 8cm.", categorySlug: "chaussures", basePrice: 28000, colors: ["Noir", "Beige"], sizeType: "chaussure" },
  { name: "Sandales à talon compensé", slug: "sandales-talon-compense", description: "Sandales d'été, talon compensé confortable.", categorySlug: "chaussures", basePrice: 24000, colors: ["Camel", "Doré"], sizeType: "chaussure" },
  { name: "Ballerines souples", slug: "ballerines-souples", description: "Ballerines confortables pour un usage quotidien.", categorySlug: "chaussures", basePrice: 17000, colors: ["Noir", "Rouge"], sizeType: "chaussure" },
  { name: "Bottines à lacets", slug: "bottines-a-lacets", description: "Bottines robustes à lacets, semelle épaisse.", categorySlug: "chaussures", basePrice: 32000, colors: ["Noir", "Marron"], sizeType: "chaussure" },
  { name: "Mules à talon carré", slug: "mules-talon-carre", description: "Mules tendance, talon carré 6cm.", categorySlug: "chaussures", basePrice: 23000, colors: ["Beige", "Noir"], sizeType: "chaussure" },

  // Sacs
  { name: "Sac à main terracotta", slug: "sac-a-main-terracotta", description: "Sac à main structuré, coloris terracotta, bandoulière amovible.", categorySlug: "sacs", basePrice: 22000, colors: ["Terracotta"], sizeType: "unique" },
  { name: "Sac cabas en toile", slug: "sac-cabas-toile", description: "Grand cabas en toile résistante, pratique au quotidien.", categorySlug: "sacs", basePrice: 16000, colors: ["Beige", "Kaki"], sizeType: "unique" },
  { name: "Pochette de soirée pailletée", slug: "pochette-soiree-pailletee", description: "Pochette compacte à paillettes, chaînette dorée.", categorySlug: "sacs", basePrice: 14000, colors: ["Doré", "Argenté"], sizeType: "unique" },
  { name: "Sac bandoulière matelassé", slug: "sac-bandouliere-matelasse", description: "Sac matelassé façon cuir, chaîne épaule.", categorySlug: "sacs", basePrice: 26000, colors: ["Noir", "Blanc"], sizeType: "unique" },
  { name: "Sac seau en cuir", slug: "sac-seau-cuir", description: "Sac seau en cuir véritable, cordon coulissant.", categorySlug: "sacs", basePrice: 34000, colors: ["Marron", "Noir"], sizeType: "unique" },

  // Bijoux & Accessoires
  { name: "Collier chaîne dorée", slug: "collier-chaine-doree", description: "Collier fin plaqué or, longueur ajustable.", categorySlug: "bijoux-accessoires", basePrice: 8000, colors: ["Doré"], sizeType: "unique" },
  { name: "Boucles d'oreilles créoles", slug: "boucles-oreilles-creoles", description: "Créoles larges, finition dorée brossée.", categorySlug: "bijoux-accessoires", basePrice: 6500, colors: ["Doré", "Argenté"], sizeType: "unique" },
  { name: "Ceinture large tressée", slug: "ceinture-large-tressee", description: "Ceinture tressée pour souligner la taille.", categorySlug: "bijoux-accessoires", basePrice: 9500, colors: ["Marron", "Noir"], sizeType: "unique" },
  { name: "Foulard imprimé wax", slug: "foulard-imprime-wax", description: "Foulard carré en tissu wax, à porter en cheveux ou au cou.", categorySlug: "bijoux-accessoires", basePrice: 7000, colors: ["Multicolore"], sizeType: "unique" },
  { name: "Lunettes de soleil ovales", slug: "lunettes-soleil-ovales", description: "Lunettes de soleil monture ovale, protection UV400.", categorySlug: "bijoux-accessoires", basePrice: 12000, colors: ["Noir", "Écaille"], sizeType: "unique" }
];

function slugPart(text: string) {
  return text
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function main() {
  const adminPassword = await bcrypt.hash("Admin1234!", 10);
  await prisma.user.upsert({
    where: { email: "admin@boutique.ga" },
    update: {},
    create: {
      name: "Administratrice",
      email: "admin@boutique.ga",
      passwordHash: adminPassword,
      role: "ADMIN"
    }
  });

  const categoryMap = new Map<string, string>();
  for (const cat of CATEGORIES) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { image: cat.image ?? null },
      create: { name: cat.name, slug: cat.slug, image: cat.image ?? null }
    });
    categoryMap.set(cat.slug, created.id);
  }

  let count = 0;
  for (const p of PRODUCTS) {
    const sizes =
      p.sizeType === "vetement" ? VETEMENT_TAILLES : p.sizeType === "chaussure" ? CHAUSSURE_POINTURES : ["Unique"];

    const variants: { size: string; color: string; sku: string; stock: number }[] = [];
    // Génère 1 variante par couleur, sur une sélection de tailles pour rester réaliste
    for (const color of p.colors) {
      const taillesRetenues = p.sizeType === "unique" ? ["Unique"] : sizes.slice(0, 3);
      for (const size of taillesRetenues) {
        variants.push({
          size,
          color,
          sku: `${slugPart(p.slug)}-${slugPart(size)}-${slugPart(color)}`,
          stock: Math.floor(Math.random() * 10) + 1
        });
      }
    }

    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        description: p.description,
        categoryId: categoryMap.get(p.categorySlug)!,
        basePrice: p.basePrice,
        images: [`/images/${p.slug}-1.jpg`],
        variants: { create: variants }
      }
    });
    count++;
  }

  console.log(`Seed terminé. ${count} produits créés/mis à jour sur ${CATEGORIES.length} catégories.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
