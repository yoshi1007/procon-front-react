import axios from 'axios';

// AOJ API エンドポイント
export const URL = "https://judgeapi.u-aizu.ac.jp"

// 参加者のidリスト
export const participantIds = [

]

// 開始時刻
export const startDate = '2019-07-05 17:30:00'

// 終了時刻
export const endDate = '2019-07-05 19:30:00'

export const myHttpClient = axios.create({
  'Access-Control-Allow-Origin':'*'
})
