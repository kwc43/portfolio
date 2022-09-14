#!/bin/sh
set -e 

echo "Starting SSH ..."
rc-update add sshd

PORT=8000 npm start