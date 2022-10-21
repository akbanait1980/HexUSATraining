import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Posts from './Posts';


describe('post component', () => {
    it('render posts if request success',  async () => {
        render(<Posts />)

        // const listsItemElement = screen.getByRole('listitem');
        const listsItemElement = await screen.findAllByRole('listitem');
        expect(listsItemElement).not.toHaveLength(0)
    })

    it('remder posts if request success with mock object', async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async() => [ { id:1 , title: 'title 1'} ]
        })

        render(<Posts />)

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0)
    })
})