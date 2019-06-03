import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles(theme => ({
  body: {
    fontSize: 18,
  },
}))(TableCell);

export default (props) => (
   _.map(props.submissions, submission => (
    <TableRow key={submission.judgeId}>
      <StyledTableCell align="left">{submission.userId}</StyledTableCell>
      <StyledTableCell component="th" scope="row">{submission.problemTitle}</StyledTableCell>
      <StyledTableCell align="left">{submission.language}</StyledTableCell>
      <StyledTableCell align="left">{moment(submission.submissionDate).format("HH:mm:ss")}</StyledTableCell>
      <StyledTableCell align="left" className={submission.status === 4 ? 'correct-answer' : 'not-correct-answer'}>
        {props.status[submission.status]}
      </StyledTableCell>
    </TableRow>
  ))
)
