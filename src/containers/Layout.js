import React from 'react';

import Button from '../components/Button/Button'

const Layout = ({type}) => {



  return(
    <>
      <Button kind={'game-real'} />
      <Button kind={'game-fun'} />
      <hr/>
      <Button kind={'form-single-submit'} />
      </>
  )
};

export default Layout;
