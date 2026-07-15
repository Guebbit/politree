import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Politree',
  description: 'Open design document for a platform that maps political agreement, disagreement, and coalition-building.',
  base: process.env.GITHUB_ACTIONS ? '/politree/' : '/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Large plan', link: '/large-plan' },
      { text: 'Implementation path', link: '/practical-implementation' },
      { text: 'Architecture', link: '/architecture' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Large plan', link: '/large-plan' },
          { text: 'Practical implementation', link: '/practical-implementation' }
        ]
      },
      {
        text: 'Core ideas',
        items: [
          { text: 'Vision and principles', link: '/vision-and-principles' },
          { text: 'Knowledge model', link: '/knowledge-model' },
          { text: 'Comparison, consensus, and AI', link: '/comparison-consensus-and-ai' },
          { text: 'Governance and trust', link: '/governance-and-trust' }
        ]
      },
      {
        text: 'Practical design',
        items: [
          { text: 'Architecture', link: '/architecture' },
          { text: 'UX and operations', link: '/ux-and-operations' }
        ]
      },
      {
        text: 'Roadmap and future work',
        items: [
          { text: 'Roadmap, alternatives, and open questions', link: '/risks-roadmap-and-open-questions' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Guebbit/politree' }
    ]
  }
})
