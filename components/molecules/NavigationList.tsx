import { HomeListItem } from '@/components/atoms/listItem/Home'
import { List } from '@mui/material'
import { FC } from 'react'

type NavigationListProps = {
  currentRouteName?: string
}

export const NavigationList: FC<NavigationListProps> = ({
  currentRouteName,
}) => (
  <List>
    <HomeListItem selected={currentRouteName === 'home'} />
  </List>
)
