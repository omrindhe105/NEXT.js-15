export default async function BlogFirst() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="w-80 bg-amber-50">
      <h1>Blog second Post</h1>
      <p className="w-80 bg-amber-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      </p>
    </div>
  );
}
