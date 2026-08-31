// ZENORT Observations - Sample Data
// PROTOTYPE DATA - For demonstration only

const SAMPLE_OBSERVATIONS = [
  {
    id: "demo-water-001",
    type: "DEMONSTRATION",
    observation: "A community has unreliable access to clean water.",
    sector: "Water & Sanitation",
    location: "Chililabombwe District, Southern Province",
    submittedDate: "2024-08-29",
    status: "Opportunity Identified",
    isDemo: true
  },
  {
    id: "demo-education-001",
    observation: "[PROTOTYPE] Schools in Chibombo lack functional science laboratories.",
    sector: "Education",
    location: "Chibombo District, Central Province",
    submittedDate: "2024-08-15",
    status: "Under Review",
    isDemo: true
  },
  {
    id: "demo-health-001",
    observation: "[PROTOTYPE] Rural health clinic experiences frequent medicine stockouts.",
    sector: "Health",
    location: "Mbala District, Northern Province",
    submittedDate: "2024-08-22",
    status: "Classified",
    isDemo: true
  },
  {
    id: "demo-youth-001",
    observation: "[PROTOTYPE] Youth in Kitwe lack vocational training opportunities.",
    sector: "Youth",
    location: "Kitwe, Copperbelt Province",
    submittedDate: "2024-08-10",
    status: "Opportunity Identified",
    isDemo: true
  }
];

