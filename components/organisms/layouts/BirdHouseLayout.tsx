import { PermanentLeftDrawer } from '@/components/atoms/PermanentLeftDrawer'
import { TwoColumnLayout } from '@/components/atoms/layouts/TwoColumnLayout'
import { NavigationList } from '@/components/molecules/NavigationList'
import { VerticalBanners } from '@/components/molecules/VerticalBanners'
import { Box } from '@mui/material'
import { FC } from 'react'

type BirdHouseLayoutProps = {
  children: JSX.Element
  currentRouteName?: string
}

export const BirdHouseLayout: FC<BirdHouseLayoutProps> = ({
  children,
  currentRouteName,
}) => (
  <Box sx={{ display: 'flex' }}>
    <PermanentLeftDrawer>
      <NavigationList currentRouteName={currentRouteName} />
    </PermanentLeftDrawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <TwoColumnLayout rightColumnContents={<VerticalBanners />}>
        {children}
      </TwoColumnLayout>
    </Box>
  </Box>
)
