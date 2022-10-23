import {PortfolioType} from "./portfolioES";

export const portfolioEN: PortfolioType = {
  sections: [
    {title: "About", to: "about"},
    {title: "Projects", to: "projects"},
    {title: "Contact", to: "contact"},
  ],
  about: {
    firstName: "Mariano",
    lastName: "Chavez",
    img: "https://res.cloudinary.com/chavedo/image/upload/v1660949890/portfolio/profile.webp",
    hobbies: ["Drumming 🥁", "Read 📙", "Exercise 🏋", "Beer 🍺"],
    bio: `
I'm an advanced student of Information Systems Engineering and a programming lover.

I have knowledge both in Backend developing applications in Django, Rails and Node.js; as in Frontend developing web applications usually with JavaScript/React/Next, I'm currently focused on React Native.

Likewise, I have always liked to learn new technologies, I consider it necessary and of great value to have knowledge in different areas, even if they are outside our specialization.
`,
    skills: ["Python", "Django", "JavaScript", "TypeScript", "Node.js", "React", "Next.js"],
  },
  projects: [
    {
      name: "Tesla Shop",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661522748/portfolio/tesla-shop.webp",
      tools: ["NextJS", "TypeScript", "MongoDB", "ChakraUI", "NextAuth", "Paypal"],
      url: "https://tesla-shop-nextjs.vercel.app/",
      github: "https://github.com/marianochavez/tesla_shop_nextjs",
      description: `Store for clothing sales with user management, orders, purchases and payment. It contains an administrative part for statistics, users and products.`,
    },
    {
      name: "UPS Clone",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666536699/portfolio/react_native.png",
      tools: ["React Native", "TypeScript", "Stepzen", "Tailwind", "RNElements", "Expo"],
      github: "https://github.com/marianochavez/ups_react_native",
      description: `Application to track packages and search for users.`,
    },
    {
      name: "Jaguarete Kaa",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661525134/portfolio/jaguarete-kaa.webp",
      tools: ["Django", "SQL", "CrispyForms", "Bootstrap"],
      url: "https://jaguaretekaaecommerce.herokuapp.com/",
      github: "https://github.com/marianochavez/jaguarete_ecommerce_django",
      description: `Ecommerce for the sale of technological products. It has user management, products, categories, account recovery and administrative page.`,
    },
    {
      name: "Calendar",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661524268/portfolio/calendar-app.webp",
      tools: ["React", "Node", "Redux", "PWA", "MongoDB", "Enzyme"],
      url: "https://react-calendar-app-frontend.vercel.app/",
      github: "https://github.com/marianochavez/react_calendarApp_frontend",
      description: `Calendar with different views that allows you to add events by date and time. It uses a backend made in Node.js.`,
    },
    {
      name: "Tateti",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661525803/portfolio/tateti-app.webp",
      tools: ["React", "Rails", "TypeScript", "PostgreSQL", "NESS.css"],
      url: "https://tateti-react-rails.vercel.app/",
      github: "https://github.com/marianochavez/tateti_frontend_react",
      description: `Tateti game with user registration, 1 vs 1 in real time, uses backend made in Rails.`,
    },
    {
      name: "Map box",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661526366/portfolio/mapbox-app.webp",
      tools: ["React", "TypeScript", "Mapbox", "Axios"],
      url: "https://mapbox-react-mc.netlify.app/",
      github: "https://github.com/marianochavez/react_mapbox",
      description: `Page to search for addresses and mark your route using mapbox.`,
    },
    {
      name: "Arg News",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666538359/portfolio/node_news.png",
      tools: ["Node.js", "Express", "Docker", "EJS", "Axios"],
      github: "https://github.com/marianochavez/openjira_nextjs",
      description: `Dockerized page to obtain news, weather, dollar exchange and covid statistics.`,
    },
    {
      name: "Open Jira",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661526934/portfolio/openjira.webp",
      tools: ["NextJS", "TypeScript", "MongoDB", "Docker"],
      github: "https://github.com/marianochavez/openjira_nextjs",
      description: `Task management page simulating Jira, with drag and drop.`,
    },
    {
      name: "+50 Projects",
      img: "https://res.cloudinary.com/chavedo/image/upload/v1666538824/portfolio/github.webp",
      tools: ["GitHub"],
      github: "https://github.com/marianochavez",
      description: `These are just some of my projects, you can see more in my GitHub repository.`,
    },
  ],
};
