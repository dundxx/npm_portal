import type { HomeLoaderResult } from "./homeLoader";
import { useLoaderData, Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput";

export default function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedPackages = featuredPackages.map((p) => {
    return (
      <div
        key={p.name}
        className="flex flex-col justify-between gap-3 border rounded shadow p-4  border-colorBorder"
      >
        <div className="flex flex-col gap-1 border-bottom">
          <div className="font-bold text-center text-colorDiv">{p.name}</div>
          <div className="text-sm text-colorContext">{p.description}</div>
          <div className="text-sm text-gray-500">
            {p.maintainers.length} Maintainers
          </div>
        </div>
        <Link
          to={`/packages/${p.name}`}
          className="border rounded border-gray-900 text-center bg-colorH1 hover:bg-colorH1Hv text-white font-bold py-2 px-4"
        >
          View
        </Link>
      </div>
    );
  });

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The NPM Registry</h1>
        <p className="mx-auto max-w-[600px] text-gray-500">
          The package manager for Javascript. Search and view packages.
        </p>
        <div className="flex items-center justify-center">
        <SearchInput />
        </div>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
}
