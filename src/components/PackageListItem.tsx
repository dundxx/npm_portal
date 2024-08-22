import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";

interface PackageListItemProps {
  pack: PackageSummary;
}

export default function PackageListItem({ pack }: PackageListItemProps) {
  const renderedKeywords = (pack.keywords || []).map((keyword) => {
    return (
      <div
        key={keyword}
        className="py-0.5 px-1 text-xs bg-colorH1 rounded text-colorContext"
      >
        {keyword}
      </div>
    );
  });

  return (
    <div className="border p-4 rounded flex justify-between items-center border-colorBorder">
      <div className="flex flex-col gap-2">
        <Link to={`/packages/${pack.name}`} className="text-xl font-bold text-colorDiv">
          {pack.name}
        </Link>
        <p className="text-sm">{pack.description}</p>
        <div className="flex gap-1">{renderedKeywords}</div>
      </div>
      <div className="mr-6">
        <Link
          to={`/packages/${pack.name}`}
          className="py-2 px-3 rounded text-white text-lg bg-colorH1 hover:bg-colorH1Hv"
        >
          View
        </Link>
      </div>
    </div>
  );
}
