export default async function Page({
  params,
}: {
  params: Promise<{ slugs: string[] }>;
}) {
  const { slugs } = await params;

  if (slugs?.length == 2) {
    return (<h1>
      Welcome! you are  reading feature {slugs[0]} and content {slugs[1]}
    </h1>)
  }else if(slugs?.length == 1){
    return (<h1>
      Welcome! you are  reading feature {slugs[0]}
    </h1>)
  }
}
