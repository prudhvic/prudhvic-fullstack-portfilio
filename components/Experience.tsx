export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="border-l border-gray-700 ml-4">
        <div className="pl-8 pb-12 relative">
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-2" />

          <h3 className="text-2xl font-semibold">
            Product Engineer
          </h3>

          <p className="text-gray-400">
            Sketch Brahma • Jul 2026 – Sep 2026
          </p>

          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              • Built production-ready full-stack web applications using Next.js, React, and TypeScript.
            </li>

            <li>
              • Developed reusable and scalable frontend components with responsive and accessible user experiences.
            </li>

            <li>
              • Implemented Next.js App Router patterns, server/client components, and server-side data fetching.
            </li>

            <li>
              • Integrated backend APIs and implemented data access workflows with form validation and error handling.
            </li>

            <li>
              • Optimized application performance through code splitting, lazy loading, and efficient rendering strategies.
            </li>

            <li>
              • Wrote maintainable, type-safe code and collaborated on product requirements with cross-functional teams.
            </li>
          </ul>
        </div>

        <div className="pl-8 pb-12 relative">
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-2" />

          <h3 className="text-2xl font-semibold">
            Full Stack Developer
          </h3>

          <p className="text-gray-400">
            Dexian • Mar 2024 – Jun 2026
          </p>

          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              • Developed enterprise e-commerce platform serving
              100K+ monthly users.
            </li>

            <li>
              • Built checkout, payments, wishlist and profile modules.
            </li>

            <li>
              • Architected responsive frontend using React and Next.js; implemented server-side rendering for improved SEO and performance.
            </li>

            <li>
              • Designed and implemented RESTful APIs and database schemas for core platform features; managed data consistency and query optimization.
            </li>

            <li>
              • Improved Lighthouse score from 68 to 92 through code splitting, image optimization, and caching strategies.
            </li>

            <li>
              • Built AI-powered knowledge assistant using RAG.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}