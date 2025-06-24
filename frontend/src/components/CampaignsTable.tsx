import {
  Table,
  IconButton,
  Box,Text
} from '@chakra-ui/react';
import { useState } from 'react';
import type { Campaign } from '../api';


const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Start date', key: 'startDate' },
  { label: 'End date', key: 'endDate' },
  { label: 'Clicks', key: 'clicks' },
  { label: 'Cost', key: 'cost' },
  { label: 'Revenue', key: 'revenue' },
  { label: 'Profit', key: 'profit' },
];

const CampaignsTable = ({campaigns}:{campaigns: Campaign[]}) => {
  const [rows, setRows] = useState(campaigns);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortData = (key: string) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sorted = [...rows].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return direction === 'asc' ? aVal - bVal : bVal - aVal;
      } else {
        return direction === 'asc'
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      }
    });

    setSortConfig({ key, direction });
    setRows(sorted);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? (
      <div>↑</div>
    ) : (
      <div>↓</div>
    );
  };

  if(campaigns.length===0){
    return <Text>No campaigns found</Text>;
  }

  return (
    <Box overflowX="auto">
      <Table.Root>
      <Table.Header>
        <Table.Row>
          {columns.map((col) => (
            <Table.ColumnHeader key={col.key}>
              <Box
                cursor="pointer"
                display="flex"
                alignItems="center"
                onClick={() => sortData(col.key)}
              >
                {col.label}
                {getSortIcon(col.key)}
              </Box>
            </Table.ColumnHeader>
          ))}
          <Table.ColumnHeader>Actions</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows.map((row, i) => (
          <Table.Row key={i}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.startDate}</Table.Cell>
            <Table.Cell>{row.endDate}</Table.Cell>
            <Table.Cell>{row.clicks}</Table.Cell>
            <Table.Cell>${row.cost}</Table.Cell>
            <Table.Cell>${row.revenue}</Table.Cell>
            <Table.Cell>${row.profit}</Table.Cell>
            <Table.Cell>
              <IconButton
                size="sm"
                aria-label="Edit"
                
                mr={2}
              />
              <IconButton
                size="sm"
                aria-label="Delete"
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={8}>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
    </Box>
  );
};

export default CampaignsTable;
