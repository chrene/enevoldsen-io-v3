export default function NarrowContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto flex max-w-4xl">{children}</div>;
}
