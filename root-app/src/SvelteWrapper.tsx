import { useEffect, useRef } from 'react';

type SvelteWrapperProps = {
  Component: any; // The Svelte component
  props: Record<string, any>; // Props to pass to the Svelte component
};

export function SvelteWrapper({ Component, props }: SvelteWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      console.log('Props passed to Svelte component:', props); // Debugging

      const instance = new Component({
        target: containerRef.current,
        props: props || {}, // Ensure props are passed as an empty object if undefined
      });

      return () => {
        instance.$destroy();
      };
    }
  }, [Component, props]);

  return <div ref={containerRef}></div>;
}
