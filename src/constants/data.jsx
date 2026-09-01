export const SKILLS = [
  // Frontend
  {
    name: "HTML",
    level: "advanced",
    category: "frontend",
    image: "image/html.png",
  },
    {
    name: "CSS",
    level: "advanced",
    category: "frontend",
    image: "image/css.png",
  },
  {
    name: "JavaScript",
    level: "intermediate",
    category: "frontend",
    image: "image/javascript.png",
  },
  {
    name: "PHP",
    level: "advanced",
    category: "frontend",
    image: "image/php.png",
  },
  {
    name: "Laravel",
    level: "advanced",
    category: "frontend",
    image: "image/laravel.png",
  },
      {
    name: "React",
    level: "intermediate",
    category: "frontend",
    image: "image/react.png",
  },
      {
    name: "Next.js",
    level: "beginner",
    category: "frontend",
    image: "image/next-js.png",
  },
  {
    name: "Tailwind CSS",
    level: "intermediate",
    category: "frontend",
    image: "image/tailwind-css.png",
  },
  {
    name: " Bootstrap",
    level: "advanced",
    category: "frontend",
    image: "image/bootstrap.png",
  },

  // Backend
    {
    name: "Python",
    level: "advanced",
    category: "backend",
    image: "image/python.png",
  },
  {
    name: "Node.js",
    level: "beginner",
    category: "backend",
    image: "image/node-js.png",
  },
  {
    name: "Express.js",
    level: "beginner",
    category: "backend",
    image: "image/express-js.png",
  },
  {
    name: "MariaDB",
    level: "advanced",
    category: "backend",
    image: "image/mariadb.png",
  },
  {
    name: "PostgreSQL",
    level: "intermediate",
    category: "backend",
    image: "image/postgree.png",
  },
  {
    name: "MySQL",
    level: "advanced",
    category: "backend",
    image: "image/mysql.png",
  },
  {
    name: "DBEaver",
    level: "intermediate",
    category: "backend",
    image: "image/dbeaver.png",
  },
  {
    name: "Postman",
    level: "intermediate",
    category: "backend",
    image: "image/postman.png",
  },

  // AI Engineering
  {
    name: "Scikit Learn",
    level: "beginner",
    category: "ai",
    image: "image/scikit-learn.png",
  },
  {
    name: "TensorFlow",
    level: "beginner",
    category: "ai",
    image: "image/tensorflow.png",
  },
  {
    name: "Streamlit",
    level: "beginner",
    category: "ai",
    image: "image/streamlit.png",
  },
  {
    name: "Orange Data Mining",
    level: "beginner",
    category: "ai",
    image: "image/orange.png",
  },
  {
    name: "Git",
    level: "advanced",
    category: "ai",
    image: "image/git.png",
  },
  {
    name: "GitHub",
    level: "intermediate",
    category: "ai",
    image: "image/github.png",
  },
    {
    name: "Figma",
    level: "intermediate",
    category: "ai",
    image: "image/figma.png",
  },
];

