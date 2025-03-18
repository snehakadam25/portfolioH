
import profile from './profile.jpg';
import { faAppStore, faGithub } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Sneha",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Sneha",
  description: "A Software Engineer building distributed systems.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#snehakadam444@gmail.com",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I’m a Senior Software and Data Engineer with 8+ years of experience designing and building scalable systems, data pipelines, and AI/ML solutions. I specialize in developing and optimizing data engineering workflows, including ETL pipelines, data lakes, and real-time streaming systems, ensuring efficient data processing and high availability. Recently, I’ve expanded my focus to AI and blockchain technologies, working on machine learning models, multi-agent systems, and smart contracts. I’m passionate about leveraging advanced technologies to solve complex problems and deliver innovative, data-driven solutions."
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Software Engineering",
      description: "Full Stack Software Development, search Intelligence, Knowledge graphs",
      icons: null,
    },
    {
      title: "Data Engineering",
      description: "Batch & Streaming Data Pipelines, Data Modeling, KPIs, Montinoring, 24/7 supoort",
      icons: null,
    },
    {
      title: "AI/ML Engineering",
      description: "AI agents, ML modeling, MLOps, LLMops",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "AI-Powered Credit Risk Model",
      description: "A  machine-learning model using TensorFlow to predict credit risk. Deployed the model using Vertex AI and integrated it with data pipelines for data prep.",
      icons: [
        {
          icon: faAppStore,
          link: "",
        },
        {
          icon: faGithub,
          link: "https://github.com/snehakadam25/invRiskModeling",
        },
      ]
    },
    {
      title: "Multi-Agent AI for Support Automation",
      description: "Built a multi-agent system where one agent handles technical troubleshooting, another responds to FAQs, and a third escalates complex issues, indexed codebases with Pinecone and provides contextual explanations using RAG and LangChain.",
      icons: [
        {
          icon: faAppStore,
          link: "",
        },
        {
          icon: faGithub,
          link: "https://github.com/snehakadam25/multiAgent",
        },
      ]
    },
    {
      title: "Blockchain",
      description: "TBD",
      icons: [
        {
          icon: faGithub,
          link: "",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:snehakadam444@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://meet.google.com/",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Hashir Shoaib | Computer Engineer | Flutter | Reactjs developer",
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ]
}