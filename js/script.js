/**
 * SparkX Self-Onboarding Guideline — Interactive Controller
 * Features:
 * - Bilingual support (English & Bahasa Indonesia) with persistent preference
 * - Reading progress bar & scroll-spy stepper
 * - Guided Previous/Next navigation controls
 * - Screenshot Lightbox modal for high-res inspection
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initScrollSpy();
  initStepNavigation();
  initLightbox();
});

/* --------------------------------------------------------------------------
   1. Bilingual Toggle System (EN / ID)
   -------------------------------------------------------------------------- */
const translations = {
  en: {
    guideBadge: "Self-Onboarding Guide",
    stepOf: "Step {current} of {total}",
    readTime: "7 min read",
    helpTitle: "Need assistance?",
    helpDesc: "If your activation link has expired or you cannot access your account, contact your HR Administrator.",
    prevBtn: "Previous Step",
    nextBtn: "Next Step",
    finishBtn: "Ready to Explore SparkX",
    zoomHint: "Click image to zoom",
    
    // Nav items
    nav1: "Welcome to SparkX",
    nav2: "Understanding SparkX",
    nav3: "Getting Started",
    nav4: "Account Setup & Activation",
    nav5: "Setting Up Your Organization",
    nav6: "Ready to Start",

    // Section 1
    s1Badge: "Step 01 • Introduction",
    s1Title: "Welcome to SparkX",
    s1Lead: "Your centralized digital workplace for attendance, leave, benefits, and workplace collaboration.",
    s1HeroTitle: "A Modern, Simplified HR Experience",
    s1HeroDesc: "SparkX is designed to give you direct autonomy over your work life. Access everything you need — from time logs to reimbursement claims — effortlessly from any device.",
    prop1Title: "Self-Service Autonomy",
    prop1Desc: "Submit leave, record check-ins, and file claims directly without paper forms or lengthy manual email chains.",
    prop2Title: "Transparency & Speed",
    prop2Desc: "Track real-time approval statuses from your managers, view leave balances, and check policy limits instantly.",
    prop3Title: "Unified Workspace",
    prop3Desc: "A single secure platform connecting all essential company tools, document requests, and team directories.",

    // Section 2
    s2Badge: "Step 02 • Core Concept",
    s2Title: "Understanding SparkX & Modules",
    s2Lead: "SparkX operates as an Employee Self-Service (ESS) platform tailored for clarity and efficiency.",
    essConceptTitle: "What is Employee Self-Service (ESS)?",
    essConceptDesc: "Instead of emailing HR or filing paper slips for everyday administrative needs, ESS empowers every employee to view, manage, and request company services autonomously in real-time.",
    confirmedModulesTitle: "Confirmed Platform Modules",
    mTime: "Time & Attendance",
    mTimeDesc: "Check-in/out records, attendance logs, and self-service correction requests.",
    mOvertime: "Overtime Management",
    mOvertimeDesc: "Overtime submissions, rate tracking, and automated managerial approval chains.",
    mLeave: "Leave & Time Off",
    mLeaveDesc: "Annual leave, sick days, substitute leave (PHL), and collective leave balances.",
    mMedical: "Medical Reimbursement",
    mMedicalDesc: "Submit medical receipts against transparent, pre-configured annual caps.",
    mTravel: "Business Travel",
    mTravelDesc: "Travel authorization, accommodation per diems, and expense declarations.",
    mClaims: "Claim & Expenses",
    mClaimsDesc: "Operational expense claims, reimbursement batches, and receipt auditing.",
    mDocs: "Document Center",
    mDocsDesc: "Instant requests for employment verification letters and payslip distribution.",
    mAssets: "iShop & Assets",
    mAssetsDesc: "Company asset inventory, laptop requests, and office equipment procurement.",
    mMeeting: "Meeting Rooms",
    mMeetingDesc: "Real-time meeting room calendar and reservation bookings.",

    // Section 3
    s3Badge: "Step 03 • Access",
    s3Title: "Getting Started & Login",
    s3Lead: "Access SparkX securely through any modern web browser without installing additional desktop software.",
    accessUrlTitle: "How to Access",
    accessUrlDesc: "Navigate to your company's SparkX URL (e.g., https://nautilus-staging-645716388397.asia-southeast2.run.app/login). Bookmark this page for quick everyday access.",
    loginMethodsTitle: "Available Login Methods",
    loginMethod1: "Work Email & Password",
    loginMethod1Desc: "Use your registered company email address and the secret password chosen during activation.",
    loginMethod2: "Google Workspace SSO",
    loginMethod2Desc: "One-click single sign-on using your official Google company account.",
    loginMethod3: "Biometrics / Passkeys",
    loginMethod3Desc: "FIDO-compliant fingerprint or facial recognition on supported devices for rapid, secure login.",
    loginCaption: "Actual SparkX login screen featuring multi-method sign-in and password recovery options.",

    // Section 4: Revised Pathways
    s4Badge: "Step 04 • Account Setup",
    s4Title: "Account Setup & Activation",
    s4Lead: "SparkX provides two distinct setup pathways designed for different user types. Please identify which journey applies to your role.",
    
    // Pathway 1: Employee Invitation
    pwEmpBadge: "Pathway 1: Employee Invitation",
    pwEmpTitle: "Employee Invitation",
    pwEmpAudience: "Audience: Employees invited by their company's HR or Administrator",
    pwEmpSummary: "If your employer is already set up on SparkX, you do NOT create a separate company organization. Your HR administrator initiates your account invitation directly.",
    empStep1: "1. Receive Email Invitation: Check your work inbox for the official SparkX invite sent from no-reply@sparkx.life.",
    empStep2: "2. Open Secure Link: Click the activation button in the email (valid for 24 hours).",
    empStep3: "3. Choose Password & Sign In: Set your password (minimum 8 characters) to access your Employee Self-Service profile.",

    // Pathway 2: Organization Creation
    pwOrgBadge: "Pathway 2: Organization Creation",
    pwOrgTitle: "Organization Creation",
    pwOrgAudience: "Audience: HR Leaders & Company Founders establishing a new organization",
    pwOrgSummary: "For administrators setting up SparkX for an entire legal entity. This is a verified, multi-stage approval workflow.",

    // Org Creation 6-Stage Timeline
    orgFlowTitle: "The 6-Stage Organization Registration Workflow",
    stage1Title: "Stage 1: Submit Account & Organization Request",
    stage1Desc: "Open the registration portal. Fill in Organization Name, First Company Legal Name, Country, Timezone, and select Base Currency (IDR). Confirm currency lock notice upon submission.",
    stage2Title: "Stage 2: Receive Activation Notification",
    stage2Desc: "SparkX dispatches an email notification ('We received your request for ABC Group') containing an activation link to the registered work email address.",
    stage3Title: "Stage 3: Verify Your Email & Set Password",
    stage3Desc: "Open the activation link within its 24-hour validity window. Choose a secure password (minimum 8 characters) to complete email verification.",
    stage4Title: "Stage 4: Super Admin Approval Process",
    stage4Desc: "After email verification, the request enters the Super Admin review queue. The Super Admin reviews the legal entity details and can either Approve or Reject the request. The portal displays a 'Waiting for approval' status badge.",
    stage4Alert: "CRITICAL NOTICE: Email verification does NOT mean your account is approved. Access to setup remains locked until the Super Admin explicitly grants approval. If declined, the portal displays a rejection status.",
    stage5Title: "Stage 5: Approval Notification Email",
    stage5Desc: "Once approved, the administrator receives an official confirmation email ('ABC Group is ready on SparkX') containing the 'Set up your organization' action link.",
    stage6Title: "Stage 6: Log In & Launch Organization Setup",
    stage6Desc: "After receiving approval, return to SparkX, log in with your verified credentials, access the Organization Hub, and begin the 8-step organization setup wizard.",

    // Section 5: Revised Setting Up Your Organization
    s5Badge: "Step 05 • Organization Setup",
    s5Title: "Setting Up Your Organization",
    s5Lead: "A comprehensive, step-by-step administrative guide for configuring your company's workspace after Super Admin approval.",
    s5PrereqNotice: "Prerequisites: The organization setup wizard is accessible only AFTER: 1. Account creation; 2. Email verification; 3. Super Admin approval; and 4. Successful login.",
    
    // Step 5 Sub-steps (1 to 8)
    setup1Title: "Step 1: Organization Profile",
    setup1Purpose: "Establish the legal entity, country, base currency, and time zone for the organization.",
    setup1Prep: "Company Legal Name, Short Code (e.g. MJL), NPWP / Reg. no., and Company Timezone.",
    setup1Notes: "Currency is permanently locked to IDR at creation and cannot be changed later. Subsidiaries can be added later under Companies & Structure.",

    setup2Title: "Step 2: Module Selection",
    setup2Purpose: "Select which functional HR and workplace modules are active across the entire organization.",
    setup2Prep: "Decide which operational features your organization requires (Time & Attendance, Leave, Overtime, Travel, Expenses, etc.).",
    setup2Notes: "Module dependencies: 'Overtime' strictly requires 'Time & Attendance'; 'Offboarding' requires 'Document Center'. Disabling a parent module will automatically cascade to dependent modules.",

    setup3Title: "Step 3: Job Levels & Layers",
    setup3Purpose: "Establish corporate hierarchy layers (Direktur, Manager, HR, Staff) and specific levels used for policy limits.",
    setup3Prep: "Organizational job leveling structure and seniority hierarchy.",
    setup3Notes: "At least one level is mandatory because expense limits and travel rates in Step 5 map directly to these levels.",

    setup4Title: "Step 4: Operational Policies",
    setup4Purpose: "Configure organizational rules across 5 operational pillars: Leave, Claim & Expenses, Travel, Overtime, and Approval Routing.",
    setup4Prep: "Leave allowances (Annual, Sick, Maternity), receipt attachment thresholds, travel per diems, overtime multipliers, and approval chains.",
    setup4Notes: "Approval routing allows multi-tier hierarchies (e.g. Direct Manager -> Dept Head -> HR -> Finance) for each request type.",

    setup5Title: "Step 5: Limits & Allowances (Mandatory Gateway)",
    setup5Purpose: "Set financial spending caps and travel booking entitlements per job level for expenses and business trips.",
    setup5Prep: "Category caps (Meals, Transport, Accommodation, Parking, Groceries, Supplies) and allowed flight/train classes.",
    setup5Notes: "CRITICAL GATEWAY: SparkX locks organization activation until ALL claim categories and travel classes are configured at every level. The system displays a dedicated warning: 'Still to do before the company can be used'.",

    setup6Title: "Step 6: Company Structure",
    setup6Purpose: "Build the organizational chart dividing the company into directorates, divisions, and departments.",
    setup6Prep: "Corporate departmental hierarchy and team reporting structure.",
    setup6Notes: "This step is optional during initial setup and can be configured or customized later under Companies & Structure.",

    setup7Title: "Step 7: Starting Data",
    setup7Purpose: "Determine initial database state: seed with mock testing data or launch with a clean database.",
    setup7Prep: "Choose between 'Start with sample data' (~10 fictional employees and mock reviews) or 'Start blank'.",
    setup7Notes: "Sample data can be purged at any time from administrative settings once testing is concluded.",

    setup8Title: "Step 8: Invite Your Team",
    setup8Purpose: "Send activation invitations to initial HR colleagues, managers, and leadership.",
    setup8Prep: "Names, official work emails, and platform roles (EMPLOYEE, MANAGER, HR, CHRO, ADMIN BU, ADMIN).",
    setup8Notes: "Each invitee receives an activation email valid for 24 hours. For bulk onboarding, use the CSV import tool under Employees post-setup. Finish setup unlocks once Step 5 limits are fulfilled.",

    // Section 6
    s6Badge: "Step 06 • Ready",
    s6Title: "Ready to Get Started!",
    s6Lead: "You're now equipped with everything needed to make the most of SparkX.",
    recapTitle: "Onboarding Checklist Summary",
    check1: "Found your HR invitation email from no-reply@sparkx.life.",
    check2: "Clicked the verification link within 24 hours.",
    check3: "Set your secure 8+ character password.",
    check4: "Bookmarked the SparkX login URL on your browser.",
    check5: "Explored your Employee Self-Service (ESS) profile.",
    closingMsg: "Welcome aboard! SparkX is here to make your daily work easier, faster, and more transparent. Have questions? Reach out to your team lead or HR administrator.",
    launchBtn: "Open SparkX Login Page"
  },
  id: {
    guideBadge: "Panduan Onboarding Karyawan",
    stepOf: "Langkah {current} dari {total}",
    readTime: "7 menit baca",
    helpTitle: "Butuh bantuan?",
    helpDesc: "Jika tautan aktivasi Anda kedaluwarsa atau tidak dapat mengakses akun, hubungi Tim HR Administrator.",
    prevBtn: "Langkah Sebelumnya",
    nextBtn: "Langkah Berikutnya",
    finishBtn: "Siap Menjelajahi SparkX",
    zoomHint: "Klik gambar untuk memperbesar",
    
    // Nav items
    nav1: "Selamat Datang di SparkX",
    nav2: "Mengenal SparkX",
    nav3: "Memulai Akses",
    nav4: "Penyiapan Akun & Aktivasi",
    nav5: "Penyiapan Organisasi Anda",
    nav6: "Siap Memulai",

    // Section 1
    s1Badge: "Langkah 01 • Pengenalan",
    s1Title: "Selamat Datang di SparkX",
    s1Lead: "Platform digital terpusat untuk absensi, cuti, manfaat karyawan, dan kolaborasi kerja modern.",
    s1HeroTitle: "Pengalaman HR Modern & Terintegrasi",
    s1HeroDesc: "SparkX dirancang untuk memberikan kendali mandiri atas administrasi kerja Anda. Akses semua kebutuhan — dari riwayat kehadiran hingga klaim reimbursement — dengan mudah dari perangkat apa pun.",
    prop1Title: "Kemandirian Self-Service",
    prop1Desc: "Ajukan cuti, lakukan absensi, dan ajukan klaim langsung tanpa formulir manual atau rantai email yang panjang.",
    prop2Title: "Transparansi & Cepat",
    prop2Desc: "Pantau status persetujuan dari atasan secara real-time, periksa sisa saldo cuti, dan lihat limit klaim dengan transparan.",
    prop3Title: "Ruang Kerja Terpadu",
    prop3Desc: "Satu platform aman yang menghubungkan seluruh fasilitas operasional perusahaan, permohonan surat, dan direktori tim.",

    // Section 2
    s2Badge: "Langkah 02 • Konsep Dasar",
    s2Title: "Mengenal SparkX & Modul Fitur",
    s2Lead: "SparkX beroperasi sebagai platform Employee Self-Service (ESS) yang dirancang untuk efisiensi dan transparansi.",
    essConceptTitle: "Apa itu Employee Self-Service (ESS)?",
    essConceptDesc: "Alih-alih harus bolak-balik mengirim email ke HR atau mengisi formulir fisik, sistem ESS memberikan kebebasan bagi karyawan untuk mengajukan, melihat, dan mengelola kebutuhan kerja mereka secara mandiri.",
    confirmedModulesTitle: "Daftar Modul yang Dikonfirmasi",
    mTime: "Time & Attendance",
    mTimeDesc: "Pencatatan check-in/out, riwayat log kehadiran, dan pengajuan koreksi absensi.",
    mOvertime: "Overtime (Lembur)",
    mOvertimeDesc: "Pengajuan lembur, kalkulasi tarif, dan alur persetujuan terstruktur dari atasan.",
    mLeave: "Leave (Cuti)",
    mLeaveDesc: "Pengajuan cuti tahunan, cuti sakit, izin pengganti (PHL), dan kalender cuti bersama.",
    mMedical: "Medical Reimbursement",
    mMedicalDesc: "Klaim biaya pengobatan dan kuitansi medis sesuai plafon limit tahunan yang jelas.",
    mTravel: "Travel (Perjalanan Dinas)",
    mTravelDesc: "Otorisasi dinas luar kota, plafon akomodasi harian, tiket, dan laporan deklarasi.",
    mClaims: "Claim & Expenses",
    mClaimsDesc: "Klaim operasional kantor, laporan nota pengeluaran, dan audit reimbursement.",
    mDocs: "Document Center",
    mDocsDesc: "Permintaan resmi surat keterangan kerja dan distribusi slip/dokumen perusahaan.",
    mAssets: "iShop & Assets",
    mAssetsDesc: "Inventaris aset kantor, permohonan perangkat kerja laptop, dan pengadaan.",
    mMeeting: "Meeting Rooms",
    mMeetingDesc: "Kalender ketersediaan ruangan dan reservasi ruang rapat kantor secara langsung.",

    // Section 3
    s3Badge: "Langkah 03 • Akses Platform",
    s3Title: "Memulai & Halaman Login",
    s3Lead: "Akses SparkX secara aman melalui browser web modern tanpa perlu instalasi aplikasi tambahan.",
    accessUrlTitle: "Cara Mengakses",
    accessUrlDesc: "Buka URL portal SparkX perusahaan Anda (contoh: https://nautilus-staging-645716388397.asia-southeast2.run.app/login). Pasang bookmark untuk akses cepat sehari-hari.",
    loginMethodsTitle: "Metode Login yang Tersedia",
    loginMethod1: "Email Kerja & Kata Sandi",
    loginMethod1Desc: "Gunakan email perusahaan yang terdaftar serta kata sandi yang telah Anda atur saat aktivasi.",
    loginMethod2: "Google Workspace SSO",
    loginMethod2Desc: "Masuk cepat satu kali klik menggunakan akun resmi Google perusahaan Anda.",
    loginMethod3: "Biometrik / Passkey",
    loginMethod3Desc: "Gunakan sidik jari atau pengenalan wajah pada perangkat yang kompatibel untuk login kilat dan aman.",
    loginCaption: "Tampilan asli halaman login SparkX dengan opsi multi-metode sign-in dan pemulihan sandi.",

    // Section 4: Revised Pathways
    s4Badge: "Langkah 04 • Penyiapan Akun",
    s4Title: "Penyiapan Akun & Aktivasi",
    s4Lead: "SparkX menyediakan dua jalur penyiapan akun yang berbeda berdasarkan peran pengguna. Kenali jalur yang sesuai untuk Anda.",

    // Pathway 1: Employee Invitation
    pwEmpBadge: "Jalur 1: Undangan Karyawan",
    pwEmpTitle: "Undangan Karyawan",
    pwEmpAudience: "Sasaran: Karyawan yang diundang oleh Tim HR atau Administrator",
    pwEmpSummary: "Jika perusahaan Anda sudah terdaftar di SparkX, Anda TIDAK perlu mendaftarkan organisasi baru. Tim HR Anda akan mengirimkan undangan resmi langsung ke email kerja Anda.",
    empStep1: "1. Terima Email Undangan: Cek kotak masuk email kerja Anda untuk undangan resmi SparkX dari no-reply@sparkx.life.",
    empStep2: "2. Buka Tautan Aktivasi: Klik tombol aktivasi aman dalam email (berlaku selama 24 jam).",
    empStep3: "3. Buat Kata Sandi & Masuk: Buat kata sandi minimal 8 karakter untuk mengaktifkan profil Employee Self-Service Anda.",

    // Pathway 2: Organization Creation
    pwOrgBadge: "Jalur 2: Pendaftaran Organisasi",
    pwOrgTitle: "Pendaftaran Organisasi",
    pwOrgAudience: "Sasaran: Pimpinan HR & Pendiri Perusahaan yang mendaftarkan entitas baru",
    pwOrgSummary: "Untuk administrator yang ingin mendaftarkan seluruh organisasi perusahaan di SparkX. Ini merupakan alur verifikasi dan persetujuan multi-tahap.",

    // Org Creation 6-Stage Timeline
    orgFlowTitle: "Alur 6 Tahap Pendaftaran Organisasi",
    stage1Title: "Tahap 1: Ajukan Permohonan Akun & Organisasi",
    stage1Desc: "Buka portal pendaftaran. Isi Nama Organisasi, Nama Legal Perusahaan, Negara, Zona Waktu, dan pilih Mata Uang Dasar (IDR). Konfirmasi penguncian mata uang saat pengajuan.",
    stage2Title: "Tahap 2: Terima Email Konfirmasi Permohonan",
    stage2Desc: "SparkX secara otomatis mengirimkan email pemberitahuan ('We received your request for ABC Group') yang berisi tautan aktivasi ke email kerja yang didaftarkan.",
    stage3Title: "Tahap 3: Verifikasi Email & Buat Kata Sandi",
    stage3Desc: "Buka tautan aktivasi dalam batas waktu 24 jam. Tentukan kata sandi yang aman (minimal 8 karakter) untuk menyelesaikan tahap verifikasi email.",
    stage4Title: "Tahap 4: Proses Peninjauan Super Admin",
    stage4Desc: "Setelah email terverifikasi, permohonan masuk ke antrean peninjauan Super Admin. Super Admin dapat Menyetujui atau Menolak permohonan tersebut. Portal akan menampilkan lencana status 'Waiting for approval'.",
    stage4Alert: "PERHATIAN KRUSIAL: Verifikasi email TIDAK berarti akun Anda otomatis disetujui. Akses penyiapan organisasi tetap terkunci sampai Super Admin menyetujui secara resmi. Jika ditolak, portal menampilkan status penolakan.",
    stage5Title: "Tahap 5: Notifikasi Email Persetujuan",
    stage5Desc: "Setelah disetujui, administrator menerima email konfirmasi resmi ('ABC Group is ready on SparkX') dengan tombol aksi 'Set up your organization'.",
    stage6Title: "Tahap 6: Masuk & Mulai Penyiapan Organisasi",
    stage6Desc: "Setelah menerima persetujuan, kembali ke SparkX, masuk dengan akun terverifikasi, akses Hub Organisasi, dan mulai wizard penyiapan 8 tahap.",

    // Section 5: Revised Setting Up Your Organization
    s5Badge: "Langkah 05 • Penyiapan Organisasi",
    s5Title: "Penyiapan Organisasi Anda",
    s5Lead: "Panduan administratif langkah-demi-langkah yang komprehensif untuk mengonfigurasi workspace perusahaan setelah persetujuan Super Admin.",
    s5PrereqNotice: "Prasyarat: Wizard penyiapan organisasi hanya dapat diakses SETELAH: 1. Pembuatan akun; 2. Verifikasi email; 3. Persetujuan Super Admin; dan 4. Berhasil login.",

    // Step 5 Sub-steps (1 to 8)
    setup1Title: "Langkah 1: Profil Organisasi",
    setup1Purpose: "Menetapkan entitas legal, negara, mata uang dasar, dan zona waktu operasional organisasi.",
    setup1Prep: "Nama Legal Perusahaan, Short Code (misal: MJL), NPWP / Reg. no., dan Zona Waktu Perusahaan.",
    setup1Notes: "Mata uang dikunci permanen ke IDR saat pembuatan dan tidak dapat diubah nanti. Perusahaan anak (subsidiari) dapat ditambahkan kemudian di menu Companies & Structure.",

    setup2Title: "Langkah 2: Pemilihan Modul",
    setup2Purpose: "Menentukan modul operasional HR mana saja yang aktif dan dapat diakses oleh seluruh anggota organisasi.",
    setup2Prep: "Keputusan mengenai modul fungsional yang dibutuhkan (Absensi, Cuti, Lembur, Dinas Luar, Klaim Biaya, dll.).",
    setup2Notes: "Ketergantungan modul: 'Overtime' wajib memerlukan 'Time & Attendance'; 'Offboarding' memerlukan 'Document Center'. Menonaktifkan modul induk akan otomatis menonaktifkan modul turunannya.",

    setup3Title: "Langkah 3: Level & Layer Jabatan",
    setup3Purpose: "Membangun hierarki layer organisasi (Direktur, Manager, HR, Staff) dan level spesifik untuk pemetaan batas limit.",
    setup3Prep: "Struktur tingkatan jabatan dan penamaan level senioritas di perusahaan Anda.",
    setup3Notes: "Setidaknya satu level wajib didefinisikan karena batas limit klaim dan tiket perjalanan dinas di Langkah 5 mengacu langsung pada level ini.",

    setup4Title: "Langkah 4: Kebijakan Operasional",
    setup4Purpose: "Mengonfigurasi aturan kerja di 5 pilar operasional: Cuti, Klaim & Biaya, Perjalanan Dinas, Lembur, dan Jalur Persetujuan (Approval Routing).",
    setup4Prep: "Alokasi jenis cuti (Tahunan, Sakit, Melahirkan), syarat nota kuitansi klaim, per diem dinas, pengali lembur, dan rantai hierarki persetujuan.",
    setup4Notes: "Approval routing memungkinkan persetujuan bertingkat (misal: Direct Manager -> Dept Head -> HR -> Finance) untuk setiap tipe pengajuan.",

    setup5Title: "Langkah 5: Plafon & Limit (Gerbang Wajib)",
    setup5Purpose: "Menetapkan plafon pengeluaran finansial dan hak kelas perjalanan dinas per level jabatan.",
    setup5Prep: "Nominal limit per kategori klaim (Makan, Transport, Akomodasi, Parkir, Perlengkapan) serta kelas tiket pesawat/kereta yang diizinkan.",
    setup5Notes: "GERBANG KRUSIAL: SparkX mengunci aktivasi organisasi hingga SELURUH kategori klaim dan kelas perjalanan dinas dikonfigurasi di setiap level jabatan. Sistem memunculkan peringatan khusus: 'Still to do before the company can be used'.",

    setup6Title: "Langkah 6: Struktur Perusahaan",
    setup6Purpose: "Membangun bagan organisasi yang membagi perusahaan ke dalam direktorat, divisi, dan departemen kerja.",
    setup6Prep: "Daftar pembagian departemen dan pohon divisi operasional perusahaan.",
    setup6Notes: "Langkah ini bersifat opsional pada setup awal dan dapat dilengkapi nanti melalui menu Companies & Structure.",

    setup7Title: "Langkah 7: Data Awal (Starting Data)",
    setup7Purpose: "Menentukan kondisi database awal: menggunakan data simulasi atau memulai dengan database bersih.",
    setup7Prep: "Pilih antara 'Start with sample data' (~10 karyawan simulasi dan review contoh) atau 'Start blank'.",
    setup7Notes: "Data contoh dapat dihapus kapan saja melalui pengaturan admin setelah proses pengujian selesai.",

    setup8Title: "Langkah 8: Undang Tim Anda",
    setup8Purpose: "Mengirimkan email undangan aktivasi kepada rekan HR, pimpinan, dan manajer awal.",
    setup8Prep: "Nama lengkap, alamat email kerja resmi, dan penetapan role platform (EMPLOYEE, MANAGER, HR, CHRO, ADMIN BU, ADMIN).",
    setup8Notes: "Setiap undangan berisi tautan aktivasi aman yang berlaku selama 24 jam. Untuk import massal karyawan, gunakan fitur CSV import di menu Employees setelah setup selesai. Tombol Finish Setup terbuka setelah limit di Langkah 5 terpenuhi.",

    // Section 6
    s6Badge: "Langkah 06 • Siap",
    s6Title: "Siap untuk Memulai!",
    s6Lead: "Kini Anda telah memahami segala hal yang dibutuhkan untuk memanfaatkan platform SparkX secara optimal.",
    recapTitle: "Ringkasan Checklist Onboarding",
    check1: "Menemukan email undangan HR dari no-reply@sparkx.life.",
    check2: "Mengklik tautan verifikasi sebelum 24 jam.",
    check3: "Mengatur kata sandi yang aman minimal 8 karakter.",
    check4: "Menyimpan bookmark tautan login SparkX di browser.",
    check5: "Melihat dan memahami menu profil Employee Self-Service (ESS).",
    closingMsg: "Selamat bergabung! SparkX hadir untuk menjadikan aktivitas kerja Anda lebih mudah, cepat, dan transparan. Jika memiliki kendala, jangan ragu untuk menghubungi Tim HR Anda.",
    launchBtn: "Buka Halaman Login SparkX"
  }
};

