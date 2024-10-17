import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Button } from 'react-bootstrap';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

// Global Filter Component for Searching
const GlobalFilter = ({ globalFilter, setGlobalFilter }) =>
  <span>
    Search/Filter:{` `}
    <input
      value={globalFilter || ``}
      onChange={e => setGlobalFilter(e.target.value || undefined)}
      placeholder="Type to filter the table..."
      style={{ marginBottom: `10px`, padding: `5px` }}
    />
  </span>;
export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  // Fetch all assessments using AssessmentService.getList function
  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        setLoading(true);
        const response = await AssessmentService.getList();
        const nonDeletedAssessments = response.assessments.filter(assessment => !assessment.deleted); // Only return non-deleted assessments
        setAssessments(nonDeletedAssessments || []);
      } catch (err) {
        console.error(`Failed to fetch assessments:`, err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAssessments();
  }, []);

  // Delete assessment function
  const deleteAssessment = async (assessmentId) => {
    try {
      await AssessmentService.delete(assessmentId);
      // Remove the deleted assessment from the list
      setAssessments(assessments.filter(assessment => assessment.id !== assessmentId));
    } catch (err) {
      console.error(`Failed to delete the assessment:`, err.message);
    }
  };

  // Define columns for the table
  const columns = React.useMemo(() => [
    { Header: `Cat Name`, accessor: `catName` },
    {
      Header: `Cat Date of Birth`,
      accessor: row => dayjs(row.catDateOfBirth).format(`MMM D, YYYY`),
    },
    { Header: `Score`, accessor: `score` },
    { Header: `Risk Level`, accessor: `riskLevel` },
    {
      Header: `Created At`,
      accessor: row => dayjs(row.createdAt).format(`MMM D, YYYY`),
    },
    {

      Cell: ({ value }) =>
        <Button variant="danger" onClick={() => deleteAssessment(value)}>
          Delete
        </Button>,
      Header: `Actions`,
      accessor: `id`,
    },
  ], [ assessments ]);

  // Use react-table hooks for sorting and filtering
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setGlobalFilter,
    state, // Filter function for search
  } = useTable(
    { columns, data: assessments },
    useGlobalFilter, // For search functionality
    useSortBy // For sorting functionality
  );

  return (
    <div>
      {loading ?
        <div>Loading...</div> :
        <>
          <h1>Assessments</h1>

          {/* Filter/Search Instruction */}
          <p>Type in the search box to filter assessments by any column
            (e.g., cat name, date of birth, score, risk level).</p>

          {/* Search/Filter */}
          <GlobalFilter
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />

          {/* Table for assessments */}
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map(headerGroup =>
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column =>
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render(`Header`)}
                      {/* Add a sort indicator */}
                      <span>
                        {column.isSorted ?
                          column.isSortedDesc ?
                            ` 🔽` :
                            ` 🔼` :
                          ``}
                      </span>
                    </th>)}
                </tr>)}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell =>
                      <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>}
    </div>
  );
};
