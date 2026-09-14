import { PracticeArea, TeamMember, Publication, Recognition, DepartmentContact, AdministrativeStaff } from '../types';
import heroImg from '../assets/images/hero_opt.jpg';
import heroGif from '../assets/images/Gif-video-opt.gif';
import quemSomosImg from '../assets/images/quem_somos_optimized.jpg';
import bankingImg from '../assets/images/bancario_opt.jpg';
import taxImg from '../assets/images/fiscal_opt.jpg';
import realEstateImg from '../assets/images/imobiliario_opt.jpg';
import oilGasImg from '../assets/images/petroleo_opt.jpg';
import corporateMeetingImg from '../assets/images/corporate_executives_meeting_1789378716657.jpg';

export const DIRECT_IMAGES = {
  heroBg: heroGif,
  heroGif: heroGif,
  receptionDesk: heroImg,
  aboutLeadership: quemSomosImg,
  architectureFacade: realEstateImg,
  bankingFinance: bankingImg,
  taxCustoms: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=75",
  realEstate: realEstateImg,
  oilGasEnergy: oilGasImg,
  logo: heroGif,
  heroOfficeBg: heroImg,
  // High-resolution architectural and courtroom reference imagery (lightweight optimized CDN)
  luandaSkyline: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=75",
  boardroomMeeting: corporateMeetingImg,
  lawLibrary: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=75",
  contractsDesk: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=75",
  energyPlatform: oilGasImg,
  bankingFinancial: bankingImg,
};

