/** Section title with an index label, e.g. "+ [01 // BIO_SPECIFICATION] +" */
export default function SectionHeading({ index, code, title }) {
  return (
    <header className="mb-10">
      <p className="label mb-2 text-violet-soft">
        + [{index} // {code}] +
      </p>
      <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-ink md:text-4xl">
        {title}
      </h2>
      <span className="mt-3 block h-1 w-20 bg-violet" aria-hidden="true" />
    </header>
  );
}
