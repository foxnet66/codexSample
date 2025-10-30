import type { DefaultSeoProps } from "next-seo";

const seoConfig: DefaultSeoProps = {
  titleTemplate: "%s | Jane Doe · Product Designer",
  defaultTitle: "Jane Doe · Product Designer",
  description:
    "Portfolio showcasing product design, UX strategy, and front-end engineering services for modern digital products.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.janedoe.design",
    siteName: "Jane Doe Portfolio",
    images: [
      {
        url: "https://www.janedoe.design/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jane Doe Portfolio"
      }
    ]
  },
  twitter: {
    handle: "@janedoe",
    site: "@janedoe",
    cardType: "summary_large_image"
  }
};

export default seoConfig;
