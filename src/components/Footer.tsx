
export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-2 px-6 md:px-16 py-6 md:py-8 border-t border-line text-center md:text-left">
      <p className="text-[0.78rem] text-ink-3">&copy; {new Date() .getFullYear()} Dalu. All rights reserved.</p>
      <p className="text-[0.78rem] text-ink-3">Built with React · TypeScript · Tailwind</p>
    </footer>
  )
}
