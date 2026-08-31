// ZENORT Needs - Sample Data
// PROTOTYPE DATA - For demonstration only

const NEEDS_BY_SECTOR = {
  "Water & Sanitation": [
    {
      id: "need-water-001",
      title: "Reliable water access in Chililabombwe",
      description: "[PROTOTYPE] Communities lack consistent access to clean drinking water",
      province: "Southern",
      district: "Chililabombwe",
      severity: "High",
      observations: 12,
      trend: "Rising"
    },
    {
      id: "need-water-002",
      title: "[PROTOTYPE] Sanitation facilities in rural schools",
      description: "Limited or non-functional toilet facilities",
      province: "Central",
      district: "Mumbwa",
      severity: "Medium",
      observations: 7,
      trend: "Stable"
    }
  ],
  "Education": [
    {
      id: "need-edu-001",
      title: "[PROTOTYPE] Science laboratory equipment in schools",
      description: "Rural schools lack functional science labs",
      province: "Central",
      district: "Chibombo",
      severity: "High",
      observations: 8,
      trend: "Rising"
    },
    {
      id: "need-edu-002",
      title: "[PROTOTYPE] Teacher housing in remote areas",
      description: "Difficulty retaining teachers without housing",
      province: "Northern",
      district: "Mbala",
      severity: "Medium",
      observations: 5,
      trend: "Stable"
    }
  ],
  "Health": [
    {
      id: "need-health-001",
      title: "[PROTOTYPE] Medicine availability at rural clinics",
      description: "Frequent stockouts of essential medications",
      province: "Northern",
      district: "Mbala",
      severity: "High",
      observations: 10,
      trend: "Rising"
    },
    {
      id: "need-health-002",
      title: "[PROTOTYPE] Maternal healthcare access",
      description: "Limited antenatal and delivery services in remote districts",
      province: "Northwestern",
      district: "Solwezi",
      severity: "High",
      observations: 15,
      trend: "Stable"
    }
  ],
  "Youth": [
    {
      id: "need-youth-001",
      title: "[PROTOTYPE] Vocational training in urban areas",
      description: "Youth lack skills training opportunities",
      province: "Copperbelt",
      district: "Kitwe",
      severity: "High",
      observations: 18,
      trend: "Rising"
    },
    {
      id: "need-youth-002",
      title: "[PROTOTYPE] Youth employment opportunities",
      description: "Limited job market for young people",
      province: "Lusaka",
      district: "Lusaka City",
      severity: "High",
      observations: 22,
      trend: "Rising"
    }
  ],
  "Jobs & Business": [
    {
      id: "need-jobs-001",
      title: "[PROTOTYPE] Market access for small farmers",
      description: "Farmers struggle to connect to viable markets",
      province: "Southern",
      district: "Monze",
      severity: "High",
      observations: 14,
      trend: "Stable"
    },
    {
      id: "need-jobs-002",
      title: "[PROTOTYPE] Business credit access",
      description: "Small businesses face difficulty accessing working capital",
      province: "Eastern",
      district: "Chipata",
      severity: "Medium",
      observations: 9,
      trend: "Rising"
    }
  ],
  "Infrastructure": [
    {
      id: "need-infra-001",
      title: "[PROTOTYPE] Road maintenance in rural areas",
      description: "Rural roads deteriorate, limiting market access",
      province: "Western",
      district: "Kaoma",
      severity: "High",
      observations: 11,
      trend: "Rising"
    },
    {
      id: "need-infra-002",
      title: "[PROTOTYPE] Reliable electricity access",
      description: "Limited grid reach in remote districts",
      province: "Luapula",
      district: "Kawambwa",
      severity: "High",
      observations: 13,
      trend: "Rising"
    }
  ]
};

// Geographic distribution of needs
const NEEDS_BY_PROVINCE = {
  "Southern": [
    "Reliable water access in Chililabombwe",
    "[PROTOTYPE] Market access for small farmers",
    "[PROTOTYPE] Infrastructure for smallholder agriculture"
  ],
  "Central": [
    "[PROTOTYPE] Science laboratory equipment in schools",
    "[PROTOTYPE] Sanitation facilities in rural schools",
    "[PROTOTYPE] Healthcare facility upgrades"
  ],
  "Northern": [
    "[PROTOTYPE] Medicine availability at rural clinics",
    "[PROTOTYPE] Teacher housing in remote areas",
    "[PROTOTYPE] Road infrastructure maintenance"
  ],
  "Copperbelt": [
    "[PROTOTYPE] Vocational training for youth",
    "[PROTOTYPE] Post-mining livelihood support",
    "[PROTOTYPE] Environmental remediation"
  ],
  "Lusaka": [
    "[PROTOTYPE] Youth employment opportunities",
    "[PROTOTYPE] Urban informal settlement infrastructure",
    "[PROTOTYPE] Public transport improvement"
  ],
  "Eastern": [
    "[PROTOTYPE] Business credit access",
    "[PROTOTYPE] Agricultural extension services",
    "[PROTOTYPE] Healthcare worker deployment"
  ],
  "Western": [
    "[PROTOTYPE] Road maintenance",
    "[PROTOTYPE] Market infrastructure development",
    "[PROTOTYPE] Agricultural mechanization support"
  ]
};
