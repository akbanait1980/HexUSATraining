/***
 * A - Arrange - setup the resource
 * 
 * A - Act - calling function
 * 
 * A - Assert - comparing the expected with action output
 * 
 */
import '@testing-library/jest-dom'
import Hello from './Hello'
import { render, screen } from '@testing-library/react';

describe('hello component', () => {
    it('hello world should be rendered', () => {
        render(<Hello />)

        const helloElement =  screen.getByText('hello world', {exact: false})
        expect(helloElement).toBeInTheDocument()
    })
})