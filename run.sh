#!/bin/bash

npx webpack \
  -c webpack.config-compressionOptions-level-0.js \
  -c webpack.config-compressionOptions-level-11.js \
  -c webpack.config-compressionOptions-params-BROTLI_PARAM_QUALITY-0.js \
  -c webpack.config-compressionOptions-params-BROTLI_PARAM_QUALITY-11.js
