"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Home() {
  const eventDate = new Date("2026-07-05T10:00:00");
  const today = new Date();
  const daysToGo = Math.max(
    0,
    Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg md:text-2xl font-serif font-semibold w-[62%]">
            Baby Nathan's Dedication
          </h1>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScS-vrhD0pMbgTBQE_1k4B0j_fqDm_KMUGA0pZEQDPOt_fNoA/viewform?usp=publish-editor"
            className="px-5 py-2 rounded-2xl bg-amber-500 text-white shadow hover:scale-105 transition"
          >
            RSVP Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        {...fadeUp}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <p className="uppercase tracking-[0.25em] text-amber-600 mb-3">
            You’re Invited
          </p>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Child Dedication <br /> Celebration
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us as we dedicate our precious child to God and celebrate this
            special milestone with family and friends.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white shadow rounded-2xl p-4">
              📅 05 July 2026
            </div>
            <div className="bg-white shadow rounded-2xl p-4">⏰ 10:00 AM</div>
            <div className="bg-white shadow rounded-2xl p-4">
              📍 North Church, 31 Burley Road, LS3 1JT
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-amber-100 via-rose-50 to-sky-100 shadow-2xl flex items-center justify-center relative overflow-hidden">
            <img
              src="/images/church.jpg"
              alt="Church for child dedication"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-lg">
            {daysToGo} Days to go 🎉
          </div>
        </div>
      </motion.section>

      {/* Reception Details */}
      {/* <section className="bg-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-serif mb-6">Reception</h3>
          <div className="inline-block bg-white rounded-3xl shadow-lg p-8">
            <p className="text-xl mb-3">📍 10 Laycock Pl, Leeds LS7 3JA</p>
            <p className="text-xl">⏰ 3:00 PM</p>
          </div>
        </div>
      </section> */}

      {/* About */}
      <motion.section {...fadeUp} className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-serif mb-6">A Special Day</h3>
          <p className="text-lg text-gray-600 leading-8">
            We are grateful for God’s faithfulness and would love for you to
            celebrate with us as we dedicate our child and commit to raising
            them in love and faith.
          </p>
        </div>
      </motion.section>

      {/* Blessings & Prayers */}
      <motion.section {...fadeUp} className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-serif text-center mb-4">
          Blessings & Prayers
        </h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We pray God's love, wisdom, and abundant grace over this precious
          child as they grow in faith and purpose.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "✨",
              title: "Grace & Favor",
              text: "May your life always reflect God's grace and unending favor.",
            },
            {
              icon: "🙏",
              title: "Wisdom & Strength",
              text: "May you grow in wisdom, courage, and strength through every season.",
            },
            {
              icon: "💛",
              title: "Love & Protection",
              text: "May the Lord bless you, keep you, and surround you with love always.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-lg hover:scale-105 transition text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-2xl font-serif mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Bible Verse */}
      <motion.section {...fadeUp} className="bg-amber-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-3xl font-serif italic leading-relaxed">
            “Children are a heritage from the Lord, offspring a reward from
            Him.”
          </p>
          <p className="mt-4 text-gray-500">— Psalm 127:3</p>
        </div>
      </motion.section>

      {/* RSVP */}
      <motion.section
        {...fadeUp}
        id="rsvp"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h3 className="text-4xl font-serif mb-6">Will You Attend?</h3>
        <p className="text-lg text-gray-600 mb-8">
          Kindly confirm your attendance by filling out our RSVP form.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScS-vrhD0pMbgTBQE_1k4B0j_fqDm_KMUGA0pZEQDPOt_fNoA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-2xl bg-amber-500 text-white text-lg shadow-lg hover:scale-105 transition"
        >
          Fill Google Form
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-[#e8e8e8] py-8 text-center text-gray-500">
        With love, The Oti's Family ❤️
      </footer>
    </div>
  );
}
