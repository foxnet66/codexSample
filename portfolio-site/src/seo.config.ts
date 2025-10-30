import type { DefaultSeoProps } from "next-seo";

const seoConfig: DefaultSeoProps = {
  titleTemplate: "%s | James Wang · Product Designer",
  defaultTitle: "James Wang · Product Designer",
  description:
    "Portfolio showcasing product design, UX strategy, and front-end engineering services for modern digital products.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jameswang.design",
    siteName: "James Wang Portfolio",
    images: [
      {
        url: "https://www.jameswang.design/og-image.png",
        width: 1200,
        height: 630,
        alt: "James Wang Portfolio"
      }
    ]
  },
  twitter: {
    handle: "@jameswang",
    site: "@jameswang",
    cardType: "summary_large_image"
  }
};

export default seoConfig;
