const courses = {
  'mern': {
    title: 'MERN Stack',
    domain: 'CSE',
    desc: 'Learn to build full-stack web applications using the MERN stack—MongoDB, Express.js, React, and Node.js. This course covers front-end and back-end development, RESTful APIs, authentication, and deployment, equipping you with the skills to create modern, scalable web apps.',
    img: 'assets/course-mern.webp',
    duration: '3–6 Months',
    tags: ['MERNStack', 'WebDevelopment', 'FullStackDevelopment', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'JavaScript', 'FrontendDevelopment', 'BackendDevelopment', 'APIDevelopment', 'WebApp', 'Programming', 'LearnToCode', 'SoftwareDevelopment'],
    curriculum_modules: [
      { title: 'Introduction to Web Development', content: 'Understand the basics of web architecture, how the internet works, and setting up your development environment.' },
      { title: 'HTML, CSS, and JavaScript', content: 'Master the foundational building blocks of the web. Create semantic HTML, style with CSS, and add interactivity with JS.' },
      { title: 'React.js', content: 'Build dynamic user interfaces. Learn about components, state, props, hooks, and React Router.' },
      { title: 'Node.js', content: 'Explore server-side JavaScript. Understand the event loop, modules, and file system operations.' },
      { title: 'Express.js', content: 'Create robust backend APIs quickly. Learn routing, middleware, and request/response handling.' },
      { title: 'MongoDB', content: 'Dive into NoSQL databases. Learn about collections, documents, CRUD operations, and Mongoose ODM.' },
      { title: 'Authentication & Authorization', content: 'Secure your applications using JWT, sessions, and secure password hashing algorithms.' },
      { title: 'Deployment', content: 'Deploy your full-stack applications to cloud platforms like Vercel, Heroku, or AWS.' }
    ],
    projects: [
      { title: 'Capstone Project', desc: 'Build a full-stack web app. Apply all learned concepts. Present and deploy the project.', img: '' }
    ],
    certificates: [
      { name: 'Course Completion', img: 'assets/cert-completion.png' },
      { name: 'Internship', img: 'assets/cert-completion.png' },
      { name: 'Certificate of Participation', img: 'assets/cert-completion.png' }
    ],
    plans: [
      {
        name: 'General',
        desc: 'Perfect for getting started with the basics.',
        features: ['Access to core course content', 'Community support', 'Certificate of completion'],
        price: 'Contact Us',
        origPrice: ''
      },
      {
        name: 'Plus',
        desc: 'Enhanced features for deeper learning.',
        features: ['All General plan benefits', 'Advanced modules access', 'Priority email support', '1-on-1 mentoring sessions'],
        price: 'Contact Us',
        origPrice: '',
        popular: true
      },
      {
        name: 'Pro',
        desc: 'Comprehensive package for professional growth.',
        features: ['All Plus plan benefits', 'Exclusive workshops', 'Personalized career guidance', 'Lifetime access to updates'],
        price: 'Contact Us',
        origPrice: ''
      }
    ],
    faqs: [
      { q: 'Why should I choose Orvionar?', a: 'We combine expert-led content, lifetime access, doubt-clearing sessions, and practical learning activities to give you real-world skills, not just theory. Plus, our student-first approach ensures you get the support, flexibility, and value you deserve - all in one place.' },
      { q: 'Will I have lifetime access to the course content on the LMS?', a: 'Yes, you will have lifetime access to all course materials and updates.' },
      { q: 'Is there any Placement support?', a: 'Yes, we provide 100% placement assistance, resume building, and mock interviews.' },
      { q: 'Will I receive a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Are the courses beginner-friendly?', a: 'Absolutely! We start from the basics and gradually move to advanced concepts.' },
      { q: 'How do I enroll in the program?', a: 'You can click the "Enroll Now" button or contact our support team.' }
    ]
  },
  'data-science': {
    title: 'Data Science & Analytics',
    desc: 'Data science and analytics involve collecting, analyzing, and interpreting large volumes of data to extract meaningful insights and support decision-making. Uses statistics, machine learning, and data visualisation tools.',
    img: 'assets/course-data-science.webp',
    duration: '3–5 Months',
    curriculum: ['Python for Data Science','Numpy, Pandas & Matplotlib','Exploratory Data Analysis (EDA)','Statistics & Probability','Machine Learning Algorithms','Data Visualisation','SQL for Data Analysts','Real-World Projects & Case Studies'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'gen-ai': {
    title: 'Gen-AI & Prompt Engineering',
    desc: 'Generative AI refers to AI systems that can create new content — text, images, audio, or code. These models learn from large datasets and generate human-like outputs. Master prompting techniques to get the best out of AI tools.',
    img: 'assets/course-gen-ai.webp',
    duration: '2–3 Months',
    curriculum: ['Introduction to Generative AI','Large Language Models (LLMs)','Prompt Engineering Fundamentals','Advanced Prompting Techniques','ChatGPT, Gemini & Claude','AI Tools for Productivity','Building AI-Powered Apps','Responsible AI & Ethics'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'fullstack': {
    title: 'Full Stack Web Development',
    desc: 'Build dynamic, scalable, and interactive web applications by combining frontend and backend technologies. Covers HTML, CSS, JavaScript, modern frameworks, databases, and cloud deployment.',
    img: 'assets/course-fullstack.png',
    duration: '5–6 Months',
    curriculum: ['HTML5, CSS3 & Responsive Design','JavaScript ES6+','React.js / Angular Frontend','Node.js Backend Development','Databases: SQL & NoSQL','REST & GraphQL APIs','DevOps & CI/CD Basics','Final Capstone Project'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'dotnet': {
    title: '.NET Full Stack Development',
    desc: ".NET Full Stack Web Development involves building complete web applications using Microsoft's .NET framework for the backend and modern frontend technologies like HTML, CSS, JavaScript, and Angular or React.",
    img: 'assets/course-dotnet.webp',
    duration: '4–5 Months',
    curriculum: ['C# Programming Fundamentals','ASP.NET Core Web API','Entity Framework & SQL Server','Angular / React Frontend','Authentication & Authorization','Azure Deployment','Unit Testing in .NET','Capstone Project'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'ai': {
    title: 'Artificial Intelligence',
    desc: 'Explore the fundamentals of Artificial Intelligence, from core concepts to advanced applications. Covers intelligent agents, problem-solving, machine learning, natural language processing, and real-world AI projects.',
    img: 'assets/course-ai.webp',
    duration: '4–5 Months',
    curriculum: ['AI Foundations & History','Search Algorithms','Knowledge Representation','Machine Learning Overview','Deep Learning & Neural Networks','Natural Language Processing','Computer Vision','AI Project Development'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'ml': {
    title: 'Machine Learning',
    desc: 'Master the essentials of Machine Learning — Python programming, data preprocessing, supervised and unsupervised learning algorithms, model evaluation, and deployment to production.',
    img: 'assets/course-ml.webp',
    duration: '3–5 Months',
    curriculum: ['Python & Libraries (Numpy, Pandas)','Supervised Learning Algorithms','Unsupervised Learning','Model Evaluation & Tuning','Feature Engineering','Deep Learning Introduction','Scikit-learn & TensorFlow','ML Project Deployment'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'azure': {
    title: 'Azure Cloud Computing',
    desc: 'Dive into the world of cloud computing with Microsoft Azure. Covers essential Azure services, networking, compute, storage, security, and DevOps — equipping you to design, deploy, and manage cloud solutions.',
    img: 'assets/course-azure.webp',
    duration: '3–4 Months',
    curriculum: ['Cloud Computing Fundamentals','Azure Core Services','Azure Networking & Storage','Virtual Machines & Containers','Azure Active Directory','DevOps with Azure Pipelines','Security & Compliance','AZ-900 Exam Preparation'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'cybersecurity': {
    title: 'Cyber Security',
    desc: 'Gain expertise in Cyber Security. Learn to protect systems and networks from cyber threats, master cryptography, ethical hacking, web application security, and incident response.',
    img: 'assets/course-cybersecurity.webp',
    duration: '3–5 Months',
    curriculum: ['Networking & Security Fundamentals','Ethical Hacking Basics','Cryptography & PKI','Web Application Security (OWASP)','Network Security & Firewalls','Penetration Testing','Incident Response & Forensics','Security Certifications Prep'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'qa': {
    title: 'QA Testing & Automation',
    desc: 'Master the art of Quality Assurance. Learn manual and automated testing techniques, tools like Selenium, TestNG, Postman, and JMeter, and gain expertise in API and performance testing.',
    img: 'assets/course-qa.webp',
    duration: '3–4 Months',
    curriculum: ['SDLC & Testing Fundamentals','Manual Testing Techniques','Selenium WebDriver','TestNG Framework','API Testing with Postman','Performance Testing with JMeter','CI/CD Integration','Agile & Scrum for QA'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'powerbi': {
    title: 'Power BI for Data Visualization',
    desc: 'Unlock the power of data visualization with Power BI. Covers Power BI Desktop, data connections, transformations, DAX, advanced visualizations, dashboards, and Power BI Service.',
    img: 'assets/course-powerbi.webp',
    duration: '2–3 Months',
    curriculum: ['Power BI Desktop Basics','Data Sources & Connections','Power Query & Data Transformation','DAX Formulas & Measures','Interactive Dashboards','Advanced Visualisations','Power BI Service & Sharing','Real-World Business Reports'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'dsa': {
    title: 'Data Structures & Algorithms',
    desc: 'Master the fundamentals of Data Structures and Algorithms to excel in problem-solving and coding. Covers arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming.',
    img: 'assets/course-dsa.webp',
    duration: '2–4 Months',
    curriculum: ['Arrays & Strings','Linked Lists & Stacks','Trees & Binary Search Trees','Graphs & Graph Algorithms','Sorting & Searching Algorithms','Dynamic Programming','Recursion & Backtracking','Coding Interview Preparation'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  },
  'android': {
    title: 'Android Development',
    desc: 'Learn to build modern Android applications from scratch. Covers Android Studio setup, UI design, activities, fragments, data storage, networking, permissions, background tasks, and notifications.',
    img: 'assets/course-android.webp',
    duration: '3–5 Months',
    curriculum: ['Kotlin Programming Basics','Android Studio Setup','UI Design & Layouts','Activities & Fragments','Navigation Components','Data Storage (SQLite, Room)','Networking with Retrofit','Publishing to Play Store'],
    fees: {
      original: '₹40,000',
      discounted: '₹25,000'
    },
    instructor: {
      name: 'Industry Expert',
      role: 'Senior Developer & Mentor',
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    faqs: [
      { q: 'Do I get a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
      { q: 'Is there placement support?', a: 'Yes, we provide 100% placement assistance including resume building and mock interviews.' },
      { q: 'Are the sessions live or recorded?', a: 'We offer a hybrid model with live interactive sessions and recorded videos for revision.' }
    ]
  }
};


// Auto-fill defaults for missing courses to prevent crashes
Object.keys(courses).forEach(key => {
  const c = courses[key];
  if(!c.domain) c.domain = 'CSE';
  if(!c.tags) c.tags = ['Tech', 'Career', 'Learning'];
  if(!c.curriculum_modules) {
    c.curriculum_modules = (c.curriculum || []).map((item, idx) => ({ title: item, content: `Master ${item} through hands-on exercises, real-world case studies, and expert-guided walkthroughs. This module includes practical assignments and a quiz to solidify your understanding.` }));
    if(c.curriculum_modules.length === 0) c.curriculum_modules = [
      {title: 'Introduction & Foundations', content: 'Get started with the fundamentals, setup your environment, and understand the big picture of the domain.'},
      {title: 'Core Concepts Deep Dive', content: 'Explore core concepts in depth with hands-on exercises and real-world examples.'},
      {title: 'Advanced Techniques', content: 'Level up with advanced techniques, patterns, and industry best practices.'},
      {title: 'Tools & Ecosystem', content: 'Master the tools, libraries, and frameworks used by professionals in the industry.'},
      {title: 'Real-World Projects', content: 'Apply everything you have learned by building real-world projects from scratch.'},
      {title: 'Career Preparation', content: 'Resume building, mock interviews, and placement preparation to land your dream job.'}
    ];
  }
  if(!c.projects) c.projects = [
    {title: 'Capstone Project', desc: 'Build a comprehensive, industry-grade project from scratch integrating all concepts learned in this course. Present and deploy your final application to a real audience.', img: 'assets/capstone-project.webp'},
    {title: 'Mini Project', desc: 'A focused, hands-on mini project to solidify your understanding of core concepts with guided mentorship support.', img: 'assets/capstone-project.webp'}
  ];
  // Update existing projects that have empty img
  c.projects.forEach(p => { if(!p.img) p.img = 'assets/capstone-project.webp'; });
  if(!c.certificates) c.certificates = [
    {name: 'Course Completion', img: 'assets/cert-completion.png'},
    {name: 'Internship', img: 'assets/cert-completion.png'},
    {name: 'Certificate of Participation', img: 'assets/cert-completion.png'}
  ];
  // Update existing certificates that have empty img
  c.certificates.forEach(cert => { if(!cert.img || cert.img.includes('cert-1') || cert.img.includes('cert-2') || cert.img.includes('cert-3') || cert.img.includes('cert-sample') || cert.img.includes('placeholder') || cert.img.includes('logo2')) cert.img = 'assets/cert-completion.png'; });
  
  if(!c.plans) c.plans = [
    {name: 'General', desc: 'Get started.', features: ['Core access', 'Community support'], price: 'Contact Us'},
    {name: 'Plus', desc: 'Enhanced features.', features: ['All General benefits', 'Advanced modules', '1-on-1 mentoring'], price: 'Contact Us', popular: true},
    {name: 'Pro', desc: 'Comprehensive package.', features: ['All Plus benefits', 'Career guidance', 'Lifetime updates'], price: 'Contact Us'}
  ];
  if(!c.faqs) c.faqs = [
    { q: 'Why should I choose Orvionar?', a: 'We combine expert-led content, lifetime access, doubt-clearing sessions, and practical learning activities to give you real-world skills, not just theory. Plus, our student-first approach ensures you get the support, flexibility, and value you deserve - all in one place.' },
    { q: 'Will I have lifetime access to the course content on the LMS?', a: 'Yes, you will have lifetime access to all course materials and updates.' },
    { q: 'Is there any Placement support?', a: 'Yes, we provide 100% placement assistance, resume building, and mock interviews.' },
    { q: 'Will I receive a certificate?', a: 'Yes, an industry-recognized certificate is provided upon completion.' },
    { q: 'Are the courses beginner-friendly?', a: 'Absolutely! We start from the basics and gradually move to advanced concepts.' },
    { q: 'How do I enroll in the program?', a: 'You can click the "Enroll Now" button or contact our support team.' }
  ];
});


// Enhanced Course Data Injection
const enhancedData = {
  'mern': {
    skills: ['Frontend Development', 'Backend API Design', 'Database Management', 'State Management'],
    tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
    prereqs: ['Basic HTML/CSS', 'Understanding of basic programming concepts'],
    outcomes: ['Full Stack Developer', 'Frontend Engineer', 'Backend Developer']
  },
  'data-science': {
    skills: ['Data Wrangling', 'Statistical Analysis', 'Machine Learning', 'Data Visualization'],
    tools: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Jupyter'],
    prereqs: ['Basic Mathematics/Statistics', 'Fundamental programming logic'],
    outcomes: ['Data Scientist', 'Data Analyst', 'Machine Learning Engineer']
  },
  'gen-ai': {
    skills: ['Prompt Engineering', 'LLM Integration', 'Generative Modeling', 'AI Ethics'],
    tools: ['OpenAI API', 'LangChain', 'Hugging Face', 'Python'],
    prereqs: ['Python Basics', 'Understanding of APIs'],
    outcomes: ['AI Engineer', 'Prompt Engineer', 'Gen-AI Developer']
  },
  'fullstack': {
    skills: ['UI/UX Implementation', 'RESTful API Construction', 'Version Control', 'Deployment'],
    tools: ['HTML/CSS', 'JavaScript', 'React/Angular', 'Node/Express', 'SQL/NoSQL'],
    prereqs: ['Basic computer literacy', 'Passion for coding'],
    outcomes: ['Full Stack Web Developer', 'Software Engineer']
  },
  'dotnet': {
    skills: ['C# Programming', 'ASP.NET MVC', 'Entity Framework', 'API Integration'],
    tools: ['C#', '.NET Core', 'SQL Server', 'Visual Studio', 'Azure'],
    prereqs: ['Understanding of Object-Oriented Programming (OOP)'],
    outcomes: ['.NET Developer', 'Backend Engineer (C#)', 'Software Developer']
  },
  'ai': {
    skills: ['Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP'],
    tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
    prereqs: ['Python Programming', 'Calculus & Linear Algebra basics'],
    outcomes: ['AI Researcher', 'AI Developer', 'Computer Vision Engineer']
  },
  'ml': {
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'],
    tools: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost'],
    prereqs: ['Python Basics', 'Statistics fundamentals'],
    outcomes: ['Machine Learning Engineer', 'Data Scientist']
  },
  'azure': {
    skills: ['Cloud Architecture', 'Virtualization', 'Azure DevOps', 'Cloud Security'],
    tools: ['Microsoft Azure', 'Azure CLI', 'Docker', 'Kubernetes'],
    prereqs: ['Basic networking knowledge', 'Understanding of OS concepts'],
    outcomes: ['Cloud Engineer', 'Azure Administrator', 'DevOps Engineer']
  },
  'cybersecurity': {
    skills: ['Ethical Hacking', 'Network Security', 'Cryptography', 'Risk Management'],
    tools: ['Kali Linux', 'Wireshark', 'Metasploit', 'Nmap'],
    prereqs: ['Networking fundamentals', 'Basic Linux commands'],
    outcomes: ['Security Analyst', 'Penetration Tester', 'Security Engineer']
  },
  'qa': {
    skills: ['Manual Testing', 'Automated Testing', 'Test Planning', 'Bug Tracking'],
    tools: ['Selenium', 'Jira', 'Postman', 'TestNG'],
    prereqs: ['Basic understanding of software lifecycles'],
    outcomes: ['QA Engineer', 'Automation Tester', 'Quality Analyst']
  },
  'powerbi': {
    skills: ['Data Modeling', 'DAX Expressions', 'Interactive Dashboard Creation', 'Data Storytelling'],
    tools: ['Power BI Desktop', 'Power Query', 'Excel', 'SQL'],
    prereqs: ['Basic Excel skills', 'Understanding of data formats'],
    outcomes: ['BI Developer', 'Data Analyst', 'Reporting Analyst']
  },
  'dsa': {
    skills: ['Algorithmic Thinking', 'Time/Space Complexity Analysis', 'Problem Solving', 'Code Optimization'],
    tools: ['C++ / Java / Python', 'LeetCode/HackerRank', 'IDE Debugging'],
    prereqs: ['Proficiency in at least one programming language'],
    outcomes: ['Software Engineer', 'Competitive Programmer', 'Backend Developer']
  },
  'android': {
    skills: ['Mobile UI Design', 'Android SDK', 'API Integration', 'App Deployment'],
    tools: ['Android Studio', 'Kotlin / Java', 'Firebase', 'SQLite'],
    prereqs: ['Object-Oriented Programming (Java/Kotlin)'],
    outcomes: ['Android Developer', 'Mobile App Engineer']
  }
};

Object.keys(enhancedData).forEach(k => {
  if (courses[k]) {
    courses[k].skills = enhancedData[k].skills;
    courses[k].tools = enhancedData[k].tools;
    courses[k].prereqs = enhancedData[k].prereqs;
    courses[k].outcomes = enhancedData[k].outcomes;
  }
});

(function() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get('course') || 'mern';
  const c = courses[key] || courses['mern'];

  document.title = c.title + ' – Orvionar Tech';
  
  // Basic info
  if(document.getElementById('courseTitle')) document.getElementById('courseTitle').textContent = c.title;
  if(document.getElementById('courseDesc')) document.getElementById('courseDesc').textContent = c.desc;
  if(document.getElementById('courseDuration')) document.getElementById('courseDuration').textContent = c.duration;
  if(document.getElementById('courseDomain')) document.getElementById('courseDomain').textContent = "Domain: " + (c.domain || "CSE");
  
  const thumb = document.getElementById('courseThumb');
  if(thumb && c.img) thumb.style.backgroundImage = `url('${c.img}')`;

  // Tags
  const tagsContainer = document.getElementById('courseTags');
  if (tagsContainer) {
    tagsContainer.innerHTML = c.tags.map(tag => `<span class="course-tag">#${tag}</span>`).join('');
  }

  // Curriculum Accordion
  const accContainer = document.getElementById('curriculumAccordion');
  if (accContainer) {
    accContainer.innerHTML = c.curriculum_modules.map((mod, i) => `
      <div class="accordion-item ${i===0 ? 'active' : ''}">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
          <span>${mod.title}</span>
          <i class="fa-solid fa-chevron-down accordion-icon"></i>
        </div>
        <div class="accordion-body">
          <p>${mod.content}</p>
        </div>
      </div>
    `).join('');
  }

  // Projects
  const projContainer = document.getElementById('projectsGrid');
  if (projContainer) {
    projContainer.innerHTML = c.projects.map(proj => `
      <div class="project-card" style="background:var(--dark);border-radius:12px;overflow:hidden;box-shadow:var(--shadow);">
        ${proj.img ? `<div style="width:100%;height:200px;background:url('${proj.img}') center/cover no-repeat;"></div>` : ''}
        <div style="padding:24px;">
          <h3 style="font-size:1.1rem;font-weight:800;margin-bottom:10px;color:var(--white);">${proj.title}</h3>
          <p style="color:var(--gray-400);font-size:0.92rem;line-height:1.65;">${proj.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Certificates
  const certTabs = document.getElementById('certTabs');
  const certImgs = document.getElementById('certImages');
  if (certTabs && certImgs) {
    certTabs.innerHTML = c.certificates.map((cert, i) => `
      <button class="cert-tab ${i===0?'active':''}" onclick="showCert(${i}, this)">${cert.name}</button>
    `).join('');
    
    certImgs.innerHTML = c.certificates.map((cert, i) => `
      <img src="${cert.img || 'assets/cert-completion.png'}" class="cert-image ${i===0?'active':''}" id="certImg-${i}" alt="${cert.name}">
    `).join('');
    
    window.showCert = function(idx, btn) {
      document.querySelectorAll('.cert-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.cert-image').forEach(img => img.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('certImg-' + idx).classList.add('active');
    };
  }

  // Pricing Plans
  const pricingContainer = document.getElementById('pricingGrid');
  if (pricingContainer) {
    pricingContainer.innerHTML = c.plans.map(plan => `
      <div class="pricing-card ${plan.popular ? 'popular' : ''}">
        ${plan.popular ? '<div style="background:var(--orange);color:white;font-size:0.8rem;font-weight:700;padding:4px 12px;border-radius:20px;display:inline-block;margin:0 auto 16px auto;">MOST POPULAR</div>' : ''}
        <h3>${plan.name}</h3>
        <p>${plan.desc}</p>
        <div style="margin-bottom:24px;">
          <span style="font-size:1.8rem;font-weight:700">${plan.price}</span>
          ${plan.origPrice ? `<span style="text-decoration:line-through;color:#aaa;font-size:1rem;margin-left:8px">${plan.origPrice}</span>` : ''}
        </div>
        <ul class="pricing-features">
          ${plan.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
        </ul>
        <a href="login.html" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:auto">Enroll Now</a>
      </div>
    `).join('');
  }


  // Overview Rendering
  if(document.getElementById('courseSkills') && c.skills) {
    document.getElementById('courseSkills').innerHTML = c.skills.map(s => `<li>${s}</li>`).join('');
  }
  if(document.getElementById('courseTools') && c.tools) {
    document.getElementById('courseTools').innerHTML = c.tools.map(t => `<li>${t}</li>`).join('');
  }
  if(document.getElementById('coursePrereqs') && c.prereqs) {
    document.getElementById('coursePrereqs').innerHTML = c.prereqs.map(p => `<li>${p}</li>`).join('');
  }
  if(document.getElementById('courseOutcomes') && c.outcomes) {
    document.getElementById('courseOutcomes').innerHTML = c.outcomes.map(o => `<li>${o}</li>`).join('');
  }

  // FAQs

  const faqList = document.getElementById('faqList');
  if (faqList) {
    faqList.innerHTML = c.faqs.map((faq, i) => `
      <div class="accordion-item">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
          <span>${faq.q}</span>
          <i class="fa-solid fa-chevron-down accordion-icon"></i>
        </div>
        <div class="accordion-body">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');
  }
})();
