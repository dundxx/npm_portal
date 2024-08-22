import type { PackageDetails } from "../types/packageDetails";

async function getRandomPackages(count: number): Promise<string[]> {
  const res = await fetch('https://registry.npmjs.org/-/v1/search?text=keywords&size=100');
  const data = await res.json();
  const packages = data.objects.map((pkg: any) => pkg.package.name);

  const randomPackages = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * packages.length);
    randomPackages.push(packages[randomIndex]);
  }

  return randomPackages;
}

export async function getFeaturedPackages() {
  const FEATURED_PACKAGES = await getRandomPackages(4);

  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });
  const data = await Promise.all(promises);

  return data as PackageDetails[];
}