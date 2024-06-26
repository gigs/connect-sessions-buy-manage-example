# Connect Sessions Buy & Manage example

This application showcase how Connect Sessions can be used to buy and manage phone plans through Connect from your existing application. This is a developer reference.

To get the most out of this, please read the [associated guide](https://developers.gigs.com/docs/api/805ba2c145553-example-purchasing-and-managing-subscriptions-using-connect-sessions).

If you just want to read the code, please start at [app/(purchase)](https://github.com/gigs/connect-sessions-buy-manage-example/tree/main/app/(purchase)/checkout) to learn about buying plans and [app/(manage)](https://github.com/gigs/connect-sessions-buy-manage-example/tree/main/app/(manage)/backoffice) to learn about managing existing plans.

If you want to run the application locally, please refer to [the setup section](#setup).

**Further resources:**

- [Connect Sessions Developer Guides](https://developers.gigs.com/docs/api/0472dd6bfc47d-about-connect-sessions)
- [Gigs API Documentation](https://developers.gigs.com/docs/api/aa3106d502cbc-create-a-connect-session)

## Setup

In order to run this example locally, you need:

- an existing Project with Connect enabled and at least one plan and one add-on configured
- a valid API key

To set up the example:

**Clone the repository**

```shell
git clone https://github.com/gigs/connect-sessions-buy-manage-example.git
```

**Install dependencies**

```shell
cd connect-sessions-buy-manage-example
npm install
```

**Create an `.env.local` file**

```shell
cp .env.example .env.local
```

Set the required environment variables:

- `GIGS_PROJECT`: The name of your project (the yourproject part from your yourproject.gigs.com Connect url)
- `GIGS_API_KEY`: Your API key

**Start the app**

```shell
npm run dev
```

The application should now be running at http://localhost:3000
