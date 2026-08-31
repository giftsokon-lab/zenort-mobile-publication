// ZENORT Communities - Sample Community Profiles
// PROTOTYPE DATA - For demonstration only

const COMMUNITIES = [
  {
    id: "comm-chililabombwe",
    name: "Chililabombwe District",
    province: "Southern",
    region: "Border region, near Zimbabwe/Botswana",
    population: "120,000 [PROTOTYPE]",
    mainSectors: ["Mining (historic)", "Agriculture", "Water infrastructure"],
    topNeeds: [
      "Reliable water access",
      "Post-mining livelihood support",
      "Educational infrastructure"
    ],
    activeInitiatives: 3,
    organizationsActive: 12,
    communityProfile: "[PROTOTYPE PROFILE]"
  },

  {
    id: "comm-chibombo",
    name: "Chibombo District",
    province: "Central",
    region: "Agricultural region, central province",
    population: "85,000 [PROTOTYPE]",
    mainSectors: ["Agriculture", "Education", "Health"],
    topNeeds: [
      "School infrastructure (labs, facilities)",
      "Market access for farmers",
      "Healthcare facility upgrades"
    ],
    activeInitiatives: 2,
    organizationsActive: 8,
    communityProfile: "[PROTOTYPE PROFILE]"
  },

  {
    id: "comm-mbala",
    name: "Mbala District",
    province: "Northern",
    region: "Northern highlands, tea-growing region",
    population: "65,000 [PROTOTYPE]",
    mainSectors: ["Agriculture (tea, coffee)", "Health", "Tourism"],
    topNeeds: [
      "Medicine availability at clinics",
      "Agricultural value chain development",
      "Health worker housing and retention"
    ],
    activeInitiatives: 2,
    organizationsActive: 6,
    communityProfile: "[PROTOTYPE PROFILE]"
  },

  {
    id: "comm-kitwe",
    name: "Kitwe",
    province: "Copperbelt",
    region: "Urban mining center",
    population: "450,000 [PROTOTYPE]",
    mainSectors: ["Mining", "Urban services", "Youth employment"],
    topNeeds: [
      "Youth vocational skills training",
      "Urban infrastructure maintenance",
      "Post-mining economic transition"
    ],
    activeInitiatives: 5,
    organizationsActive: 35,
    communityProfile: "[PROTOTYPE PROFILE]"
  },

  {
    id: "comm-lusaka-city",
    name: "Lusaka City",
    province: "Lusaka",
    region: "Capital city, urban center",
    population: "2,600,000 [PROTOTYPE]",
    mainSectors: ["Government", "Commerce", "Services", "Education"],
    topNeeds: [
      "Youth employment",
      "Urban informal settlement infrastructure",
      "Public transport systems",
      "Education quality improvement"
    ],
    activeInitiatives: 12,
    organizationsActive: 150,
    communityProfile: "[PROTOTYPE PROFILE]"
  },

  {
    id: "comm-chipata",
    name: "Chipata District",
    province: "Eastern",
    region: "Border region, natural resources",
    population: "180,000 [PROTOTYPE]",
    mainSectors: ["Agriculture", "Trade", "Natural resources"],
    topNeeds: [
      "Business credit access",
      "Market infrastructure",
      "Agricultural extension services"
    ],
    activeInitiatives: 1,
    organizationsActive: 5,
    communityProfile: "[PROTOTYPE PROFILE]"
  }
];

// Community data by province
const COMMUNITIES_BY_PROVINCE = {
  "Central": ["Chibombo District", "Kabwe", "Kapiri Mposhi"],
  "Copperbelt": ["Kitwe", "Ndola", "Chingola"],
  "Eastern": ["Chipata District", "Katete"],
  "Lusaka": ["Lusaka City", "Kafue"],
  "Northern": ["Mbala District", "Kasama", "Mbala"],
  "Northwestern": ["Solwezi"],
  "Southern": ["Chililabombwe District", "Livingstone", "Monze"],
  "Western": ["Mongu"]
};

// Community engagement indicators
const COMMUNITY_ENGAGEMENT = {
  "comm-chililabombwe": {
    observationsRecieved: 12,
    participatingOrganizations: 8,
    activeProjects: 1,
    communityMeetings: "Monthly [ILLUSTRATIVE]",
    engagementLevel: "High"
  }
};
