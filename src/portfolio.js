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
  title: "Lucas Pastur",
  logo_name: "LucasPastur",
  nickname: "pasturl",
  subTitle:
    "Proactive and dedicated Data Scientist with 6+ years of experience in managing multidisciplinary teams, delivering cross-industry, high-impact solutions using advanced machine learning techniques.",
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
      title: "Data Science & Artificial Intelligence",
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
      title: "Cloud Infra-Architecture and Big Data",
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
    {
      title: "Healhtcare ",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
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
        color: "#F79F1B",
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
      logo_path: "iiitk_logo.png",
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
      logo_path: "iu_logo.png",
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
      logo_path: "iu_logo.png",
      alt_name: "Universidade da Coruna",
      duration: "2008 - 2013",
      descriptions: [
        "Honor mention to the masters final project, 'Role of neurons and glial cells in information processing in the brain. Implementation of an Artificial NeuroGlial Network'",
        "Ran experiments using CESGA supercomputer",
      ],
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
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/20804ea95daab85478a8efdc3c31ef62",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Financial Engineering and Risk Management",
      subtitle: "- Columbia University (Coursera)",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/ef4160a7449abfffc6d7a4a2ac13caec",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am leading Generative AI squad at Mango, developing with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
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
          logo_path: "legato_logo.png",
          duration: "Oct 2020 - Present",
          location: "Barcelona, Spain",
          description:
            "Spearheaded Lisa, the internal platform for Large Language Models like ChatGPT, to address a diverse range of use cases, catalyzing innovation and fostering collaboration across departments. Developed Inspire, an app leveraging text-2-image algorithms that empowered the design team, significantly enhancing creative processes and efficiency.",
          color: "#0879bf",
        },
        {
          title: "managing and deliveringr",
          company: "Aplicationes en Informatica Avanzada (AIA)",
          company_url: "https://aia.es/",
          logo_path: "muffito_logo.png",
          duration: "Oct 2017 - Oct 2020",
          location: "Barcelona, Spain",
          description:
            "Project oversight, commercial proposal preparation, and client account management. Spearheaded an innovative bioinformatics initiative, leading to the development of a groundbreaking tool for the identification of RNA-based therapeutic drugs, showcasing a",
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
          logo_path: "tiktok_logo.png",
          duration: "Sept 2023 - Present",
          location: "Barcelona, Spain",
          description:
            "Instructed the course 'Digital Creation 2D, 3D, CGI and AI' emphasizing the application of AI tools in photography and design to foster innovative content generation and enhance creative.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Scientific papers",
      experiences: [
        {
          title:
            "Deep artificial neural networks and neuromorphic chips for big data analysis: pharmaceutical and bioinformatics applications",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
  publicationsHeader,
  publications,
  contactPageData,
};
