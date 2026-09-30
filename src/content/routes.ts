export interface RouteContent {
  path: string;
  title: string;
  description: string;
  heading: string;
  summary: string;
  category: string;
  parent?: string;
  updated?: string;
}

export const SITE_ORIGIN = 'https://orthodontie.cabinetdentairesete.fr';

const routeDefinitions: RouteContent[] = [
  {
    path: '/',
    title: 'Orthodontie invisible à Sète | Aligneurs transparents',
    description: 'Aligneurs transparents à Sète : comprendre le bilan, le suivi, la contention et le devis au Cabinet Dentaire Sète du Dr Abdessamed Abdessadok.',
    heading: 'Orthodontie invisible à Sète',
    summary: 'Informations sur les aligneurs transparents et le cabinet dentaire à Sète.',
    category: 'Accueil',
  },
  {
    path: '/aligneurs-transparents/',
    title: 'Aligneurs transparents à Sète | Informations pratiques',
    description: 'Comprendre le principe des aligneurs transparents et les questions à aborder lors d’une consultation à Sète.',
    heading: 'Aligneurs transparents à Sète',
    summary: 'Repères généraux sur les aligneurs transparents et les étapes d’une évaluation au cabinet.',
    category: 'Le traitement',
  },
  {
    path: '/orthodontie-adulte/',
    title: 'Orthodontie adulte à Sète | Cabinet Dentaire Sète',
    description: 'Informations générales sur l’alignement dentaire chez l’adulte et les points à évaluer avec un chirurgien-dentiste à Sète.',
    heading: 'Orthodontie adulte à Sète',
    summary: 'L’âge adulte n’exclut pas à lui seul une évaluation dentaire. La situation bucco-dentaire et les objectifs doivent être examinés individuellement.',
    category: 'Situations',
  },
  {
    path: '/prix-remboursement/',
    title: 'Prix et remboursement des aligneurs à Sète',
    description: 'Les honoraires dépendent de l’évaluation et du plan de soins. Informations à demander au cabinet et à votre complémentaire santé.',
    heading: 'Prix et remboursement',
    summary: 'Aucun tarif ne peut être déduit d’une page générale. Les honoraires sont communiqués après évaluation et présentation d’un devis adapté.',
    category: 'Informations pratiques',
  },
  {
    path: '/bilan-aligneurs-sete/',
    title: 'Premier bilan pour des aligneurs à Sète | Cabinet Dentaire Sète',
    description: 'Ce que peut explorer un premier bilan avant des aligneurs : demande du patient, examen clinique, options, limites et devis à Sète.',
    heading: 'Premier bilan avant des aligneurs à Sète',
    summary: 'Le premier bilan permet de comprendre votre demande et d’examiner la situation bucco-dentaire avant de discuter des options possibles.',
    category: 'Le traitement',
  },
  {
    path: '/remboursement-orthodontie-adulte/',
    title: 'Remboursement de l’orthodontie adulte | Règles et mutuelle',
    description: 'Assurance Maladie après 16 ans, exception avant chirurgie des maxillaires, devis écrit et vérification des garanties de la mutuelle.',
    heading: 'Remboursement de l’orthodontie adulte',
    summary: 'Après 16 ans, la prise en charge par l’Assurance Maladie est exceptionnelle. Un devis permet d’interroger votre complémentaire sur votre situation.',
    category: 'Informations pratiques',
  },
  {
    path: '/dents-chevauchees/',
    title: 'Dents chevauchées : comprendre les options à Sète',
    description: 'Repères sur les dents chevauchées et les éléments à faire évaluer avant d’envisager un traitement d’alignement.',
    heading: 'Dents chevauchées',
    summary: 'Le chevauchement dentaire peut avoir différentes formes. Un examen permet de comprendre la situation et de discuter des options adaptées.',
    category: 'Situations',
  },
  {
    path: '/diasteme-dents-ecartees/',
    title: 'Diastème et dents écartées | Informations à Sète',
    description: 'Informations générales sur les espaces entre les dents et les questions à aborder lors d’une consultation dentaire.',
    heading: 'Diastème et dents écartées',
    summary: 'Un espace entre les dents peut avoir plusieurs causes. Son évaluation dépend notamment de l’examen dentaire et des attentes de la personne.',
    category: 'Situations',
  },
  {
    path: '/dents-qui-rebougent-apres-appareil/',
    title: 'Dents qui bougent après un appareil | Sète',
    description: 'Pourquoi les dents peuvent évoluer après un traitement et quand demander un avis dentaire à Sète.',
    heading: 'Dents qui bougent après un appareil',
    summary: 'Un changement d’alignement après un appareil mérite une évaluation individualisée. Les causes et les options dépendent de chaque situation.',
    category: 'Situations',
  },
  {
    path: '/duree-traitement/',
    title: 'Durée d’un traitement par aligneurs | Sète',
    description: 'La durée d’un traitement varie selon la situation examinée et le plan de soins proposé. Repères à discuter en consultation.',
    heading: 'Durée du traitement',
    summary: 'La durée ne peut pas être estimée de façon fiable à partir d’une description seule. Elle dépend de l’évaluation clinique et du plan retenu.',
    category: 'Le traitement',
  },
  {
    path: '/contention/',
    title: 'Contention après un traitement d’alignement | Sète',
    description: 'À quoi sert la contention après un traitement d’alignement et quels points discuter avec le chirurgien-dentiste.',
    heading: 'La contention après un traitement',
    summary: 'La contention fait partie des sujets à discuter à la fin d’un traitement. Le dispositif et le suivi dépendent de la situation clinique.',
    category: 'Le traitement',
  },
  {
    path: '/aligneurs-vs-bagues/',
    title: 'Aligneurs transparents ou bagues : repères pour comparer',
    description: 'Comparer les grandes différences entre aligneurs et appareils fixes, sans présumer de l’option adaptée à chaque situation.',
    heading: 'Aligneurs transparents ou bagues',
    summary: 'Les appareils amovibles et fixes ont des fonctionnements différents. Le choix dépend de l’examen, des objectifs et des contraintes de chaque personne.',
    category: 'Le traitement',
  },
  {
    path: '/faq/',
    title: 'Questions fréquentes sur les aligneurs | Sète',
    description: 'Visibilité, bilan, suivi, devis et contention : des réponses aux questions sur les aligneurs, avec des liens vers les guides détaillés.',
    heading: 'Questions fréquentes',
    summary: 'Les premières réponses pour préparer votre réflexion sur les aligneurs, puis approfondir chaque sujet dans un guide dédié.',
    category: 'Ressources',
  },
  {
    path: '/guides/',
    title: 'Guides sur les aligneurs transparents | Sète',
    description: 'Consultez nos guides sur les aligneurs : première consultation, entretien, repas, suivi, prix et contention après traitement.',
    heading: 'Guides pratiques',
    summary: 'Choisissez un sujet selon votre situation : préparer une consultation, comprendre les options ou organiser le quotidien avec des aligneurs.',
    category: 'Ressources',
  },
  {
    path: '/praticien/',
    title: 'Dr Abdessamed Abdessadok | Chirurgien-dentiste à Sète',
    description: 'Informations sur le Dr Abdessamed Abdessadok, chirurgien-dentiste, et le Cabinet Dentaire Sète.',
    heading: 'Dr Abdessamed Abdessadok',
    summary: 'Le Dr Abdessamed Abdessadok est chirurgien-dentiste au Cabinet Dentaire Sète, situé 10 Bd Danièle Casanova, 34200 Sète.',
    category: 'Le cabinet',
  },
  {
    path: '/guides/premiere-consultation/',
    title: 'Première consultation pour des aligneurs à Sète',
    description: 'Préparez votre consultation : documents utiles, attentes à expliquer et questions sur le bilan, les options et le suivi des aligneurs.',
    heading: 'Préparer une première consultation',
    summary: 'Un premier échange sert à préciser votre demande. L’examen clinique permet ensuite de discuter des possibilités et des limites d’un traitement.',
    category: 'Guides pratiques', parent: '/guides/',
  },
  {
    path: '/guides/entretien-aligneurs/',
    title: 'Entretien des aligneurs : hygiène et rangement',
    description: 'Les points à vérifier pour nettoyer et ranger vos aligneurs : notice du dispositif, hygiène bucco-dentaire et questions à poser au cabinet.',
    heading: 'Entretenir et ranger ses aligneurs',
    summary: 'L’entretien concerne les gouttières, leur étui et l’hygiène de la bouche. Les instructions du dispositif et de votre praticien restent la référence.',
    category: 'Guides pratiques', parent: '/guides/',
  },
  {
    path: '/guides/aligneurs-repas-boissons/',
    title: 'Aligneurs, repas et boissons : repères au quotidien',
    description: 'Organiser les repas, les boissons et les sorties pendant un traitement par aligneurs, en suivant les consignes de port et d’hygiène.',
    heading: 'Aligneurs, repas et boissons',
    summary: 'Un appareil amovible demande une organisation quotidienne. Anticiper les repas et les sorties aide à suivre les consignes personnalisées du traitement.',
    category: 'Guides pratiques', parent: '/guides/',
  },
  {
    path: '/guides/aligneur-perdu-casse/',
    title: 'Aligneur perdu ou cassé : contacter son praticien',
    description: 'Les informations à transmettre au praticien si un aligneur est perdu, cassé ou ne s’adapte plus, sans modifier soi-même le traitement.',
    heading: 'Un aligneur perdu ou cassé',
    summary: 'Une gouttière manquante ou abîmée nécessite une consigne adaptée au stade du traitement. Préparez les informations utiles avant de contacter le cabinet.',
    category: 'Guides pratiques', parent: '/guides/',
  },
];

// Editorial dates are deliberate; do not replace them with the build timestamp.
export const routes: RouteContent[] = routeDefinitions.map((route) => ({ updated: '2026-09-30', ...route }));

export function breadcrumbsFor(route: RouteContent): { name: string; path: string }[] {
  const home = { name: 'Accueil', path: '/' };
  if (route.path === '/') return [home];
  const parent = routes.find((item) => item.path === route.parent);
  return [home, ...(parent ? [{ name: parent.heading, path: parent.path }] : []), { name: route.heading, path: route.path }];
}

export function findRoute(pathname: string): RouteContent | undefined {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return routes.find((route) => route.path === normalized);
}
