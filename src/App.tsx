import { useState } from "react";

const characters = [
  {
    id: 1,
    name: "RYUUKEN",
    title: "El Heraldo de Sangre",
    class: "Asesino Táctico",
    color: "#00f5ff",
    glow: "rgba(0,245,255,0.3)",
    hp: 100,
    shield: 100,
    speed: "ALTA",
    ult: "Corte Nova",
    bg: "from-cyan-900/40 to-blue-950/60",
    border: "border-cyan-500/40",
    icon: "⚔️",
    tier: "S",
  },
  {
    id: 2,
    name: "CYBER-VALKYRIE",
    title: "Kira",
    class: "Vanguardia Pesada",
    color: "#bf00ff",
    glow: "rgba(191,0,255,0.3)",
    hp: 125,
    shield: 100,
    speed: "MEDIA",
    ult: "Lluvia Valkyrie",
    bg: "from-purple-900/40 to-indigo-950/60",
    border: "border-purple-500/40",
    icon: "🛡️",
    tier: "A",
  },
  {
    id: 3,
    name: "SHINNOKI",
    title: "El Ancestral Oscuro",
    class: "Brujo Invocador",
    color: "#ff3a20",
    glow: "rgba(255,58,32,0.3)",
    hp: 100,
    shield: 75,
    speed: "LENTA",
    ult: "Grieta del Inframundo",
    bg: "from-red-900/40 to-orange-950/60",
    border: "border-red-500/40",
    icon: "💀",
    tier: "S+",
  },
];

function StatBar({ value, max = 125, color }: { value: number; max?: number; color: string }) {
  return (
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${(value / max) * 100}%`, backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
      />
    </div>
  );
}

function CharacterCard({ char, selected, onClick }: { char: typeof characters[0]; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left panel-glass corner-cut-sm p-3 transition-all duration-300 cursor-pointer relative overflow-hidden ${
        selected ? "border-opacity-100" : "border-opacity-30 hover:border-opacity-60"
      } ${char.border}`}
      style={selected ? { boxShadow: `0 0 20px ${char.glow}, inset 0 0 20px ${char.glow}20` } : {}}
    >
      {selected && (
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: `radial-gradient(ellipse at 30% 50%, ${char.color}, transparent 70%)` }}
        />
      )}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{char.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="font-display text-xs font-bold truncate" style={{ color: char.color }}>
            {char.name}
          </div>
          <div className="text-[9px] text-white/50 truncate">{char.class}</div>
        </div>
        <span
          className="font-display text-xs font-black animate-badge-glow"
          style={{ color: char.color }}
        >
          {char.tier}
        </span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-[9px] text-white/40">
          <span>HP {char.hp}</span>
          <span>ESCUDO {char.shield}</span>
        </div>
        <StatBar value={char.hp} color={char.color} />
        <StatBar value={char.shield} color="#ffffff" />
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-[9px] text-white/30">VEL: <span style={{ color: char.color }}>{char.speed}</span></span>
        <span className="text-[9px] font-display" style={{ color: char.color }}>▶ {char.ult}</span>
      </div>
    </button>
  );
}

