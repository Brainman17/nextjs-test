import type { NextApiRequest, NextApiResponse } from 'next'

type Data = BookType[]

const booksDB = [
    {id:1, title: 'Geo'},
    {id:2, title: 'Goga'},
    {id:3, title: 'Gero'},
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        let books = booksDB;

        const term = req.query.term as string;

        if(term) {
            books = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
        }

        res.status(200).json(books)
    } 
}

// types 
type BookType = {
    id: number;
    title: string
}
