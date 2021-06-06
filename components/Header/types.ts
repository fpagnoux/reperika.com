export type MenuLeaf = {
  title: string;
  href: string;
};

export type MenuNode = {
  title: string;
  items: MenuLeaf[];
};

export type Menu = (MenuLeaf | MenuNode)[];

export function isMenuLeaf(
  menuItem: MenuLeaf | MenuNode
): menuItem is MenuLeaf {
  return (menuItem as MenuLeaf).href != null;
}