// The main demonstration journey - Water Access
const DEMO_JOURNEY = {
  observation: {
    id: "demo-water-001",
    text: "A community has unreliable access to clean water.",
    submittedBy: "Anonymous Citizen",
    submittedDate: "2024-08-29",
    location: "Chililabombwe District, Southern Province",
    sector: "Water & Sanitation"
  },

  need: {
    category: "Water & Sanitation",
    description: "Reliable access to safe drinking water",
    priority: "HIGH",
    affectedPopulation: "~50,000 people [PROTOTYPE]",
    location: "Chililabombwe District",
    province: "Southern Province"
  },

  pattern: {
    label: "[PROTOTYPE INTELLIGENCE - Simulated]",
    analysis: "ZENORT pattern recognition identified:",
    similarObservations: 12,
    timeframe: "This month",
    relatedNeeds: 8,
    geographicCluster: "Northern Zambia",
    clusterReports: 7,
    trend: "Rising",
    trendPercentage: 24,
    confidence: "Medium [ILLUSTRATIVE]",
    dataSource: "Simulated for demonstration"
  },

  gap: {
    label: "[PROTOTYPE ANALYSIS]",
    description: "Unmet need vs. available capacity",
    supplyMet: 60,
    supplyGap: 40,
    fundingGapAnnual: "$2.5M [ILLUSTRATIVE]",
    coordinationGap: "3 separate government agencies without coordination",
    knowledgeGap: "No pre-planning committee in district",
    capacityGap: "Limited local infrastructure maintenance capacity"
  },

  opportunity: {
    label: "[PROTOTYPE OPPORTUNITY]",
    id: "opp-water-chililabombwe-001",
    title: "Multi-stakeholder Water Access Initiative",
    description: "Connect identified need to available capacity through coordinated partnership",
    rationale: "Address water security gap through integrated resource planning",
    estimatedBeneficiaries: "50,000 [ILLUSTRATIVE]",
    timeline: "18-24 months [PROTOTYPE]",
    keyActorsNeeded: ["Government", "NGO", "Community", "Private Sector"],
    estimatedCost: "$1.8M [PROTOTYPE]",
    potentialImpact: "Universal access to reliable water within district"
  },

  actors: {
    label: "[PROTOTYPE STAKEHOLDER MAPPING]",
    government: [
      {
        name: "Ministry of Water",
        role: "Policy and oversight",
        responsibility: "Enable and coordinate water infrastructure",
        example: "[Simulated organization]"
      },
      {
        name: "Local Government Authority - Chililabombwe",
        role: "Local implementation",
        responsibility: "Community engagement, local coordination",
        example: "[Simulated organization]"
      }
    ],
    implementer: [
      {
        name: "Water Utility Company",
        role: "Infrastructure provider",
        responsibility: "Design and operate water systems",
        example: "[Prototype role]"
      },
      {
        name: "Infrastructure Contractor",
        role: "Construction and installation",
        responsibility: "Build water infrastructure",
        example: "[Prototype role]"
      }
    ],
    partner: [
      {
        name: "[PROTOTYPE] WASH Advocacy Organization",
        role: "Advocacy and monitoring",
        responsibility: "Ensure quality, community benefit",
        example: "[Simulated organization]"
      },
      {
        name: "[PROTOTYPE] Community Health Workers Network",
        role: "Community mobilization",
        responsibility: "Education and engagement",
        example: "[Simulated organization]"
      }
    ],
    community: [
      {
        name: "Local Water Committee",
        role: "Community representation",
        responsibility: "Ensure community voice in planning",
        example: "[Prototype role]"
      },
      {
        name: "Community Mobilizers",
        role: "Grassroots engagement",
        responsibility: "Build support and participation",
        example: "[Prototype role]"
      }
    ]
  },

  project: {
    label: "[PROTOTYPE PROJECT]",
    id: "proj-water-chililabombwe-001",
    title: "Chililabombwe Water Access Initiative",
    status: "In Planning",
    description: "Coordinated water infrastructure and service expansion",
    partners: [
      "Ministry of Water (Government)",
      "[Prototype] Local NGO",
      "Community Water Committee",
      "[Prototype] Infrastructure Partner"
    ],
    budget: "$1.8M [PROTOTYPE]",
    timeline: "Started Q4 2024 [ILLUSTRATIVE]",
    duration: "24 months",
    components: [
      "Survey and planning (4 months)",
      "Infrastructure development (12 months)",
      "Community training and handover (6 months)",
      "Monitoring and support (2 months)"
    ],
    expectedOutcomes: [
      "20 new water points installed",
      "500+ households with direct connection",
      "District-wide maintenance system established",
      "Community water committee operational"
    ]
  },

  impact: {
    label: "[PROTOTYPE IMPACT MODEL]",
    expectedOutcomes: {
      populationServed: "50,000 people",
      accessImprovement: "45,000 additional people with reliable access [ILLUSTRATIVE]",
      timeToWater: "Reduced from 3 hours to 15 minutes average",
      economicBenefit: "$8.2M/year in productivity gain [ILLUSTRATIVE MODEL]"
    },
    healthOutcomes: {
      waterborneIllnessReduction: "32% reduction [PROTOTYPE MODEL]",
      childMortalityReduction: "12% reduction in water-related child mortality [ILLUSTRATIVE]",
      maternalHealth: "Improved health outcomes for pregnant women"
    },
    socialOutcomes: {
      childrenInSchool: "Increased school attendance, especially girls",
      laborProductivity: "More time for productive activities vs. water collection",
      communityOrganization: "Strengthened local water management structures"
    },
    measurement: {
      baseline: "Collected before project start",
      midterm: "Measured at 12 months [PROTOTYPE]",
      endline: "Measured at project completion",
      methodology: "[ILLUSTRATIVE - Simulated for demonstration]"
    }
  },

  civicMemory: {
    label: "[PROTOTYPE CIVIC MEMORY RECORD]",
    description: "This observation becomes a permanent institutional record",
    whatIsPreserved: [
      "Original citizen observation",
      "How need was classified and analyzed",
      "Which patterns triggered opportunity identification",
      "Which actors were engaged and why",
      "What project resulted and its status",
      "Measurable outcomes and impact",
      "Lessons learned for future reference"
    ],
    usage: [
      "Referenced in future policy discussions on water security",
      "Used to train new civic intelligence analysts",
      "Linked to other related observations nationally",
      "Evidence of citizen voice in government decision-making",
      "Historical context for impact reporting"
    ],
    accessLevel: "Public - Contributes to national narrative",
    linkedObservations: 7,
    linkedProjects: 1
  }
};
