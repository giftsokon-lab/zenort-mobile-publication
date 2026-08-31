// ZENORT Gaps - Supply vs. Demand Analysis
// PROTOTYPE DATA - For demonstration only

const GAPS_BY_OPPORTUNITY = {
  "opp-water-chililabombwe-001": {
    id: "gap-water-001",
    label: "[PROTOTYPE GAP ANALYSIS]",
    title: "Water Access Gap - Chililabombwe",
    opportunity: "opp-water-chililabombwe-001",
    relatedNeed: "Reliable water access in Chililabombwe",
    
    supplyAnalysis: {
      currentCoverage: "60% [PROTOTYPE]",
      unmetDemand: "40% [PROTOTYPE]",
      affectedPopulation: "50,000 people",
      underservedPopulation: "20,000+ [ILLUSTRATIVE]"
    },
    
    fundingGap: {
      annual: "$2.5M [ILLUSTRATIVE]",
      capex: "$1.8M [PROTOTYPE]",
      opex: "$0.7M annually [ILLUSTRATIVE]",
      statusSummary: "Significant funding required; partnership opportunities exist"
    },
    
    coordinationGap: {
      description: "Multiple government agencies operating independently",
      agencies: [
        "Ministry of Water",
        "Ministry of Local Government",
        "Provincial Development Office"
      ],
      issue: "No unified coordination mechanism",
      solution: "District-level water coordination body needed"
    },
    
    capacityGap: {
      description: "Local infrastructure maintenance capacity is limited",
      gaps: [
        "Technical capacity for infrastructure maintenance",
        "District-level project management resources",
        "Community management training delivery",
        "Monitoring and evaluation systems"
      ],
      solution: "Build local capacity through project implementation"
    },
    
    knowledgeGap: {
      description: "No pre-planning committee at district level",
      impact: "Decisions made without community input",
      solution: "Establish district water security planning committee"
    },
    
    bottlenecks: [
      "Limited district-level coordination",
      "Insufficient maintenance infrastructure",
      "Private sector underutilized in planning",
      "Community voice not systematized"
    ],
    
    priorityActions: [
      "Establish district coordination mechanism",
      "Mobilize private sector infrastructure expertise",
      "Coordinate NGO efforts through unified framework",
      "Engage community in planning and oversight"
    ],
    
    dataNote: "This gap analysis is simulated for demonstration"
  },

  "opp-youth-vocational-001": {
    id: "gap-youth-001",
    label: "[PROTOTYPE GAP ANALYSIS]",
    title: "Youth Skills Gap - Copperbelt/Lusaka",
    opportunity: "opp-youth-vocational-001",
    relatedNeed: "Vocational training in urban areas",
    
    supplyAnalysis: {
      currentCoverage: "35% [PROTOTYPE]",
      unmetDemand: "65% [PROTOTYPE]",
      affectedPopulation: "200,000 youth",
      underservedPopulation: "130,000+ [ILLUSTRATIVE]"
    },
    
    fundingGap: {
      annual: "$4.2M [ILLUSTRATIVE]",
      capex: "$3.2M [PROTOTYPE]",
      opex: "$1.0M annually [ILLUSTRATIVE]",
      statusSummary: "Major funding gap; government + donor partnership needed"
    },
    
    coordinationGap: {
      description: "Training providers operate independently without labor market linkage",
      agencies: [
        "Ministry of Education",
        "Ministry of Youth & Sports",
        "Ministry of Labor",
        "Private training operators"
      ],
      issue: "No system linking training to jobs",
      solution: "National Skills-to-Jobs coordination framework"
    },
    
    capacityGap: {
      description: "Limited training delivery infrastructure in underserved regions",
      gaps: [
        "Trainer capacity building",
        "Employer engagement systems",
        "Job placement support",
        "Equipment and learning resources"
      ],
      solution: "Expand training centers and develop trainer network"
    },
    
    knowledgeGap: {
      description: "Labor market data not systematized",
      impact: "Training not aligned with actual employer demand",
      solution: "Establish labor market intelligence system"
    },
    
    bottlenecks: [
      "Training not aligned with labor demand",
      "Limited employer engagement",
      "Equipment and resource constraints",
      "Weak job placement mechanisms"
    ],
    
    priorityActions: [
      "Map employer skills demand",
      "Partner with private sector training providers",
      "Establish job placement system",
      "Develop employer engagement strategy"
    ],
    
    dataNote: "This gap analysis is simulated for demonstration"
  },

  "opp-health-rural-001": {
    id: "gap-health-001",
    label: "[PROTOTYPE GAP ANALYSIS]",
    title: "Rural Healthcare Resilience Gap",
    opportunity: "opp-health-rural-001",
    relatedNeed: "Medicine availability at rural clinics",
    
    supplyAnalysis: {
      currentCoverage: "40% [PROTOTYPE]",
      unmetDemand: "60% [PROTOTYPE]",
      affectedPopulation: "500,000 people",
      underservedPopulation: "300,000+ [ILLUSTRATIVE]"
    },
    
    fundingGap: {
      annual: "$8.5M [ILLUSTRATIVE]",
      capex: "$5.8M [PROTOTYPE]",
      opex: "$2.7M annually [ILLUSTRATIVE]",
      statusSummary: "Critical funding gap; development partner involvement essential"
    },
    
    coordinationGap: {
      description: "Healthcare supply chain fragmented",
      agencies: [
        "Ministry of Health",
        "Pharmaceutical supply entities",
        "Community health networks",
        "District health offices"
      ],
      issue: "No unified medicine supply coordination",
      solution: "National medicine supply coordination system"
    },
    
    capacityGap: {
      description: "Health worker retention and training gaps",
      gaps: [
        "Health worker housing and incentives",
        "In-service training capacity",
        "Supply chain management systems",
        "Monitoring systems for stock levels"
      ],
      solution: "Invest in health system infrastructure and incentives"
    },
    
    knowledgeGap: {
      description: "Health service data not standardized",
      impact: "Cannot track stock availability or service gaps",
      solution: "Implement health management information system"
    },
    
    bottlenecks: [
      "Medicine supply chain unreliable",
      "Health worker shortages in rural areas",
      "Limited supply chain management systems",
      "Weak monitoring of service delivery"
    ],
    
    priorityActions: [
      "Strengthen medicine supply chain",
      "Improve health worker retention",
      "Develop supply chain management capacity",
      "Implement service monitoring system"
    ],
    
    dataNote: "This gap analysis is simulated for demonstration"
  },

  "opp-infra-rural-001": {
    id: "gap-infra-001",
    label: "[PROTOTYPE GAP ANALYSIS]",
    title: "Rural Infrastructure Deterioration Gap",
    opportunity: "opp-infra-rural-001",
    relatedNeed: "Road maintenance in rural areas",
    
    supplyAnalysis: {
      currentCoverage: "45% [PROTOTYPE]",
      unmetDemand: "55% [PROTOTYPE]",
      affectedPopulation: "400,000 people",
      underservedPopulation: "220,000+ [ILLUSTRATIVE]"
    },
    
    fundingGap: {
      annual: "$15.2M [ILLUSTRATIVE]",
      capex: "$12.5M [PROTOTYPE]",
      opex: "$2.7M annually [ILLUSTRATIVE]",
      statusSummary: "Massive funding gap; integrated development program essential"
    },
    
    coordinationGap: {
      description: "Infrastructure sectors (roads, water, energy) siloed",
      agencies: [
        "Ministry of Infrastructure",
        "Ministry of Water",
        "Ministry of Energy",
        "Provincial authorities"
      ],
      issue: "No cross-sector integrated planning",
      solution: "Integrated rural infrastructure master plan"
    },
    
    capacityGap: {
      description: "Limited local maintenance and construction capacity",
      gaps: [
        "Equipment and tools for maintenance",
        "Technical staff training",
        "Project management capacity",
        "Community asset management"
      ],
      solution: "Build local contractor and community capacity"
    },
    
    knowledgeGap: {
      description: "Infrastructure condition data not current",
      impact: "Maintenance prioritization not evidence-based",
      solution: "Establish infrastructure asset management system"
    },
    
    bottlenecks: [
      "Cross-sector coordination lacks framework",
      "Local contracting capacity limited",
      "No integrated planning system",
      "Maintenance funding insufficient"
    ],
    
    priorityActions: [
      "Develop integrated infrastructure master plan",
      "Support local contractor development",
      "Establish maintenance fund mechanism",
      "Build community maintenance capacity"
    ],
    
    dataNote: "This gap analysis is simulated for demonstration"
  }
};

// Summary view for dashboard
const CRITICAL_GAPS_SUMMARY = [
  {
    sector: "Water & Sanitation",
    gap: "40% of population lacks reliable access",
    funding: "$2.5M annual",
    priority: "Critical"
  },
  {
    sector: "Youth Employment",
    gap: "65% of youth lack vocational training",
    funding: "$4.2M annual",
    priority: "Critical"
  },
  {
    sector: "Health",
    gap: "60% of rural population lacks reliable medicine access",
    funding: "$8.5M annual",
    priority: "Critical"
  },
  {
    sector: "Infrastructure",
    gap: "55% of rural areas lack adequate infrastructure",
    funding: "$15.2M annual",
    priority: "Critical"
  }
];
