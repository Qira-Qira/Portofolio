import { ServicePrinciple } from '../data/portfolioData';

export function ServiceDiagram({ type }: { type: ServicePrinciple['diagramType'] }) {
  switch (type) {
    case 'folder-tree':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="20" y="20" width="90" height="28" rx="4" fill="#F4C542" stroke="#18181A" strokeWidth="2" />
          <text x="34" y="39" fill="#18181A" fontSize="11" fontFamily="monospace" fontWeight="700">src/</text>
          <path d="M65 48 V138 M65 78 H115 M65 118 H115 M65 138 H115" stroke="#18181A" strokeWidth="2" />
          <rect x="115" y="64" width="160" height="24" rx="4" fill="white" stroke="#18181A" strokeWidth="1.8" />
          <text x="128" y="80" fill="#18181A" fontSize="10" fontFamily="monospace">routes/services.tsx</text>
          <rect x="115" y="102" width="160" height="24" rx="4" fill="#AEEBD2" stroke="#18181A" strokeWidth="1.8" />
          <text x="128" y="118" fill="#18181A" fontSize="10" fontFamily="monospace">data/schema.ts</text>
          <rect x="115" y="138" width="160" height="24" rx="4" fill="white" stroke="#18181A" strokeWidth="1.8" />
          <text x="128" y="154" fill="#18181A" fontSize="10" fontFamily="monospace">components/ui/</text>
        </svg>
      );

    case 'typescript-contract':
    case 'api-contract':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="18" y="24" width="128" height="132" rx="8" fill="#FAF8F3" stroke="#18181A" strokeWidth="2" />
          <rect x="18" y="24" width="128" height="24" rx="8" fill="#F4C542" stroke="#18181A" strokeWidth="2" />
          <text x="30" y="40" fill="#18181A" fontSize="9" fontFamily="monospace" fontWeight="700">interface Contract</text>
          <line x1="30" y1="68" x2="124" y2="68" stroke="#18181A" strokeWidth="2" />
          <line x1="30" y1="88" x2="108" y2="88" stroke="#2F45FF" strokeWidth="2" />
          <line x1="30" y1="108" x2="120" y2="108" stroke="#18181A" strokeWidth="2" />
          <line x1="30" y1="128" x2="96" y2="128" stroke="#F43F8E" strokeWidth="2" />

          <path d="M150 90 H172" stroke="#18181A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M166 84 L174 90 L166 96" stroke="#18181A" strokeWidth="2" strokeLinecap="round" />

          <rect x="176" y="24" width="126" height="132" rx="8" fill="white" stroke="#18181A" strokeWidth="2" />
          <rect x="176" y="24" width="126" height="24" rx="8" fill="#AEEBD2" stroke="#18181A" strokeWidth="2" />
          <text x="190" y="40" fill="#18181A" fontSize="9" fontFamily="monospace" fontWeight="700">UI Verified ✓</text>
          <rect x="190" y="64" width="98" height="26" rx="4" fill="#FAF8F3" stroke="#18181A" strokeWidth="1.5" />
          <rect x="190" y="100" width="98" height="40" rx="4" fill="#2F45FF" stroke="#18181A" strokeWidth="1.5" />
        </svg>
      );

    case 'ui-scratch':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="24" y="22" width="272" height="136" rx="10" fill="#FAF8F3" stroke="#18181A" strokeWidth="2" />
          <rect x="42" y="40" width="110" height="32" rx="6" fill="#F4C542" stroke="#18181A" strokeWidth="2" />
          <rect x="42" y="84" width="110" height="54" rx="6" fill="white" stroke="#18181A" strokeWidth="2" />
          <rect x="166" y="40" width="112" height="98" rx="6" fill="white" stroke="#18181A" strokeWidth="2" />
          <rect x="182" y="56" width="80" height="38" rx="4" fill="#F43F8E" stroke="#18181A" strokeWidth="1.8" />
          <line x1="182" y1="112" x2="256" y2="112" stroke="#18181A" strokeWidth="2.5" />
          <line x1="182" y1="124" x2="234" y2="124" stroke="#18181A" strokeWidth="2" opacity="0.5" />
        </svg>
      );

    case 'seo-perf':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          {[
            { cx: 70, label: 'PERF', val: '100', color: '#19B56F' },
            { cx: 160, label: 'A11Y', val: '100', color: '#2F45FF' },
            { cx: 250, label: 'SEO', val: '100', color: '#F4C542' },
          ].map((m) => (
            <g key={m.label}>
              <circle cx={m.cx} cy="82" r="34" fill="white" stroke="#18181A" strokeWidth="2" />
              <circle cx={m.cx} cy="82" r="26" fill="none" stroke={m.color} strokeWidth="5" />
              <text x={m.cx} y="87" textAnchor="middle" fill="#18181A" fontSize="14" fontFamily="monospace" fontWeight="800">
                {m.val}
              </text>
              <text x={m.cx} y="138" textAnchor="middle" fill="#18181A" fontSize="10" fontFamily="monospace" fontWeight="700">
                {m.label}
              </text>
            </g>
          ))}
        </svg>
      );

    case 'three-states':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="16" y="34" width="88" height="112" rx="8" fill="#FAF8F3" stroke="#18181A" strokeWidth="2" />
          <text x="60" y="54" textAnchor="middle" fill="#575650" fontSize="9" fontFamily="monospace" fontWeight="700">LOADING</text>
          <rect x="28" y="68" width="64" height="12" rx="3" fill="#18181A" opacity="0.15" />
          <rect x="28" y="88" width="48" height="12" rx="3" fill="#18181A" opacity="0.15" />

          <rect x="116" y="34" width="88" height="112" rx="8" fill="#AEEBD2" stroke="#18181A" strokeWidth="2" />
          <text x="160" y="54" textAnchor="middle" fill="#18181A" fontSize="9" fontFamily="monospace" fontWeight="700">SUCCESS</text>
          <circle cx="160" cy="94" r="18" fill="white" stroke="#18181A" strokeWidth="2" />
          <path d="M152 94 L158 100 L169 88" stroke="#18181A" strokeWidth="2.5" strokeLinecap="round" />

          <rect x="216" y="34" width="88" height="112" rx="8" fill="#FFE2EC" stroke="#18181A" strokeWidth="2" />
          <text x="260" y="54" textAnchor="middle" fill="#18181A" fontSize="9" fontFamily="monospace" fontWeight="700">RETRY</text>
          <rect x="232" y="84" width="56" height="22" rx="4" fill="#F43F8E" stroke="#18181A" strokeWidth="1.8" />
        </svg>
      );

    case 'wrapped-services':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="110" y="58" width="100" height="64" rx="8" fill="#F4C542" stroke="#18181A" strokeWidth="2" />
          <text x="160" y="94" textAnchor="middle" fill="#18181A" fontSize="11" fontFamily="monospace" fontWeight="800">Adapter</text>
          <rect x="20" y="24" width="66" height="32" rx="6" fill="white" stroke="#18181A" strokeWidth="1.8" />
          <rect x="20" y="124" width="66" height="32" rx="6" fill="white" stroke="#18181A" strokeWidth="1.8" />
          <rect x="234" y="24" width="66" height="32" rx="6" fill="#AEEBD2" stroke="#18181A" strokeWidth="1.8" />
          <rect x="234" y="124" width="66" height="32" rx="6" fill="#2F45FF" stroke="#18181A" strokeWidth="1.8" />
          <path d="M86 40 L110 74 M86 140 L110 106 M210 74 L234 40 M210 106 L234 140" stroke="#18181A" strokeWidth="2" />
        </svg>
      );

    case 'design-system':
    case 'mvvm-arch':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="34" y="24" width="252" height="36" rx="6" fill="#F4C542" stroke="#18181A" strokeWidth="2" />
          <text x="160" y="47" textAnchor="middle" fill="#18181A" fontSize="11" fontFamily="monospace" fontWeight="700">UI Layer (Compose / React)</text>
          <rect x="34" y="72" width="252" height="36" rx="6" fill="#AEEBD2" stroke="#18181A" strokeWidth="2" />
          <text x="160" y="95" textAnchor="middle" fill="#18181A" fontSize="11" fontFamily="monospace" fontWeight="700">ViewModel / Domain State</text>
          <rect x="34" y="120" width="252" height="36" rx="6" fill="#2F45FF" stroke="#18181A" strokeWidth="2" />
          <text x="160" y="143" textAnchor="middle" fill="white" fontSize="11" fontFamily="monospace" fontWeight="700">Repository &amp; Local DB</text>
        </svg>
      );

    case 'sm2-curve':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="24" y="20" width="272" height="140" rx="8" fill="#FAF8F3" stroke="#18181A" strokeWidth="2" />
          <path d="M48 136 H276 M48 38 V136" stroke="#18181A" strokeWidth="2" />
          {/* Forgetting & SM-2 retention curve */}
          <path d="M52 46 Q92 108 122 122 L124 46 Q175 88 205 98 L207 46 Q244 64 272 70" stroke="#2F45FF" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="123" cy="46" r="4" fill="#F43F8E" stroke="#18181A" strokeWidth="1.5" />
          <circle cx="206" cy="46" r="4" fill="#F4C542" stroke="#18181A" strokeWidth="1.5" />
          <text x="162" y="152" textAnchor="middle" fill="#575650" fontSize="9" fontFamily="monospace" fontWeight="700">SM-2 INTERVAL RETENTION</text>
        </svg>
      );

    case 'unidirectional-state':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="36" y="42" width="100" height="96" rx="10" fill="#F4C542" stroke="#18181A" strokeWidth="2" />
          <text x="86" y="94" textAnchor="middle" fill="#18181A" fontSize="11" fontFamily="monospace" fontWeight="800">UI Screen</text>
          <rect x="184" y="42" width="100" height="96" rx="10" fill="#AEEBD2" stroke="#18181A" strokeWidth="2" />
          <text x="234" y="94" textAnchor="middle" fill="#18181A" fontSize="11" fontFamily="monospace" fontWeight="800">Flow State</text>
          <path d="M138 72 H182" stroke="#18181A" strokeWidth="2.2" />
          <path d="M174 66 L182 72 L174 78" stroke="#18181A" strokeWidth="2" />
          <path d="M182 108 H138" stroke="#2F45FF" strokeWidth="2.2" />
          <path d="M146 102 L138 108 L146 114" stroke="#2F45FF" strokeWidth="2" />
        </svg>
      );

    case 'real-devices':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="120" y="22" width="80" height="136" rx="14" fill="white" stroke="#18181A" strokeWidth="2.2" />
          <rect x="132" y="42" width="56" height="32" rx="4" fill="#19B56F" stroke="#18181A" strokeWidth="1.5" />
          <rect x="132" y="82" width="56" height="24" rx="4" fill="#F4C542" stroke="#18181A" strokeWidth="1.5" />
          <rect x="132" y="114" width="56" height="24" rx="4" fill="#2F45FF" stroke="#18181A" strokeWidth="1.5" />
          <text x="58" y="62" textAnchor="middle" fill="#18181A" fontSize="9" fontFamily="monospace" fontWeight="700">AUDIO</text>
          <text x="262" y="98" textAnchor="middle" fill="#18181A" fontSize="9" fontFamily="monospace" fontWeight="700">ROOM DB</text>
          <text x="58" y="130" textAnchor="middle" fill="#18181A" fontSize="9" fontFamily="monospace" fontWeight="700">DRIVE SYNC</text>
          <path d="M84 58 H118 M202 94 H234 M84 126 H118" stroke="#18181A" strokeWidth="1.8" strokeDasharray="4 3" />
        </svg>
      );

    case 'photo-planning':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="22" y="24" width="276" height="132" rx="8" fill="#FAF8F3" stroke="#18181A" strokeWidth="2" />
          <rect x="38" y="42" width="74" height="88" rx="5" fill="#F4C542" stroke="#18181A" strokeWidth="2" />
          <circle cx="75" cy="74" r="15" fill="#FAF8F3" stroke="#18181A" strokeWidth="2" />
          <path d="M52 112 L70 92 L82 103 L91 94 L104 112" stroke="#18181A" strokeWidth="2" strokeLinejoin="round" />
          <text x="132" y="56" fill="#575650" fontSize="9" fontFamily="monospace" fontWeight="700">THE STORY</text>
          <line x1="132" y1="68" x2="270" y2="68" stroke="#18181A" strokeWidth="2" />
          <text x="132" y="94" fill="#575650" fontSize="9" fontFamily="monospace" fontWeight="700">MOOD &amp; LIGHT</text>
          <line x1="132" y1="106" x2="250" y2="106" stroke="#F43F8E" strokeWidth="3" strokeLinecap="round" />
          <text x="132" y="132" fill="#575650" fontSize="9" fontFamily="monospace" fontWeight="700">COMPOSITION</text>
        </svg>
      );

    case 'photo-capture':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <circle cx="244" cy="54" r="19" fill="#F4C542" stroke="#18181A" strokeWidth="2" />
          <path d="M244 22 V14 M276 54 H284 M267 31 L273 25 M221 31 L215 25" stroke="#18181A" strokeWidth="2" strokeLinecap="round" />
          <rect x="42" y="58" width="236" height="92" rx="12" fill="#AEEBD2" stroke="#18181A" strokeWidth="2.5" />
          <path d="M90 58 L102 42 H148 L160 58" fill="#AEEBD2" stroke="#18181A" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="160" cy="104" r="33" fill="white" stroke="#18181A" strokeWidth="2.5" />
          <circle cx="160" cy="104" r="22" fill="#2F45FF" stroke="#18181A" strokeWidth="2" />
          <circle cx="160" cy="104" r="8" fill="#18181A" />
          <circle cx="252" cy="76" r="5" fill="#F43F8E" stroke="#18181A" strokeWidth="1.5" />
        </svg>
      );

    case 'photo-editing':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="24" y="24" width="272" height="132" rx="8" fill="#FAF8F3" stroke="#18181A" strokeWidth="2" />
          <rect x="38" y="40" width="132" height="98" rx="4" fill="#AEEBD2" stroke="#18181A" strokeWidth="1.8" />
          <path d="M38 118 L78 78 L103 102 L123 82 L170 126 V138 H38 Z" fill="#2F45FF" stroke="#18181A" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="136" cy="58" r="9" fill="#F4C542" stroke="#18181A" strokeWidth="1.5" />
          <text x="190" y="50" fill="#575650" fontSize="8" fontFamily="monospace" fontWeight="700">COLOR</text>
          <line x1="190" y1="64" x2="276" y2="64" stroke="#18181A" strokeWidth="2" />
          <circle cx="232" cy="64" r="5" fill="#F43F8E" stroke="#18181A" strokeWidth="1.5" />
          <text x="190" y="88" fill="#575650" fontSize="8" fontFamily="monospace" fontWeight="700">CONTRAST</text>
          <line x1="190" y1="102" x2="276" y2="102" stroke="#18181A" strokeWidth="2" />
          <circle cx="254" cy="102" r="5" fill="#2F45FF" stroke="#18181A" strokeWidth="1.5" />
          <text x="190" y="128" fill="#575650" fontSize="8" fontFamily="monospace" fontWeight="700">FINISH</text>
          <line x1="190" y1="140" x2="276" y2="140" stroke="#18181A" strokeWidth="2" />
        </svg>
      );

    case 'video-editing':
      return (
        <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto">
          <rect x="24" y="26" width="272" height="128" rx="8" fill="#FAF8F3" stroke="#18181A" strokeWidth="2" />
          <rect x="40" y="42" width="108" height="62" rx="4" fill="#AEEBD2" stroke="#18181A" strokeWidth="1.8" />
          <path d="M40 94 L74 62 L94 80 L112 63 L148 98 V104 H40 Z" fill="#2F45FF" stroke="#18181A" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M80 112 L80 136 M80 118 H270" stroke="#18181A" strokeWidth="1.5" />
          <rect x="90" y="116" width="66" height="14" rx="3" fill="#F4C542" stroke="#18181A" strokeWidth="1.5" />
          <rect x="160" y="116" width="44" height="14" rx="3" fill="#F43F8E" stroke="#18181A" strokeWidth="1.5" />
          <rect x="208" y="116" width="58" height="14" rx="3" fill="#AEEBD2" stroke="#18181A" strokeWidth="1.5" />
          <path d="M88 138 L96 134 L104 142 L112 134 L120 142 L128 134 L136 138" stroke="#2F45FF" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M174 108 V146" stroke="#F43F8E" strokeWidth="2" />
          <text x="190" y="70" fill="#575650" fontSize="9" fontFamily="monospace" fontWeight="700">CUT · PACE · SOUND</text>
        </svg>
      );
  }
}
