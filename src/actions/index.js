import axios from 'axios';

// AOJ API エンドポイント
export const URL = "https://judgeapi.u-aizu.ac.jp"

// 参加者のidリスト
export const participantIds = [
  "Fulltea",
  "MiuraMiumiu",
  "idsigma",
  "Lobesta",
  "t18140526"
]

// 開始時刻
export const startDate = '2019-06-14 18:00:00'

// 終了時刻
export const endDate = '2019-06-14 19:30:00'

export const myHttpClient = axios.create({
  'Access-Control-Allow-Origin':'*'
})
