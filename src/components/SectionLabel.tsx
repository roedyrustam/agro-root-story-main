interface Props {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta/8 font-mono text-[10px] text-terracotta">
        {number}
      </span>
      <span className="h-px w-6 bg-gradient-to-r from-terracotta/50 to-transparent" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-coffee/60">{label}</span>
    </div>
  );
}
