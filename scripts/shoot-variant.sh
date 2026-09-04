#!/bin/zsh
# Build-free capture of one variant: serve the production build, wait for
# it, shoot the three widths under the shared web lock, stop the server.
# Self contained, because dev servers do not survive between tool calls.
#   scripts/shoot-variant.sh <nn-name> [port]
# Port defaults to 3110; pass your own when several agents run at once.
# Run `npm run build` first: this serves what is already built.
set -uo pipefail
name="${1:?usage: shoot-variant.sh <nn-name> [port]}"
port="${2:-3110}"
root="${0:A:h:h}"
out="$HOME/Desktop/Smells Phishy Review/landing"
log="/tmp/shoot-variant-$port.log"

cd "$root" || exit 1
npx next start -p "$port" >"$log" 2>&1 &
srv=$!
trap 'kill $srv 2>/dev/null' EXIT INT TERM

for _ in {1..60}; do
  curl -sf -o /dev/null "http://localhost:$port" && break
  sleep 1
done
curl -sf -o /dev/null "http://localhost:$port" || {
  echo "server never came up on $port"; tail -20 "$log"; exit 1
}

LOCK=web "/Users/Nagel/Code/Active/smellsfishy/Smells Phishy/scripts/with-build-lock.sh" \
  node "$root/scripts/shoot.mjs" "http://localhost:$port" "$out" "$name"
rc=$?
kill $srv 2>/dev/null
exit $rc
