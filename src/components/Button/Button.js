import React from 'react';
import styled from 'styled-components';
import styles from './styles.scss'
import * as baseStyle from './ButtonTypes';

//
// const PrimaryButton = styled(baseStyle.PrimaryButton)``;
//
// const SecondaryButton = styled(baseStyle.SecondaryButton)``;


const Button = ({kind}) => {
  return (
    <button className={`button-${kind}`}>
      Button {kind}
    </button>
  )
};

export default Button;
