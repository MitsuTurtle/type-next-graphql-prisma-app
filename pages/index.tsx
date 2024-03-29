import { StatusCard } from '@/components/molecules/StatusCard'
import { BirdHouseLayout } from '@/components/organisms/layouts/BirdHouseLayout'
import { Box } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type HomePageProps = {
  statuses: Status[]
}

type Status = {
  id: string
  body: string
  author: string
  createdAt: string
}

const isStatuses = (data: unknown): data is Status[] => {
  // 内緒だよ
  return true
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const res = await fetch(`http://localhost:3000/api/status/listStatuses`)
  const statusesData = (await res.json()) as unknown
  if (!isStatuses(statusesData)) {
    return { notFound: true }
  }

  return { props: { statuses: statusesData } }
}

const HomePage: NextPage<HomePageProps> = ({ statuses }) => {
  return (
    <BirdHouseLayout currentRouteName="home">
      <>
        <Head>
          <title>最新ステータス</title>
          <meta property="og:title" content="最新ステータス" key="ogtitle" />
        </Head>
        {statuses.map((s) => (
          <Box key={s.id} pb={2}>
            <StatusCard {...s} />
          </Box>
        ))}
      </>
    </BirdHouseLayout>
  )
}

export default HomePage
