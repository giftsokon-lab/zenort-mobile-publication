// ZENORT Impact - Sample Impact Data & Stories
// PROTOTYPE DATA - For demonstration only

const IMPACT_STORIES = [
  {
    id: "impact-water-001",
    label: "[PROTOTYPE IMPACT STORY]",
    title: "Water Access Transforms Community Health - Chililabombwe",
    description: "How improved water access improved health outcomes and economic opportunity",
    linkedProject: "proj-water-chililabombwe-001",
    linkedObservation: "demo-water-001",
    outcomes: {
      populationServed: "50,000 [ILLUSTRATIVE]",
      newWaterPoints: "20 installed [PROTOTYPE]",
      householdsConnected: "500+ [ILLUSTRATIVE]",
      timeReduction: "From 3 hours to 15 minutes daily [PROTOTYPE MODEL]",
      economicGain: "$8.2M/year in productivity [ILLUSTRATIVE]"
    },
    healthMetrics: {
      waterborneIllnessReduction: "32% [PROTOTYPE MODEL]",
      childMortalityReduction: "12% [ILLUSTRATIVE]",
      schoolAttendance: "Increased 18% [PROTOTYPE]"
    },
    status: "In Progress [PROTOTYPE]"
  },

  {
    id: "impact-youth-001",
    label: "[PROTOTYPE IMPACT STORY]",
    title: "From Unemployment to Employment - Copperbelt Youth",
    description: "Youth vocational training program connects skills to jobs",
    linkedProject: "proj-youth-skills-001",
    outcomes: {
      trainingParticipants: "1,200 [ILLUSTRATIVE]",
      employmentRate: "68% employed within 6 months [PROTOTYPE]",
      averageIncome: "$280/month [ILLUSTRATIVE]",
      womenParticipation: "42% [PROTOTYPE]"
    },
    socialMetrics: {
      communityConfidence: "Increased [ILLUSTRATIVE]",
      youthEngagement: "High participation [PROTOTYPE]",
      reducedMigration: "15% fewer youth migrating [ILLUSTRATIVE]"
    },
    status: "Ongoing [PROTOTYPE]"
  },

  {
    id: "impact-health-001",
    label: "[PROTOTYPE IMPACT STORY]",
    title: "Rural Healthcare Strengthened - Northern Province",
    description: "Clinic medicine availability and health worker support improves community health",
    linkedProject: "proj-health-rural-001",
    outcomes: {
      medicineAvailability: "From 40% to 85% [PROTOTYPE]",
      antenatalCoverage: "Increased from 35% to 62% [ILLUSTRATIVE]",
      deliveryComplication: "Reduced from 18% to 12% [PROTOTYPE MODEL]",
      communityHealth: "Workers trained: 500+ [ILLUSTRATIVE]"
    },
    economicMetrics: {
      productivityGain: "Estimated $5.2M/year [ILLUSTRATIVE]",
      healthcostReduction: "Patient out-of-pocket reduced 20% [PROTOTYPE]"
    },
    status: "Planning Phase [PROTOTYPE]"
  }
];

// Impact metrics dashboard (illustrative)
const IMPACT_DASHBOARD = {
  label: "[PROTOTYPE IMPACT DASHBOARD]",
  note: "All metrics and percentages are illustrative for demonstration",
  totalBeneficiaries: "600,000+ [ILLUSTRATIVE]",
  activeProjects: 3,
  completedProjects: 0,
  placedYouth: "1,200 [PROTOTYPE]",
  populationWithWater: "50,000 additional [ILLUSTRATIVE]",
  economicGain: "$13.4M annually [PROTOTYPE MODEL]",
  healthImprovements: [
    "Reduced waterborne illness by 32% [PROTOTYPE]",
    "Improved maternal health outcomes by 27% [ILLUSTRATIVE]",
    "Increased child immunization by 18% [PROTOTYPE]"
  ],
  timeframe: "Within project timelines [ILLUSTRATIVE]"
};

// Impact measurement framework (illustrative)
const IMPACT_MEASUREMENT = {
  label: "[PROTOTYPE MEASUREMENT FRAMEWORK]",
  description: "This is illustrative of how ZENORT will track impact",
  phases: {
    baseline: {
      timing: "Before project start",
      measurement: "Current state assessment",
      metrics: "Baseline indicators collected"
    },
    midterm: {
      timing: "12-18 months into project",
      measurement: "Progress assessment",
      metrics: "Interim progress tracked"
    },
    endline: {
      timing: "Project completion",
      measurement: "Final impact assessment",
      metrics: "Outcome indicators measured"
    },
    sustainability: {
      timing: "12+ months after completion",
      measurement: "Sustainability assessment",
      metrics: "Lasting impact verified"
    }
  },
  dataQuality: "[PROTOTYPE - Actual system would use rigorous methodology]"
};
