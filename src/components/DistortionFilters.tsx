export function DistortionFilters() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
      <defs>
        <filter id="distort-liquid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            result="noise"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              values="0.01 0.01; 0.015 0.02; 0.01 0.01"
              dur="10s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
            result="distort"
          >
            <animate
              id="distort-animate"
              attributeName="scale"
              values="0; 40; 0"
              dur="0.6s"
              begin="indefinite"
              fill="freeze"
            />
          </feDisplacementMap>
        </filter>
        
        <filter id="distort-subtle">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.05"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
