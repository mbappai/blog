import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto h-full max-w-3xl  px-2.5 sm:px-6 xl:max-w-4xl xl:px-0">
      {children}
    </section>
  );
}
