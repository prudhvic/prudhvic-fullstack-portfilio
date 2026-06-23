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
            Full Stack Developer
          </h3>

          <p className="text-gray-400">
            Dexian • Mar 2024 - Present
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
              • Improved Lighthouse score from 68 to 92.
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