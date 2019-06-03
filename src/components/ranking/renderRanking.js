import React from 'react';
import _ from 'lodash';
import { StyledTableCell } from '../top/top';
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
