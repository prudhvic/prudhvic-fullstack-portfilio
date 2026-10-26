export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

      <div className="space-y-6 text-lg text-gray-300">
        <p>
          I&apos;m currently open to Full-Stack Developer, Frontend Developer,
          React.js, Next.js, and Python opportunities. I&apos;m also available for
          freelance projects involving web development, API integrations, and
          AI-powered applications.
        </p>

        <p>
          Email:{" "}
          <a
            href="mailto:prudhvichinnam101@gmail.com"
            className="text-white underline"
          >
            prudhvichinnam06@gmail.com
          </a>
        </p>

        <p>
          Phone: <span className="text-white">+91 6302480340</span>
        </p>

        <p>
          Feel free to reach out for job opportunities, freelance work, or
          collaboration on exciting projects.
        </p>
      </div>
    </section>
  );
}