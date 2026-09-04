/** Iconos de marca y garabatos ilustrados de contacto. */

export function IconoWhatsApp({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function IconoInstagram({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** 1. Teléfono Garabato: Teléfono retro con ondas sonoras alegres */
export function IconoTelefonoDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 9 C 7 6.5 9.5 5 12 6.5 L 14.5 9 C 15.5 10 15.5 11.5 14 12.5 L 13.2 13 C 14.5 16 16.5 18 19.5 19.3 L 20 18.5 C 21 17 22.5 17 23.5 18 L 26 20.5 C 27.5 22 26 24.5 23.5 24.5 C 14.5 24.5 7 17 7 9 Z" />
        <path d="M21 7 C 23.5 8.5 24.5 11 24 13.5" />
        <path d="M25 4 C 28.5 6.5 30 11 29 15" />
      </g>
      <circle cx="9.5" cy="8.5" r="1" fill="currentColor" />
      <circle cx="23.5" cy="22.5" r="1" fill="currentColor" />
    </svg>
  );
}

/** 2. WhatsApp Burbuja: Bocadillo alegre dibujado a mano */
export function IconoWhatsAppDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 15.5 C 5.5 9.5 10 5 16.5 5 C 23 5 27.5 9.5 27 15.5 C 26.5 21.5 22 25.5 16.5 25.5 C 14.2 25.5 12.2 24.8 10.5 23.5 L 5 25.5 L 6.8 20.5 C 5.8 19 5.5 17.2 6 15.5 Z" />
        <path d="M12.5 13.5 C 13.5 15.5 15.5 17.5 17.5 18.5" />
        <path d="M11 12 C 11.5 11.5 12.5 11.5 13 12 L 14 13.2 C 14.4 13.7 14.3 14.3 13.8 14.7 C 13.8 14.7 14.5 16.5 16.3 17.2 C 16.7 16.7 17.3 16.6 17.8 17 L 19 18 C 19.5 18.5 19.5 19.5 19 20 C 18 21 16 21 14 19.5 C 12 18 10.5 15.5 10.5 13.5 C 10.5 12.8 10.7 12.3 11 12 Z" fill="currentColor" fillOpacity={0.15} />
      </g>
      <circle cx="21" cy="11.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

/** 3. Cámara Polaroid Doodle: Cámara instantánea con destello de flash */
export function IconoInstagramDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.5 11 C 5.5 8.5 7.5 7 10 7 H 22 C 24.5 7 26.5 8.5 26.5 11 V 23 C 26.5 25.5 24.5 27 22 27 H 10 C 7.5 27 5.5 25.5 5.5 23 Z" />
        <path d="M9 7 V 4.5 H 13 V 7" />
        <path d="M22 10.5 H 23" />
        <circle cx="16" cy="17" r="5" />
      </g>
      <circle cx="18" cy="15" r="1.5" fill="currentColor" />
      <path d="M22.5 4.5 L 24 6 L 25.5 4.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

/** 4. Reloj Sol Doodle: Reloj con rayos de sol garabateados */
export function IconoHorarioDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="9" />
        <path d="M16 11.5 V 16 L 12.5 18" />
        <path d="M16 3 V 4.5" />
        <path d="M16 27.5 V 29" />
        <path d="M3 16 H 4.5" />
        <path d="M27.5 16 H 29" />
        <path d="M6.8 6.8 L 7.9 7.9" />
        <path d="M24.1 24.1 L 25.2 25.2" />
        <path d="M6.8 25.2 L 7.9 24.1" />
        <path d="M24.1 7.9 L 25.2 6.8" />
      </g>
      <circle cx="16" cy="16" r="1.2" fill="currentColor" />
    </svg>
  );
}

/** 5. Escuelita / Casita Doodle: Casita con chimenea de corazón y puerta en arco */
export function IconoUbicacionDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.5 L 16 5 L 28 14.5" />
        <path d="M7 13.5 V 25.5 C 7 26.5 8 27 9 27 H 23 C 24 27 25 26.5 25 25.5 V 13.5" />
        <path d="M13 27 V 19.5 C 13 17.5 19 17.5 19 19.5 V 27" />
        <path d="M21 9 V 6 H 24 V 11.5" />
      </g>
      <path
        d="M23 4 C 22 2.8 20.8 3.5 21.5 4.5 C 22.2 5.5 23 6 23 6 C 23 6 23.8 5.5 24.5 4.5 C 25.2 3.5 24 2.8 23 4 Z"
        fill="currentColor"
      />
    </svg>
  );
}
