#!/bin/bash

# Add your MinIO server (replace 'localhost' with your MinIO server IP if needed)
mc alias set myminio http://localhost:9000 admin admin123

# Create a new bucket
mc mb myminio/textify

# Add a new user
mc admin user add myminio 6owKBkhSOkvpXWTksmNQ zBs0Dxp2nb3jfmMUTdNiN9ygQ3JtRyGG4KCbcRbL

# Grant the user read/write access to the bucket
mc admin policy set myminio readwrite user=6owKBkhSOkvpXWTksmNQ
