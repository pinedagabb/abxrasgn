import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import {
    Box, Divider, FormControl, FormControlLabel, FormLabel, Popover, Radio, RadioGroup, TextField
} from '@material-ui/core';

import { FixedBottomPominentButton, Layout } from '../components';
import { SourceData, TableData } from '../services/DataStoreApi';

const SelectTablePage = () => {
  const history = useHistory();
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [source, setSource] = useState<SourceData | null>(null);
  const [tables, setTables] = useState([] as TableData[]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState('');

  const onSelectTable = (event: any) => {
    const {
      target: { value: selectedValue },
    } = event;

    setSelectedTable(selectedValue);
  };

  const openFilter = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const closeFilter = () => {
    setAnchorEl(null);
  };

  const onSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const onNext = () => {
    const nextTable = tables.find(
      (table) => table.id === Number(selectedTable)
    );
    const children = nextTable?.childTables;

    if (!nextTable || !children || children.length === 0) {
      console.log('TODO - Go to SelectColumnsPage');
      return;
    }

    const src = {
      ...source,
      tables: nextTable?.childTables,
    };
    history.push({
      pathname: `/source-tables/${nextTable.id}`,
      state: { source: src },
    });
  };

  useEffect(() => {
    const sourceDetails = (history.location.state as any)?.source as SourceData;
    const tableList: TableData[] = [];
    const parentChildMap = new Map<string, TableData[]>();

    if (!sourceDetails?.tables) {
      return;
    }

    setSource(sourceDetails);
    sourceDetails.tables.forEach((tableData: TableData) => {
      const table = { ...tableData };
      const [parent, child] = table.title.split('||');
      table.title = parent;
      let existingChildren: TableData[] = parentChildMap.get(table.title) ?? [];

      if (existingChildren.length === 0) {
        tableList.push(table);
      }

      if (child) {
        parentChildMap.set(parent, [
          ...existingChildren,
          {
            title: child,
            id: table.id,
          },
        ]);
      }
    });

    setTables(
      tableList.map((table) => {
        return {
          ...table,
          childTables: parentChildMap.get(table.title),
        };
      })
    );
  }, [history]);

  return (
    <Layout
      headerTitle='Select table.'
      subTitle={
        (source ? source.name : '') +
        ' has the following tables ready for import. Please select the table you would like to import.'
      }
    >
      <Box mt={4}>
        <FormControl component='fieldset' fullWidth>
          <FormLabel
            component='legend'
            style={{ marginBottom: '8px' }}
            onClick={openFilter}
          >
            Filter
            {search !== '' && <span> (Searching for: {search})</span>}
          </FormLabel>
          <Popover
            id='filter-input-popover'
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={closeFilter}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Box p={2}>
              <TextField
                id='filter-input-field'
                label='Search Table'
                variant='outlined'
                value={search}
                onChange={onSearch}
              />
            </Box>
          </Popover>
          <Divider style={{ height: '2px' }} />
          <RadioGroup
            aria-label='gender'
            defaultValue='female'
            name='radio-buttons-group'
            value={selectedTable}
            onChange={onSelectTable}
          >
            {tables
              .filter((table) =>
                table.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((table: TableData) => (
                <Box key={table.id}>
                  <FormControlLabel
                    value={table.id.toString()}
                    control={<Radio />}
                    label={table.title}
                  />
                  <Divider />
                </Box>
              ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <FixedBottomPominentButton
        title='Next'
        enabled={selectedTable !== null}
        onClick={() => onNext()}
      />
    </Layout>
  );
};

export default SelectTablePage;
