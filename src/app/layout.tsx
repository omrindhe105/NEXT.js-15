import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ margin: "0", padding: "0px" }}>
        <header
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "0",
          }}
        >
          <h1>Header</h1>
        </header>

        {children}

        <footer
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "0",
          }}
          className="text-3xl"
        >
          <h1>Footer</h1>
         
        </footer>
      </body>
    </html>
  );
}
