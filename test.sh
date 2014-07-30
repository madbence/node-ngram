#!/bin/bash

node -v | grep -i 'v0.11'

if [ $? -eq 0 ]; then
  npm run test-es6
fi

npm test
