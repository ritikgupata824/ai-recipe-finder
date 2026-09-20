import "../src/index.css";

const metadata = {
  title: "AI Recipe Finder",
  description: "Find delicious recipes with TheMealDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body>
        <nav>
          <a href="/">Home</a>{" "}
          <a href="/recipes">Recipes</a>{" "}
          <a href="/health">Health</a>{" "}
          <a href="/about">About</a>
        </nav>

        {children}
      </body>
    </html>
  );
}