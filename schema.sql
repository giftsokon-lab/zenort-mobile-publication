CREATE TABLE IF NOT EXISTS responses (
  id TEXT PRIMARY KEY,
  response TEXT NOT NULL,
  location TEXT,
  sector TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_responses_created_at ON responses(created_at);
CREATE INDEX IF NOT EXISTS idx_responses_sector ON responses(sector);
CREATE INDEX IF NOT EXISTS idx_responses_location ON responses(location);
