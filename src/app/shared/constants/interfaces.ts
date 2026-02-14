export interface TableColumn {
  key: string; // The key in your data object (e.g., 'name', 'email')
  label: string; // The text to show in the Header
  type?: 'text' | 'link' | 'currency' | 'date'; // Optional: defaults to 'text'
  action?: string; // Optional: Event ID to emit when link is clicked
}

export interface GlobalTableData {
  data: any[];
  total: number;
}
