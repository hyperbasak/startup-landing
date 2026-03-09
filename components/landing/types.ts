export interface Comparison {
  category: string;
  legacy: string;
  blockMarketing: string;
}

export interface ComparisonSet {
  id: string;
  tabLabel: string;
  mainCopy: string;
  subCopy: string;
  legacyTitle: string;
  legacySubtitle: string;
  comparisons: Comparison[];
}
