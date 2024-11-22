import { TabData } from "../../types";

export const tabData: TabData = {
  bounties: [
    {
      title: "Huddle01 Bug Fix",
      description:
        "Fix critical bugs in Huddle01's communication platform. Reward up to $500 for successful fixes. Ideal for experienced contributors familiar with JavaScript and WebRTC.",
      amount: 500,
      tags: [
        "bug-fix",
        "high-priority",
        "bug-fix",
        "high-priority",
        "bug-fix",
        "high-priority",
      ],
      logo: "H1",
    },
    {
      title: "OpenBB Feature Addition",
      description:
        "Develop a new feature for OpenBB's financial analysis tool. Up to $1,000 reward for a well-implemented feature. Knowledge of Python and financial systems required.",
      amount: 1000,
      tags: ["feature-request", "open-source"],
      logo: "OB",
    },
    {
      title: "Revert UI Enhancement",
      description:
        "Enhance the UI/UX of Revert's open-source project. Rewards include up to $750 and special recognition in the community.",
      amount: 750,
      tags: ["ui-ux", "enhancement"],
      logo: "RV",
    },
  ],
  hiring: [
    {
      title: "Senior Frontend Developer",
      description:
        "Join our team as a Senior Frontend Developer. Looking for experienced React developers with 5+ years of experience.",
      amount: 140000,
      tags: ["remote", "full-time"],
      logo: "FE",
    },
    {
      title: "Backend Engineer",
      description:
        "Backend position available for experienced Node.js developers. Must have experience with microservices architecture.",
      amount: 130000,
      tags: ["on-site", "full-time"],
      logo: "BE",
    },
  ],
  swags: [
    {
      title: "Hacktoberfest Swag",
      description:
        "Complete 4 pull requests during October to receive exclusive Hacktoberfest t-shirt and stickers.",
      amount: 0,
      tags: ["beginner-friendly", "swag"],
      logo: "HF",
    },
    {
      title: "Google Summer of Code",
      description:
        "Contribute to open source projects under Google's mentorship program. Get stipend and exclusive Google swag.",
      amount: 1500,
      tags: ["student", "mentorship"],
      logo: "GS",
    },
  ],
  communities: [],
  mentorship: [],
};

export const menuItems = [
  "Open Source",
  "Contests Archive",
  "Coding Sheets",
  "Company Preparation",
  "Core Subjects Tracker",
  "Resume Questions",
  "Opportunities",
];

export enum links {
  GITHUB = "https://github.com/Algolisted-Org",
  TWITTER = "",
  LINKEDIN = "",
  ALGOLISTED = "https://algolisted.com",
  EMAIL = "mailto:nayak@algolisted.com",
  TITLE = "Algolisted - Open Source Platform",
  DESCRIPTION = "Your go-to platform for open-source experience",
}
