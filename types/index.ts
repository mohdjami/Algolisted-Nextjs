export interface TabItem {
  title: string;
  description: string;
  amount: number;
  tags: string[];
  logo: string;
}

export interface TabData {
  [key: string]: TabItem[];
}

export interface BountyCardProps {
  title: string;
  description: string;
  amount: number;
  tags: string[];
  logo: string;
}
