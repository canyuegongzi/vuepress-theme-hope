import { inject, provide } from "vue";
import { useBlogType } from "vuepress-plugin-blog2/lib/client";

import type { ComputedRef, InjectionKey } from "vue";
import type { BlogTypeData } from "vuepress-plugin-blog2/lib/client";
import type { ArticleMeta } from "../../../../shared";

export type SlidesRef = ComputedRef<BlogTypeData<ArticleMeta>>;

export const slidesSymbol: InjectionKey<SlidesRef> = Symbol.for("slides");

/**
 * Inject slides
 */
export const useSlides = (): SlidesRef => {
  const slides = inject(slidesSymbol);

  if (!slides) {
    throw new Error("useSlides() is called without provider.");
  }

  return slides;
};

/**
 * Provide slides
 */
export const setupSlides = (): void => {
  const slides = useBlogType<ArticleMeta>("slide");

  provide(slidesSymbol, slides);
};