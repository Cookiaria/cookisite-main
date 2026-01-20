FROM debian:trixie-slim

RUN apt-get update && apt-get install -y ruby-full build-essential zlib1g-dev git curl \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler jekyll

COPY . /cookisite-src

WORKDIR /cookisite-src

CMD ["jekyll", "build", "--source", "/cookisite-src", "--destination", "/srv/site"]
