# Contributing

## Conventional Commits

Each commit should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pattern, so that we can use tools that automatically generate a `CHANGELOG` for us.

## Publishing a Version

This project uses `standard-version` to leverage the Git history to find updates since the last version, determine the next version, and generate the `CHANGELOG` for us.

To create a new release, run the following:

```
yarn release --dry-run
```

And make sure that the version number and `CHANGELOG` look correct. Assuming they do, you can run

```
yarn releasae
git push --follow-tags origin master && npm publish
```

To push your changes to GitHub and `npm`.

Once complete, copy the recent `CHANGELOG` entry into the notes of the new release on GitHub.
