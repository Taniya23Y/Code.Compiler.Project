import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView) {
      // Directly handle logic without context
      //   console.log(`Section ${sectionName} is in view`);
    }
  }, [inView, sectionName]);

  return {
    ref,
  };
}
