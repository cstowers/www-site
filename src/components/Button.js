import styled, { css } from 'styled-components'

const Button = styled.button`
	padding: 0.7rem 5rem;
  border-radius: 1.5rem;
  background-color: ${props => props.theme.button.color.background};
  border: none;
  color: ${props => props.theme.button.color.text};
  font-family: Avenir;
  font-weight: 600;
  font-size: 18px;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 19px;
    padding: 1rem 3rem;
  }
  ${props => props.outline && css`
    color: ${props => props.theme.button.color.outline};
    border: 1px solid ${props => props.theme.button.color.outline};
    background-color: transparent;
    border-radius: 0;
  `}
`
export const OutlineRadioButton=styled.button`
    font-family: Avenir;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    padding: 1rem 2rem 0.75rem;
    margin-right: 1.5rem;
    font-size: 16px;
    letter-spacing: 0.1em;
    border: 1px solid rgba(44, 51, 59, 0.2);
    transition: all 0.5s;
    :focus {
      outline: none;
    }
  ${({active}) => active && css`
    border-color: #495CF2;
    color: #495CF2;
  `}
`

export default Button;
