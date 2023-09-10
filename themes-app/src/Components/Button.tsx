// src/components/Button.tsx

import styled from 'styled-components';
import { theme } from '../theme';

const Button = styled.button`
  background-color: ${theme.colors.primaryButtons};
  color: ${theme.colors.primaryText};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondaryButtons};
  }
`;

export default Button;
