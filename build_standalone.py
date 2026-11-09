import base64
from pathlib import Path

root = Path(__file__).parent
dist_assets = root / "dist" / "assets"
css_path = list(dist_assets.glob("index-*.css"))[0]
js_path = list(dist_assets.glob("index-*.js"))[0]

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

with open(js_path, "r", encoding="utf-8") as f:
    js = f.read()

def b64(filename, mime):
    p = root / filename
    if not p.exists():
        p = root / "dist" / filename
    with open(p, "rb") as f:
        return f"data:{mime};base64," + base64.b64encode(f.read()).decode("utf-8")

couple_uri = b64("couple.jpg", "image/jpeg")
ganesha_uri = b64("ganesha_maroon.png", "image/png")
venue_uri = b64("venue.jpg", "image/jpeg")
music_uri = b64("music/music.mp3", "audio/mp3")

# Replace asset references in JS with instant base64 URIs
js = js.replace("S(`couple.jpg`)", f'"{couple_uri}"')
js = js.replace("S(`ganesha_maroon.png`)", f'"{ganesha_uri}"')
js = js.replace("S(`venue.jpg`)", f'"{venue_uri}"')
js = js.replace("photo:`venue.jpg`", f'photo:"{venue_uri}"')
js = js.replace("`music/music.mp3`", f'"{music_uri}"')

# Also handle any relative ./ references
js = js.replace('"./couple.jpg"', f'"{couple_uri}"')
js = js.replace('"./ganesha_maroon.png"', f'"{ganesha_uri}"')
js = js.replace('"./venue.jpg"', f'"{venue_uri}"')

html = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wedding Invitation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Great+Vibes&display=swap" rel="stylesheet">
    <style>
      html, body {{
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100%;
        background-color: #fcf4f6;
      }}
      {css}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
{js}
    </script>
  </body>
</html>"""

out_file = root / "standalone.html"
with open(out_file, "w", encoding="utf-8") as f:
    f.write(html)

print("Generated standalone.html successfully! Size:", len(html))
