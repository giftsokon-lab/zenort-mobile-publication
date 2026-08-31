// ZENORT Resources & Supply - Sample Data
// PROTOTYPE DATA - For demonstration only

const RESOURCES_BY_SECTOR = {
  "Water & Sanitation": [
    {
      id: "res-water-001",
      name: "[PROTOTYPE] National Water Utility Corporation",
      type: "Service Provider",
      province: "Multiple",
      specialization: "Water infrastructure, technical expertise",
      capacity: "High - National reach [ILLUSTRATIVE]"
    },
    {
      id: "res-water-002",
      name: "[PROTOTYPE] Community Water Schemes Network",
      type: "Community-Based Organization",
      province: "Southern, Eastern",
      specialization: "Local water management, community engagement",
      capacity: "Medium - 150+ schemes [ILLUSTRATIVE]"
    },
    {
      id: "res-water-003",
      name: "[PROTOTYPE] WASH NGO Consortium",
      type: "NGO",
      province: "Multiple",
      specialization: "Water advocacy, monitoring, community training",
      capacity: "Medium - 5 partner organizations [ILLUSTRATIVE]"
    }
  ],

  "Education": [
    {
      id: "res-edu-001",
      name: "[PROTOTYPE] Ministry of Education & Literacy",
      type: "Government",
      province: "National",
      specialization: "Policy, curriculum, teacher training",
      capacity: "High - Central coordination [ILLUSTRATIVE]"
    },
    {
      id: "res-edu-002",
      name: "[PROTOTYPE] Teachers Training College Network",
      type: "Educational Institution",
      province: "Multiple",
      specialization: "Teacher capacity development",
      capacity: "Medium - 8 colleges nationwide [ILLUSTRATIVE]"
    },
    {
      id: "res-edu-003",
      name: "[PROTOTYPE] Education Partnership Fund",
      type: "Funding Organization",
      province: "National",
      specialization: "Infrastructure financing, program support",
      capacity: "High - $15M annual budget [ILLUSTRATIVE]"
    }
  ],

  "Health": [
    {
      id: "res-health-001",
      name: "[PROTOTYPE] Ministry of Health",
      type: "Government",
      province: "National",
      specialization: "Healthcare policy, service coordination",
      capacity: "High - National coverage [ILLUSTRATIVE]"
    },
    {
      id: "res-health-002",
      name: "[PROTOTYPE] Community Health Workers Association",
      type: "Professional Network",
      province: "Multiple",
      specialization: "Frontline healthcare delivery, community engagement",
      capacity: "High - 10,000+ CHWs [ILLUSTRATIVE]"
    },
    {
      id: "res-health-003",
      name: "[PROTOTYPE] Pharmaceutical Supply Partner",
      type: "Private Sector",
      province: "Multiple",
      specialization: "Medicine procurement, logistics",
      capacity: "High - National distribution [ILLUSTRATIVE]"
    }
  ],

  "Youth": [
    {
      id: "res-youth-001",
      name: "[PROTOTYPE] Ministry of Youth & Sports",
      type: "Government",
      province: "National",
      specialization: "Youth policy, programming",
      capacity: "Medium - Policy coordination [ILLUSTRATIVE]"
    },
    {
      id: "res-youth-002",
      name: "[PROTOTYPE] Vocational Training Providers Association",
      type: "Private Sector Network",
      province: "Multiple",
      specialization: "Skills training, employment linkage",
      capacity: "Medium - 50+ providers [ILLUSTRATIVE]"
    },
    {
      id: "res-youth-003",
      name: "[PROTOTYPE] Youth Employment Fund",
      type: "Funding Organization",
      province: "National",
      specialization: "Youth job creation, skills training",
      capacity: "High - $8M annual allocation [ILLUSTRATIVE]"
    }
  ],

  "Infrastructure": [
    {
      id: "res-infra-001",
      name: "[PROTOTYPE] Ministry of Infrastructure",
      type: "Government",
      province: "National",
      specialization: "Infrastructure policy, coordination",
      capacity: "High - National planning [ILLUSTRATIVE]"
    },
    {
      id: "res-infra-002",
      name: "[PROTOTYPE] Construction Contractors Association",
      type: "Private Sector Network",
      province: "Multiple",
      specialization: "Infrastructure development, maintenance",
      capacity: "Medium - 200+ registered firms [ILLUSTRATIVE]"
    },
    {
      id: "res-infra-003",
      name: "[PROTOTYPE] Infrastructure Investment Fund",
      type: "Funding Organization",
      province: "National",
      specialization: "Infrastructure financing",
      capacity: "High - $50M annual budget [ILLUSTRATIVE]"
    }
  ]
};

// Supply mapping (illustrative)
const SUPPLY_ANALYSIS = {
  "Water & Sanitation": {
    label: "[PROTOTYPE SUPPLY ANALYSIS]",
    availableCapacity: "60% of identified need [ILLUSTRATIVE]",
    gap: "40% unmet [ILLUSTRATIVE]",
    bottlenecks: [
      "Limited district-level coordination",
      "Insufficient maintenance infrastructure",
      "Private sector underutilized in planning"
    ],
    opportunities: [
      "Engage existing community water schemes",
      "Mobilize private sector infrastructure expertise",
      "Coordinate NGO efforts through unified framework"
    ]
  }
};

// Community capacity assessment (illustrative)
const COMMUNITY_RESOURCES = {
  "Chililabombwe District": {
    label: "[PROTOTYPE COMMUNITY CAPACITY]",
    localOrganizations: 15,
    communityCommittees: 8,
    trainingCapacity: "Medium [ILLUSTRATIVE]",
    laborAvailable: "Yes - underutilized [ILLUSTRATIVE]",
    localLeadership: "Strong - formal structures present"
  }
};
