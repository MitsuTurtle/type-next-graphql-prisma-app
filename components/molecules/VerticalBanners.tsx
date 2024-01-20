import { MediumRectangleDummyBanner } from '@/components/atoms/banners/MediumRectangleDummy'
import { Box } from '@mui/material'
import { FC } from 'react'

export const VerticalBanners: FC = () => (
  <Box component="div">
    <Box pb={2}>
      <MediumRectangleDummyBanner />
    </Box>
    <Box>
      <MediumRectangleDummyBanner />
    </Box>
  </Box>
)
