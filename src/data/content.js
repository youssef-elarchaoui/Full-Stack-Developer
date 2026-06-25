// ---------------------------------------------------------------------------
// Toutes les données modifiables du site sont ici. Échangez les noms,
// numéros et liens sans toucher au code des composants.
// ---------------------------------------------------------------------------

export const brand = {
  name: "Youssef El Archaoui",
  role: "Développeur Full-Stack",
  tagline: "Création de sites web pour restaurants, salons et commerces locaux",
  email: "elarchaouiyoussef15@gmail.com",
  github: "https://github.com/youssef-elarchaoui",
  linkedin: "www.linkedin.com/in/youssef-el-archaoui-aa3703389",
  twitter: "https://x.com",
  available: true,
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "Processus", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Disponible pour de nouveaux projets",
  headline: ["Transformez votre activité en", "machine à vendre 24h/24"],
  sub: "Vos clients vous cherchent en ce moment même — sur Google à minuit, sur Instagram entre deux rendez-vous, à un feu rouge en décidant où manger. Un site web conçu pour convertir transforme cet instant en réservation, commande ou appel. Même pendant que vous dormez.",
  primaryCta: { label: "Demander un devis", href: "#contact" },
  secondaryCta: { label: "Voir mes réalisations", href: "#portfolio" },
  stats: [
    { value: "30+", label: "sites livrés" },
    { value: "1 sem.", label: "délai moyen" },
    { value: "100%", label: "adapté mobile" },
  ],
};


export const whyWebsite = {
  eyebrow: "L'enjeu",
  title: "Pourquoi votre entreprise a besoin d'un site web ?",
  description:
    "Vos clients vous cherchent déjà en ligne. Voici ce qu'un site bien pensé change concrètement pour votre activité.",
  items: [
    {
      icon: "Search",
      title: "Plus de visibilité",
      description: "Soyez visible sur Google et permettez à vos clients de vous trouver facilement.",
    },
    {
      icon: "Clock",
      title: "Disponible 24h/24",
      description: "Votre entreprise reste accessible à tout moment grâce à votre site web.",
    },
    {
      icon: "Sparkles",
      title: "Image professionnelle",
      description: "Renforcez la confiance de vos clients avec un design moderne.",
    },
    {
      icon: "MessageSquare",
      title: "Plus de demandes",
      description: "Recevez davantage d'appels, de messages et de demandes de devis.",
    },
  ],
};
export const services = [
  {
    icon: "Zap",
    title: "Pages de lancement",
    description:
      "Une page unique et ciblée conçue pour un seul objectif — transformer les visiteurs en leads. Idéal pour les promotions, les nouvelles ouvertures ou tester rapidement une offre.",
    benefits: [
      "En ligne en quelques jours, pas en semaines",
      "Un seul appel à l'action clair",
      "Conçue pour charger rapidement sur mobile",
    ],
    price: "À partir de 1 000 DH", // ✅ إضافة السعر
  },
  {
    icon: "Store",
    title: "Sites web professionnels",
    description:
      "Un véritable espace numérique pour votre activité — menu, services, galerie, horaires et localisation, tout en un seul site que vos clients peuvent consulter en toute confiance.",
    benefits: [
      "Plusieurs pages, structure complète",
      "Vous pouvez le mettre à jour vous-même",
      "Intégration de Maps, horaires et réservation",
    ],
    price: "À partir de 2 000 DH", // ✅ إضافة السعر
  },
  {
    icon: "LayoutGrid",
    title: "Applications web sur mesure",
    description:
      "Au-delà d'un site web : systèmes de réservation, outils internes et portails clients conçus autour du fonctionnement réel de votre activité au quotidien.",
    benefits: [
      "Adapté à votre flux de travail",
      "Évolue avec votre activité",
      "Sécurisé avec identifiants et bases de données",
    ],
    price: "Sur devis", // ✅ إضافة السعر
  },
];
export const pricing = {
  eyebrow: "Tarifs",
  title: "Des solutions adaptées à votre budget",
  description: "Chaque projet est différent. Voici un point de départ — un devis précis vous sera toujours proposé avant de commencer.",
  plans: [
    {
      title: "Landing Page",
      price: "À partir de 1 000 MAD",
      featured: false,
      features: ["1 page, design sur-mesure", "Optimisée pour mobile", "Mise en ligne rapide"],
    },
    {
      title: "Site Vitrine",
      price: "À partir de 2 500 MAD",
      featured: true,
      features: ["Jusqu'à 5 pages", "Design responsive complet", "Référencement de base (SEO)"],
    },
    {
      title: "Application Web",
      price: "Sur devis",
      featured: false,
      features: ["Fonctionnalités personnalisées", "Base de données & connexions", "Architecture évolutive"],
    },
  ],
};

export const whyChooseMe = [
  {
    icon: "Rocket",
    title: "Livraison rapide",
    description: "La plupart des projets sont lancés en 1 à 3 semaines, pas en plusieurs mois. Vous savez toujours ce qui vous attend.",
  },
  {
    icon: "Sparkles",
    title: "Design moderne",
    description: "Des mises en page épurées et actuelles qui donnent à une petite entreprise l'apparence d'une grande.",
  },
  {
    icon: "Search",
    title: "Optimisé pour le référencement",
    description: "Conçu pour que Google puisse vous trouver — pages structurées, temps de chargement rapide, métadonnées complètes.",
  },
  {
    icon: "Smartphone",
    title: "Adapté au mobile",
    description: "La plupart de vos clients vous découvrent sur téléphone. Votre site est d'abord conçu pour eux.",
  },
  {
    icon: "ShieldCheck",
    title: "Sécurisé et évolutif",
    description: "Hébergement moderne, HTTPS par défaut, et un code qui ne s'effondre pas lorsque vous vous développez.",
  },
];

