import type { Metadata } from "next";

import { getHome } from "@/lib/content";
import { PageBody } from "@/sections/PageBody";

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHome();

  return {
    title: { absolute: home.title },
    description: home.description,
  };
}

export default async function HomePage() {
  const home = await getHome();

  return <PageBody {...home} />;
}
