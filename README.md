# fhir-client-cerner-additions

This project does not contain full fhir-client.js code.  The goal of this project is to flex the value of this flag, `fullSessionStorageSupport`, in [fhir-client.js](https://github.com/smart-on-fhir/client-js) file according to the context of application execution.

The default value of this flag is set to `true`, which means that HTML5 [sessionStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) will be used and session data will not be shared between tabs/windows when the application is rendered in modern supported browsers.

This flag will be overriden to `false` when the application that includes this library is rendered within PowerChart.  In the scenario where the embedded IE browser instances are instantiated on a single thread like PowerChart, the data stored within this `sessionStorage` will be shared between the embedded browser instances.  By setting this flag to false, the sessionStorage will be keyed by state UUID generated in `fhir-client.js`.  The state value is guaranteed to be unique per SMART app launch.  Additionally, the key and value of state will be appended to the URL query string to accomodate the reload/refresh workflow.

## Dependency

This project requires the latest version of [fhir-client.js](https://github.com/smart-on-fhir/client-js) to function.  This project does not bundle fhir-client.js file.

The `fhir-client.js` file must have been included in your project or loaded prior to including `fhir-client-cerner-additions` project.

## Setup

1. Install build tools via npm.

```    
npm install webpack
``` 

2. Install local build dependencies.

```
npm install
```
    
## Build

```
npm run build
```

## Example

See [example.html](/example.html) file for reference.

## License

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.