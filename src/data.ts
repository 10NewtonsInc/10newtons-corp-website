// Content sourced from the 10 Newtons investor & technology decks and the
// existing 10newtons.com site. Single source of truth for the marketing site.

export const CONTACT_EMAIL = 'hello@10newtons.com'

export const pillars = [
  {
    title: 'Objective',
    body: 'Skill measured from the raw signal — brain, hands and instruments — not from a subjective checklist.',
  },
  {
    title: 'Actionable',
    body: 'Every metric maps to the exact moment and maneuver that produced it, so feedback is specific.',
  },
  {
    title: 'Mobile',
    body: 'A validated wireless sensor suite that runs on a tablet and integrates with the simulations clinicians already use.',
  },
  {
    title: 'Scalable',
    body: 'One multi-tenant platform serving many institutions, from a single resident to an entire program.',
  },
]

export const steps = [
  {
    n: '1',
    title: 'Capture',
    body: 'A surgeon wears the EEG band and two hand sensors and records a practice rig or a live OR case — right from a tablet.',
  },
  {
    n: '2',
    title: 'Correlate',
    body: 'Brain, motion and audio are uploaded and time-aligned to the procedure video, second by second.',
  },
  {
    n: '3',
    title: 'Analyze',
    body: 'The platform computes objective biomarkers — focus, workload, dexterity — for every phase of the case.',
  },
  {
    n: '4',
    title: 'Compare',
    body: 'Results are benchmarked against faculty “practice-ready” standards and against peers on the same procedure.',
  },
  {
    n: '5',
    title: 'Improve',
    body: 'Surgeons see where they diverge from mastery and track progress; programs get objective certification data.',
  },
]

export const cognitive = {
  title: 'Cognitive — from EEG',
  accent: 'teal',
  rows: [
    ['Focus', 'β / α attention ratio'],
    ['Engagement', 'β / (α + θ) activation'],
    ['Emotional Valence', 'frontal alpha asymmetry'],
    ['Cognitive Workload', 'θ / α load index'],
  ] as [string, string][],
  foot: 'Welch PSD band-power analysis · 4-channel EEG @ 256 Hz',
}

export const motor = {
  title: 'Motor Skill — from Motion',
  accent: 'purple',
  rows: [
    ['Bimanual Dexterity', 'two-hand coordination'],
    ['Economy of Motion', 'idle-time fraction'],
    ['Speed & Smoothness', 'per-hand velocity profile'],
    ['Rotational Control', 'gyroscopic stability'],
  ] as [string, string][],
  foot: 'Lab-grade signal processing · dual-hand motion @ 50 Hz',
}

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
    bio: "A digital-health executive with 20+ years scaling regulated medtech from concept to market, Erwan leads 10 Newtons' commercialization and growth, drawing on a track record of bringing clinical and consumer health products to market.",
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

export const cloud = [
  {
    title: 'Multi-account AWS',
    body: 'Separate management, development, staging and production accounts with per-environment network isolation.',
  },
  {
    title: 'Managed & codified',
    body: 'A managed database and object storage, all provisioned as code for repeatable, auditable environments.',
  },
  {
    title: 'Self-healing pipeline',
    body: 'A durable job queue with sub-second dispatch and a polling fallback — jobs survive restarts and any worker can resume them.',
  },
  {
    title: 'Live observability',
    body: 'System-status monitoring, per-worker heartbeats, and in-field crash triage keep the platform running unattended.',
  },
]
