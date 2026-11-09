import streamlit as st
import streamlit.components.v1 as components
import os
from pathlib import Path

# Streamlit Page Configuration
st.set_page_config(
    page_title="Wedding Invitation",
    page_icon="static/favicon.svg" if os.path.exists("static/favicon.svg") else "💍",
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
        max-width: 100vw !important;
        width: 100vw !important;
        height: 100vh !important;
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
index_path = ROOT_DIR / "static" / "index.html"

if index_path.exists():
    with open(index_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    # Ensure base tag points to /app/static/ so all relative scripts and stylesheets resolve
    if "<head>" in html_content:
        html_content = html_content.replace(
            "<head>",
            '<head>\n    <base href="/app/static/">\n    <style>html, body { height: 100%; margin: 0; padding: 0; }</style>'
        )

    components.html(html_content, height=1200, scrolling=True)
else:
    st.error("static/index.html not found.")
