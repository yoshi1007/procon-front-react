import React from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledTableCell = withStyles(theme => ({
  body: {
    fontSize: '18px',
  }
}))(TableCell);

export default (props) => (
   _.map(props.ranking, item => (
    <TableRow key={item.id}>
      <StyledTableCell align="left">
        <FontAwesomeIcon icon="crown" className={[
          'crown',
          item.rank === 1 ? 'first' : item.rank === 2 ? 'second' :item.rank === 3 ? 'third' : 'none'
        ].join(' ')} />{item.rank}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row">{item.id}</StyledTableCell>
      <StyledTableCell align="left">{item.solutions}</StyledTableCell>
    </TableRow>
  ))
)
