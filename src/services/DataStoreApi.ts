const jsonHeader = {
  Accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwcGxpY2FudEBhaXJib3hyLmNvbSIsImlhdCI6MTY0MTk3NTM2NiwiZXhwIjoxNjQxOTc3MTY2fQ.6UFV83JynkvX7hCg2hiLI8Q4VTa9oDqBqiEM8v-iOiY',
  'Content-Type': 'application/json',
};
const url = 'https://api.airboxr.com/data/dataStores';

export interface SourceData {
  id: number;
  name: string;
  spreadsheetId: string;
  url: string;
  tables: TableData[];
  isFavorite?: boolean;
}

export interface TableData {
  id: number;
  title: string;
  childTables?: TableData[];
}

export const DataStoreApi = {
  getAll: async (): Promise<SourceData[]> => {
    const response = await fetch(url, { headers: jsonHeader });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  },
};
