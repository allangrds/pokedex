import * as React from 'react'
import { Box, useMultiStyleConfig } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Pokemon = () => {
  const { t } = useTranslation()
  const styles = useMultiStyleConfig('Pokemon', {})

  return (
    <Box sx={styles.wrapper}>
      <p>{t('hello-world')}</p>
    </Box>
  )
}

export { Pokemon }
