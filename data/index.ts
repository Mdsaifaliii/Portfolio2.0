import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  // existing projects...

  {
    id: 1,
    title: "Quick Cart E-Commerce",
    des: "QuickCart is a modern ecommerce platform offering electronics, fast shopping, secure checkout, and exclusive deals.",
    img: "/images/Quickcart.png",
    iconLists: ["/next.svg", "/tail.svg", "/node.js.svg", "/mongodb.svg"],
    link: "https://quick-cart-nine-black.vercel.app/",
  },
  {
    id: 2,
    title: "3D MacBook Landing Page",
    des: "A sleek landing page showcasing the latest MacBook features, designed for optimal user engagement and conversion.",
    img: "/images/Mac.png",
    iconLists: ["/re.svg", "/tail.svg", "/Three.svg"],
    link: "https://apple-website-flax-three.vercel.app/",
  },
  {
    id: 3,
    title: "Travel Booking Website",
    des: "A full tour booking platform with packages, booking & dashboard.",
    img: "/images/TravelGo.png",
    iconLists: ["/re.svg", "/tail.svg", "/Firebase.svg", "/node.js.svg"],
    link: "https://travel-go-neon.vercel.app/",
  },
  {
    id: 4,
    title: "Clothing E-Commerce",
    des: "Modern fashion store with cart, filters & product variants.",
    img: "/images/Wearluxe.webp",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg"],
    link: "https://wearluxe-ten.vercel.app/",
  },
];

export const works = [
  {
    quote:
      "Developed a modern e-commerce platform with product variants, cart functionality, and dynamic pricing. Designed with clean UI and real-world usability in mind.",
    name: "Quick Cart E-Commerce",
    title: "Next.js + Tailwind CSS + Node.js + MongoDB + Cloudinary + Inngest",
  },
  {
    quote:
      "Built a visually immersive 3D landing page inspired by Apple’s design, using smooth animations and interactive UI for a premium user experience.",
    name: "3D MacBook Landing Page",
    title: "React + Tailwind CSS + Three.js",
  },
  {
    quote:
      "Created a fully responsive travel booking website with dynamic routing, Firebase integration, and real-time booking functionality.",
    name: "Travel Booking Website",
    title: "Next.js + Tailwind CSS + Firebase",
  },
  {
    quote:
      "Designed and developed a scalable clothing e-commerce platform with product management, filtering, and responsive layouts.",
    name: "Clothing E-Commerce",
    title: "React + Tailwind CSS + MongoDB",
  },
  {
    quote:
      "Built reusable and interactive UI components like animated cards, globe visualizations, and modern layouts to enhance user experience.",
    name: "UI Components & Experiments",
    title: "Frontend Development + UI/UX",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    desc: "Assisted in the development of a web application, gaining hands-on experience with frontend and backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    desc: "Contributed to the development of a SaaS application, implementing both frontend and backend features.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX Designing",
    desc: "Designed user interfaces and experiences for a mobile app, improving user engagement and satisfaction.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    desc: "Worked on various freelance projects, delivering custom web solutions to clients across different industries.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/your-username",
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/your-username",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mohd-saif-ali-software-developer/",
  },
];
