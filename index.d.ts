export interface SmartSlugOptions {
  maxWords?: number;
  language?: string;
  appendUniqueId?: boolean;
}

export declare function smartSlug(text: string, options?: SmartSlugOptions): string;
