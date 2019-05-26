import React from 'react';
import _ from 'lodash';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default (props) => (
   _.map(props.ranking, item => (
    <TableRow key={item.id}>
      <TableCell align="left">{item.rank}</TableCell>
      <TableCell component="th" scope="row">{item.id}</TableCell>
      <TableCell align="left">{item.solutions}</TableCell>
    </TableRow>
  ))
)
