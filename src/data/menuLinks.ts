type MenuLinksTypes = { title: string; href: string; id: number };

const menuLinks: MenuLinksTypes[] = [
  {
    title: "Магазин",
    href: "/store",
    id: 1,
  },
  {
    title: "Форма",
    href: "/form",
    id: 2,
  },
];

export default menuLinks;
export type { MenuLinksTypes };
