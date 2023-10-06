import { useState } from 'react'

import { useDebounce } from 'use-debounce'
import { Box } from '@mui/material'
import isEmpty from 'lodash/isEmpty'

import CustomTextField from 'components/mui/text-field'
import Autocomplete from '@mui/material/Autocomplete'

import { useGetInfiniteAdminServes } from 'src/hooks/api/useAdminServes'
import { loadMoreValidator } from 'src/@core/utils/helper'

const DropdownServes = ({
  error,
  helperText,
  defaultValue = {},
  value = { id: '', name: '' },
  onChange,
  label = '',
  disabled
}) => {
  const [inputValue, setInputValue] = useState('')
  const [inputValueDebounce] = useDebounce(inputValue, 300)

  const params = {
    page: 1,
    size: 5,
    name: inputValueDebounce
  }

  if (isEmpty(params.name)) delete params.name

  const {
    data: options,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetInfiniteAdminServes(params, {
    select: data => {
      return data?.pages?.flatMap(x => {
        return x?.data?.content
      })
    }
  })

  const onScrollHandler = e => {
    const target = e.currentTarget

    loadMoreValidator(target, 30, async () => {
      if (!hasNextPage) return
      if (isFetchingNextPage) return

      fetchNextPage()
    })
  }

  const onInputChange = (event, value, reason) => {
    if (event && event.type === 'blur') {
      setInputValue('')
    } else if (reason !== 'reset') {
      setInputValue(value)
    }
  }

  return (
    <Autocomplete
      options={options || []}
      getOptionLabel={option => option?.name || ''}
      id='autocomplete-custom'
      onInputChange={onInputChange}
      onChange={(e, newVal) => onChange(newVal)}
      disabled={disabled}
      renderInput={props => <CustomTextField {...props} label={label} error={error} helperText={helperText} />}
      renderOption={(props, option) => (
        <Box {...props} component='li' key={option?.id}>
          {option?.name}
        </Box>
      )}
      ListboxProps={{
        onScroll: onScrollHandler,
        style: {
          maxHeight: 150
        }
      }}
      defaultValue={defaultValue}
      value={value}
    />
  )
}

export default DropdownServes
