# js-sdk

## Build steps

> WIP

```bash
yarn changeset # guides you to select the modified packages, updating the version and adding a changelog comment

# additional information can be added in the .md file created in .changeset directory

yarn changeset version # apply the changes in CHANGELOG.md and package.json

# commit changes at this point
```

Changes that have to be executed by the pipeline to publish the packages:

```bash
yarn build:all

yarn publish:all

yarn changeset tag
```
