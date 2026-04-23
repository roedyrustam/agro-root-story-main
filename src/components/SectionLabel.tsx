interface Props {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: Props) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
      <span>{number}</span>
      <span className="h-px w-8 bg-terracotta/60" />
      <span className="text-coffee/70">{label}</span>
    </div>
  );
}
