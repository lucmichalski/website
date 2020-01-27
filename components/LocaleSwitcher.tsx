import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { locales, languageNames, logo } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'

const StyledSelect = styled.select`
  font-size: 14px;
  color: ${props => props.theme.bg.greyDark};
  padding: 0 .4em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  border-color: transparent;
`


const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const { locale } = React.useContext(LocaleContext)

  const handleLocaleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
    },
    [router]
  )

  return (
    <StyledSelect defaultValue={locale} onChange={handleLocaleChange}>
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {logo[locale]} {languageNames[locale]}
        </option>
      ))}
    </StyledSelect>
  )
}

export default LocaleSwitcher