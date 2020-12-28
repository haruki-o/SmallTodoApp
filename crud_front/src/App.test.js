import React from 'react'
import ViewProduct from './Components/ViewProduct'
import {render ,screen} from '@testing-library/react'

describe('ProductContainer',()=>{
  test('renders App componet',()=>{
    render(<ViewProduct/>);
    screen.debug();
  });
})