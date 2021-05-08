import { rest } from 'msw';

export const AUTH_HANDLERS = [
  rest.post('/login', (req, res, context) => {
    sessionStorage.setItem('is-authenticated', 'true');
    return res(context.status(200));
  }),

  rest.get('/user', (req, res, context) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      return res(
        context.status(401),
        context.json({ errorMessage: 'Not Authenticated' })
      );
    }
    return res(context.status(200), context.json({ message: 'Hello there!' }));
  }),
];
