#### Running Admin Through Storybook

If you do not have an existing project, you can use [Storybook](https://storybook.js.org/) to visualize changes in the source code, and test them. 

This development stack consists of two Docker containers: 
- `pwa`: containing the `<Admin>` sources and Storybook;
- `php`: holding the API sources.

Additionally, this method allows testing the integration between API Platform and the `admin` component by writing stories, scenarios and tests.

Install everything:

```shell
docker compose up
```

Before accessing the Storybook instance, make sure to go to https://localhost to accept the self-signed certificate. Once it's done, you'll see the API documentation running on a customized version of Swagger UI.

Now you can go to http://localhost:3000/ to see the Storybook instance in action. The changes you'll make in the source code will be hot-reloaded.

> Tips: you can run Storybook directly in your local machine by running `yarn storybook`. It will take another port, usually 3001. Make sure to have the API running before.

To run a command directly inside a container, run:
```shell
# Run a command in the php container 
docker compose exec -T php your-command

# Run a command in the pwa container
docker compose exec -T pwa your-command
```