export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Jack Guillet
        </p>
      </div>
    </footer>
  );
}
