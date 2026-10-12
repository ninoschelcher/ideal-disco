import type { Metadata } from "next";

import { getHome } from "@/lib/content";
import { cmsMetadata } from "@/lib/metadata";
import { PageBody } from "@/sections/PageBody";

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHome();

  return cmsMetadata(home, { absolute: true });
}

export default async function HomePage() {
  const home = await getHome();

  return <PageBody {...home} />;
}
