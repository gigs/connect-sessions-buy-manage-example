# Connect Sessions Buy & Manage example

This application showcase how Connect Sessions can be used to buy and manag phone plans through Connect from your existing application. This is a developer reference.

To get the most out of this, please read the [associated guide]() or watch the [video walk through]().

If you just want to read the code, please start at [app/(purchase)]() to learn about buying plans and [app/(manage)]() to learn about managing existing plans.

If you want to run the application locally, please refer to [the setup section](#setup).

**Further resources:**

- [Connect Sessions Developer Guides](https://developers.gigs.com/docs/api/0472dd6bfc47d-about-connect-sessions)
- [Gigs API Documentation](https://developers.gigs.com/docs/api/aa3106d502cbc-create-a-connect-session)

## Setup

In order to run this example locally, you need:

- an existing Project with Connect enabled and at least one plan and one add-on configured
- a valid API key

To setup the example:

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
- `GIGS_MANAGABLE_USER_EMAIL`: The desired email of your user (it does not have to exist in your project yet, but you **should have access to the emails**)

**Start the app**

```shell
npm run dev
```

The application should now be running at http://localhost:3000
