// ZENORT Patterns - Simulated Intelligence Data
// PROTOTYPE DATA - For demonstration only
// This is illustrative of what ZENORT intelligence layer will do

const IDENTIFIED_PATTERNS = [
  {
    id: "pattern-water-001",
    label: "[PROTOTYPE INTELLIGENCE]",
    title: "Water Access Crisis - Northern Corridor",
    description: "Multiple observations across Northern regions indicate systematic water infrastructure gap",
    sectors: ["Water & Sanitation"],
    provinces: ["Northern", "Luapula", "Muchinga"],
    observations: 12,
    timeframe: "Last 30 days",
    trend: {
      direction: "Rising",
      percentage: 24,
      period: "month-over-month"
    },
    confidence: "Medium [ILLUSTRATIVE]",
    relatedNeeds: 8,
    estimatedAffectedPopulation: "150,000+ [PROTOTYPE]",
    urgency: "High",
    dataNote: "This pattern is simulated to demonstrate ZENORT intelligence capability"
  },

  {
    id: "pattern-youth-001",
    label: "[PROTOTYPE INTELLIGENCE]",
    title: "Skills Gap - Urban Youth Employment",
    description: "Rising observations about youth lack of vocational skills in urban areas",
    sectors: ["Youth", "Education", "Jobs & Business"],
    provinces: ["Copperbelt", "Lusaka"],
    observations: 40,
    timeframe: "Last 60 days",
    trend: {
      direction: "Rising sharply",
      percentage: 38,
      period: "month-over-month"
    },
    confidence: "Medium [ILLUSTRATIVE]",
    relatedNeeds: 12,
    estimatedAffectedPopulation: "200,000+ [PROTOTYPE]",
    urgency: "High",
    dataNote: "This pattern is simulated to demonstrate ZENORT intelligence capability"
  },

  {
    id: "pattern-health-001",
    label: "[PROTOTYPE INTELLIGENCE]",
    title: "Rural Healthcare Service Gaps",
    description: "Systemic issues with medicine availability and healthcare access in rural clinics",
    sectors: ["Health"],
    provinces: ["Northern", "Eastern", "Northwestern"],
    observations: 28,
    timeframe: "Last 90 days",
    trend: {
      direction: "Stable but persistent",
      percentage: 5,
      period: "month-over-month"
    },
    confidence: "Medium [ILLUSTRATIVE]",
    relatedNeeds: 15,
    estimatedAffectedPopulation: "500,000+ [PROTOTYPE]",
    urgency: "Critical",
    dataNote: "This pattern is simulated to demonstrate ZENORT intelligence capability"
  },

  {
    id: "pattern-infra-001",
    label: "[PROTOTYPE INTELLIGENCE]",
    title: "Rural Infrastructure Deterioration",
    description: "Interconnected issues with road maintenance, electricity access, and water systems",
    sectors: ["Infrastructure", "Water & Sanitation", "Transportation"],
    provinces: ["Western", "Southern", "Eastern"],
    observations: 35,
    timeframe: "Last 60 days",
    trend: {
      direction: "Rising",
      percentage: 16,
      period: "month-over-month"
    },
    confidence: "Medium [ILLUSTRATIVE]",
    relatedNeeds: 18,
    estimatedAffectedPopulation: "400,000+ [PROTOTYPE]",
    urgency: "High",
    dataNote: "This pattern is simulated to demonstrate ZENORT intelligence capability"
  }
];

// Pattern-to-opportunity mapping (illustrative)
const PATTERN_INSIGHTS = {
  "pattern-water-001": {
    potentialOpportunities: [
      "Integrated water infrastructure development program",
      "Community water committee training initiative",
      "Private sector water utility partnership",
      "NGO-led water security advocacy"
    ],
    policyImplications: [
      "National water security strategy review needed",
      "District-level coordination mechanism required",
      "Budget allocation for maintenance infrastructure"
    ],
    actorGaps: [
      "Limited district-level coordination bodies",
      "Insufficient local implementation capacity",
      "Private sector underutilized in planning"
    ]
  }
};

// Trend analysis (illustrative)
const TREND_ANALYSIS = {
  "Last 30 days": {
    totalObservations: 150,
    byProvince: {
      "Central": 12,
      "Copperbelt": 18,
      "Eastern": 14,
      "Luapula": 8,
      "Lusaka": 35,
      "Muchinga": 6,
      "Northern": 22,
      "Northwestern": 16,
      "Southern": 14,
      "Western": 5
    },
    bySector: {
      "Water & Sanitation": 28,
      "Education": 22,
      "Health": 25,
      "Youth": 35,
      "Jobs & Business": 18,
      "Infrastructure": 22
    },
    topTrending: [
      "Youth employment opportunities [+38%]",
      "Water infrastructure access [+24%]",
      "Rural healthcare services [+12%]"
    ]
  },
  "Note": "[PROTOTYPE DATA - Illustrative for demonstration]"
};
