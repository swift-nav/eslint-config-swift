# eslint-config-swift
eslint config used by Swift for frontend apps; based on airbnb's eslint config, but stricter.

## Usage

```shell
npm install --save-dev eslint-config-swift
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
