import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-dark/80">
      <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">
        Let’s Talk
      </h2>

      <div className="max-w-lg mx-auto text-center">
        <p className="mb-8 text-gray-300">
          Think your website could use a serious upgrade? Shoot me a message and
          let’s make it happen.
        </p>

        <Link
          href="mailto:youssef@example.com"
          className="px-8 py-4 rounded-xl bg-accent text-dark font-semibold hover:opacity-90 transition inline-block"
        >
          Email Me
        </Link>
      </div>
    </section>
  );
}
