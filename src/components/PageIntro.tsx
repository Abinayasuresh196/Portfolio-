type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => {
  return (
    <section className="px-6 pt-28 pb-10 max-w-6xl mx-auto">
      <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 md:p-10">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </div>
        <h1 className="mt-4 font-syne text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageIntro;
