#!/bin/zsh
# Serve the production build on 3102, wait for it, shoot the three widths under
# the shared web lock, then stop the server. Self contained so the server can
# never die between tool calls.
#   scripts/shoot-variant.sh <nn-name>
set -uo pipefail
name="${1:?usage: shoot-variant.sh <nn-name>}"
root="${0:A:h:h}"
out="$HOME/Desktop/Smells Phishy Review/landing"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

cd "$root" || exit 1
npx next start -p 3102 >/tmp/wt-l2-server.log 2>&1 &
srv=$!
trap 'kill $srv 2>/dev/null' EXIT INT TERM

for i in {1..60}; do
  curl -sf -o /dev/null http://localhost:3102 && break
  sleep 1
done
curl -sf -o /dev/null http://localhost:3102 || { echo "server never came up"; tail -20 /tmp/wt-l2-server.log; exit 1; }

LOCK=web "/Users/Nagel/Code/Active/smellsfishy/Smells Phishy/scripts/with-build-lock.sh" \
  env PUPPETEER_EXECUTABLE_PATH="$chrome" node "$root/scripts/shoot.mjs" http://localhost:3102 "$out" "$name"
status=$?
kill $srv 2>/dev/null
exit $status
