#!/bin/sh
set -u

REPO_URL=${REPO_URL:-https://github.com/Cookiaria/cookisite-main.git}
UPDATE_INTERVAL=${UPDATE_INTERVAL:-1800}
source_dir=/cookisite-src

case "$UPDATE_INTERVAL" in
    ''|*[!0-9]*|0)
        echo "UPDATE_INTERVAL must be a positive number of seconds ‼️" >&2
        exit 1
        ;;
esac

trap 'exit 0' INT TERM

update_source() {
    if [ ! -d "$source_dir/.git" ]; then
        git clone --depth 1 "$REPO_URL" "$source_dir"
    else
        git -C "$source_dir" fetch --depth 1 origin HEAD &&
            git -C "$source_dir" reset --hard FETCH_HEAD
    fi
}

while :; do
    echo "Fetching website source..."
    if update_source; then
        # The file_mtime plugin resolves paths relative to the working directory
        if (cd "$source_dir" && jekyll build --source "$source_dir" --destination /srv/site); then
            echo "Website built successfully!"
        else
            echo "Jekyll build failed; will retry after $UPDATE_INTERVAL seconds" >&2
        fi
    else
        echo "Source update failed; will retry after $UPDATE_INTERVAL seconds" >&2
    fi

    sleep "$UPDATE_INTERVAL" &
    wait "$!"
done