export const RECOGNITIONS: Recognition[] = [
  {
    id: "chambers",
    title: "Chambers",
    subtitle: "GLOBAL & PARTNERS",
    organization: "Chambers and Partners",
    year: "2024",
    rankTier: "Band 1 — General Business Law: Angola",
    quote: {
      pt: "A FBL Advogados é amplamente reconhecida como uma das firmas de referência em Angola, elogiada pela sua sofisticação técnica, rigor deontológico e capacidade de resposta imediata a operações transfronteiriças complexas.",
      en: "FBL Advogados is widely recognized as a premier benchmark firm in Angola, praised for its technical sophistication, ethical rigor, and prompt responsiveness in complex cross-border transactions."
    },
    badgeIcon: "workspace_premium"
  },
  {
    id: "legal500",
    title: "Legal 500",
    subtitle: "RECONHECIMENTO EMEA",
    organization: "The Legal 500",
    year: "2024",
    rankTier: "Tier 1 — Leading Law Firm: Angola",
    quote: {
      pt: "Uma sociedade com profunda inserção no tecido económico angolano e internacional, prestando assessoria jurídica de nível internacional aos maiores investidores dos setores financeiro, petrolífero e de infraestruturas.",
      en: "A law firm deeply integrated into both Angolan and international business ecosystems, delivering top-tier counsel to leading investors across banking, oil & gas, and infrastructure sectors."
    },
    badgeIcon: "stars"
  },
  {
    id: "iflr1000",
    title: "IFLR1000",
    subtitle: "FINANCIAL & CORPORATE",
    organization: "IFLR1000",
    year: "2024",
    rankTier: "Top Tier Firm — Financial, Banking and M&A",
    quote: {
      pt: "Distinguida com classificação de topo pela sua liderança incontestável na estruturação de financiamentos de grandes projetos e operações de aquisição societária no mercado angolano.",
      en: "Awarded top tier ranking for undisputed leadership in structuring major project finance and corporate M&A transactions in the Angolan market."
    },
    badgeIcon: "military_tech"
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate-investment-competition",
    title: {
      pt: "Societário, Investimento e Concorrência",
      en: "Corporate, Investment & Competition"
    },
    shortDescription: {
      pt: "Assessoria societária e empresarial, estruturação de investimento privado (AIPEX), fusões e aquisições e regulação da concorrência.",
      en: "Corporate counsel, private investment structuring (AIPEX), M&A transactions, and competition antitrust regulatory compliance."
    },
    fullDescription: {
      pt: "A equipa de Societário, Investimento e Concorrência da FBL assessora investidores nacionais e transnacionais em todas as fases da atividade económica. Acompanhamos a constituição de sociedades, acordos parassociais, projetos de investimento privado e regimes de benefícios fiscais e aduaneiros, operações de M&A, bem como matérias de controlo de concentrações e práticas restritivas da concorrência junto da ARC.",
      en: "FBL's Corporate, Investment & Competition team advises domestic and multinational clients through every stage of business operations. We advise on corporate incorporation, shareholder agreements, private investment structuring and incentive regimes, M&A, as well as merger control filings and competition compliance before the ARC."
    },
    highlights: {
      pt: [
        "Estruturação de investimentos privados e incentivos ao abrigo da Lei do Investimento Privado",
        "Fusões, cisões, aquisições e acordos parassociais complexos",
        "Notificações de operações de concentração e compliance perante a ARC",
        "Governação societária (Corporate Governance) e auditorias jurídicas (due diligence)"
      ],
      en: [
        "Private investment structuring and tax incentive regimes under the Private Investment Law",
        "Mergers, spin-offs, share acquisitions, and complex shareholder agreements",
        "Merger control notifications and antitrust compliance before the ARC",
        "Corporate governance frameworks, legal due diligence audits, and group reorganizations"
      ]
    },
    iconName: "business_center",
    leadPartner: "Paulette Lopes + Tatiana Serrão",
    responsiblePartners: ["Paulette Lopes", "Tatiana Serrão"],
    image: corporateMeetingImg
  },
  {
    id: "energy-natural-resources-environment",
    title: {
      pt: "Energias, Recursos Naturais e Ambiente",
      en: "Energy, Natural Resources & Environment"
    },
    shortDescription: {
      pt: "Acompanhamento regulatório e contratual nos setores petrolífero, mineiro, transição energética e conformidade ambiental.",
      en: "Regulatory and transactional counsel across upstream/downstream oil & gas, critical mining, energy transition, and environmental sustainability."
    },
    fullDescription: {
      pt: "Com ampla tradição no acompanhamento dos recursos naturais de Angola, a FBL presta assessoria especializada a operadoras de petróleo e gás, prestadores de serviços petrolíferos ('oilfield services'), concessionárias mineiras e promotores de projetos de energias renováveis e sustentabilidade ambiental, articulando com ANPG, MIREMPET e ANRM.",
      en: "With extensive pedigree in Angola's resource sectors, FBL provides specialized legal counsel to oil & gas concessionaires, oilfield service contractors, mining titleholders, and renewable energy developers, interfacing regularly with national regulatory entities (ANPG, MIREMPET, ANRM)."
    },
    highlights: {
      pt: [
        "Contratos de partilha de produção (PSA) e contratos de serviços com risco",
        "Regulamentação de Conteúdo Local ('Local Content') e conformidade ANPG",
        "Direito mineiro: licenças de prospecção, contratos de concessão e minerais críticos",
        "Transição energética, projetos solares e hídricos, e licenciamento ambiental"
      ],
      en: [
        "Production Sharing Agreements (PSA) and Risk Service Contracts",
        "Local Content regulatory compliance and Angolan workforce integration",
        "Mining concessions, exploration licensing, and critical mineral projects",
        "Energy transition, solar and hydroelectric utilities, and environmental permitting"
      ]
    },
    iconName: "local_gas_station",
    leadPartner: "Guiomar Lopes + Neuza Melão Dias",
    responsiblePartners: ["Guiomar Lopes", "Neuza Melão Dias"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=75"
  },
  {
    id: "litigation-civil-commercial-arbitration",
    title: {
      pt: "Contencioso Civil, Comercial e Arbitragem",
      en: "Civil & Commercial Litigation and Arbitration"
    },
    shortDescription: {
      pt: "Patrocínio judiciário em litígios cíveis e comerciais de grande complexidade e procedimentos arbitrais nacionais e internacionais.",
      en: "High-stakes representation in complex civil and commercial litigation and domestic and international arbitration."
    },
    fullDescription: {
      pt: "A equipa de Contencioso Civil, Comercial e Arbitragem da FBL destaca-se pela sólida intervenção nos Tribunais de Comarca, Tribunais da Relação e no Tribunal Supremo de Angola, bem como em arbitragens comerciais sob as regras do CREL, CCI e LCIA. Atuamos em litígios societários, contratuais, bancários e na execução de sentenças judiciais e arbitrais estrangeiras.",
      en: "FBL's Civil, Commercial Litigation and Arbitration practice is renowned for robust representation before District Courts, Courts of Appeal, and the Angolan Supreme Court, as well as in commercial arbitrations under CREL, ICC, and LCIA rules. We handle complex shareholder disputes, contract enforcement, banking disputes, and the recognition of foreign arbitral awards."
    },
    highlights: {
      pt: [
        "Litígios societários, contratuais e comerciais perante todas as instâncias judiciais",
        "Arbitragem comercial nacional e internacional (CREL, CCI, LCIA)",
        "Recuperação de créditos, processos executivos e providências cautelares urgentes",
        "Revisão e confirmação de sentenças judiciais e laudos arbitrais estrangeiros"
      ],
      en: [
        "Corporate, contract, and banking dispute litigation before all judicial courts",
        "Domestic and international commercial arbitration (CREL, ICC, LCIA)",
        "Debt recovery, enforcement proceedings, and urgent provisional relief orders",
        "Recognition and enforcement of foreign judicial and arbitral awards"
      ]
    },
    iconName: "gavel",
    leadPartner: "Victor Ceita + Mara de Sá",
    responsiblePartners: ["Victor Ceita", "Mara de Sá"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=75"
  },
  {
    id: "criminal-litigation",
    title: {
      pt: "Contencioso Penal",
      en: "Criminal Litigation"
    },
    shortDescription: {
      pt: "Defesa criminal estratégica, crimes económico-financeiros, cibercrime e programas de compliance penal corporativo.",
      en: "Strategic criminal defense, corporate white-collar crime, cybercrime, and corporate penal compliance programs."
    },
    fullDescription: {
      pt: "O departamento de Contencioso Penal da FBL assegura a defesa técnica e o patrocínio judiciário em inquéritos preliminares, instrução preparatória e julgamentos nas diversas instâncias jurisdicionais. Temos vasta experiência em matéria de crimes económico-financeiros, branqueamento de capitais, corrupção, infrações fiscais e alfandegárias, e implementação de programas de conformidade penal preventiva.",
      en: "FBL's Criminal Litigation department ensures rigorous technical defense and trial representation throughout preliminary investigations, pre-trial inquiries, and courtroom trials. We bring extensive expertise in corporate white-collar investigations, anti-money laundering, anti-corruption proceedings, fiscal and customs offenses, and preventative penal compliance frameworks."
    },
    highlights: {
      pt: [
        "Defesa em processos de crimes económico-financeiros e fiscais",
        "Acompanhamento em interrogatórios, buscas e medidas de coação pessoal",
        "Compliance penal corporativo e auditorias de prevenção de branqueamento de capitais",
        "Recursos penais perante o Tribunal da Relação, Tribunal Supremo e Tribunal Constitucional"
      ],
      en: [
        "Defense in economic, corporate, and fiscal white-collar prosecutions",
        "Representation during investigative interrogations, asset seizures, and bail measures",
        "Corporate penal compliance and anti-money laundering prevention audits",
        "Appeals before the Courts of Appeal, Supreme Court, and Constitutional Court"
      ]
    },
    iconName: "shield",
    leadPartner: "Adriano Cazenga + Victor Ceita",
    responsiblePartners: ["Adriano Cazenga", "Victor Ceita"],
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=75"
  },
  {
    id: "administrative-tax",
    title: {
      pt: "Administrativo e Fiscal",
      en: "Administrative & Tax"
    },
    shortDescription: {
      pt: "Planeamento fiscal estratégico, contencioso tributário perante a AGT, contratação pública e regulação administrativa.",
      en: "Strategic tax planning, contentious tax disputes with AGT, public procurement, and administrative regulatory law."
    },
    fullDescription: {
      pt: "A área de Administrativo e Fiscal combina o aconselhamento preventivo e o patrocínio contencioso perante a Administração Pública e os Tribunais Tributários e Administrativos. Apoiamos empresas na negociação de contratos públicos e concessões com o Estado angolano, bem como na gestão fiscal de impostos gerais (IVA, Imposto Industrial, IRT) e contestações de liquidações adicionais junto da AGT.",
      en: "The Administrative and Tax practice blends proactive advisory with robust litigation before the Angolan Public Administration and Administrative/Tax Courts. We counsel enterprises on public procurement and concession contracts with the state, alongside comprehensive tax advisory (VAT, Corporate Income Tax, Personal Income Tax) and tax assessment challenges before the AGT."
    },
    highlights: {
      pt: [
        "Planeamento fiscal estratégico e regimes fiscais especiais",
        "Contencioso tributário: reclamações graciosas, recursos hierárquicos e impugnações judiciais",
        "Contratação pública: concursos, propostas e execução de contratos com entidades públicas",
        "Contencioso administrativo e procedimentos sancionatórios perante entidades reguladoras"
      ],
      en: [
        "Strategic corporate tax planning and special investment tax regimes",
        "Tax litigation: administrative claims, hierarchical appeals, and court litigation before AGT",
        "Public procurement: tenders, bids, and contract execution with public entities",
        "Administrative contentious appeals and regulatory sanction defense"
      ]
    },
    iconName: "receipt_long",
    leadPartner: "Victor Ceita + Tatiana Serrão",
    responsiblePartners: ["Victor Ceita", "Tatiana Serrão"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=75"
  },
  {
    id: "employment-labor",
    title: {
      pt: "Laboral",
      en: "Labor & Employment"
    },
    shortDescription: {
      pt: "Assessoria em relações individuais e coletivas de trabalho, contratação de quadros estrangeiros, vistos e contencioso do trabalho.",
      en: "Advisory on individual and collective labor relations, expatriate hiring, work permits, and employment dispute resolution."
    },
    fullDescription: {
      pt: "A equipa de Direito Laboral da FBL assessora empregadores nacionais e multinacionais na gestão das suas relações laborais em conformidade com a Lei Geral do Trabalho de Angola. Prestamos apoio na elaboração de contratos, regimes de turnos e offshore, regulamentos internos, processos disciplinares, reestruturações e rescisões contratuais, bem como em procedimentos com a Inspeção Geral do Trabalho (IGT) e vistos de trabalho para expatriados.",
      en: "FBL's Labor Law team advises domestic and multinational employers on managing employment relationships in strict compliance with the Angolan General Labor Law. We assist with drafting employment agreements, offshore/shift rotas, company regulations, disciplinary proceedings, workforce reorganizations, and termination procedures, as well as work permit applications for expatriates and audits by the General Labor Inspectorate (IGT)."
    },
    highlights: {
      pt: [
        "Contratos de trabalho, regimes especiais e regulamentos internos de empresa",
        "Processos disciplinares, despedimentos individuais e coletivos, e planos de reestruturação",
        "Contratação de trabalhadores expatriados, vistos de trabalho e cotas legais",
        "Mediação e contencioso judicial laboral nas salas de trabalho dos Tribunais de Comarca"
      ],
      en: [
        "Employment agreements, specialized rotas, and internal workplace regulations",
        "Disciplinary proceedings, individual/collective redundancies, and restructuring plans",
        "Expatriate workforce legal compliance, work permits, and mandatory local quotas",
        "Labor mediation and court litigation in District Court labor divisions"
      ]
    },
    iconName: "groups",
    leadPartner: "Neuza Melão Dias + Victor Ceita",
    responsiblePartners: ["Neuza Melão Dias", "Victor Ceita"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=75"
  },
  {
    id: "banking-finance",
    title: {
      pt: "Bancário e Financeiro",
      en: "Banking & Finance"
    },
    shortDescription: {
      pt: "Estruturação de financiamentos, operações cambiais junto do BNA, project finance e emissões na BODIVA.",
      en: "Loan syndication, foreign exchange compliance with BNA, debt/equity listings on BODIVA, and project finance."
    },
    fullDescription: {
      pt: "Com profundo conhecimento do sistema financeiro angolano, a FBL assessora bancos, instituições financeiras não bancárias, fundos de investimento e entidades tomadoras de crédito. Apoiamos operações de crédito sindicado, garantias bancárias, financiamento de projetos ('Project Finance'), regulação cambial e repatriação de capitais junto do Banco Nacional de Angola (BNA) e operações no mercado de valores mobiliários (BODIVA).",
      en: "With profound knowledge of the Angolan financial system, FBL advises commercial banks, non-banking financial institutions, investment funds, and corporate borrowers. We support syndicated loans, collateral packages, Project Finance facilities, foreign exchange compliance and capital repatriation with the National Bank of Angola (BNA), and securities market operations on BODIVA."
    },
    highlights: {
      pt: [
        "Financiamentos estruturados, créditos sindicados e pacotes de garantias",
        "Regulamentação cambial, operações com o BNA e transferências para o exterior",
        "Mercado de capitais: emissão de obrigações e admissão à cotação na BODIVA",
        "Conformidade regulamentar prudencial bancária e licenciamento financeiro"
      ],
      en: [
        "Structured finance, syndicated lending, and security collateral packages",
        "Foreign exchange regulations, BNA authorizations, and overseas capital transfers",
        "Capital markets: corporate bond issuances and debt/equity listings on BODIVA",
        "Prudential banking regulatory compliance and financial entity licensing"
      ]
    },
    iconName: "account_balance",
    leadPartner: "Guiomar Lopes + Neuza Melão Dias",
    responsiblePartners: ["Guiomar Lopes", "Neuza Melão Dias"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=75"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  // -------------------------------------------------------------
  // 1. SÓCIOS (Ordem Oficial do Papel Timbrado da FBL Advogados)
  // -------------------------------------------------------------
  {
    id: "fernando-faria-de-bastos",
    name: "Fernando Faria de Bastos",
    role: {
      pt: "Sócio Fundador",
      en: "Founding Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 14",
    email: "f.bastos@fbladvogados.com",
    phone: "+244 222 396 000",
    languages: ["Português", "English", "Français"],
    initials: "FFB",
    bio: {
      pt: "Sócio Fundador da FBL Advogados. Considerado uma das personalidades mais eminentes do panorama jurídico angolano, reconhecido como Senior Statesperson pelos diretórios internacionais Chambers Global e Legal 500. Especialista de referência em Contencioso Civil e Penal, Propriedade Industrial e Investimento Privado em Angola.",
      en: "Founding Partner of FBL Advogados. Recognized as a Senior Statesperson by Chambers Global and The Legal 500, with an illustrious career in Civil and Criminal Litigation, Industrial Property Law, and Private Investment in Angola."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Faculdade de Direito da Universidade de Lisboa",
        "Especialista em Direito da Propriedade Industrial e Contencioso Estratégico",
        "Membro Decano da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Faculty of Law, Universidade de Lisboa",
        "Specialist in Industrial Property Law and High-Stakes Litigation",
        "Senior Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "criminal-litigation", "corporate-investment-competition"]
  },
  {
    id: "paulette-lopes",
    name: "Paulette Lopes",
    role: {
      pt: "Sócia Fundadora",
      en: "Founding Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 94",
    email: "paulette.lopes@fbladvogados.com",
    phone: "+244 222 396 001",
    languages: ["Português", "English", "Français"],
    initials: "PL",
    bio: {
      pt: "Sócia Fundadora da FBL Advogados, com uma carreira ilustre de mais de três décadas na advocacia empresarial e no aconselhamento de investimentos estratégicos em Angola. Reconhecida como Senior Statesperson pelos diretórios internacionais em direito societário, fusões e aquisições e investimento privado.",
      en: "Founding Partner of FBL Advogados, with an illustrious career of over three decades in corporate law and strategic investment counseling in Angola. Ranked as Senior Statesperson by international directories in corporate, M&A, and private investment."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Faculdade de Direito da Universidade Agostinho Neto",
        "Especialização em Direito Societário e Comercial Internacional",
        "Docente de Direito Processual Civil III na Universidade Agostinho Neto",
        "Membro da Ordem dos Advogados de Angola e da International Bar Association (IBA)"
      ],
      en: [
        "Law Degree, Faculty of Law, Universidade Agostinho Neto",
        "Specialization in International Corporate and Commercial Law",
        "Lecturer of Civil Procedural Law at Universidade Agostinho Neto",
        "Member of the Angolan Bar Association and the International Bar Association (IBA)"
      ]
    },
    practiceAreaIds: ["corporate-investment-competition"]
  },
  {
    id: "guiomar-lopes",
    name: "Guiomar Lopes",
    role: {
      pt: "Sócia Fundadora",
      en: "Founding Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 68",
    email: "guiomar.lopes@fbladvogados.com",
    phone: "+244 222 396 004",
    languages: ["Português", "English", "Español"],
    initials: "GL",
    bio: {
      pt: "Sócia Fundadora da FBL especializada nos setores de Energia, Recursos Naturais, Ambiente e Direito Bancário e Financeiro. Acompanha os principais projetos de hidrocarbonetos, mineração, financiamento estruturado e regulação cambial com o Banco Nacional de Angola (BNA).",
      en: "Founding Partner at FBL specializing in Energy, Natural Resources, Environment, and Banking & Finance. Advises on major hydrocarbons, mining concessions, structured finance facilities, and foreign exchange compliance with the BNA."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Agostinho Neto",
        "LL.M. em Direito da Energia e Recursos Naturais",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "LL.M. in Energy and Natural Resources Law",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["energy-natural-resources-environment", "banking-finance"]
  },
  {
    id: "victor-ceita",
    name: "Victor Ceita",
    role: {
      pt: "Sócio / Administrador Executivo",
      en: "Partner / Executive Managing Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 584",
    email: "victor.ceita@fbladvogados.com",
    phone: "+244 222 396 007",
    languages: ["Português", "English"],
    initials: "VC",
    bio: {
      pt: "Sócio / Administrador Executivo da FBL e um dos mais reputados advogados litigantes de Angola. Lidera processos de alta complexidade em Contencioso Civil, Comercial e Arbitragem, Contencioso Penal, Administrativo e Fiscal, e Direito Laboral perante todas as instâncias judiciais.",
      en: "Partner / Executive Managing Partner at FBL and one of Angola's most esteemed courtroom advocates. Leads high-stakes litigation across Civil, Commercial & Arbitration, Criminal Litigation, Administrative & Tax, and Labor Law before all judicial courts."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Faculdade de Direito da Universidade Agostinho Neto",
        "Mestrado em Ciências Jurídico-Forenses e Arbitragem",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "Master in Forensic Sciences and Commercial Arbitration",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: [
      "litigation-civil-commercial-arbitration",
      "criminal-litigation",
      "administrative-tax",
      "employment-labor"
    ]
  },
  {
    id: "tatiana-serrao",
    name: "Tatiana Serrão",
    role: {
      pt: "Sócia / Administradora Executiva",
      en: "Partner / Executive Managing Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 846",
    email: "tatiana.serrao@fbladvogados.com",
    phone: "+244 222 396 003",
    languages: ["Português", "English"],
    initials: "TS",
    bio: {
      pt: "Sócia / Administradora Executiva da FBL com vasta experiência em Direito Societário, Concorrência, Direito Administrativo e Fiscal. Assessora regularmente investidores internacionais em operações complexas de M&A, notificações de concentração à Autoridade Reguladora da Concorrência (ARC) e contratos públicos.",
      en: "Partner / Executive Managing Partner at FBL with vast experience in Corporate Law, Competition, Administrative and Tax Law. Regularly advises international investors on complex M&A transactions, merger filings before the Competition Regulatory Authority (ARC), and public procurement."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Agostinho Neto",
        "Pós-Graduação em Direito da Concorrência e Regulação Económica",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "Postgraduate in Competition and Economic Regulation Law",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["corporate-investment-competition", "administrative-tax"]
  },
  {
    id: "neuza-melao-dias",
    name: "Neuza Melão Dias",
    role: {
      pt: "Sócia / Administradora Executiva",
      en: "Partner / Executive Managing Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 545",
    email: "neuza.melaodias@fbladvogados.com",
    phone: "+244 222 396 006",
    languages: ["Português", "English"],
    initials: "NMD",
    bio: {
      pt: "Sócia / Administradora Executiva da FBL com prática de destaque nas áreas de Energia e Recursos Naturais, Direito Laboral e Bancário & Financeiro. É especialista no enquadramento de mão-de-obra e regimes especiais de Conteúdo Local no setor dos recursos naturais.",
      en: "Partner / Executive Managing Partner at FBL with standout practice in Energy & Natural Resources, Labor Law, and Banking & Finance. Expert in workforce regulatory compliance and Local Content regimes across natural resource sectors."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Católica de Angola",
        "Pós-Graduação em Direito Laboral e Relações de Trabalho",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Católica de Angola",
        "Postgraduate in Labor Law and Employment Relations",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["energy-natural-resources-environment", "employment-labor", "banking-finance"]
  },
  {
    id: "mara-de-sa",
    name: "Mara de Sá",
    role: {
      pt: "Sócia",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 1129",
    email: "mara.sa@fbladvogados.com",
    phone: "+244 222 396 009",
    languages: ["Português", "English"],
    initials: "MS",
    bio: {
      pt: "Sócia da FBL dedicada ao Contencioso Civil, Comercial e Arbitragem. Detém vasta experiência em litígios societários, insolvência e recuperação de créditos, e processos arbitrais nacionais e internacionais.",
      en: "Partner at FBL dedicated to Civil & Commercial Litigation and Arbitration. Boasts extensive experience in corporate disputes, insolvency, debt recovery, and international arbitral proceedings."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Católica de Angola",
        "Pós-Graduação em Prática Forense e Arbitragem Comercial",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Católica de Angola",
        "Postgraduate in Forensics and Commercial Arbitration",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration"]
  },
  {
    id: "adriano-cazenga",
    name: "Adriano Cazenga",
    role: {
      pt: "Sócio",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 1768",
    email: "adriano.cazenga@fbladvogados.com",
    phone: "+244 222 396 010",
    languages: ["Português", "English"],
    initials: "AC",
    bio: {
      pt: "Sócio da FBL e especialista em Contencioso Penal, crimes económico-financeiros e compliance penal corporativo. Assegura a defesa e o patrocínio em inquéritos preliminares, instrução preparatória e julgamentos nas diversas instâncias jurisdicionais.",
      en: "Partner at FBL and specialist in Criminal Litigation, white-collar crimes, and corporate penal compliance. Ensures defense and legal representation in criminal investigations, inquiries, and courtroom trials."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Agostinho Neto",
        "Pós-Graduação em Ciências Criminais e Direito Penal Económico",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "Postgraduate in Criminal Sciences and Economic Criminal Law",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["criminal-litigation"]
  },

  // -------------------------------------------------------------
  // 2. ASSOCIADOS (Ordem Oficial do Papel Timbrado da FBL Advogados)
  // -------------------------------------------------------------
  {
    id: "anacleta-cipriano",
    name: "Anacleta Cipriano",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 613",
    email: "anacleta.cipriano@fbladvogados.com",
    phone: "+244 222 396 011",
    languages: ["Português", "English"],
    initials: "AC",
    bio: {
      pt: "Advogada Associada na FBL Advogados com destacada intervenção em Direito Bancário, Financeiro, Societário e Comercial. Assessora instituições financeiras, emissões no mercado de capitais e operações de reestruturação empresarial em Angola.",
      en: "Associate Lawyer at FBL Advogados with distinguished practice in Banking, Finance, Corporate and Commercial Law. Advises financial institutions, capital markets issuances, and corporate debt restructurings in Angola."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Agostinho Neto",
        "Pós-Graduação em Direito Bancário e Mercado de Capitais",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "Postgraduate in Banking Law and Capital Markets",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["banking-finance", "corporate-investment-competition"]
  },
  {
    id: "cecilia-mungongo",
    name: "Cecília Mungongo",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 2169",
    email: "cecilia.mungongo@fbladvogados.com",
    phone: "+244 222 396 023",
    languages: ["Português", "English"],
    initials: "CM",
    bio: {
      pt: "Advogada Associada na FBL Advogados. Desenvolve a sua atividade profissional nas áreas de Contencioso Civil, Contencioso Penal e Direito Laboral, com acompanhamento de processos criminais económico-financeiros e resolução de litígios laborais e disciplinares.",
      en: "Associate Lawyer at FBL Advogados. Focuses on Civil Litigation, Criminal Litigation, and Employment Law, participating in white-collar criminal cases and labor conflict resolution."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Agostinho Neto",
        "Pós-Graduação em Prática Forense e Processo Penal",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "Postgraduate in Forensics and Criminal Procedure",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "criminal-litigation", "employment-labor"]
  },
  {
    id: "jessica-ribeiro",
    name: "Jessica Ribeiro",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 3746",
    email: "jessica.ribeiro@fbladvogados.com",
    phone: "+244 222 396 025",
    languages: ["Português", "English"],
    initials: "JR",
    bio: {
      pt: "Advogada Associada na FBL Advogados. Desenvolve a sua atividade nas áreas de Direito Societário, Concorrência, Imobiliário e Investimento Privado, prestando assessoria em operações de reorganização societária, fusões e licenciamento comercial.",
      en: "Associate Lawyer at FBL Advogados. Focuses on Corporate Law, Competition, Real Estate, and Private Investment, advising on corporate restructurings, M&A transactions, and commercial permitting."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Católica de Angola",
        "Especialização em Direito Empresarial e Propriedade Intelectual",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Católica de Angola",
        "Specialization in Corporate Law and Intellectual Property",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["corporate-investment-competition"]
  },
  {
    id: "eugenio-vinevala",
    name: "Eugénio Vinevala",
    role: {
      pt: "Advogado Associado",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 1879",
    email: "eugenio.vinevala@fbladvogados.com",
    phone: "+244 222 396 024",
    languages: ["Português", "English"],
    initials: "EV",
    bio: {
      pt: "Advogado Associado na FBL Advogados com vasta experiência forense e arbitral. Atua com excelência em Contencioso Civil, Comercial e Arbitragem, bem como em Direito do Trabalho, prestando consultoria estratégica a sociedades comerciais.",
      en: "Associate Lawyer at FBL Advogados with extensive dispute resolution and arbitration experience. Excels in Civil, Commercial & Arbitration and Labor Law, delivering strategic advice to domestic and multinational enterprises."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Faculdade de Direito da Universidade Agostinho Neto",
        "Pós-Graduação em Prática Forense e Processual Civil",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Faculty of Law, Universidade Agostinho Neto",
        "Postgraduate in Forensics and Civil Procedure",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "employment-labor"]
  },
  {
    id: "miguel-cassopa",
    name: "Miguel Cassopa",
    role: {
      pt: "Advogado Associado",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 3984",
    email: "miguel.cassopa@fbladvogados.com",
    phone: "+244 222 396 026",
    languages: ["Português", "English"],
    initials: "MC",
    bio: {
      pt: "Advogado Associado na FBL Advogados. Dedica-se com destaque aos setores de Energia, Petróleo & Gás, Mineração e Direito Fiscal e Aduaneiro, acompanhando regimes de conteúdo local e conformidade regulatória perante as autoridades setoriais.",
      en: "Associate Lawyer at FBL Advogados. Focuses on Energy, Oil & Gas, Mining, and Tax & Customs Law, advising on local content compliance and regulatory filings before national regulatory agencies."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Agostinho Neto",
        "Pós-Graduação em Direito dos Recursos Naturais e Energia",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "Postgraduate in Natural Resources and Energy Law",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["energy-natural-resources-environment", "administrative-tax"]
  },
  {
    id: "arlindo-oliveira",
    name: "Arlindo Oliveira",
    role: {
      pt: "Advogado Associado",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 5134",
    email: "arlindo.oliveira@fbladvogados.com",
    phone: "+244 222 396 027",
    languages: ["Português", "English"],
    initials: "AO",
    bio: {
      pt: "Advogado Associado na FBL Advogados. Concentra a sua atividade profissional no Contencioso Civil, Comercial e em Direito Societário, prestando assessoria na constituição, atos de registo de sociedades comerciais e patrocínio judiciário.",
      en: "Associate Lawyer at FBL Advogados. Concentrates on Civil & Commercial Litigation and Corporate Law, assisting clients on incorporation, corporate governance, and court advocacy."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Católica de Angola",
        "Formação Complementar em Prática Processual Civil e Forense",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Católica de Angola",
        "Complementary Training in Civil Procedural Practice",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "corporate-investment-competition"]
  },
  {
    id: "eloisa-soares",
    name: "Eloisa Soares",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 6325",
    email: "eloisa.soares@fbladvogados.com",
    phone: "+244 222 396 028",
    languages: ["Português", "English"],
    initials: "ES",
    bio: {
      pt: "Advogada Associada na FBL Advogados com atuação em Direito Bancário, Financeiro, Fiscal e Regulatório. Apoia clientes em auditorias jurídicas de conformidade (due diligence), licenciamento de divisas e estruturação contratual.",
      en: "Associate Lawyer at FBL Advogados practicing in Banking, Finance, Tax, and Regulatory Law. Assists clients in legal due diligence, foreign exchange operations, and commercial drafting."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Faculdade de Direito da Universidade Agostinho Neto",
        "Pós-Graduação em Direito Bancário e Fiscal",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Faculty of Law, Universidade Agostinho Neto",
        "Postgraduate in Banking and Tax Law",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["banking-finance", "administrative-tax"]
  },
  {
    id: "elsa-matos",
    name: "Elsa Matos",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 7454",
    email: "elsa.matos@fbladvogados.com",
    phone: "+244 222 396 029",
    languages: ["Português", "English"],
    initials: "EM",
    bio: {
      pt: "Advogada Associada na FBL Advogados especializada em Contencioso Civil, Penal e Direito do Trabalho. Intervém em litígios judiciais, processos disciplinares e assessoria preventiva permanente para entidades empresariais.",
      en: "Associate Lawyer at FBL Advogados specializing in Civil, Criminal, and Employment Litigation. Handles dispute resolution, disciplinary procedures, and preventive legal advisory for corporate clients."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Católica de Angola",
        "Pós-Graduação em Direito do Trabalho e Prática Forense",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Católica de Angola",
        "Postgraduate in Labor Law and Forensics",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "criminal-litigation", "employment-labor"]
  },
  {
    id: "elisandra-albano",
    name: "Elisandra Albano",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 7861",
    email: "elisandra.albano@fbladvogados.com",
    phone: "+244 222 396 030",
    languages: ["Português", "English"],
    initials: "EA",
    bio: {
      pt: "Advogada Associada na FBL Advogados. Atua nas áreas de Direito Societário, Contratos Comerciais, Regulação Económica e Propriedade Industrial, prestando assistência em atos societários e investimentos privados em Angola.",
      en: "Associate Lawyer at FBL Advogados. Focuses on Corporate Law, Commercial Contracts, Economic Regulation, and Industrial Property, assisting in corporate actions and private investment ventures."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Agostinho Neto",
        "Pós-Graduação em Direito Comercial e Societário",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "Postgraduate in Commercial and Corporate Law",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["corporate-investment-competition"]
  },

  // -------------------------------------------------------------
  // 3. ESTAGIÁRIOS (Sem número de cédula, por não serem definitivas)
  // -------------------------------------------------------------
  {
    id: "erica-ferreira",
    name: "Érica Ferreira",
    role: {
      pt: "Advogada Estagiária",
      en: "Trainee Lawyer"
    },
    category: "interns",
    level: "intern",
    email: "erica.ferreira@fbladvogados.com",
    phone: "+244 222 396 032",
    languages: ["Português", "English"],
    initials: "EF",
    bio: {
      pt: "Advogada Estagiária na FBL Advogados com atuação em Direito Civil, Laboral e Societário, participando no apoio a auditorias jurídicas e elaboração de minutas contratuais.",
      en: "Trainee Lawyer at FBL Advogados focusing on Civil, Employment, and Corporate Law, assisting in legal audits and contract drafting."
    },
    education: {
      pt: [
        "Licenciatura em Direito",
        "Inscrita na Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree",
        "Registered with the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["corporate-investment-competition", "employment-labor"]
  },
  {
    id: "helia-sousa",
    name: "Hélia Sousa",
    role: {
      pt: "Advogada Estagiária",
      en: "Trainee Lawyer"
    },
    category: "interns",
    level: "intern",
    email: "helia.sousa@fbladvogados.com",
    phone: "+244 222 396 033",
    languages: ["Português", "English"],
    initials: "HS",
    bio: {
      pt: "Advogada Estagiária na FBL Advogados com foco em Direito Privado, Contratos Comerciais e Contencioso Forense.",
      en: "Trainee Lawyer at FBL Advogados focusing on Private Law, Commercial Contracts, and Courtroom Forensics."
    },
    education: {
      pt: [
        "Licenciatura em Direito",
        "Inscrita na Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree",
        "Registered with the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration"]
  },
  {
    id: "shelsia-guimaraes",
    name: "Shelsia Guimarães",
    role: {
      pt: "Advogada Estagiária",
      en: "Trainee Lawyer"
    },
    category: "interns",
    level: "intern",
    email: "shelsia.guimaraes@fbladvogados.com",
    phone: "+244 222 396 034",
    languages: ["Português", "English"],
    initials: "SG",
    bio: {
      pt: "Advogada Estagiária na FBL Advogados com intervenção em Direito Bancário, Financeiro, Societário e Apoio Regulatório.",
      en: "Trainee Lawyer at FBL Advogados practicing in Banking, Finance, Corporate Law, and Regulatory Support."
    },
    education: {
      pt: [
        "Licenciatura em Direito",
        "Inscrita na Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree",
        "Registered with the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["banking-finance", "corporate-investment-competition"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: {
      pt: "Guia Prático do Investimento Privado em Angola: Oportunidades e Incentivos Fiscais",
      en: "Practical Guide to Private Investment in Angola: Opportunities & Tax Incentives"
    },
    summary: {
      pt: "Análise exaustiva da Lei do Investimento Privado (LIP) angolana e os benefícios fiscais atribuídos pelo regime contratual e de declaração prévia.",
      en: "Comprehensive analysis of the Angolan Private Investment Law (LIP) and tax incentives granted under contractual and prior-declaration regimes."
    },
    content: {
      pt: "O regime jurídico do investimento privado em Angola sofreu alterações profundas destinadas a desburocratizar a entrada de capital estrangeiro e fomentar a diversificação económica nacional. Neste artigo especial, a equipa da FBL analisa os mecanismos de repatriação de dividendos, a tramitação junto da AIPEX e os créditos fiscais em sede de Imposto Industrial concedidos nas zonas prioritárias de desenvolvimento (Zonas A, B, C e D).",
      en: "The legal framework for private investment in Angola has undergone major modernizations designed to cut red tape for foreign direct capital and drive national economic diversification. In this briefing, FBL's team examines dividend repatriation mechanisms, AIPEX expedited registration, and corporate tax credits across development priority zones (Zones A, B, C, and D)."
    },
    date: "14 Fevereiro 2024",
    category: {
      pt: "Investimento & Regulatório",
      en: "Investment & Regulatory"
    },
    author: "FBL",
    readTime: "6 min"
  },
  {
    id: "pub-2",
    title: {
      pt: "O Novo Regime Cambial do BNA para o Setor Petrolífero e Mineração",
      en: "BNA's New Foreign Exchange Regime for Oil & Gas and Mining Sectors"
    },
    summary: {
      pt: "Impactos das novas instruções e avisos do Banco Nacional de Angola nas contas de moeda estrangeira e liquidação de fornecedores internacionais.",
      en: "Key impacts of new Banco Nacional de Angola notices on foreign currency accounts and settlements for global contractors."
    },
    content: {
      pt: "As directivas do BNA têm introduzido maior flexibilidade cambial para as companhias operadoras e sociedades de serviços petrolíferos. O presente memorando detalha os procedimentos obrigatórios para a abertura e movimentação de contas off-shore e os limites de retenção cambial autorizados.",
      en: "Recent BNA notices introduce heightened forex operational flexibility for oil operators and service companies. This memo details mandatory procedures for offshore account management and allowable foreign currency retention thresholds."
    },
    date: "28 Janeiro 2024",
    category: {
      pt: "Bancário & Energia",
      en: "Banking & Energy"
    },
    author: "FBL",
    readTime: "8 min"
  },
  {
    id: "pub-3",
    title: {
      pt: "Arbitragem Comercial em Angola: Execução de Decisões Estrangeiras e o Papel do Tribunal Supremo",
      en: "Commercial Arbitration in Angola: Foreign Award Enforcement & Supreme Court Precedents"
    },
    summary: {
      pt: "Estudo sobre a aplicação da Convenção de Nova Iorque e a célere revisão de sentenças arbitrais estrangeiras em jurisdição angolana.",
      en: "Study on the application of the New York Convention and expedited recognition of foreign arbitral awards in Angolan jurisdiction."
    },
    content: {
      pt: "Com a adesão de Angola à Convenção de Nova Iorque de 1958, o país consolidou-se como uma jurisdição atrativa e segura para a arbitragem internacional. Analisamos os mais recentes acórdãos do Tribunal Supremo em matéria de homologação e ordem pública internacional.",
      en: "Following Angola's accession to the 1958 New York Convention, the country has reinforced its standing as an attractive and predictable jurisdiction for international arbitration. We analyze recent Supreme Court rulings on recognition and public policy exceptions."
    },
    date: "12 Janeiro 2024",
    category: {
      pt: "Contencioso & Arbitragem",
      en: "Litigation & Arbitration"
    },
    author: "FBL",
    readTime: "10 min"
  }
];

export const OFFICE_INFO = {
  name: "FBL Advogados — Sociedade de Advogados, RL",
  building: "Edifício Kitanda",
  address: "Rua Cirilo da Conceição Silva, n.º 12, 2.º andar",
  city: "Luanda, Angola",
  fullAddress: "Edifício Kitanda, Rua Cirilo da Conceição Silva, n.º 12, 2.º andar, Luanda, Angola",
  phones: [
    "+244 927 754 297",
    "+244 927 754 298",
    "+244 927 173 010"
  ],
  phone: "+244 927 754 297",
  email: "fbl@fbladvogados.com",
  schedule: "Segunda a Sexta-feira: 08:30 – 18:00 (GMT+1)",
  googleMapsName: "Edifício Kitanda",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio+Kitanda+Rua+Cirilo+da+Concei%C3%A7%C3%A3o+Silva+Luanda",
  coordinates: {
    lat: -8.8147,
    lng: 13.2302
  }
};

export const DEPARTMENT_CONTACTS: DepartmentContact[] = [
  {
    id: "secretariado",
    name: {
      pt: "Secretariado Geral & Recepção",
      en: "General Secretariat & Reception"
    },
    email: "secretariado@fbladvogados.com",
    description: {
      pt: "Atendimento geral, expediente forense, acolhimento institucional e agendamento de reuniões.",
      en: "General office inquiries, legal correspondence, client reception, and meeting scheduling."
    }
  },
  {
    id: "facturacao",
    name: {
      pt: "Departamento de Facturação",
      en: "Billing & Invoicing Department"
    },
    email: "facturacao.fbl@fbladvogados.com",
    description: {
      pt: "Emissão e processamento de facturas, notas de despesas, adiantamentos e consultas fiscais de clientes.",
      en: "Issuance of invoices, statement of fee disbursements, retainer notes, and tax query handling."
    }
  },
  {
    id: "cobranca",
    name: {
      pt: "Departamento de Cobrança",
      en: "Credit & Collections Department"
    },
    email: "cobranca.fbl@fbladvogados.com",
    description: {
      pt: "Acompanhamento de contas correntes, confirmação de recebimentos e reconciliação financeira de processos.",
      en: "Accounts receivable management, payment receipts confirmation, and financial account reconciliation."
    }
  },
  {
    id: "arquivo",
    name: {
      pt: "Arquivo Central & Gestão Documental",
      en: "Central Archives & Document Records"
    },
    email: "arquivo.fbl@fbladvogados.com",
    description: {
      pt: "Custódia de processos findos, arquivo físico e digital, certidões judiciais e pedidos de desentranhamento.",
      en: "Custody of closed case files, physical & digital archiving, court records, and certified copies."
    }
  }
];

export const ADMINISTRATIVE_TEAM: AdministrativeStaff[] = [
  {
    id: "eunice-guerra",
    name: "Eunice Guerra",
    role: {
      pt: "Apoio Administrativo & Gestão",
      en: "Administrative Management & Support"
    },
    email: "eunice.guerra@fbladvogados.com"
  },
  {
    id: "valdimiro-grao",
    name: "Valdimiro Grão",
    role: {
      pt: "Gestão Operacional & Apoio aos Serviços",
      en: "Operations & Administrative Services Support"
    },
    email: "valdimiro.grao@fbladvogados.com"
  },
  {
    id: "fabio-goncalves",
    name: "Fábio Gonçalves",
    role: {
      pt: "Serviços Técnicos & Suporte Operacional",
      en: "Technical Services & Operational Support"
    },
    email: "fabio.goncalves@fbladvogados.com"
  }
];

export const findTeamMemberByName = (name: string): TeamMember | undefined => {
  if (!name) return undefined;
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\b(dr[a]?\.|doutor[a]?)\s+/gi, '')
      .trim();

  const cleanTarget = normalize(name);
  return TEAM_MEMBERS.find((m) => {
    const cleanName = normalize(m.name);
    return cleanName === cleanTarget || cleanName.includes(cleanTarget) || cleanTarget.includes(cleanName);
  });
};
