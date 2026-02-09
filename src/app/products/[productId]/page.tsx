export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;

  console.log("Product ID:", productId);
  return <h1>Product {productId} Details Page</h1>;
}
