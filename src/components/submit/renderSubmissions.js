import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { StyledTableCell } from '../top/top';
import TableRow from '@material-ui/core/TableRow';

export default (props) => (
   _.map(props.submissions, submission => (
    <TableRow key={submission.judgeId}>
      <StyledTableCell align="left">{props.users[submission.userId]}</StyledTableCell>
      <StyledTableCell component="th" scope="row">{props.problems[submission.problemTitle]}</StyledTableCell>
      <StyledTableCell align="left">{submission.language}</StyledTableCell>
      <StyledTableCell align="left">{moment(submission.submissionDate).format("HH:mm:ss")}</StyledTableCell>
      <StyledTableCell align="left" className={submission.status === 4 ? 'correct-answer' : 'not-correct-answer'}>
        {props.status[submission.status]}
      </StyledTableCell>
    </TableRow>
  ))
)