function WingedLimo() {
  return (
    <svg viewBox="0 0 800 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-3xl drop-shadow-2xl">
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3a5c" />
          <stop offset="40%" stopColor="#0d2040" />
          <stop offset="100%" stopColor="#050d1a" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#223a6a" />
          <stop offset="100%" stopColor="#0f1e3a" />
        </linearGradient>
        <linearGradient id="wingGradL" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1830" />
          <stop offset="100%" stopColor="#040a16" />
        </linearGradient>
        <linearGradient id="wingGradR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a1830" />
          <stop offset="100%" stopColor="#040a16" />
        </linearGradient>
        <linearGradient id="thrusterGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00f5ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#00f5ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="thrusterGlow2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#bf00ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#bf00ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow-cyan">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-strong">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <radialGradient id="glassGrad" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#4af0ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#001a2e" stopOpacity="0.6" />
        </radialGradient>
      </defs>

      {/* ===== THRUSTER FLAMES (behind body) ===== */}
      {/* Main rear thruster — large */}
      <ellipse cx="118" cy="195" rx="52" ry="10" fill="url(#thrusterGlow)" className="animate-thruster" />
      <ellipse cx="85" cy="195" rx="30" ry="6" fill="#00f5ff" opacity="0.5" className="animate-thruster" />
      <ellipse cx="65" cy="195" rx="14" ry="3" fill="#ffffff" opacity="0.8" className="animate-thruster" />

      {/* Secondary thruster upper */}
      <ellipse cx="118" cy="175" rx="38" ry="7" fill="url(#thrusterGlow2)" className="animate-thruster" style={{ animationDelay: "0.1s" }} />
      <ellipse cx="88" cy="175" rx="20" ry="4" fill="#bf00ff" opacity="0.6" className="animate-thruster" style={{ animationDelay: "0.1s" }} />
      <ellipse cx="73" cy="175" rx="10" ry="2.5" fill="#ffffff" opacity="0.7" className="animate-thruster" style={{ animationDelay: "0.1s" }} />

      {/* Undercarriage thruster */}
      <ellipse cx="140" cy="225" rx="28" ry="6" fill="url(#thrusterGlow)" className="animate-thruster" style={{ animationDelay: "0.2s" }} />
      <ellipse cx="120" cy="225" rx="16" ry="3.5" fill="#00f5ff" opacity="0.5" className="animate-thruster" style={{ animationDelay: "0.2s" }} />

      {/* ===== LEFT WING (rear) ===== */}
      <polygon
        points="140,210 350,190 250,290 80,270"
        fill="url(#wingGradL)"
        stroke="#00f5ff"
        strokeWidth="1"
        opacity="0.9"
      />
      {/* Wing neon ribs */}
      <line x1="140" y1="210" x2="220" y2="270" stroke="#00f5ff" strokeWidth="0.8" opacity="0.4" />
      <line x1="180" y1="202" x2="235" y2="278" stroke="#00f5ff" strokeWidth="0.8" opacity="0.3" />
      <line x1="230" y1="196" x2="248" y2="284" stroke="#00f5ff" strokeWidth="0.8" opacity="0.25" />
      {/* Wing edge glow */}
      <polyline points="140,210 350,190 250,290 80,270" stroke="#00f5ff" strokeWidth="1.5" fill="none" opacity="0.6" filter="url(#glow-cyan)" />
      {/* Wing tip winglet */}
      <polygon points="340,190 370,178 360,200 345,198" fill="#0a1a30" stroke="#00f5ff" strokeWidth="1" opacity="0.8" />

      {/* ===== RIGHT WING (front) ===== */}
      <polygon
        points="560,190 740,230 680,310 430,290"
        fill="url(#wingGradR)"
        stroke="#bf00ff"
        strokeWidth="1"
        opacity="0.9"
      />
      {/* Wing neon ribs */}
      <line x1="560" y1="190" x2="600" y2="280" stroke="#bf00ff" strokeWidth="0.8" opacity="0.4" />
      <line x1="610" y1="200" x2="630" y2="295" stroke="#bf00ff" strokeWidth="0.8" opacity="0.3" />
      <line x1="660" y1="215" x2="663" y2="302" stroke="#bf00ff" strokeWidth="0.8" opacity="0.25" />
      <polyline points="560,190 740,230 680,310 430,290" stroke="#bf00ff" strokeWidth="1.5" fill="none" opacity="0.6" filter="url(#glow-cyan)" />
      {/* Wing tip winglet */}
      <polygon points="738,228 770,218 768,245 742,242" fill="#0a1a30" stroke="#bf00ff" strokeWidth="1" opacity="0.8" />

      {/* ===== CANARD WINGS (front mini) ===== */}
      <polygon points="600,160 680,140 672,158 604,170" fill="#0a1a30" stroke="#00f5ff" strokeWidth="1" opacity="0.7" />
      <polygon points="200,155 120,135 128,155 196,165" fill="#0a1a30" stroke="#bf00ff" strokeWidth="1" opacity="0.7" />

      {/* ===== MAIN BODY ===== */}
      {/* Undercarriage / belly */}
      <path
        d="M160,215 Q180,235 220,240 L560,240 Q600,238 640,220 L640,215 Q600,225 560,230 L220,230 Q185,228 160,215 Z"
        fill="#060e1e"
        stroke="#1a2d50"
        strokeWidth="1"
      />

      {/* Main body shape */}
      <path
        d="M160,155 Q180,148 220,145 L560,145 Q620,148 645,162 L650,200 Q620,215 560,218 L220,218 Q180,215 155,200 Z"
        fill="url(#bodyGrad)"
        stroke="#1a3560"
        strokeWidth="1.5"
      />

      {/* Body lower panel line */}
      <path d="M165,190 Q300,195 400,193 Q500,191 640,188" stroke="#00f5ff" strokeWidth="0.5" opacity="0.3" fill="none" />

      {/* Body neon accent stripe */}
      <path
        d="M160,180 Q300,175 400,175 Q500,175 645,178"
        stroke="#00f5ff"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
        filter="url(#glow-cyan)"
      />

      {/* Upper body ridge */}
      <path
        d="M200,155 Q300,148 400,147 Q500,148 560,153"
        stroke="#00f5ff"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />

      {/* Body panel lines */}
      <line x1="300" y1="145" x2="300" y2="218" stroke="#1a2d50" strokeWidth="1" opacity="0.5" />
      <line x1="450" y1="145" x2="450" y2="218" stroke="#1a2d50" strokeWidth="1" opacity="0.5" />

      {/* ===== ROOFLINE ===== */}
      <path
        d="M260,145 Q280,110 320,100 L520,100 Q555,105 575,120 L580,145 Z"
        fill="url(#roofGrad)"
        stroke="#1a3560"
        strokeWidth="1.5"
      />
      {/* Roof neon edge */}
      <path d="M262,144 Q282,110 321,101 L519,101 Q554,106 574,121 L578,143" stroke="#00f5ff" strokeWidth="1.5" fill="none" opacity="0.5" filter="url(#glow-cyan)" />

      {/* Roof panel detail */}
      <path d="M300,105 L300,143" stroke="#1a3560" strokeWidth="1" opacity="0.6" />
      <path d="M400,102 L400,144" stroke="#1a3560" strokeWidth="1" opacity="0.6" />
      <path d="M500,103 L500,143" stroke="#1a3560" strokeWidth="1" opacity="0.6" />

      {/* ===== WINDSHIELD / WINDOWS ===== */}
      {/* Front windshield */}
      <path
        d="M570,122 Q572,115 565,110 L540,108 L535,143 L575,143 Z"
        fill="url(#glassGrad)"
        stroke="#00f5ff"
        strokeWidth="1"
        opacity="0.85"
      />
      {/* Rear window */}
      <path
        d="M265,142 L270,110 L302,103 L305,142 Z"
        fill="url(#glassGrad)"
        stroke="#00f5ff"
        strokeWidth="1"
        opacity="0.85"
      />
      {/* Side windows */}
      <rect x="315" y="105" width="75" height="36" rx="3" fill="url(#glassGrad)" stroke="#00f5ff" strokeWidth="0.8" opacity="0.75" />
      <rect x="407" y="104" width="75" height="37" rx="3" fill="url(#glassGrad)" stroke="#00f5ff" strokeWidth="0.8" opacity="0.75" />
      <rect x="497" y="105" width="30" height="36" rx="3" fill="url(#glassGrad)" stroke="#00f5ff" strokeWidth="0.8" opacity="0.75" />
      {/* Window glare */}
      <line x1="320" y1="109" x2="330" y2="138" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
      <line x1="413" y1="108" x2="423" y2="138" stroke="#ffffff" strokeWidth="1" opacity="0.2" />

      {/* ===== FRONT NOSE / BUMPER ===== */}
      <path
        d="M640,162 Q665,168 680,183 L685,200 Q665,210 645,212 L640,200 Z"
        fill="#0a1520"
        stroke="#00f5ff"
        strokeWidth="1"
      />
      {/* Front light array */}
      <ellipse cx="670" cy="175" rx="6" ry="4" fill="#00f5ff" opacity="0.9" filter="url(#glow-strong)" />
      <ellipse cx="672" cy="190" rx="5" ry="3" fill="#00f5ff" opacity="0.7" filter="url(#glow-cyan)" />
      {/* Front grille neon */}
      <line x1="655" y1="180" x2="655" y2="205" stroke="#00f5ff" strokeWidth="0.8" opacity="0.5" />
      <line x1="660" y1="178" x2="660" y2="207" stroke="#00f5ff" strokeWidth="0.8" opacity="0.5" />
      <line x1="648" y1="183" x2="665" y2="183" stroke="#00f5ff" strokeWidth="0.5" opacity="0.3" />
      <line x1="648" y1="190" x2="667" y2="190" stroke="#00f5ff" strokeWidth="0.5" opacity="0.3" />
      <line x1="648" y1="197" x2="667" y2="197" stroke="#00f5ff" strokeWidth="0.5" opacity="0.3" />
      <line x1="648" y1="204" x2="666" y2="204" stroke="#00f5ff" strokeWidth="0.5" opacity="0.3" />

      {/* ===== REAR / TAIL ===== */}
      <path
        d="M155,200 Q142,195 135,185 L132,175 Q138,165 160,162 L162,200 Z"
        fill="#0a1520"
        stroke="#bf00ff"
        strokeWidth="1"
      />
      {/* Rear lights */}
      <rect x="138" y="170" width="18" height="5" rx="2" fill="#bf00ff" opacity="0.9" filter="url(#glow-cyan)" />
      <rect x="138" y="183" width="18" height="5" rx="2" fill="#ff3a20" opacity="0.8" filter="url(#glow-cyan)" />

      {/* ===== THRUSTER PODS ===== */}
      {/* Upper pod */}
      <rect x="130" y="165" width="50" height="18" rx="4" fill="#0a1828" stroke="#00f5ff" strokeWidth="1" />
      <circle cx="135" cy="174" r="5" fill="#00f5ff" opacity="0.4" />
      <rect x="130" y="165" width="6" height="18" rx="2" fill="#00f5ff" opacity="0.3" />

      {/* Lower pod */}
      <rect x="140" y="215" width="40" height="14" rx="3" fill="#0a1828" stroke="#bf00ff" strokeWidth="1" />
      <circle cx="145" cy="222" r="4" fill="#bf00ff" opacity="0.4" />
      <rect x="140" y="215" width="5" height="14" rx="2" fill="#bf00ff" opacity="0.3" />

      {/* ===== UNDERBODY / HOVER GLOW ===== */}
      <ellipse cx="400" cy="248" rx="220" ry="12" fill="#00f5ff" opacity="0.08" />
      <ellipse cx="400" cy="250" rx="160" ry="7" fill="#00f5ff" opacity="0.12" />

      {/* ===== OMNI-REALMS LOGO ON BODY ===== */}
      <text x="400" y="208" textAnchor="middle" fontFamily="Orbitron, monospace" fontSize="11" fontWeight="900" fill="#00f5ff" opacity="0.5" letterSpacing="4">NEXUS-01</text>

      {/* ===== ANTENNA / SENSOR MAST ===== */}
      <line x1="400" y1="100" x2="400" y2="80" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
      <circle cx="400" cy="78" r="3" fill="#00f5ff" opacity="0.7" filter="url(#glow-cyan)" />
      <line x1="360" y1="102" x2="345" y2="85" stroke="#1a3560" strokeWidth="0.8" opacity="0.4" />
      <line x1="440" y1="102" x2="455" y2="85" stroke="#1a3560" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

function MapPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, #0a1530 0%, #030710 60%, #000208 100%)" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 animate-[grid-pulse_3s_ease-in-out_infinite]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal hatch */}
      <div className="absolute inset-0 map-tbd-overlay opacity-40" />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px opacity-20 animate-[scan-line_4s_linear_infinite]"
        style={{ background: "linear-gradient(90deg, transparent, #00f5ff, transparent)" }}
      />

      {/* Center TBD badge */}
      <div className="relative flex flex-col items-center gap-4 z-10">
        {/* Hex frame */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: 320, height: 140 }}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 140" fill="none">
            <polygon
              points="20,0 300,0 320,70 300,140 20,140 0,70"
              stroke="#00f5ff"
              strokeWidth="1.5"
              fill="rgba(0,245,255,0.04)"
              opacity="0.7"
            />
            <polygon
              points="28,8 292,8 312,70 292,132 28,132 8,70"
              stroke="#00f5ff"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            />
          </svg>
          <div className="text-center relative z-10 px-8">
            <div className="font-display text-3xl font-black tracking-widest neon-cyan mb-1">POR DEFINIR</div>
            <div className="text-xs text-white/40 tracking-widest font-display">MAPA · SECTOR DESCONOCIDO</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[10px] font-display text-white/25 tracking-widest">
          <span className="w-16 h-px bg-white/20" />
          <span>LA ISLA DE LA FRACTURA</span>
          <span className="w-16 h-px bg-white/20" />
        </div>

        {/* Sector badges */}
        <div className="flex gap-3">
          {[
            { label: "ALFA", sub: "Volcánico", color: "#ff3a20" },
            { label: "BETA", sub: "Cyberpunk", color: "#00f5ff" },
            { label: "GAMMA", sub: "Sci-Fi", color: "#bf00ff" },
          ].map((s) => (
            <div
              key={s.label}
              className="corner-cut-sm px-3 py-1.5 text-center"
              style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
            >
              <div className="font-display text-[10px] font-bold" style={{ color: s.color }}>{s.label}</div>
              <div className="text-[9px] text-white/30">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      {[
        "top-4 left-4 border-t-2 border-l-2",
        "top-4 right-4 border-t-2 border-r-2",
        "bottom-4 left-4 border-b-2 border-l-2",
        "bottom-4 right-4 border-b-2 border-r-2",
      ].map((cls, i) => (
        <div key={i} className={`absolute w-8 h-8 border-cyan-500/40 ${cls}`} />
      ))}
    </div>
  );
}

function SquadSlot({ index }: { index: number }) {
  const filled = index === 0;
  return (
    <div className={`panel-glass corner-cut-sm flex items-center gap-2 px-3 py-2 flex-1 ${filled ? "border-cyan-500/40" : "border-white/10"}`}>
      {filled ? (
        <>
          <div className="w-7 h-7 rounded-full bg-cyan-900/60 border border-cyan-500/50 flex items-center justify-center text-sm">⚔️</div>
          <div>
            <div className="font-display text-[10px] text-cyan-400 font-bold">RYUUKEN</div>
            <div className="text-[9px] text-white/30">TÚ · CAPITÁN</div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] text-green-400">LISTO</span>
          </div>
        </>
      ) : (
        <>
          <div className="w-7 h-7 rounded-full border border-dashed border-white/20 flex items-center justify-center">
            <span className="text-white/20 text-lg">+</span>
          </div>
          <div>
            <div className="text-[10px] text-white/25 font-display">INVITAR</div>
            <div className="text-[9px] text-white/15">SLOT VACÍO</div>
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(0);
  const [mode, setMode] = useState<"DUOS" | "SQUADS" | "SOLO">("SQUADS");

  const char = characters[selected];

  return (
    <div className="w-screen h-screen relative overflow-hidden font-body">
      {/* ═══ BACKGROUND MAP ═══ */}
      <MapPlaceholder />

      {/* ═══ VIGNETTE OVERLAY ═══ */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(3,7,16,0.5) 100%)"
      }} />

      {/* ═══ TOP BAR ═══ */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center px-4 pt-3 pb-2 gap-3"
        style={{ background: "linear-gradient(to bottom, rgba(3,7,16,0.95), transparent)" }}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-1 h-8 bg-cyan-400" style={{ boxShadow: "0 0 10px #00f5ff" }} />
          <div>
            <div className="font-display text-base font-black tracking-widest neon-cyan leading-none">OMNI-REALMS</div>
            <div className="text-[9px] text-white/30 tracking-[0.3em] font-display">EL CÓDICE DEL CREPÚSCULO</div>
          </div>
        </div>

        <div className="flex-1" />

        {/* Player info */}
        <div className="flex items-center gap-3">
          {/* Currency */}
          {[
            { icon: "◈", amount: "12,400", label: "ESENCIA", color: "#00f5ff" },
            { icon: "◆", amount: "850", label: "CRÉDITOS", color: "#ffd700" },
          ].map((c) => (
            <div key={c.label} className="panel-glass corner-cut-sm px-3 py-1 flex items-center gap-1.5">
              <span className="text-sm" style={{ color: c.color }}>{c.icon}</span>
              <div>
                <div className="font-display text-xs font-bold" style={{ color: c.color }}>{c.amount}</div>
                <div className="text-[8px] text-white/30">{c.label}</div>
              </div>
            </div>
          ))}

          {/* Season badge */}
          <div className="panel-glass corner-cut-sm px-3 py-1 border-yellow-500/30">
            <div className="text-[8px] text-white/40 font-display">TEMPORADA</div>
            <div className="font-display text-xs font-black neon-gold">01 · ANCESTROS</div>
          </div>

          {/* Player avatar */}
          <div className="relative">
            <div
              className="w-10 h-10 corner-cut flex items-center justify-center text-xl"
              style={{ background: `linear-gradient(135deg, ${char.color}33, #0a1528)`, border: `1.5px solid ${char.color}60`, boxShadow: `0 0 12px ${char.glow}` }}
            >
              {char.icon}
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border border-void animate-pulse" />
          </div>

          <div>
            <div className="font-display text-xs font-bold text-white">PLAYER_001</div>
            <div className="text-[9px] text-white/40">NIVEL 47 · <span className="neon-gold">DIAMANTE</span></div>
          </div>
        </div>
      </header>

      {/* ═══ LEFT PANEL: CHARACTER SELECT ═══ */}
      <aside className="absolute left-3 top-20 bottom-28 z-20 w-52 flex flex-col gap-2">
        <div className="font-display text-[10px] text-white/30 tracking-widest mb-1 px-1">OPERADOR</div>
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {characters.map((c, i) => (
            <CharacterCard key={c.id} char={c} selected={selected === i} onClick={() => setSelected(i)} />
          ))}
        </div>

        {/* Selected char details */}
        <div className="panel-glass corner-cut-sm p-3 border-opacity-50" style={{ borderColor: `${char.color}40` }}>
          <div className="font-display text-[9px] text-white/30 mb-1">HABILIDAD DEFINITIVA</div>
          <div className="font-display text-xs font-bold" style={{ color: char.color }}>▶ {char.ult}</div>
          <div className="text-[9px] text-white/40 mt-1">{char.title}</div>
        </div>
      </aside>

      {/* ═══ CENTER: LIMO + LABEL ═══ */}
      <main className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="animate-float">
          <WingedLimo />
        </div>
        <div className="mt-2 flex flex-col items-center gap-1">
          <div className="font-display text-[10px] tracking-[0.4em] text-white/30">TRANSPORTE DE DESPLIEGUE</div>
          <div className="font-display text-base font-black neon-cyan tracking-widest">LIMUSINA NEXUS-01</div>
          <div className="flex gap-4 text-[9px] text-white/25 font-display">
            <span>⚡ TURBO-PROPULSORES</span>
            <span>◈ ALAS DESPLEGADAS</span>
            <span>▲ ALTITUD: 12.400m</span>
          </div>
        </div>
      </main>

      {/* ═══ RIGHT PANEL: NEWS / EVENTS ═══ */}
      <aside className="absolute right-3 top-20 bottom-28 z-20 w-52 flex flex-col gap-2">
        <div className="font-display text-[10px] text-white/30 tracking-widest mb-1 px-1">EVENTOS ACTIVOS</div>

        {[
          {
            tag: "NUEVO",
            tagColor: "#00f5ff",
            title: "Caída del Meteorito Neón",
            desc: "El evento de mitad de temporada ha comenzado. Sector Beta en alerta máxima.",
            time: "2d 14h",
          },
          {
            tag: "PASE",
            tagColor: "#ffd700",
            title: "Pase Creadores del Crepúsculo",
            desc: "Nivel 38/100 — 62 recompensas disponibles. Nuevo skin épico desbloqueado.",
            time: "28d",
          },
          {
            tag: "TORNEO",
            tagColor: "#bf00ff",
            title: "Guerra de la Esencia",
            desc: "Clasificación abierta. Top 100 clasifican al torneo final de dimensiones.",
            time: "5d",
          },
        ].map((ev) => (
          <div key={ev.title} className="panel-glass corner-cut-sm p-3 hover:border-opacity-60 transition-all cursor-pointer" style={{ borderColor: `${ev.tagColor}30` }}>
            <div className="flex justify-between items-start mb-1">
              <span className="font-display text-[9px] font-bold px-1.5 py-0.5 corner-cut-sm" style={{ color: ev.tagColor, background: `${ev.tagColor}20` }}>
                {ev.tag}
              </span>
              <span className="text-[8px] text-white/25 font-display">{ev.time}</span>
            </div>
            <div className="font-display text-[10px] font-bold text-white/80 mt-1">{ev.title}</div>
            <div className="text-[9px] text-white/35 mt-1 leading-relaxed">{ev.desc}</div>
          </div>
        ))}

        {/* Battle pass mini */}
        <div className="panel-glass corner-cut-sm p-3 border-yellow-500/20 mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="font-display text-[10px] text-yellow-400 font-bold">PASE DE BATALLA</span>
            <span className="font-display text-[10px] text-white/40">Nv. 38</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300" style={{ width: "38%", boxShadow: "0 0 8px #ffd700" }} />
          </div>
          <div className="text-[9px] text-white/25 mt-1">38 / 100 niveles</div>
        </div>
      </aside>

      {/* ═══ BOTTOM BAR ═══ */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4 pt-2"
        style={{ background: "linear-gradient(to top, rgba(3,7,16,0.97), transparent)" }}>
        <div className="flex items-end gap-3">
          {/* Squad slots */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display text-[10px] text-white/30 tracking-widest">ESCUADRÓN</span>
              <div className="flex gap-1">
                {(["SOLO", "DUOS", "SQUADS"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`font-display text-[9px] px-2 py-0.5 corner-cut-sm transition-all ${
                      mode === m
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                        : "text-white/25 border border-white/10 hover:border-white/25"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: mode === "SOLO" ? 1 : mode === "DUOS" ? 2 : 4 }, (_, i) => (
                <SquadSlot key={i} index={i} />
              ))}
            </div>
          </div>

          {/* Match settings */}
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-2">
              <div className="panel-glass corner-cut-sm px-3 py-2 text-center">
                <div className="font-display text-[9px] text-white/30">REGIÓN</div>
                <div className="font-display text-[10px] text-white/70">AUTO</div>
              </div>
              <div className="panel-glass corner-cut-sm px-3 py-2 text-center">
                <div className="font-display text-[9px] text-white/30">PING</div>
                <div className="font-display text-[10px] text-green-400">24ms</div>
              </div>
              <div className="panel-glass corner-cut-sm px-3 py-2 text-center">
                <div className="font-display text-[9px] text-white/30">JUGADORES</div>
                <div className="font-display text-[10px] text-white/70">72k</div>
              </div>
            </div>
          </div>

          {/* DEPLOY BUTTON */}
          <button
            className="relative font-display font-black text-sm tracking-widest px-10 py-4 corner-cut animate-deploy-pulse transition-all hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(0,245,255,0.2) 0%, rgba(0,180,220,0.15) 100%)",
              border: "2px solid rgba(0,245,255,0.7)",
              color: "#00f5ff",
              textShadow: "0 0 20px #00f5ff",
            }}
          >
            <span className="relative z-10">▶ DESPLEGAR</span>
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #00f5ff, transparent)" }} />
          </button>
        </div>
      </footer>
    </div>
  );
}
