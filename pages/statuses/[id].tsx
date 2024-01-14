import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

// ページコンポーネントの引数の型定義
type StatusPageProps = { id: string; lang: string }

// サーバーサイドでの前処理を行う関数
export const getServerSideProps: GetServerSideProps<StatusPageProps> = async (
  context,
) => {
  // context経由でブラウザから送信されたパラメーターを受け取る
  const { id, lang } = context.query

  // 受け取ったパラメーターが意図した方でなければnot foundぺーじとして処理する
  if (typeof id !== 'string') {
    return { notFound: true }
  }
  if (typeof lang !== 'string') {
    return { notFound: true }
  }
  // 受け取ったパラメーターに問題がなければStatusPagePropsを返す
  return { props: { id, lang } }
}

const StatusPage: NextPage<StatusPageProps> = (props) => {
  const title = `このページのIDは${props.id}です`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="qgtitle" />
      </Head>
      <p>
        このページのIDは{props.id}で言語は{props.lang}です
      </p>
    </>
  )
}

export default StatusPage
