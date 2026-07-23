import CategoryPage from "@/components/CategoryPage";
import { sections } from "@/data/feed";

export default function PortraitsPage() {
  const section = sections.find((s) => s.id === "portraits")!;
  return <CategoryPage label={section.label} items={section.items} />;
}