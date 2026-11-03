export function Container({ className = '', children, ...rest }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-16 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}

export function ArrowUpRight({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

export function Eyebrow({ children, tone = 'muted', className = '' }) {
  return (
    <span
      className={`text-[12px] font-semibold tracking-[1.6px] ${
        tone === 'dark' ? 'text-on-dark-muted' : 'text-ink-muted'
      } ${className}`}
    >
      {children}
    </span>
  )
}
