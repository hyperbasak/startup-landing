export interface Comparison {
  category: string;
  legacy: string;
  growthBlock: string;
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
