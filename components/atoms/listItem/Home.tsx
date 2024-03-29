import { Home as HomeIcon } from '@mui/icons-material'
import { ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

type HomeListItemProps = {
  selected?: boolean
}

export const HomeListItem: FC<HomeListItemProps> = ({ selected = false }) => {
  const theme = useTheme()

  const item = (
    <ListItem button selected={selected}>
      <ListItemIcon>
        <HomeIcon sx={{ color: theme.palette.primary.main }} />
      </ListItemIcon>
      <ListItemText primary="ホーム" />
    </ListItem>
  )

  if (selected) {
    return item
  }

  return (
    <Link href="/" prefetch={false}>
      {item}
    </Link>
  )
}
