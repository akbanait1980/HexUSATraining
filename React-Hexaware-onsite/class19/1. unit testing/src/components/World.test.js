import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import World from './World'

describe('World Component', () => {
    it('render "some paragraph" if the button is not clicked', () =>{
        render(<World />)

        const outputElement = screen.getByText('some paragraph', { exact: false })
        expect(outputElement).toBeInTheDocument();

    })

    it('render "changed" if the button is clicked', () =>{
        render(<World />)

        const buttonElement  =screen.getByRole('button')
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Changed', { exact: false })
        expect(outputElement).toBeInTheDocument()
    })

})

