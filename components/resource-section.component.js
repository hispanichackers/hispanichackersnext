import React from "react";

export default function ResourceSection({ children, title, sectionId }) {
  return (
    <section className="bg-white" id={ sectionId }>
      <header className="bg-orange text-white py-4">
        <div className="wrapper">
          <h2 className="font-bold">{ title }</h2>
        </div>
      </header>
      <article className="py-8 wrapper">
        {children}
      </article>
    </section>
  );
}
