export type TabItem = {
  title: string;
  description: string;
  amount: number;
  tags: string[];
  logo: string;
};

export type TabData = {
  [key: string]: TabItem[];
};

export type BountyCardProps = {
  title: string;
  description: string;
  amount: number;
  tags: string[];
  logo: string;
};
