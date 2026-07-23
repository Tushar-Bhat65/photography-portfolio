import CategoryPage from "@/components/CategoryPage";
import { sections } from "@/data/feed";

export default function ProductPage() {
  const section = sections.find((s) => s.id === "product")!;
  return <CategoryPage label={section.label} items={section.items} />;
}