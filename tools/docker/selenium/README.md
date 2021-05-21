# Summary

This is the tool for End-to-End test.

# How to use it

## System requirement

- [Docker for Mac](https://docs.docker.com/docker-for-mac/)
- [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)

## Run the containers

```sh
$ docker-compose up
```

or, run as background job:

```sh
$ docker-compose up -d
```

## Stop the test tool

```sh
$ docker-compose down
```

## Access the VNC

You can view the Chrome node display.

```sh
$ open vnc://localhost:15900
```

Notes: The default password of vnc is `secret`