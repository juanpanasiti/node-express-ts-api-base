import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    const { page_size = 20, page_offset = 0 } = req.query;

    res.json({
        msg: 'getUsers',
        page_size,
        page_offset,
    });
};

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id,
    });
};

export const postUser = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'postUser',
        body,
    });
};

export const putUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUser',
        body,
    });
};

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id,
    });
};
