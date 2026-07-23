import CategoryPage from "@/components/CategoryPage";
import { sections } from "@/data/feed";

export default function BestWorkPage() {
  const section = sections.find((s) => s.id === "best-work")!;
  return <CategoryPage label={section.label} items={section.items} />;
}