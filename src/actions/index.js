import axios from 'axios'

// AOJ API エンドポイント
export const URL = 'https://judgeapi.u-aizu.ac.jp'

// 参加者のidリスト
export const participants = {
  yoshiyoshi1007: '山田大感謝祭'
}

// 問題リスト
export const problems = {
  ITP1_1_A: '問題A',
}

// 言語リスト
export const languages = [
  'C',
  'C++',
  'JAVA',
  'C++11',
  'C++14',
  'C#',
  'D',
  'Ruby',
  'Python',
  'Python3',
  'PHP',
  'JavaScript',
  'Scala',
  'Haskell',
  'OCaml',
  'Rust',
  'Go',
  'Kotlin'
]

// 開始時刻
export const startDate = '2019-07-01 17:30:00'

// 終了時刻
export const endDate = '2019-07-05 19:30:00'

// axiosをcreate
export const myHttpClient = axios.create({
  'Access-Control-Allow-Origin': '*',
  'withCredentials': true
})
