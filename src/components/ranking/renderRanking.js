import React from 'react';
import _ from 'lodash';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => (
   _.map(props.ranking, item => (
    <TableRow key={item.id}>
      <TableCell align="left">
        <FontAwesomeIcon icon="crown" className={[
          'crown',
          item.rank === 1 ? 'first' : item.rank === 2 ? 'second' :item.rank === 3 ? 'third' : 'none'
        ].join(' ')} />{item.rank}
      </TableCell>
      <TableCell component="th" scope="row">{item.id}</TableCell>
      <TableCell align="left">{item.solutions}</TableCell>
    </TableRow>
  ))
)
