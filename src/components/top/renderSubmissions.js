import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default (props) => (
   _.map(props.submissions, submission => (
    <TableRow key={submission.judgeId}>
      <TableCell align="left">{submission.userId}</TableCell>
      <TableCell component="th" scope="row">{submission.problemTitle}</TableCell>
      <TableCell align="left">{submission.language}</TableCell>
      <TableCell align="left">{moment(submission.submissionDate).format("HH:mm:ss")}</TableCell>
      <TableCell align="left" className={submission.status === 4 ? 'correct-answer' : 'not-correct-answer'}>
        {props.status[submission.status]}
      </TableCell>
    </TableRow>
  ))
)
