import { notFound } from "next/navigation";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div className="bg-black text-white p-4 rounded-lg  ">
      <h1>
        This is review {reviewId} for product {productId}
      </h1>
      <h3>
        this is demo while learning next js and its nested dynamic routing
      </h3>
    </div>
  );
}