export const PROJECTS = [
{
  id: 1,
  title: "Sistem Informasi Persediaan Obat - Apotek Sena Farma",
  description: "A web-based pharmacy inventory management system for Apotek Sena Farma with multi-role access for admin, pharmacist, and manager. The system supports medicine master data, incoming and outgoing stock, branch stock mutation, batch and expiry monitoring, stock opname, reports, and stock demand prediction using a Decision Tree model.",
  tech: [
    "Laravel 12",
    "PHP 8.2",
    "TiDB",
    "Python Flask",
    "Hugging Face",
    "scikit-learn",
  ],
  image: "image/project/project7.png",
  demo: "https://skripsi-apotek-iyaf.vercel.app",
},
  {
  id: 2,
  title: "Logikalia",
  description:
    "An educational web game for learning Computational Thinking and Boolean Logic through adaptive puzzle gameplay, narrative-driven world exploration, real-time multiplayer quizzes, and moderator dashboards. Built with Next.js, TypeScript, Supabase, and a Q-Learning based reinforcement learning system to adjust puzzle difficulty based on student performance.",
  tech: [
    "Next.ts",
    "Supabase",
    "PostgreSQL",
    "Reinforcement Learning",
    "Q-Learning",
    "Zustand",
    "Framer Motion",
    "dnd-kit",
    "shadcn/ui",
  ],
  image: "image/project/project8.png",
  repo: "https://github.com/ameliaakhila/logikalia",
  demo: "https://logikalia.vercel.app",
},
{
  id: 3,
  title: "Zonify",
  description:
    "An AI-powered spatial analytics platform for evaluating retail zoning compliance between modern minimarkets and traditional markets in South Jakarta. Zonify combines geospatial analysis, Hugging Face ML API, hotspot areas, competitor density, and retail oversaturation risks.",
  tech: [
    "Python",
    "Flask",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Plotly",
    "Google Gemini API",
    "Geospatial Analysis",
    "Haversine Formula",
  ],
  image: "image/project/project9.png",
  repo: "https://github.com/shineistu86/CPS-CC26",
},
  {
    id: 3,
    title: "Sistem - Apotek Kencana",
    description: "A comprehensive pharmacy platform with inventory tracking, prescription management, and multi-role dashboard. Built with PHP and MySQL with optimized database design.",
    tech: [
      "PHP 5.6+",
      "MySQL",
      "jQuery 3.2.1",
      "Bootstrap 5",
      "Chart.js",
      "DataTables",
      "HTML5",
      "CSS3"
    ],
    image: "image/project/project1.png",
    repo: "https://github.com/ameliaakhila/sistem-apotek-kencana",
    demo: "https://sistem-apotek-kencana.great-site.net",
  },
  {
    id: 4,
    title: "Consultacy.id",
    description: "An academic consultation platform offering thesis guidance, journal publication support, and academic mentoring. Built with Laravel framework and modern frontend technologies.",
    tech: [
      "PHP 8.2+",
      "Laravel 12",
      "MySQL",
      "Bootstrap 5.3",
      "Vite",
      "JavaScript",
      "Axios",
      "HTML5",
      "CSS3"
    ],
    image: "image/project/project2.png",
    // repo: "https://github.com/ameliaakhila/consultacy-id",
    demo: "https://consultacy.my.id",
  },
  {
    id: 5,
    title: "Mini Project MySkill Residence",
    description: "A modern real estate platform showcasing residential properties with company information, facility gallery, and contact services. Built with responsive design and interactive animations for enhanced user experience.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "Bootstrap 5.3.2",
      "GSAP",
      "AOS",
      "Font Awesome 4.7",
    ],
    image: "image/project/project3.png",
    repo: "https://github.com/ameliaakhila/Mini-Project",
    demo: "https://mini-project-delta-weld.vercel.app",
  },
  {
    id: 6,
    title: "KNN Machine Learning Classification System",
    description: "Interactive educational platform for K-Nearest Neighbors algorithm with variable creation, data input, automated distance calculation, and real-time classification. Built with Laravel backend and Bootstrap frontend.",
    tech: [
        "PHP 8.2+",
        "Laravel 12.0",
        "Vite",
        "Tailwind CSS",
        "Axios",
        "Faker",
        "Mockery",
    ],
    image: "image/project/project4.png",
    repo: "https://github.com/ameliaakhila/KNN_Machine_Learning",
    // demo: "https://analytics.demo",
  },
  {
    id: 7,
    title: "Apple Classification Machine Learning",
    description:
      "Machine learning application for apple fruit classification based on physical features. Automatically identifies apple varieties and quality using pre-trained models. Equipped with an interactive web interface for real-time apple data prediction and analysis.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Jupyter Notebook"],
      image: "image/project/project5.png",
    repo: "https://github.com/ameliaakhila/Clasification-Machine-Learning",
    demo: "https://clasification-machine-learning-p8ypwt8y44ztuyttsurrny.streamlit.app",
  },
  {
    id: 8,
  title: "House Price Prediction Dashboard & API",
  description:
    "Sistem machine learning untuk memprediksi harga rumah berdasarkan fitur properti, dilengkapi dashboard interaktif untuk analisis data dan interface API untuk integrasi aplikasi lain.",
  tech: [
    "Python",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Flask",
    "Plotly",
    "Joblib"
  ],
      image: "image/project/project6.png",
    repo: "https://github.com/ameliaakhila/latihan-membuat-api-flask-House-Prices-Advanced-Regression-Techniques-",
    demo: "https://house-prices-advanced-regression-techniques.streamlit.app",
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    issuer: "PT Data Integrasi Inovasi",
    credential: "https://jobs.nuha.care",
    image: "image/certificates/Sertifikat Magang Amelia Akhila Aqna.webp",
  },
  {
    id: 2,
    title: "Certificate Of Complection Bootcamp AI Engginer",
    issuer: "Coding Camp powered by DBS Foundation",
    credential: "https://drive.google.com/file/d/14LsSZdoCilqvoLz51KHZFNt2l-YtttSP/view",
    image: "image/certificates/certificate-dbs.webp",
  },
  {
    id: 3,
    title: "Pemograman Database Yunior BNSP",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    credential: "https://drive.google.com/file/d/1ZHZrH11sdOapsJO6P2XE4LXetsG1pLUy/view?usp=sharing",
    image: "image/certificates/certificate-bnsp.webp",
  },
  {
    id: 4,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com/certificates/53XED0690PRN",
    image: "image/certificates/certificate2.webp",
  },
  {
    id: 5,
    title: "AI Ethics",
    issuer: "IBM SkillsBuild",
    credential: "https://www.ibm.com/skillsbuild",
    image: "image/certificates/certificate3.webp",
  },
  {
    id: 6,
    title: "Intro to Software Engineering",
    issuer: "RevoU",
    credential: "https://www.revou.co.id",
    image: "image/certificates/certificate4.webp",
  },
  {
    id: 7,
    title: "Build A Property Web: Setup Project Homepage",
    issuer: "MySkill",
    credential: "https://www.myskill.com",
    image: "image/certificates/certificate5.webp",
  },
  {
    id: 8,
    title: "Basic Git & Github",
    issuer: "Sillvull",
    credential: "https://www.low.org",
    image: "image/certificates/certificate6.webp",
  },
  {
    id: 9,
    title: "Build a free website with WordPress",
    issuer: "Coursera",
    credential: "https://www.coursera.org",
    image: "image/certificates/certificate7.webp",
  },
  {
    id: 10,
    title: "Cloud Practitioner Essentials",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate8.webp",
  },
  {
    id: 11,
    title: "Memulai Pemograman Dengan C",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate9.webp",
  },
  {
    id: 12,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate10.webp",
  },
  {
    id: 13,
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate11.webp",
  },
  {
    id: 14,
    title: "Memulai Dasar Pemograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate12.webp",
  },
  {
    id: 15,
    title: "Belajar Dasar Pemograman JavaScript",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate13.webp",
  },
  {
    id: 16,
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate14.webp",
  },
  {
    id: 17,
    title: "Memulai Pemograman dengan Python",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate15.webp",
  },
  {
    id: 25,
    title: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/Belajar Fundamental Deep Learning.webp",
  },
  {
    id: 26,
    title: "Membangun Proyek Deep Learning Tingkat Mahir",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/Deep Learning Tingkat Mahir.webp",
  },
  {
    id: 18,
    title: "Pengenalan ke Logika Pengembangan (Programming Logic 101)",
    issuer: "Dicoding",
    credential: "https://www.dicoding.com",
    image: "image/certificates/certificate16.webp",
  },
  {
    id: 19,
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    credential: "https://www.ibm.com/skillsbuild",
    image: "image/certificates/certificate18.webp",
  },
  {
    id: 20,
    title: "Natural Language Processing and Computer Vision",
    issuer: "IBM SkillsBuild",
    credential: "https://www.ibm.com/skillsbuild",
    image: "image/certificates/certificate19.webp",
  },
  {
    id: 21,
    title: "Introduction to Generative AI",
    issuer: "IBM SkillsBuild",
    credential: "https://www.ibm.com/skillsbuild",
    image: "image/certificates/certificate20.webp",
  },
  {
    id: 22,
    title: "Browswer, HTTP. DNS and Hosting",
    issuer: "MySkill",
    credential: "https://www.myskill.com/learning",
    image: "image/certificates/certificate22.webp",
  },
  {
    id: 23,
    title:  "CSS Mini Project",
    issuer: "MySkill",
    credential: "https://www.myskill.com/learning",
    image: "image/certificates/certificate23.webp",
  },
  {
    id: 24,
    title: "Introcuction to CSS",
    issuer: "MySkill",
    credential: "https://www.myskill.com/learning",
    image: "image/certificates/certificate24.webp",
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    role: "Front End Developer Intern",
    company: "PT Data Inovasi Integrasi",
    type: "work",
    duration: "Apr 2026 - Ags 2026",
    description: "Frontend development internship focusing on building and optimizing core HRIS modules with Next.js, managing dynamic form-states, and integrating robust RESTful APIs within a Micro Frontend architecture.",
    achievements: [
      "Develop modular HRIS features with Next.js and Micro Frontend, managing tasks via ClickUp and GitLab",
      "Integrate REST APIs for dynamic pagination, data limit configurations, and multi-key search parameters",
      "Optimize Overtime Approval workflows by designing side-by-side schedule comparison modals and fixing routing states",
      "Resolve form-state conflicts on Payroll Components to prevent stale inputs and build interactive table visibility toggles"
    ]
  },
  {
    id: 1,
    role: "AI Engineer Participant - Coding Camp Dicoding by DBS Foundation",
    company: "Coding Camp Dicoding by DBS Foundation",
    type: "bootcamp",
    duration: "Feb 2026 - Jul 2026",
    description: "AI Engineer scholarship program focusing on AI fundamentals, data visualization with Python, and ML model development with FastAPI.",
    achievements: [
      "Create interactive data visualizations with Python",
      "Develop AI models and deploy APIs with FastAPI",
      "Integrate ML models into web applications"
    ]
  },
  {
    id: 2,
    role: "Progressive Participant - Pijak By IBM SkillsBuild",
    company: "Progressive Scholarship Pijak By IBM SkillsBuild",
    type: "bootcamp",
    duration: "Jan 2026 - Mar 2026",
    description: "Completed IBM SkillsBuild courses in AI, Python, and Machine Learning through the Progressive Scholarship Pijak program.",
    achievements: [
      "Completed 4 IBM courses: AI, Python, ML, NLP & Computer Vision",
      "Built foundational knowledge in AI and machine learning",
      "Expanded programming skills with Python"
    ]
  },
  {
    id: 3,
    role: "Administrative Assistant Intern",
    company: "Bawaslu Banten Province",
    type: "work",
    duration: "Mei 2025",
    description: "Managed official travel data and documented meeting minutes for Bawaslu Banten Province.",
    achievements: [
      "Managed official travel data accurately",
      "Recorded and organized meeting minutes",
      "Improved administrative workflow efficiency"
    ]
  },
  {
    id: 4,
    role: "Robotics Instructor",
    company: "Banten Regional Jamboree",
    type: "speaker",
    duration: "Sep 2024",
    description: "Delivered robotics training for 400+ junior high school students using Arduino Uno with hands-on projects.",
    achievements: [
      "Trained 400+ students in robotics and Arduino",
      "Demonstrated practical projects (automatic trash bin & traffic light)",
      "Promoted STEM learning through interactive sessions"
    ]
  },
  {
    id: 5,
    role: "Web Development Instructor",
    company: "Inter-Campus Organization Collaboration",
    type: "speaker",
    duration: "2024",
    description: "Conducted responsive web design workshop using Bootstrap for 30+ participants from multiple universities.",
    achievements: [
      "Taught responsive web development with Bootstrap",
      "Engaged 30+ participants from various campuses",
      "Enhanced understanding of modern front-end practices"
    ]
  },
{
  id: 6,
  role: "Vice Chairperson",
  company: "Computer Community, Universitas Banten Jaya",
  type: "organization",
  duration: "May 2024 - Jun 2025",
  description: "Assisted Chair in strategy planning, supervised programs, and managed learning activities.",
  achievements: [
    "Planned and coordinated annual programs and events",
    "Oversaw training, seminars, competitions, and collaborations",
    "Led meetings and managed learning schedules across divisions",
    "Built relationships with external tech communities"
  ]
},
{
  id: 7,
  role: "General Secretary",
  company: "Computer Community, Universitas Banten Jaya",
  type: "organization",
  duration: "Jun 2023 - May 2024",
  description: "Managed internal administration and communication across divisions to support organizational operations.",
  achievements: [
    "Managed administrative tasks: minutes, invitations, letters, and reports",
    "Acted as liaison between divisions and planned meetings",
    "Prepared event proposals and co-managed financial reports"
  ]
}
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/ameliaakhila",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amelia-akhila-aqna-05339622a",
    icon: "Linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ameliaa.o_c",
    icon: "Instagram",
  },

];

export const CONTACT_INFO = {
  email: "ameliaakhila29@gmail.com",
  resume: "https://ameliaakhila.com/resume.pdf",
};