let currentLang = localStorage.getItem('sparkx_onboarding_lang') || 'en';

function initLanguageToggle() {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (!toggleBtn) return;

  updateLanguageUI(currentLang);

  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('sparkx_onboarding_lang', currentLang);
    updateLanguageUI(currentLang);
    updateProgressText();
  });
}

function updateLanguageUI(lang) {
  // Update toggle button pills
  const enPill = document.getElementById('langPillEn');
  const idPill = document.getElementById('langPillId');
  if (enPill && idPill) {
    if (lang === 'en') {
      enPill.classList.add('active');
      idPill.classList.remove('active');
    } else {
      idPill.classList.add('active');
      enPill.classList.remove('active');
    }
  }

  // Replace text in elements with data-i18n attributes
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
}

/* --------------------------------------------------------------------------
   2. Scroll Spy & Stepper Synchronization
   -------------------------------------------------------------------------- */
const sections = ['section-01', 'section-02', 'section-03', 'section-04', 'section-05', 'section-06'];

function initScrollSpy() {
  const progressBar = document.getElementById('readingProgressBar');
  const navItems = document.querySelectorAll('.step-nav-item');

  function onScroll() {
    // 1. Calculate reading progress
    const winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = docHeight > 0 ? (winScroll / docHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    }

    // 2. Determine current active section
    let currentSectionIdx = 0;
    const scrollMid = winScroll + (window.innerHeight / 3);

    // If near bottom of document, activate last section
    if (winScroll + window.innerHeight >= document.documentElement.scrollHeight - 50) {
      currentSectionIdx = sections.length - 1;
    } else {
      sections.forEach((secId, idx) => {
        const sectionEl = document.getElementById(secId);
        if (sectionEl) {
          const top = sectionEl.getBoundingClientRect().top + winScroll;
          if (scrollMid >= top) {
            currentSectionIdx = idx;
          }
        }
      });
    }

    // 3. Update Stepper Nav states
    navItems.forEach((item, idx) => {
      if (idx === currentSectionIdx) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }

      if (idx < currentSectionIdx) {
        item.classList.add('completed');
      } else {
        item.classList.remove('completed');
      }
    });

    // 4. Update Header Step Counter
    currentStepIndex = currentSectionIdx + 1;
    updateProgressText();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

let currentStepIndex = 1;
function updateProgressText() {
  const countEl = document.getElementById('stepCounterText');
  if (countEl) {
    const template = translations[currentLang]?.stepOf || "Step {current} of {total}";
    countEl.textContent = template.replace('{current}', currentStepIndex).replace('{total}', sections.length);
  }
}

/* --------------------------------------------------------------------------
   3. Guided Navigation & Precision Smooth Scrolling
   -------------------------------------------------------------------------- */
function smoothScrollTo(targetEl) {
  if (!targetEl) return;

  const getTargetPosition = () => {
    const header = document.querySelector('.top-header');
    const headerHeight = header ? header.offsetHeight : 72;
    const computedMargin = parseFloat(window.getComputedStyle(targetEl).scrollMarginTop);
    const offset = (!isNaN(computedMargin) && computedMargin > 0) ? computedMargin : (headerHeight + 24);
    const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
    return Math.max(0, targetTop);
  };

  const targetY = getTargetPosition();
  window.scrollTo({
    top: targetY,
    behavior: 'smooth'
  });

  // Re-adjust if dynamic content/images cause layout shift during scroll
  const verificationDelays = [150, 350, 600, 950];
  verificationDelays.forEach(delay => {
    setTimeout(() => {
      const currentTargetY = getTargetPosition();
      if (Math.abs(window.pageYOffset - currentTargetY) > 20) {
        window.scrollTo({
          top: currentTargetY,
          behavior: 'smooth'
        });
      }
    }, delay);
  });
}

function initStepNavigation() {
  // Sidebar step navigation items
  document.querySelectorAll('.step-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          smoothScrollTo(targetEl);
          if (history.pushState) {
            history.pushState(null, '', href);
          }
        }
      }
    });
  });

  // Bottom Prev/Next button navigation
  document.querySelectorAll('[data-nav-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-nav-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        smoothScrollTo(targetEl);
        if (history.pushState) {
          history.pushState(null, '', '#' + targetId);
        }
      }
    });
  });

  // All other in-page hash anchor links (subnav, policy links, brand logo)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.classList.contains('step-nav-item')) return;
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        smoothScrollTo(targetEl);
        if (history.pushState) {
          history.pushState(null, '', href);
        }
      }
    });
  });

  // Ensure direct hash on page load/refresh accurately scrolls to target
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const hashEl = document.querySelector(window.location.hash);
      if (hashEl) {
        setTimeout(() => {
          smoothScrollTo(hashEl);
        }, 100);
      }
    }
  });

  window.addEventListener('hashchange', () => {
    if (window.location.hash) {
      const hashEl = document.querySelector(window.location.hash);
      if (hashEl) {
        smoothScrollTo(hashEl);
      }
    }
  });

  const finishBtn = document.getElementById('finishOnboardingBtn');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      window.open('https://nautilus-staging-645716388397.asia-southeast2.run.app/login', '_blank');
    });
  }
}

/* --------------------------------------------------------------------------
   4. High-Res Screenshot Lightbox Modal
   -------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  if (!modal || !modalImg) return;

  document.querySelectorAll('.mockup-viewport').forEach(viewport => {
    viewport.addEventListener('click', () => {
      const img = viewport.querySelector('img');
      const captionEl = viewport.parentElement.querySelector('.mockup-caption span') || viewport.parentElement.querySelector('figcaption');
      if (img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || "SparkX Screenshot Preview";
        if (modalCaption) {
          modalCaption.textContent = captionEl ? captionEl.textContent : (img.alt || "");
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
