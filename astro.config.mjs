import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "NumLex",
      disable404Route: true,
      pagefind: false,
      favicon: "/2.png",
      titleDelimiter: "|",
      lastUpdated: true,
      logo: {
        light: "./src/assets/1.png",
        dark: "./src/assets/2.png",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/Jenil-Desai/NumLex",
        linkedin: "https://linkedin.com/in/desaijenil/",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Module Overview",
          items: [
            {
              label: "Math Module",
              items: [
                { label: "Geometry", slug: "module-overview/math-module/geometry" },
                { label: "Probability", slug: "module-overview/math-module/probability" },
                { label: "Arithmetic", slug: "module-overview/math-module/arithmetic" },
                { label: "Statistics", slug: "module-overview/math-module/statistics" },
              ],
            },
            {
              label: "String Operations Module",
              slug: "module-overview/string-operations",
            },
            {
              label: "Number Operations Module",
              slug: "module-overview/number-operations",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "How To Contribute", slug: "guides/how-to-contribute" },
            { label: "Versioning & Change log", slug: "guides/versioning-and-changelog" },
            { label: "Best Practices", slug: "guides/best-practices" },
          ],
        },
        {
          label: "Additional Resources",
          items: [
            { label: "FAQs", slug: "additional-resources/faq" },
            { label: "Community", slug: "additional-resources/community" },
            { label: "Security Policy", slug: "additional-resources/security-policy" },
          ],
        },
        {
          label: "Next Steps",
          items: [
            { label: "Road Map", slug: "next-steps/roadmap" },
            { label: "Features Requests", slug: "next-steps/feature-requests" },
            { label: "Reporting Issues", slug: "next-steps/reporting-issues" },
          ],
        },
      ],
    }),
  ],
});
