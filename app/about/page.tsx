import Nav from "@/components/Nav";
import BackHome from "@/components/BackHome";
import BackToTop from "@/components/BackToTop";
import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <div className="mx-auto max-w-5xl px-6 pb-32 pt-40 sm:px-10 sm:pt-48">
        <BackHome />

        <p className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-caption">
          About
        </p>

        <p className="max-w-2xl font-display text-2xl font-light italic leading-relaxed text-ink sm:text-3xl">
          {about.bio}
        </p>

  <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-ink">
              Equipment
            </h2>
            <ul className="space-y-3">
              {about.equipment.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-caption border-b border-ink/10 pb-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-ink">
              Skills
            </h2>
            <ul className="space-y-3">
              {about.skills.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-caption border-b border-ink/10 pb-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-ink">
              Experience
            </h2>
            <ul className="space-y-3">
              {about.experience.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-caption border-b border-ink/10 pb-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {about.photos.map((photo) => (
            <figure key={photo.id}>
              <div className="aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-caption">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <BackToTop />
    </main>
  );
}
