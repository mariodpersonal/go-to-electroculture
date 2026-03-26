"use client";

const REEL_IDS = [
  "DWUcbH2CuCD",
  "DVZ_r3IDjTk",
  "DVoQacyjj_s",
  "DWPx3C9iv-t",
  "DWNA_EyCv6U",
  "DWIWD2CDtR0",
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {REEL_IDS.map((id) => (
        <a
          key={id}
          href={`https://www.instagram.com/reel/${id}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-lg"
        >
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: "177.78%" /* 16:9 inverted = 9:16 */ }}
          >
            <iframe
              src={`https://www.instagram.com/reel/${id}/embed/?cr=1&v=14&wp=540&rd=https%3A%2F%2Fgotoelectroculture.com`}
              scrolling="no"
              style={{
                position: "absolute",
                top: -1,
                left: -1,
                width: "calc(100% + 2px)",
                height: "calc(100% + 2px)",
                border: "none",
                overflow: "hidden",
                pointerEvents: "none",
              }}
              loading="lazy"
              title={`Instagram Reel`}
            />
            {/* Clickable overlay since iframe has pointerEvents none */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
              <svg
                className="h-16 w-16 text-white opacity-0 drop-shadow-lg transition-opacity group-hover:opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
