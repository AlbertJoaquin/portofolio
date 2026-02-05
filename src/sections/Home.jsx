import "../index.css";

export default function Home() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="shimmer">Hi, I'm<br/> Albert Joaquin G. Enselada.</h1>
            </div>

            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-svg">
                <style>
                    {`
                      @keyframes wave-anim {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                      .wave-layer {
                        animation: wave-anim linear infinite;
                      }
                      .w1 { animation-duration: 25s; }
                      .w2 { animation-duration: 20s; }
                      .w3 { animation-duration: 15s; }
                      .w4 { animation-duration: 12s; }
                    `}
                </style>
                <defs>
                    <path
                        id="wave-path"
                        d="M 0 60 Q 150 40 300 60 T 600 60 T 900 60 T 1200 60 T 1500 60 T 1800 60 T 2100 60 T 2400 60"
                        fill="none"
                    />
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#23c483" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#23c483" stopOpacity="0.8"/>
                    </linearGradient>
                </defs>

                <g>
                    <use
                        xlinkHref="#wave-path"
                        className="wave-layer w1"
                        stroke="url(#wave-gradient)"
                        strokeWidth="2"
                        opacity="0.3"
                    />
                    <path
                        d="M 0 70 Q 150 50 300 70 T 600 70 T 900 70 T 1200 70 T 1500 70 T 1800 70 T 2100 70 T 2400 70 L 2400 120 L 0 120 Z"
                        fill="url(#wave-gradient)"
                        opacity="0.4"
                        className="wave-layer w2"
                    />
                    <path
                        d="M 0 80 Q 150 65 300 80 T 600 80 T 900 80 T 1200 80 T 1500 80 T 1800 80 T 2100 80 T 2400 80 L 2400 120 L 0 120 Z"
                        fill="url(#wave-gradient)"
                        opacity="0.6"
                        className="wave-layer w3"
                    />
                    <path
                        d="M 0 90 Q 150 75 300 90 T 600 90 T 900 90 T 1200 90 T 1500 90 T 1800 90 T 2100 90 T 2400 90 L 2400 120 L 0 120 Z"
                        fill="#23c483"
                        opacity="0.8"
                        className="wave-layer w4"
                    />
                </g>
            </svg>
        </div>
    );
}