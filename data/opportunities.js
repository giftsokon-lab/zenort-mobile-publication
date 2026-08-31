// ZENORT Opportunities - Sample Data
// PROTOTYPE DATA - For demonstration only

const OPPORTUNITIES = [
  {
    id: "opp-water-chililabombwe-001",
    label: "[PROTOTYPE OPPORTUNITY]",
    title: "Chililabombwe Water Access Initiative",
    description: "Multi-stakeholder partnership to address water infrastructure gap in Southern Province",
    relatedObservations: ["demo-water-001"],
    relatedPatterns: ["pattern-water-001"],
    severity: "High",
    estimatedBeneficiaries: "50,000 [ILLUSTRATIVE]",
    estimatedCost: "$1.8M [PROTOTYPE]",
    timeline: "18-24 months",
    keyActors: ["Government", "NGO", "Private Sector", "Community"],
    status: "Identified - Awaiting coordination",
    fundingStatus: "Seeking partners [PROTOTYPE]",
    estimatedImpact: "Universal water access within district",
    dataNote: "This opportunity is simulated for demonstration"
  },

  {
    id: "opp-youth-vocational-001",
    label: "[PROTOTYPE OPPORTUNITY]",
    title: "Urban Youth Vocational Skills Program",
    description: "Coordinated vocational training bridging demand from employers and youth supply in Copperbelt/Lusaka",
    relatedPatterns: ["pattern-youth-001"],
    severity: "High",
    estimatedBeneficiaries: "15,000 youth [PROTOTYPE]",
    estimatedCost: "$3.2M [PROTOTYPE]",
    timeline: "24 months",
    keyActors: ["Government Ministry", "Private Training Providers", "Employers", "Youth Organizations"],
    status: "Identified - Planning phase",
    fundingStatus: "Seeking lead partner [PROTOTYPE]",
    estimatedImpact: "8,000 youth employed within 12 months [ILLUSTRATIVE]",
    dataNote: "This opportunity is simulated for demonstration"
  },

  {
    id: "opp-health-rural-001",
    label: "[PROTOTYPE OPPORTUNITY]",
    title: "Rural Healthcare Resilience Initiative",
    description: "Strengthen rural clinic capacity through medicine supply system and community health worker network",
    relatedPatterns: ["pattern-health-001"],
    severity: "Critical",
    estimatedBeneficiaries: "500,000 [ILLUSTRATIVE]",
    estimatedCost: "$5.8M [PROTOTYPE]",
    timeline: "36 months",
    keyActors: ["Ministry of Health", "Pharmaceutical Partners", "NGO Network", "Communities"],
    status: "Identified - Awaiting champion",
    fundingStatus: "Major funding needed [PROTOTYPE]",
    estimatedImpact: "Medicine availability increased 85% [ILLUSTRATIVE]",
    dataNote: "This opportunity is simulated for demonstration"
  },

  {
    id: "opp-infra-rural-001",
    label: "[PROTOTYPE OPPORTUNITY]",
    title: "Integrated Rural Infrastructure Development",
    description: "Cross-sector infrastructure program addressing water, roads, and energy gaps holistically",
    relatedPatterns: ["pattern-infra-001"],
    severity: "High",
    estimatedBeneficiaries: "400,000 [ILLUSTRATIVE]",
    estimatedCost: "$12.5M [PROTOTYPE]",
    timeline: "48 months",
    keyActors: ["Government Infrastructure Ministry", "Private Contractors", "Provincial Government", "Communities"],
    status: "Identified - Early coordination",
    fundingStatus: "Seeking development partner [PROTOTYPE]",
    estimatedImpact: "Infrastructure access indicators improve 60%+ [ILLUSTRATIVE]",
    dataNote: "This opportunity is simulated for demonstration"
  }
];

// Opportunity components (illustrative)
const OPPORTUNITY_COMPONENTS = {
  "opp-water-chililabombwe-001": {
    components: [
      {
        name: "Water System Assessment",
        duration: "2 months",
        budget: "$150K [PROTOTYPE]"
      },
      {
        name: "Infrastructure Development",
        duration: "12 months",
        budget: "$1.2M [PROTOTYPE]"
      },
      {
        name: "Community Training & Governance",
        duration: "6 months",
        budget: "$300K [PROTOTYPE]"
      },
      {
        name: "Monitoring & Support",
        duration: "4 months",
        budget: "$150K [PROTOTYPE]"
      }
    ]
  }
};
