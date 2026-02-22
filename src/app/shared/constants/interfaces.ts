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

export interface DropdownRequestDto {
  elementId: string;
  filter1?: string;
  filter2?: string;
  filter3?: string;
}

export interface DropdownElementDto {
  elementId: string;
  label: string;
  value: string;
  filter1?: string;
  filter2?: string;
  filter3?: string;
}