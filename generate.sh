#!/bin/bash

set -eu

openapi-generator generate -i spec.json -g typescript-axios -o . --skip-validate-spec