export const portfolio = [
  {
    title: "Casa Bella",
    category: "Page de lancement - Restaurant",
    description: "Un site d'une page pour un restaurant italien familial, conçu autour des réservations et du menu du soir.",
    tech: ["React", "Tailwind", "Framer Motion"],
    gradient: "from-amber-500/30 via-orange-500/10 to-transparent",
    demoUrl: "https://www.imperfetto.fr/",
    githubUrl: "https://www.imperfetto.fr/",
  },
  {
    title: "Wanderlust Travel Co.",
    category: "Plateforme de réservation",
    description: "Un site complet d'agence de voyage avec navigation des forfaits, demandes d'itinéraires et formulaire de devis personnalisé.",
    tech: ["React.js", "Node.js", "NoSQL"],
    gradient: "from-cyan-500/30 via-sky-500/10 to-transparent",
    demoUrl: "trravelmmate.netlify.app",
    githubUrl: "trravelmmate.netlify.app",
  },
  {
    title: "Glow Beauty Studio",
    category: "Application de réservation - Salon",
    description: "Prise de rendez-vous en ligne avec disponibilité des coiffeurs, tarifs des services et rappels automatiques.",
    tech: ["React", "Laravel", "Stripe"],
    gradient: "from-rose-500/30 via-pink-500/10 to-transparent",
    demoUrl: "https://www.planity.com/",
    githubUrl: "https://www.planity.com/",
  },
  {
    title: "Ironclad Fitness",
    category: "Site web professionnel",
    description: "Un site pour salle de sport axé sur les abonnements, avec planning des cours, profils des coachs et offre d'essai pour collecter des leads.",
    tech: ["React", "Tailwind", "Pyhton"],
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
    demoUrl: "https://www.orangetheory.com/en-us",
    githubUrl: "https://www.orangetheory.com/en-us",
  },
];

export const process = [
  {
    number: "01",
    title: "Découverte",
    duration: "1–2 jours",
    description: "Nous parlons de votre activité, de vos clients et de ce qui empêche réellement les gens de réserver ou d'acheter aujourd'hui.",
  },
  {
    number: "02",
    title: "Conception",
    duration: "3–4 jours",
    description: "Vous voyez une maquette réelle de votre page d'accueil avant qu'une ligne de code ne soit écrite — pas de mauvaises surprises ensuite.",
  },
  {
    number: "03",
    title: "Développement",
    duration: "5–10 jours",
    description: "Je construis le site pour qu'il soit rapide, adaptable et facile à maintenir, avec des points de suivi réguliers tout au long du processus.",
  },
  {
    number: "04",
    title: "Lancement",
    duration: "1 jour",
    description: "Votre site est mis en ligne sur votre domaine, connecté aux outils d'analyse et à la console de recherche, prêt à accueillir de vrais clients.",
  },
];

export const testimonials = [
  {
    name: "Anis El Banani",
    role: "Propriétaire, Restaurant Casa Bella",
    quote:
      "Les réservations en ligne ont doublé dès le premier mois. Les clients nous disent qu'ils nous ont trouvés grâce au nouveau site.",
  },
  {
    name: "Hanane Dokhe",
    role: "Fondateur, Wanderlust Travel Co.",
    quote:
      "Youssef a vraiment compris notre activité avant de concevoir quoi que ce soit. Le formulaire de demande de devis a à lui seul rentabilisé l'ensemble du projet.",
  },
  {
    name: "Noura Fattohi",
    role: "Propriétaire, Glow Beauty Studio",
    quote:
      "Les réservations se faisaient auparavant par SMS toute la journée. Maintenant, elles se font sur le site, automatiquement, même la nuit.",
  },
];

export const faq = [
  {
    question: "Combien de temps dure un projet ?",
    answer:
      "Une page de lancement prend généralement 3 à 7 jours. Un site web professionnel complet prend 1 à 3 semaines selon le nombre de pages et de fonctionnalités. Les applications web sur mesure varient selon le périmètre — nous convenons d'un délai avant le début des travaux.",
  },
  {
    question: "Combien coûte un site web ?",
    answer:
      "Cela dépend de ce dont vous avez besoin — une page de lancement, un site professionnel complet ou une application sur mesure. Réservez une consultation gratuite et vous recevrez un devis clair et fixe avant tout engagement.",
  },
  {
    question: "Proposez-vous du support après le lancement ?",
    answer:
      "Oui. Chaque projet inclut une période de support après le lancement pour les corrections et petits ajustements, et je propose des plans de maintenance continue pour les entreprises qui souhaitent des mises à jour régulières.",
  },
  {
    question: "Je n'ai pas encore de logo ou d'identité visuelle — est-ce un problème ?",
    answer:
      "Pas du tout. De nombreux clients partent de zéro. Nous définissons une identité visuelle simple et cohérente pour votre activité pendant la phase de conception.",
  },
  {
    question: "Qu'est-ce que vous attendez de moi pour commencer ?",
    answer:
      "Juste les informations sur votre activité, quelques photos si vous en avez, et les réponses à un court questionnaire de découverte. Je m'occupe du reste — la rédaction des contenus incluse si vous en avez besoin.",
  },
  {
    question: "Travaillez-vous avec des entreprises en dehors du Maroc ?",
    answer:
      "Oui, toutes les communications et livraisons se font à distance par visioconférence, email et documents partagés, donc la localisation n'est pas un obstacle.",
  },
];

export const projectTypes = [
  "Page de lancement",
  "Site web professionnel",
  "Application web",
  "Pas encore sûr",
];