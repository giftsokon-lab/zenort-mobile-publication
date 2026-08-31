// ZENORT Projects - Sample Data
// PROTOTYPE DATA - For demonstration only

const PROJECTS = [
  {
    id: "proj-water-chililabombwe-001",
    label: "[PROTOTYPE PROJECT]",
    title: "Chililabombwe Water Access Initiative",
    description: "Coordinated water infrastructure and service expansion",
    linkedOpportunity: "opp-water-chililabombwe-001",
    linkedObservations: ["demo-water-001"],
    status: "In Planning",
    startDate: "2024-10-01",
    endDate: "2026-10-01",
    budget: "$1.8M [PROTOTYPE]",
    province: "Southern",
    district: "Chililabombwe",
    partners: [
      "[Prototype] Ministry of Water - Government lead",
      "[Prototype] Local NGO - Implementation partner",
      "[Prototype] Water Utility - Technical support",
      "Community Water Committee - Community representative"
    ],
    beneficiaries: "50,000 [ILLUSTRATIVE]",
    dataNote: "This project is simulated for demonstration"
  },

  {
    id: "proj-youth-skills-001",
    label: "[PROTOTYPE PROJECT]",
    title: "[PROTOTYPE] Copperbelt Youth Vocational Training Hub",
    description: "Regional vocational training center connecting youth to employers",
    linkedOpportunity: "opp-youth-vocational-001",
    status: "Active",
    startDate: "2024-06-01",
    endDate: "2026-06-01",
    budget: "$2.1M [PROTOTYPE]",
    province: "Copperbelt",
    district: "Kitwe",
    partners: [
      "[Prototype] Ministry of Education",
      "[Prototype] Private Training Provider",
      "[Prototype] Employer Consortium",
      "[Prototype] Youth Organization"
    ],
    beneficiaries: "8,000 youth [ILLUSTRATIVE]",
    dataNote: "This project is simulated for demonstration"
  },

  {
    id: "proj-health-rural-001",
    label: "[PROTOTYPE PROJECT]",
    title: "[PROTOTYPE] Northern Province Healthcare Access Program",
    description: "Strengthen rural clinic capacity and community health worker network",
    linkedOpportunity: "opp-health-rural-001",
    status: "In Planning",
    startDate: "2024-12-01",
    endDate: "2027-12-01",
    budget: "$3.5M [PROTOTYPE]",
    province: "Northern",
    partners: [
      "[Prototype] Ministry of Health",
      "[Prototype] Pharmaceutical Distributor",
      "[Prototype] NGO Health Network",
      "[Prototype] Community Health Workers"
    ],
    beneficiaries: "200,000 [ILLUSTRATIVE]",
    dataNote: "This project is simulated for demonstration"
  }
];

// Project milestones (illustrative)
const PROJECT_MILESTONES = {
  "proj-water-chililabombwe-001": [
    {
      name: "Stakeholder workshop & planning",
      dueDate: "2024-11-15",
      status: "Upcoming"
    },
    {
      name: "Community needs assessment complete",
      dueDate: "2024-12-31",
      status: "Upcoming"
    },
    {
      name: "Infrastructure design finalized",
      dueDate: "2025-02-28",
      status: "Not started"
    },
    {
      name: "Construction begins",
      dueDate: "2025-03-15",
      status: "Not started"
    },
    {
      name: "50% construction complete",
      dueDate: "2025-09-30",
      status: "Not started"
    },
    {
      name: "Project completion",
      dueDate: "2026-10-01",
      status: "Not started"
    }
  ]
};

// Activity stream for projects
const PROJECT_ACTIVITY = {
  "proj-water-chililabombwe-001": [
    {
      date: "2024-08-29",
      event: "Citizen observation triggered opportunity identification",
      actor: "ZENORT Intelligence"
    },
    {
      date: "2024-08-30",
      event: "Opportunity matched with potential implementing partners",
      actor: "ZENORT Coordination"
    },
    {
      date: "2024-09-05",
      event: "Initial partner coordination meeting scheduled",
      actor: "Project Manager"
    }
  ]
};
