import React from 'react';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Refresh from '@material-ui/icons/Refresh';

import CellRenderer from './CellRenderer';

const MUITable = props => {
  const {
    className,
    isLoading,
    titleBar,
    config,
    list,
    pagination,
    sorting,
    onSelect,
    history,
    actions,
    batch,
  } = props;

  const listToRender = isLoading ? [{}, {}, {}, {}, {}] : list;
  const { t } = useTranslation();
  return (
    <div className={`table-container ${className}`}>
      {titleBar && (
        <div className="d-flex justify-content-between align-items-center table-title-bar">
          <div className="d-flex align-items-center table-title">
            {titleBar.onRefresh && (
              <IconButton className="refresh-btn" onClick={titleBar.onRefresh}>
                <Refresh fontSize="small" />
              </IconButton>
            )}
            {titleBar.title && <div className="title-text">{titleBar.title}</div>}
            {titleBar.link && (
              <Link to={titleBar.link.path} className="action-link-text">
                {titleBar.link.label}
              </Link>
            )}
            {titleBar.helper && <div className="action-link-text">{titleBar.helper}</div>}
          </div>
          <div className="title-actions">{actions}</div>
        </div>
      )}
      <Table className="table-root">
        <TableHead className="table-head-root">
          <TableRow>
            <TableCell padding="none" />
            {config.map(column => (
              <TableCell
                key={column.id}
                align={column.align}
                classes={{
                  root: `table-cell head-cell align-text-${column.align}`,
                }}
              >
                {column.sorting ? (
                  <Tooltip title={t(column.label)} enterDelay={100}>
                    <TableSortLabel
                      IconComponent={KeyboardArrowDown}
                      active={sorting.column === column.id}
                      direction={sorting.descending ? 'desc' : 'asc'}
                      onClick={() => sorting.onSort(column.id)}
                    >
                      {t(column.label)}
                    </TableSortLabel>
                  </Tooltip>
                ) : (
                  t(column.label)
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {listToRender.map((row, index) => {
            return (
              <TableRow
                key={row.id || index}
                hover
                onClick={() => {
                  if (onSelect) {
                    history.push(`${onSelect.path}/${batch ? row.batchId : row.id}`, {
                      lastState: onSelect.lastState,
                    });
                  }
                }}
              >
                <TableCell padding="none" className="suspicious-cell">
                  {row.suspicious && (
                    <LinearProgress
                      color="primary"
                      classes={{
                        root: 'suspicious-indicator',
                        colorPrimary: 'red-progress-bg',
                        barColorPrimary: 'red-progress-bar',
                      }}
                    />
                  )}
                </TableCell>
                {config.map(cell => (
                  <TableCell
                    classes={{
                      root: `table-cell align-text-${cell.align}`,
                    }}
                    key={cell.id}
                  >
                    <CellRenderer
                      isLoading={isLoading}
                      value={row[cell.name]}
                      renderer={cell.renderer}
                      props={cell.props}
                      highlighted={row.suspicious}
                      striked={row.striked}
                    />
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {pagination && (
        <TablePagination
          labelRowsPerPage={t('text_rows_per_page')}
          component="div"
          dir="ltr"
          count={pagination.totalRecords || 0}
          rowsPerPage={pagination.pageSize}
          page={pagination.pageNumber || 0}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={pagination.onChangePageNumber}
          onChangeRowsPerPage={pagination.onChangePageSize}
        />
      )}
    </div>
  );
};

MUITable.propTypes = {
  className: propTypes.string,
  isLoading: propTypes.bool,
  titleBar: propTypes.object,
  config: propTypes.array,
  list: propTypes.array,
  batch: propTypes.bool,
  pagination: propTypes.object,
  sorting: propTypes.object,
  onSelect: propTypes.object,
  history: propTypes.any,
  actions: propTypes.any,
};

export default withRouter(MUITable);
