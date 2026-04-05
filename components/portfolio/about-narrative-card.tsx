export function AboutNarrativeCard() {
  return (
    <section className="mt-20">
      <p className="text-sleek-secondary text-lg">About</p>
      <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">Me</h2>
      <div className="text-sleek-secondary mt-5 max-w-3xl space-y-4 text-base leading-relaxed md:text-lg">
        <p>
          Full Stack & AI Agent Engineer with over 4 years of experience in the software industry. I specialize in building web applications using React, Next.js, and Node.js, with a current focus on LLM orchestration and autonomous workflows.
        </p>
        <p>My work involves:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Developing pixel-perfect frontend components.</li>
          <li>Architecting backend systems for AI-driven interfaces.</li>
          <li>Integrating complex API logic for autonomous agents.</li>
        </ul>
      </div>
    </section>
  );
}
