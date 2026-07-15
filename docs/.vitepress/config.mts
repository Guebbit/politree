import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Politree',
  description: 'Open design document for a platform that maps political agreement and disagreement.',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'Governance', link: '/governance-and-trust' },
      { text: 'Risks', link: '/risks-roadmap-and-open-questions' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Design document',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Vision and principles', link: '/vision-and-principles' },
          { text: 'Knowledge model', link: '/knowledge-model' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'Comparison, consensus, and AI', link: '/comparison-consensus-and-ai' },
          { text: 'Governance and trust', link: '/governance-and-trust' },
          { text: 'UX and operations', link: '/ux-and-operations' },
          { text: 'Risks, roadmap, and open questions', link: '/risks-roadmap-and-open-questions' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Guebbit/politree' }
    ]
  }
})
