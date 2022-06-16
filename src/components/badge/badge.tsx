import { Badge as BadgeBase, useMultiStyleConfig } from '@chakra-ui/react'

import { colors } from '../../theme/colors'

export type BadgeProps = {
  color: keyof typeof colors.pokemon
  text: React.ReactNode
}

export const Badge = ({ color, text }: BadgeProps) => {
  const styles = useMultiStyleConfig('Badge', {})

  return (
    <BadgeBase sx={styles.badge} backgroundColor={`pokemon.${color}`}>
      {text}
    </BadgeBase>
  )
}
