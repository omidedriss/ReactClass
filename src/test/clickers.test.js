import React from 'react';
import Clickers from './clickers';
import {render,cleanup, fireEvent, act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
afterEach(cleanup);
jest.useFakeTimers();
describe('<Clikers />',()=>{
    it('renders corrctly',()=>{
        const {getByTestId} = render(<Clickers  />);
        expect(getByTestId('count')).toHaveTextContent('0')
    })
    it('increament',()=>{
        const {getByTestId, getByText} = render(<Clickers  />);
        fireEvent.click(getByText('Up'));
        expect(getByTestId('count')).toHaveTextContent('1')
    })
    it('decreament',async ()=>{
        const {getByTestId, getByText} = render(<Clickers  />);
        fireEvent.click(getByText('Down'));
        act(()=>jest.advanceTimersByTime(510));
        expect(getByTestId('count').textContent).toBe('-1')
        

    })
})
