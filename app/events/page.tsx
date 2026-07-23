import CategoryPage from "@/components/CategoryPage";
import { sections } from "@/data/feed";

export default function EventsPage() {
  const section = sections.find((s) => s.id === "events")!;
  return <CategoryPage label={section.label} items={section.items} />;
}