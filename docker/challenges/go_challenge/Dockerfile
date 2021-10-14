FROM golang:alpine AS builder

WORKDIR /go/src/go_challenge

ADD . .

RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" challenge.go

FROM scratch

COPY --from=builder /go/src/go_challenge /go/src/go_challenge

ENTRYPOINT ["/go/src/go_challenge/challenge"]
