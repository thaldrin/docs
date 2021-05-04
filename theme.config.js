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
      <meta name="twitter:image" content="https://docs.thaldr.in/og.png" />
      <meta name="twitter:site:domain" content="docs.thaldr.in" />
      <meta name="twitter:url" content="https://docs.thaldr.in" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://docs.thaldr.in/og.png" />
      <meta name="apple-mobile-web-app-title" content="Thaldrin" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
}
