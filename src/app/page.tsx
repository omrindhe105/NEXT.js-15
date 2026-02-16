import NavLinkLayout from "./(auth)/layout";
import Link from "next/link";
export default function Home() {
  return (
    <div style={{ minHeight: "10vh", padding: "10px" }}>
      <h1>hello Om Rindhe </h1>
      <NavLinkLayout>
        <div></div>
      </NavLinkLayout>

      <div className="bg-sky-500 text-black p-4 rounded font-bold">
        <h4> Read Article in languages</h4>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link href="/articles/latest-article123?lang=en">English</Link>
          <Link href="/articles/latest-article123?lang=fr">French</Link>
        </div>
      </div>
    </div>
  );
}
