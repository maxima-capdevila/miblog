import type { Link } from "../types";

export const SITE = {
  title: "Maxima Escritos",
  description: "Blog de escritos de Maxima Capdevila",
  author: "Mohammad Rahmani",
  url: "https://maxima-escritos.vercel.app",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/politica",
    text: "Politica",
  },
  {
    href: "/categories/deportes",
    text: "Deportes",
  },
  {
    href: "/categories/cultura",
    text: "Cultura",
  },
  {
    href: "/categories/sociedad",
    text: "Sociedad",
  },
  {
    href: "/categories/redacciones",
    text: "Redacciones",
  }
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "Sobre el blog",
  },
  {
    href: "/authors",
    text: "Autores",
  }
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://www.instagram.com/opiniones_para.vos/",
    text: "Instagram",
    icon: "telegram",
  },
  {
    href: "https://www.instagram.com/informate_delsur2025/",
    text: "Instagram",
    icon: "telegram",
  }
];
