export default {
  repository: 'https://github.com/thaldrin/thaldrin',
  docsRepository: 'https://github.com/thaldrin/docs',
  titleSuffix: ' – Thaldrin Docs',
  darkMode: true,
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT 2018 - {new Date().getFullYear()} © Lio Young</>,
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Thaldrin</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Utility and Fun Discord Bot
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Thaldrin - Your Discord Bot for Utility and Fun"
      />
      <meta
        name="og:description"
        content="Thaldrin - Your Discord Bot for Utility and Fun"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.thaldr.in/thaldrin-docs.png" />
      <meta name="twitter:site:domain" content="docs.thaldr.in" />
      <meta name="twitter:url" content="https://docs.thaldr.in" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://docs.thaldr.in/thaldrin-docs.png" />
      <meta name="apple-mobile-web-app-title" content="Thaldrin" />
      
      <link
        rel="icon"
        type="image/png"
        href="/favicon.png"
      />
         </>
  ),
}
