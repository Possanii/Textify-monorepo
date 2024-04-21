FROM docker.io/minio/minio:latest

COPY --from=docker.io/minio/mc:latest /usr/bin/mc /usr/bin/mc
RUN mkdir /buckets
RUN minio server /buckets & \
    server_pid=$!; \
    until mc alias set local http://localhost:9000 minioadmin minioadmin; do \
        sleep 1; \
    done; \
    mc mb local/teste; \
    echo this is file1 | mc pipe local/teste/file1; \
    echo this is file2 | mc pipe local/teste/file2; \
    kill $server_pid

CMD ["minio", "server", "/buckets", "--address", ":9000", "--console-address", ":9001"]
