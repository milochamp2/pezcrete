export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-12 reveal">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--grey-700)" }}
          >
            Where we work
          </p>
          <h2
            className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide"
            style={{ color: "var(--black)", fontFamily: "var(--font-heading)" }}
          >
            SERVICE AREA
          </h2>
          <div
            className="mt-6 w-12 h-px"
            style={{ backgroundColor: "var(--grey-500)" }}
          />
          <p
            className="mt-6 text-lg"
            style={{ color: "var(--text-on-light-muted)" }}
          >
            Proudly serving Melbourne and surrounding suburbs
          </p>
        </div>

        {/* Map */}
        <div
          className="overflow-hidden reveal reveal-delay-1"
          style={{
            borderRadius: "4px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            border: "1px solid var(--grey-200)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403456.39492985876!2d144.5937!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1"
            width="100%"
            height="480"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pezcrete Service Area — Melbourne, VIC"
          />
        </div>

        {/* Suburb tags */}
        <div className="mt-10 flex flex-wrap gap-2 reveal reveal-delay-2">
          {[
            "Melbourne CBD",
            "Inner Suburbs",
            "Eastern Suburbs",
            "Western Suburbs",
            "Northern Suburbs",
            "Mornington Peninsula",
            "Bayside",
            "& Surrounds",
          ].map((suburb) => (
            <span
              key={suburb}
              className="text-xs tracking-widest uppercase px-3 py-1.5"
              style={{
                border: "1px solid var(--grey-200)",
                color: "var(--grey-700)",
              }}
            >
              {suburb}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
