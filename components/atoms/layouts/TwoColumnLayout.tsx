import { Grid } from '@mui/material'
import { FC } from 'react'

type TwoColumnLayoutProps = {
  children: JSX.Element
  rightColumnContents: JSX.Element
}

export const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({
  children,
  rightColumnContents,
}) => (
  <Grid container direction="row" spacing={2}>
    <Grid item xs>
      {children}
    </Grid>
    <Grid item xs>
      {rightColumnContents}
    </Grid>
  </Grid>
)
