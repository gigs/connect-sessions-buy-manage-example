export const auth = {
  getUser: () => ({
    email: process.env.GIGS_MANAGABLE_USER_EMAIL!,
    birthday: '1991-07-22',
    fullName: 'John Doe',
  }),
}
