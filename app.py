import streamlit as st
import streamlit.components.v1 as components
import os
import base64
from pathlib import Path

# Streamlit Page Configuration
st.set_page_config(
    page_title="Wedding Invitation",
    page_icon="favicon.svg" if os.path.exists("favicon.svg") else "💍",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Streamlit Full-Bleed Layout
st.markdown("""
<style>
    #MainMenu, header, footer, .stDeployButton, [data-testid="stToolbar"] {
        visibility: hidden !important;
        display: none !important;
    }
    .block-container {
        padding: 0 !important;
        margin: 0 !important;
        max-width: 100% !important;
        width: 100% !important;
    }
    iframe {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        border: none !important;
        z-index: 999999 !important;
    }
</style>
""", unsafe_allow_html=True)

ROOT_DIR = Path(__file__).parent

@st.cache_data
def get_html_content():
    index_file = ROOT_DIR / "index.html"
    if not index_file.exists():
        return "<h3>Wedding invitation index.html not found.</h3>"
    
    with open(index_file, "r", encoding="utf-8") as f:
        html = f.read()

    # Inline CSS styles for self-contained execution
    assets_dir = ROOT_DIR / "assets"
    if assets_dir.exists():
        for css_file in assets_dir.glob("*.css"):
            with open(css_file, "r", encoding="utf-8") as cf:
                css_data = cf.read()
            html = html.replace(f'href="/assets/{css_file.name}"', '')
            html = html.replace(f'href="assets/{css_file.name}"', '')
            html = html.replace('</head>', f'<style>{css_data}</style></head>')

        # Inline JS bundle
        for js_file in assets_dir.glob("*.js"):
            with open(js_file, "r", encoding="utf-8") as jf:
                js_data = jf.read()
            html = html.replace(f'<script type="module" crossorigin src="/assets/{js_file.name}"></script>', '')
            html = html.replace(f'<script type="module" crossorigin src="assets/{js_file.name}"></script>', '')
            html = html.replace('</body>', f'<script type="module">{js_data}</script></body>')

    # Convert core images to base64 data URIs for instant zero-latency loading
    for img_name in ["couple.jpg", "venue.jpg", "ganesha_maroon.png", "favicon.svg"]:
        img_path = ROOT_DIR / img_name
        if img_path.exists():
            mime = "image/svg+xml" if img_name.endswith(".svg") else "image/png" if img_name.endswith(".png") else "image/jpeg"
            with open(img_path, "rb") as imf:
                b64 = base64.b64encode(imf.read()).decode("utf-8")
            data_uri = f"data:{mime};base64,{b64}"
            html = html.replace(f'/{img_name}', data_uri)
            html = html.replace(f'"{img_name}"', f'"{data_uri}"')

    # Background music
    music_path = ROOT_DIR / "music" / "music.mp3"
    if music_path.exists():
        with open(music_path, "rb") as mf:
            mb64 = base64.b64encode(mf.read()).decode("utf-8")
        html = html.replace('/music/music.mp3', f'data:audio/mp3;base64,{mb64}')
        html = html.replace('music/music.mp3', f'data:audio/mp3;base64,{mb64}')

    return html

html_content = get_html_content()
components.html(html_content, height=1200, scrolling=True)

