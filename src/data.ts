// Content sourced from the 10 Newtons investor & technology decks and the
// existing 10newtons.com site. Single source of truth for the marketing site.

export const CONTACT_EMAIL = 'contact@10newtons.com'
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Hello%20from%2010%20Newtons.com`

// Honest credibility markers (not endorsements): research lineage, clinical
// trials, and the founder's National Academy of Medicine election.
export const affiliations = [
  { name: 'Stanford', note: 'Founding research' },
  { name: 'IRCAD', note: 'Applied Metrics Pilot' },
  { name: 'National Academy of Medicine', note: 'Founder, elected 2021' },
]

export const productShots = [
  {
    src: '/product/participant-dashboard.png',
    title: 'The surgeon view',
    caption: 'Each surgeon’s performance against faculty “practice-ready” standards — duration, focus, engagement and bimanual dexterity per procedure, plus the full cognitive trace.',
  },
  {
    src: '/product/program-dashboard.png',
    title: 'The program view',
    caption: 'Objective performance across every surgeon in a training program — focus, duration and dexterity at a glance, with mastery benchmarking.',
  },
]

export const pillars = [
  {
    title: 'Objective',
    body: 'Skill measured from the raw signal — brain, hands and instruments — not from a subjective checklist.',
  },
  {
    title: 'Actionable',
    body: 'Every metric maps to the exact moment and maneuver that produced it, so feedback is precise and specific.',
  },
  {
    title: 'Mobile',
    body: 'A validated wireless sensor suite that runs on a tablet and readily integrates with surgeons and surgical teams in any venue or platform.',
  },
  {
    title: 'Scalable',
    body: 'One multi-tenant platform serving many institutions and medical organizations from a single trainee to an entire team or program.',
  },
]

export const steps = [
  {
    n: '1',
    title: 'Capture',
    body: 'A surgeon wears the EEG band and two hand sensors and records a procedure — right from a mobile device.',
  },
  {
    n: '2',
    title: 'Integrate',
    body: 'Brain, motion and audio are uploaded and time synched with procedure video, second by second.',
  },
  {
    n: '3',
    title: 'Analyze',
    body: 'The platform computes objective biomarkers — focus, workload, dexterity — for every phase of the case.',
  },
  {
    n: '4',
    title: 'Compare',
    body: 'Results are benchmarked against “practice-ready” standards and mastery metrics for surgeons and surgical teams.',
  },
  {
    n: '5',
    title: 'Improve',
    body: 'Surgeons and teams see where they diverge from mastery, engage in VIP training with our strategic partners and reassess performance to track progress.',
  },
]

export const platform = [
  {
    title: 'Multi-tenant by design',
    body: 'A dedicated, isolated data environment per institution — one platform serving many programs cleanly.',
  },
  {
    title: 'Security & access',
    body: 'Verified accounts, two-factor authentication, encrypted secrets and a full administrative audit trail.',
  },
  {
    title: 'Cloud-native & reliable',
    body: 'Containerized services on AWS with independent scaling, live status monitoring and crash triage.',
  },
  {
    title: 'No patient data by design',
    body: 'Participants are clinicians, keeping the platform out of HIPAA scope while staying fully audit-ready.',
  },
]

export interface Member {
  name: string
  role: string
  org?: string
  photo?: string
  linkedin?: string
  bio: string
}

const CTO_NAME = 'Reto Matter'

export const team: Member[] = [
  {
    name: 'Carla Pugh, MD, PhD',
    role: 'Founder & Chief Medical Officer',
    photo: '/team/carla.jpg',
    linkedin: '', // TODO: add Carla's LinkedIn profile URL
    bio: 'A Stanford surgery professor and pioneer in using motion and sensor technology to measure clinical skill, Carla founded 10 Newtons to turn decades of research into an objective standard for surgical training. Her work has reshaped how procedural competence is assessed across medicine.',
  },
  {
    name: 'Erwan Rivet',
    role: 'Chief Executive Officer',
    photo: '/team/erwan.jpg',
    linkedin: '', // TODO: add Erwan's LinkedIn profile URL
    bio: "A digital-health executive with 20+ years scaling regulated medtech from concept to market, Erwan leads 10 Newtons' commercialization and growth, drawing on a solid track record of bringing clinical and consumer health products to market.",
  },
  {
    name: CTO_NAME,
    role: 'Chief Technology Officer',
    photo: '/team/cto.jpg',
    linkedin: '', // TODO: add Reto's LinkedIn profile URL
    bio: "A technology leader with 30+ years building data and AI platforms in regulated healthcare. He led engineering and privacy at Octave's AI diagnostics platform and earlier advised Nemaris — a surgical-simulation pioneer acquired by Globus Medical — bringing rare command of healthcare AI, compliance, and the operating room to 10 Newtons.",
  },
  {
    name: 'Jon Brilliant',
    role: 'Chief Financial Officer',
    photo: '/team/jon.jpg',
    linkedin: '', // TODO: add Jon's LinkedIn profile URL
    bio: 'A serial healthcare entrepreneur and operator, Jon has founded and scaled companies including Welldoc, Bigfoot Biomedical, and Luna Diabetes, with deep experience financing and building regulated digital-health businesses.',
  },
]

export const stats = [
  { value: '256 Hz', label: 'EEG capture, plus dual-hand motion' },
  { value: '8', label: 'objective biomarkers per session' },
  { value: '1', label: 'continuous workflow, capture to insight' },
]

// Peer-reviewed research behind objective, sensor-based skill measurement —
// led/co-authored by founder Dr. Carla Pugh. Citations verified against PubMed.
export type ResearchCategory =
  | 'Operative procedures'
  | 'Physical exam & bedside procedures'
  | 'The science of human performance'

export interface Publication {
  category: ResearchCategory
  journal: string
  year: number
  title: string
  note: string
  url: string
}

// Grouped by theme to make one point clear: 10 Newtons brings objective metrics
// across the specialty boards — from complex operative procedures to physical-exam
// and bedside procedures — grounded in the science of human performance.
// Order within the file is the display order. Carla to add ~2 papers per group.
export const researchGroups: { category: ResearchCategory; blurb: string }[] = [
  {
    category: 'Operative procedures',
    blurb: 'Objective, sensor-based measurement of complex open and operative surgical skill.',
  },
  {
    category: 'Physical exam & bedside procedures',
    blurb: 'The same objective approach applied to hands-on clinical exams and bedside procedures.',
  },
  {
    category: 'The science of human performance',
    blurb: 'The foundational science: quantifying mastery to facilitate paradigm shifts in human performance.',
  },
]

export const research: Publication[] = [
  // --- Operative procedures ---
  {
    category: 'Operative procedures',
    journal: 'J Am Coll Surg',
    year: 2025,
    title: 'Novel Use of Objective Sensor Technology: Creation of Individualized Education Plans to Develop Operative Mastery',
    note: 'Wearable motion sensors set mastery benchmarks and build individualized training plans — the model 10 Newtons productizes.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39807792/',
  },
  {
    category: 'Operative procedures',
    journal: 'Int J Comput Assist Radiol Surg',
    year: 2022,
    title: 'Using open surgery simulation kinematic data for tool and gesture recognition',
    note: 'Motion sensors and deep learning automatically recognize surgical gestures and tools.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35419721/',
  },
  {
    category: 'Operative procedures',
    journal: 'Ann Surg',
    year: 2020,
    title: 'Situating Artificial Intelligence in Surgery: A Focus on Disease Severity',
    note: 'A framework for applying AI in surgery that accounts for disease severity and case complexity — not technique alone.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33759839/',
  },
  {
    category: 'Operative procedures',
    journal: 'Surgery',
    year: 2018,
    title: 'Shortcut assessment: Can residents’ operative performance be determined in the first five minutes of an operative task?',
    note: 'Motion data from the first five minutes of an operative task predicted overall performance — an early, objective skill read.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29728259/',
  },
  // --- Physical exam & bedside procedures (breast exam last) ---
  {
    category: 'Physical exam & bedside procedures',
    journal: 'JAMA',
    year: 2001,
    title: 'Use of a mechanical simulator to assess pelvic examination skills',
    note: 'The origin: objective, sensor-based assessment of a hands-on clinical skill.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/11559282/',
  },
  {
    category: 'Physical exam & bedside procedures',
    journal: 'Academic Medicine',
    year: 2024,
    title: 'Sensor-Based Discovery of Search and Palpation Modes in the Clinical Breast Examination',
    note: 'Sensors plus machine learning on 152 physicians — objective force data distinguished mastery-level performers.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38207081/',
  },
  // --- The science of human performance ---
  {
    category: 'The science of human performance',
    journal: 'New England Journal of Medicine',
    year: 2015,
    title: 'Sensor technology in assessments of clinical skill',
    note: 'Sensor-derived force data distinguishes successful from unsuccessful clinical technique.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25693026/',
  },
  {
    category: 'The science of human performance',
    journal: 'ACS Biomater. Sci. Eng.',
    year: 2020,
    title: 'Sensors and Psychomotor Metrics: A Unique Opportunity to Close the Gap on Surgical Processes and Outcomes',
    note: 'Motion-tracking metrics quantify distinct dimensions of the surgical process — efficiency, readiness, errors.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33463275/',
  },
]

// ---------------------------------------------------------------------------
// Technology page content (seeded from the 10 Newtons technology deck)
// ---------------------------------------------------------------------------

export const techStats = [
  { value: '4', label: 'production services, capture to portal' },
  { value: '256 Hz', label: 'EEG, plus dual-hand motion at 50 Hz' },
  { value: '8', label: 'biomarkers scored per session' },
  { value: '1,100+', label: 'automated tests across the stack' },
]

export const services = [
  {
    n: '01',
    title: 'Capture App',
    body: 'Tablet app pairing a Muse EEG headband and two hand sensors. On-device sensor fusion, crash-safe recording, direct-to-cloud upload.',
  },
  {
    n: '02',
    title: 'API Backend',
    body: 'Multi-tenant API handling auth and 2FA, device enrollment, audit trail, and participant & session management.',
  },
  {
    n: '03',
    title: 'Insights Worker',
    body: 'An independent scoring pool computing EEG cognitive and motion biomarkers, scaling horizontally as volume grows.',
  },
  {
    n: '04',
    title: 'Clinical Portal',
    body: 'Role-aware dashboards for platform staff, training organizations, and individual surgeons.',
  },
]

export const sensors = [
  {
    title: 'Muse — EEG',
    spec: '4 channels @ 256 Hz',
    body: 'Frontal & temporal cortical activity for cognitive biomarkers.',
    accent: 'teal',
  },
  {
    title: 'Hand sensor — left',
    spec: 'accel + gyro @ 50 Hz',
    body: 'Dominant-hand motion, speed and rotation.',
    accent: 'purple',
  },
  {
    title: 'Hand sensor — right',
    spec: 'accel + gyro @ 50 Hz',
    body: 'Non-dominant-hand motion, speed and rotation.',
    accent: 'blue',
  },
]

export const security = [
  {
    title: 'Layered authentication',
    body: 'Verified accounts, TOTP two-factor, short-lived sessions with server-side revocation, and device-scoped credentials.',
  },
  {
    title: 'Encrypted by default',
    body: 'Encrypted secrets at rest, on-device key storage for enrolled capture devices, and TLS in transit.',
  },
  {
    title: 'Full audit trail',
    body: 'Every state-changing action is recorded with actor, target and before/after detail — and secrets are redacted from logs.',
  },
  {
    title: 'Out of HIPAA scope by design',
    body: 'Participants are clinicians, not patients — no patient identifiers enter capture, scoring or storage.',
  },
]

export const dataJourney = [
  { n: '1', title: 'Capture', body: 'EEG, dual-hand motion and video are recorded crash-safe on a tablet — practice rig or live OR.' },
  { n: '2', title: 'Upload', body: 'The session is uploaded securely to the cloud the moment a connection is available.' },
  { n: '3', title: 'Score', body: 'An automated pipeline computes objective cognitive and motion biomarkers for each phase.' },
  { n: '4', title: 'Sync', body: 'Every biomarker is time-aligned to the procedure video, second by second.' },
  { n: '5', title: 'Visualize', body: 'Dashboards render scores, the cognitive trace and faculty comparisons.' },
]

export const differentiators = [
  {
    title: 'Synced to the video',
    body: 'Every biomarker is aligned to the procedure video, so a spike in workload maps to the exact moment and maneuver that caused it — not just an aggregate at the end.',
  },
  {
    title: 'Benchmarked to mastery',
    body: 'Performance is scored against faculty “practice-ready” baselines, with program-level mastery rates and peer comparison on the same procedure.',
  },
  {
    title: 'The cognitive trace',
    body: 'Focus and engagement replayed across the entire case, with the highest- and lowest-focus moments surfaced and labeled automatically.',
  },
  {
    title: 'Objective and reproducible',
    body: 'Every metric is computed from the raw signal, versioned, and traceable back to the moment it was measured — defensible under scrutiny.',
  },
]
