#!/usr/bin/env python3
"""Fan shared partials (site/partials/*.html) out to every page's matching
marker block (<!-- <name>:start --> ... <!-- <name>:end -->).

The site is deployed as plain static HTML with no server-side includes, so
partials are not injected at request time — this script copies each
partial's content into every target page's marked block. Edit a partial,
run this script, then commit the regenerated pages.
"""

import re
import sys
from pathlib import Path

SITE_DIR = Path(__file__).resolve().parent.parent / "site"
PARTIALS_DIR = SITE_DIR / "partials"

# partial name -> pages that should contain its <!-- name:start/end --> block
PARTIALS = {
    "nav": ["index.html", "presentations.html", "publications.html", "imprint.html"],
    "footer": ["index.html", "presentations.html", "publications.html", "imprint.html"],
}


def marker_re(name: str) -> re.Pattern:
    return re.compile(
        rf"([ \t]*)<!-- {name}:start.*?-->\n.*?<!-- {name}:end -->",
        re.DOTALL,
    )


def render_block(name: str, indent: str, partial_lines: list[str]) -> str:
    start = (
        f"{indent}<!-- {name}:start (generated from site/partials/{name}.html "
        f"by scripts/sync_partials.py — do not edit by hand) -->\n"
    )
    body = "".join(f"{indent}{line}\n" if line.strip() else "\n" for line in partial_lines)
    end = f"{indent}<!-- {name}:end -->"
    return start + body + end


def main() -> int:
    changed = set()

    for name, pages in PARTIALS.items():
        partial_path = PARTIALS_DIR / f"{name}.html"
        if not partial_path.exists():
            print(f"missing partial: {partial_path}", file=sys.stderr)
            return 1
        partial_lines = partial_path.read_text().splitlines()
        pattern = marker_re(name)

        for page in pages:
            path = SITE_DIR / page
            text = path.read_text()
            match = pattern.search(text)
            if not match:
                print(f"no {name}:start/{name}:end markers found in {path}", file=sys.stderr)
                return 1
            indent = match.group(1)
            new_text = (
                text[: match.start()] + render_block(name, indent, partial_lines) + text[match.end() :]
            )
            if new_text != text:
                path.write_text(new_text)
                changed.add(page)

    if changed:
        print("updated:", ", ".join(sorted(changed)))
    else:
        print("all pages already up to date")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
