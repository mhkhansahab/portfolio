export function AboutNarrativeCard() {
  return (
    <section className="mt-20">
      <p className="text-sleek-secondary text-lg">About</p>
      <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">Me</h2>
      <div className="text-sleek-secondary mt-5 max-w-3xl space-y-4 text-base leading-relaxed md:text-lg">
        <p>
          I work at the intersection of software engineering and AI automation, helping teams replace repetitive manual tasks with reliable systems that save time and increase execution speed.
        </p>
        <p>I typically partner with product and operations teams on:</p>
        <ul className="list-disc list-inside ml-4">
          <li>AI workflow design and practical automation rollout.</li>
          <li>Custom agent and API integration for business-critical flows.</li>
          <li>Frontend and backend delivery for production-ready web products.</li>
        </ul>
      </div>
    </section>
  );
}
