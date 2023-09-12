import React from "react";
import Image from "next/image";

export default function ResourceCard({
  title,
  copy,
  linkCopy,
  linkUrl,
  image,
  imageAlt,
}) {
  return (
    <>
      <div className="bg-[#F4EBDC] p-8 md:py-12 md:px-24 rounded-[25px] text-black">
        <h3 className="font-bold">{title}</h3>
        <article className="grid md:grid-cols-[1fr_3fr] gap-8 mt-8">
          <Image
            src={image}
            alt={imageAlt}
            width={400}
            height={400}
            className="w-full"
          />
          <div className="text-3xl">
            <p className="mb-8">{copy}</p>
            <a
              href={linkUrl}
              className="flex flex-row text-black items-center gap-2 md:gap-4"
            >
              {linkCopy}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="23"
                fill="none"
                viewBox="0 0 61 23"
              >
                <path
                  fill="#000"
                  d="M60.079 12.542a1.5 1.5 0 0 0-.037-2.12l-9.709-9.38a1.5 1.5 0 1 0-2.084 2.157l8.63 8.338-8.338 8.63A1.5 1.5 0 1 0 50.7 22.25l9.38-9.709ZM1.026 14l58-1-.052-3-58 1 .052 3Z"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
