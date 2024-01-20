import { Drawer } from '@mui/material'
import { FC } from 'react'

type PermanentLeftDrawerProps = {
  children: JSX.Element
}

export const PermanentLeftDrawer: FC<PermanentLeftDrawerProps> = ({
  children,
}) => {
  const w = 200
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: w,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: w,
          boxSizing: 'border-box',
        },
      }}
    >
      {children}
    </Drawer>
  )
}
