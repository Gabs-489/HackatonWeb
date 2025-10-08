export interface Quote {
  id: number;
  text: string;
  author: string;
}

export interface QuotesData {
  quotes: Quote[];
}