import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  console.log(details);
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4 text-colorDiv">{details.name}</h1>

      <div>
        <h3 className="text-lg font-bold text-gray-500">Description</h3>
        <div className="p-3 rounded text-colorContext">{details.description}</div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-500">License</h3>
        <div className="p-3 rounded text-colorContext">{details.license}</div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-500">Author</h3>
        <div className="p-3 rounded text-colorContext">{details.author?.name}</div>
      </div>
    </div>
  );
}
