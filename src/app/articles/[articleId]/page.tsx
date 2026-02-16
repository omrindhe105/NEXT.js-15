import Link from "next/link";

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) {
  const { articleId } = await params;
  const { lang = "eng" } = await searchParams;

  return (
    <div className="bg-sky-500 text-black p-4 rounded font-bold ">
      <h4>Reading article {articleId}</h4>
      <p>current article is in language {lang}</p>

      <div className=" flex gap-10 text-white">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=de`}>German</Link>
      </div>
    </div>
  );
}
