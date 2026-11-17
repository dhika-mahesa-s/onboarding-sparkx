# SparkX — Self-Onboarding Guideline Website

A modern, responsive, and visually polished self-onboarding website designed to guide both new employees and HR administrators through the **SparkX HR Intelligence & Self-Service Platform**.

---

## 📖 Project Overview

This onboarding guide serves as a welcoming, intuitive bridge for users of all technical backgrounds. It avoids dense technical documentation layouts and focuses on clarity, visual presentation, and direct guidance with verified screenshots from the live SparkX application.

### Key Sections:
1. **01. Welcome to SparkX** — Modern, centralized employee self-service platform introduction and 3 core value propositions (*Self-Service Autonomy*, *Transparency & Speed*, *Unified Workspace*).
2. **02. Understanding SparkX** — Core Employee Self-Service (ESS) concept and overview of all 9 confirmed functional modules (*Time & Attendance*, *Overtime*, *Leave*, *Medical Reimbursement*, *Travel*, *Claim & Expenses*, *Document Center*, *iShop & Assets*, *Meeting Rooms*).
3. **03. Getting Started** — Portal access, login methods (*Work Email & Password*, *Google Workspace SSO*, *Biometrics / Passkeys*), and login screen walkthrough.
4. **04. Account Setup & Activation** — Clear presentation of **two distinct pathways of equal visual weight**:
   - **Pathway 1: Employee Invitation** (For employees joining an existing company via official email invite).
   - **Pathway 2: Organization Creation** (A detailed 6-stage chronological timeline for HR leaders and company founders):
     - Stage 1: Submit Registration Request (Company Legal Name, NIB, Country, Timezone, Currency IDR lock).
     - Stage 2: Receive Activation Notification ("We received your request for ABC Group").
     - Stage 3: Verify Your Email & Set Password (24-hour token validity, minimum 8 characters).
     - Stage 4: **Super Admin Approval Process** (Queue review, Approve/Reject decisions, "Waiting for approval" status banner).
     - Stage 5: Approval Notification Email ("ABC Group is ready on SparkX").
     - Stage 6: Log In & Launch Organization Setup (Organization Hub, "Open" active workspace).
5. **05. Setting Up Your Organization** — Comprehensive 8-step administrative guide for configuring an approved organization:
   - *Step 1: Organization Profile*
   - *Step 2: Module Selection* (11 modules and cascading dependency management)
   - *Step 3: Job Levels & Layers* (Direktur, Manager, HR, Staff)
   - *Step 4: Operational Policies* (Leave, Claim & Expenses, Travel, Overtime, Approval Routing)
   - *Step 5: Limits & Allowances* (**Critical Gateway**: Required matrix caps before activation)
   - *Step 6: Company Structure* (Directorates, Divisions, Departments)
   - *Step 7: Starting Data* (Sample data vs clean blank slate)
   - *Step 8: Invite Your Team* (Roles, invite dispatch, and prerequisite checklist)
   *(Each step includes: Step Title, Purpose, What You Need to Prepare, Instructions, Screenshot, and Important Notes)*.
6. **06. Ready to Get Started** — Onboarding checklist summary, encouraging closing message, and direct portal launch button.

---

## 🎨 Design & User Experience Highlights

- **Visual Style:** Clean white background with purple and indigo accents inspired by SparkX branding (`#7c3aed`, `#6366f1`, and `#4f46e5`).
- **Bilingual Support (EN / ID):** Seamless one-click language toggle between **English** (default) and **Bahasa Indonesia** with persistent local storage.
- **Reading Progress Bar & Scroll-Spy:** Interactive top progress bar and sticky sidebar stepper that tracks reading position in real-time.
- **Guided Step Navigation:** Previous and Next buttons at the bottom of each section for linear, self-paced onboarding.
- **Full-Resolution Screenshot Lightbox:** Interactive click-to-zoom modal for inspecting actual SparkX screenshots and interface details.
- **Responsive Layout:** Optimized for desktop, tablet, and mobile screens.

---

## 📁 Project Structure

```text
Sparkx/
├── index.html                           # Main semantic HTML5 onboarding page
├── css/
│   └── style.css                        # Design system tokens, responsive layout, animations
├── js/
│   └── script.js                        # Bilingual controller, scroll-spy, stepper & lightbox
├── assets/
│   └── screenshots/
│       ├── activation/                  # Account activation & email link screenshots
│       │   ├── choose-password-screen.png
│       │   ├── email-confirmation-link.png
│       │   └── email-inbox-notification.png
│       ├── admin/                       # Administrative setup screenshots
│       │   └── step8_invite_team.png
│       ├── login/                       # Login screen screenshot
│       │   └── sparkx-login-screen.png
│       ├── platform/                    # Hub & navigation notice screenshots
│       │   ├── joining-vs-creating-notice.jpg
│       │   ├── platform-console-requests.png
│       │   └── user-organizations-hub.jpg
│       ├── registration/                # Organization registration & approval screenshots
│       │   ├── create-org-form-empty.png
│       │   ├── create-org-form-filled.png
│       │   ├── currency-idr-confirmation.png
│       │   ├── email-org-ready.png
│       │   ├── email-request-received.png
│       │   └── org-waiting-approval.png
│       └── setup/                       # Organization setup wizard screenshots
│           ├── step1-organization-profile.jpg
│           └── step8-invite-team.png
└── README.md                            # Documentation and local usage guide
```

---

## 🚀 How to Open Locally

The website is completely static, with zero backend dependencies, and can be viewed immediately in any modern web browser:

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer, or right-click `index.html` and select **Open with > Chrome / Edge / Firefox**.

### Option 2: Local Static Server (Optional)
If you prefer running via a local development server:

#### Using npx (Node.js):
```bash
npx serve .
```

#### Using Python (if available):
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your browser.


## Visual refinement (November 2026)

- Updated the visual layer with a SparkX-inspired glassmorphism treatment: soft pastel gradients, translucent white surfaces, subtle blur, thin borders, and restrained blue-violet accents.
- Replaced the main onboarding screenshots with the original, higher-resolution captures supplied for this project.
- Added source screenshot galleries to Organization Setup Steps 2–7, with click-to-zoom behavior retained through the existing lightbox.
- Original supplied captures are preserved in `assets/screenshots/source/` so the guideline can be updated later without relying on compressed exports.
- The screenshot galleries use the captured UI as visual references; the accompanying written instructions should still be checked against the live product before publication.
