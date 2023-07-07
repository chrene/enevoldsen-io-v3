export default function NarrowContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto flex items-center justify-center max-w-4xl">{children}</div>;
}
