import { ProjectType } from "@/types/project";
const js = {
  name: "javascript",
};
const react = {
  name: "react",
};
const nextjs = {
  name: "nextjs",
  url: "https://nextjs.org/",
};
const chakra = {
  name: "chakra-ui",
  url: "https://chakra-ui.com/",
};
const lucide = {
  name: "lucide",
  url: "https://lucide.dev/",
};
const tailwindcss = {
  name: "tailwindcss",
  url: "https://tailwindcss.com/",
};
const sendgrid = {
  name: "sendgrid",
  url: "https://sendgrid.com/",
};
const typescript = {
  name: "typescript",
  url: "https://typescriptlang.org/",
};
const php = {
  name: "php",
};
const html = {
  name: "html",
};

const project: ProjectType[] = [
  {
    title: "Hexa",
    image: require("public/projects/hexa.png"),
    description: "Mass deploy Pterodactyl Wings instance.",
    createdAt: "2024-06-26",
    technology: [js],
    // url: "https://github.com/zurravie/Hexa",
    source: "https://github.com/zurravie/Hexa",
  },
  {
    title: "Screenly - Netflix Clone",
    image: require("public/projects/SCREENLY.png"),
    description: "A Clone of Netflix built with Next.js",
    createdAt: "2025-09-19",
    technology: [nextjs, typescript, sendgrid],
    url: "https://nextjs-screenly.vercel.app/",
    source: "https://github.com/radityprtama/nextjs-screenly",
  },
  {
    title: "Firebowl - Ecommerce Website",
    image: require("public/projects/firebowl.png"),
    description: "An Ecommerce Website for school project built with PHP",
    createdAt: "2025-09-19",
    technology: [php, js],
    // url: "https://nextjs-screenly.vercel.app/",
    source: "https://github.com/zurrap/portfolio.git",
  },
];

export default project;
