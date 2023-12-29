import React from "react";

export default function ResourceSection({ children, title, sectionId }) {
  return (
    <section className="bg-white" id={sectionId}>
      <header className="bg-orange text-white py-4">
        <div className="wrapper">
          <h2 className="font-bold">{title}</h2>
        </div>
      </header>
      <article className="py-8 wrapper">
        <div className="border-2 border-dotted border-[#9747FF] p-4 rounded-[5px] max-w-[840px] mx-auto [&>*:not(:last-child)]:mb-8">
          {children}
        </div>
      </article>
    </section>
  );
}
