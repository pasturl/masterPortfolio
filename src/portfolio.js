/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lucas Pastur Portfolio",
  description:
    "Proactive and dedicated Data Scientist with 6+ years of experience in managing multidisciplinary teams, delivering cross-industry, high-impact solutions using advanced machine learning techniques.",
  og: {
    title: "Lucas Pastur Portfolio",
    type: "website",
    url: "https://lucas-pastur-romay.com/",
  },
};

//Home Page
const greeting = {
  title: "Lucas Pastur Romay",
  logo_name: "LucasPastur",
  nickname: "Data Scientist specializing in Generative AI",
  subTitle:
    "Leveraging 6+ years of experience, I lead and collaborate with diverse teams to deliver high-impact solutions across industries, with a current focus on large language models and image generation algorithms.",
  resumeLink:
    "https://drive.google.com/file/d/140q4pHOix3k5puJrCh-DAJ6Ipda07a7b/view?usp=sharing",
  portfolio_repository: "https://github.com/pasturl/pasturl.github.io ",
  githubProfile: "https://github.com/pasturl",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/pasturl",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lucas-pastur-romay/?locale=en_US",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:lucas.pastur@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/data_some_thing",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "Developing highly scalable production AI models on 40+ projects",
        "Experience working with Large Language Models to address a diverse range of use cases",
        "Pioner in the use of Generative AI to improve fashion design processes at Mango",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "mdi:language-r",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Application development",
      fileName: "FullStackImg",
      skills: [
        "Design application architectures orchestrating data processing, AI models inference and user interface",
        "Developing prototypes and simple web applications using streamlit",
        "Building responsive website using Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "devicon:streamlit-wordmark",
          style: {
            color: "#ff4b4b",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django-wordmark",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Cloud and Big Data",
      fileName: "CloudInfraImg",
      skills: [
        "Experience working on multiple cloud platforms",
        "Hosting and maintaining AI projects on virtual machine instances along with integration of databases",
        "Deploying Machine Learning and deep learning models on cloud",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos:airflow-icon",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "logos:apache-spark",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GoogleScholar",
      iconifyClassname: "academicons:google-scholar",
      style: {
        color: "#0080f3",
      },
      profileLink:
        "https://scholar.google.es/citations?user=ZMOI-J0AAAAJ&hl=en",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/pastur",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ph.D in Information and Communication Technologies",
      subtitle: "Faculty of Computer Science. Universidade da Coruna, Spain",
      logo_path: "udc.png",
      alt_name: "Universidade da Coruna",
      duration: "2014 - 2018",
      descriptions: [
        "Thesis Cum Laude. 'Models of information processing in the brain applied to connectionist Systems. Artificial NeuroGlial Network and Deep Learning'",
        "Innovated in the field of Deep Learning by developing novel algorithms that incorporate both neuronal and glial cell-inspired processing units",
        "Use of Tensorflow to implement the new architecture using GPU servers on CESGA supercomputer",
        "Actively engaged in research, contributing to scientific papers and project proposals, and disseminating findings at international conferences",
      ],
      website_link: "https://www.udc.es/",
    },
    {
      title: "Neuroscience Master's degree Cognitive Science specialization",
      subtitle: "Universidade da Coruna, Spain",
      logo_path: "udc.png",
      alt_name: "Universidade da Coruna",
      duration: "2013 - 2014",
      descriptions: [
        "Honor mention to the masters final project, 'Role of neurons and glial cells in information processing in the brain. Implementation of an Artificial NeuroGlial Network'",
        "Ran experiments using CESGA supercomputer",
      ],
      website_link: "https://www.udc.es/",
    },
    {
      title: "Biology degree",
      subtitle: "Universidade da Coruna, Spain",
      logo_path: "udc.png",
      alt_name: "Universidade da Coruna",
      duration: "2008 - 2013",
      descriptions: ["Environmental Biology Specialization"],
      website_link: "https://www.udc.es/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Generative Adversarial Networks (GANs) Specialization",
      subtitle: "- deeplearning.ai (Coursera)",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/6e6500d6bb23cfdfba8d48fbbe5aa6ba",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "- deeplearning.ai (Coursera)",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/cfc4dbeefff024640c616ae26613fffc",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Big Data Specialization",
      subtitle: "- University of California San Diego (Coursera)",
      logo_path: "UC_san_diego.png",
      certificate_link:
        "https://coursera.org/share/20804ea95daab85478a8efdc3c31ef62",
      alt_name: "Big Data",
      color_code: "#FFFFFF",
    },
    {
      title: "Financial Engineering and Risk Management",
      subtitle: "- Columbia University (Coursera)",
      logo_path: "columbia_university.jpg",
      certificate_link:
        "https://coursera.org/share/ef4160a7449abfffc6d7a4a2ac13caec",
      alt_name: "Financial Engineering",
      color_code: "#005494",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Teaching",
  description:
    "I am leading the Generative AI squad at Mango, working in cross-cutting initiatives to transform the company. I have also worked with some well established companies as consultant. I also teach university classes on the use of AI in design.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Manager Data Scientist - Generative AI",
          company: "Mango fashion group",
          company_url: "https://www.mangofashiongroup.com/",
          logo_path: "mango.jpg",
          duration: "Apr 2023 - Present",
          location: "Barcelona, Spain",
          description:
            "Spearheaded Lisa, the internal platform for Large Language Models like ChatGPT, to address a diverse range of use cases, catalyzing innovation and fostering collaboration across departments. Developed Inspire, an app leveraging text-2-image algorithms that empowered the design team, significantly enhancing creative processes and efficiency.",
          color: "#0879bf",
        },
        {
          title: "Manager Data Scientist - Product squad",
          company: "Mango fashion group",
          company_url: "https://www.mangofashiongroup.com/",
          logo_path: "mango.jpg",
          duration: "Jan 2022 - Apr 2023",
          location: "Barcelona, Spain",
          description:
            "Led an AI-powered platform to accurately predict and purchase optimal product size. Pioneered a computer vision initiative to analyze and identify visual similarities among products. Scoped and implemented high-impact projects across various product stages (purchase, design, patter making)",
          color: "#0879bf",
        },
        {
          title: "Lead Data Scientist - Pricing squad",
          company: "Mango fashion group",
          company_url: "https://www.mangofashiongroup.com/",
          logo_path: "mango.jpg",
          duration: "Oct 2020 - Jan 2022",
          location: "Barcelona, Spain",
          description:
            "Directed the Big Data pricing platform, optimizing weekly pricing strategies, which accounted for €400M in annual sales and generated over €20M in incremental revenue each year. •	Enhanced the Big Data architecture, achieving a 50% reduction in computation costs, driving efficiency and scalability.",
          color: "#0879bf",
        },
        {
          title: "Innovation Area Manager",
          company: "Aplicationes en Informatica Avanzada (AIA)",
          company_url: "https://aia.es/",
          logo_path: "AIA.png",
          duration: "Jan 2019 - Oct 2020",
          location: "Barcelona, Spain",
          description:
            "Project oversight, commercial proposal preparation, and client account management. Spearheaded an innovative bioinformatics initiative, leading to the development of a groundbreaking tool for the identification of RNA-based therapeutic drugs. accuracy in clinical outcomes.",
          color: "#9b1578",
        },
        {
          title: "Senior Data Scientist",
          company: "Aplicationes en Informatica Avanzada (AIA)",
          company_url: "https://aia.es/",
          logo_path: "AIA.png",
          duration: "Feb 2018 - Dec 2018",
          location: "Barcelona, Spain",
          description:
            "Independently led data science projects from conceptualization to delivery, showcasing strong capability in client interaction and result presentation. Played a pivotal role in mentoring newcomers to the team, enhancing their skills and integration. Developed cutting-edge Deep Learning models for real-time forecasting of air flow and oven activity.",
          color: "#9b1578",
        },
        {
          title: "Data Scientist",
          company: "Knowledge Discovery and Predictions, S.A (KDP)",
          company_url: "https://aia.es/",
          logo_path: "kdp.png",
          duration: "Oct 2017 - Jan 2018",
          location: "Barcelona, Spain",
          description:
            "•	Contributed to the development of econometric and Machine Learning models for the valuation of complex financial assets, including the implementation of Gradient Boosting Machine (GBM) models to predict loan prepayment propensities and Montecarlo simulations to forecast financial asset profits. •	Engaged in a text mining project, utilizing TF-IDF and Latent Dirichlet Allocation (LDA) for document vectorization and applying Louvain and k-means clustering in Spark to analyze document clusters.",
          color: "#9b1578",
        },
        {
          title: "R+D technical staff",
          company: "Universidade da Coruña",
          company_url: "https://www.udc.es/",
          logo_path: "udc.png",
          duration: "Oct 2016 - Sept 2017",
          location: "A Coruña, Spain",
          description:
            "•	Innovated in the field of Deep Learning by developing novel algorithms that incorporate both neuronal and glial cell-inspired processing units, leveraging Tensorflow and Keras frameworks. Actively engaged in research across Artificial Intelligence, Data Science, and Neuroscience, contributing to scientific papers and project proposals, and disseminating findings at international conferences.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Teaching",
      experiences: [
        {
          title: "University teacher",
          company: "LCI Barcelona",
          company_url: "https://www.lcibarcelona.com/",
          logo_path: "LCI.svg",
          duration: "Sept 2023 - Present",
          location: "Barcelona, Spain",
          description:
            "Instructed the course 'Digital Creation 2D, 3D, CGI and AI' emphasizing the application of AI tools in photography and design to foster innovative content generation and enhance creative. Curated a comprehensive curriculum highlighting AI-driven visual content generation, covering Midjourney, Adobe Firefly, Ideogram, Stable Diffusion, and advanced 3D and video generation technologies.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have been working on many AI projects, most of them at companies, and I also developed some personal projects",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Lisa (Mango)",
      createdAt: "2023-10",
      description:
        "Leading the development of Mango's conversational generative AI platform that helps employees and partners",
      url:
        "https://www.mangofashiongroup.com/en/w/mango-lanza-su-propia-plataforma-de-ia-generativa-conversacional-denominada-lisa",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Inspire (Mango)",
      createdAt: "2022-11",
      description:
        "Generative AI platform of images, to help the company’s design team seek inspiration to co-create prints, fabrics, garments",
      url:
        "https://www.mangofashiongroup.com/en/w/mango-lanza-su-propia-plataforma-de-ia-generativa-conversacional-denominada-lisa",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Hack4NF 2022",
      createdAt: "2022-10",
      description:
        "Best page award in a hackathon about a rare disease called Neurofibromatosis. I have trained models to predict cancer types using genomic and clinical data. Use of NLP techniques for clustering genes. Development of a web application to analyze the results.",
      url: "https://pasturl-hack4nf-2022-app-o8lusi.streamlit.app",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Personal web page",
      createdAt: "2022-10",
      description:
        "I have developed my personal website to improve my knowledge in web application development using Django, HTML and CSS. The application was hosted on an EC2 cloud server on AWS but it turned down as AWS free tier was remove",
      url: "https://github.com/pasturl/portfolio-django",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Dashboard Covid data",
      createdAt: "2022-04",
      description:
        "Use of covid data to analyze the temporal evolution by country. Preparation of a dashboard using plotly and streamlit. Use of geospatial data to make covid incidence maps by country.",
      url:
        "https://pasturl-covid-map-dashboard-streamlitapp-e206f3.streamlitapp.com",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Sign language translator",
      createdAt: "2022-02",
      description:
        "Application for real-time translation from sign language to text. Use of open-cv for video processing. Use of landmark detection models and training of classification models.",
      url: "https://github.com/pasturl/sign-language",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Sentiment analysis",
      createdAt: "2021-08",
      description:
        "Sentiment analysis using Machine Learning models (BERT, LightGBM, Logistic Regression). Use of SHAP explainability technique to get the most important words. Visualization using word clouds.",
      url: "https://github.com/pasturl/Sentiment-Analysis",
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I love science, I published a few papers during my PhD and continue to do so in my spare time.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "Machine learning techniques in predicting braf mutation status in cutaneous melanoma from clinical and histopathologic features",
      createdAt: "2022-11-01",
      description: "Applied Immunohistochemistry & Molecular Morphology",
      url:
        "https://journals.lww.com/appliedimmunohist/fulltext/2022/11000/machine_learning_techniques_in_predicting_braf.5.aspx",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "Deep artificial neural networks and neuromorphic chips for big data analysis: pharmaceutical and bioinformatics applications",
      createdAt: "2016-08-16",
      description: "International journal of molecular sciences",
      url: "https://www.mdpi.com/1422-0067/17/8/1313",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "lucas.jpg",
    description: "You can contact me through Linkedin or email.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Barcelona",
    locality: "Barcelona",
    country: "Spain",
    region: "Cataluña",
    postalCode: "08010",
    streetAddress: "Barcelona",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/wWz2TC4YoVyt6tVH9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
