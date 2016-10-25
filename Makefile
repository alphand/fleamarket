GO_BUILD_ENV := GOOS=linux GOARCH=amd64
APP_CMD := appcmd

webserver:
	$(GO_BUILD_ENV) go build -v -o $(APP_CMD) ./server.go
