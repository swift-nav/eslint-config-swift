# eslint-config-swift
eslint config used by Swift for frontend apps; based on airbnb's eslint config, but stricter.

## Usage

```shell
npm install --save-dev eslint-config-swift
```

Then you need to install plugins required for our config and `airbnb`'s:

```shell
(
  export PKG=eslint-config-swift;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
)
```

In your own `.eslintrc`, you can include the "universal" config for React/Redux apps or "electron" for Electron apps:

```
{
  "extends": "swift/universal"
}
```

or 

```
{
  "extends": "swift/electron"
}
```
