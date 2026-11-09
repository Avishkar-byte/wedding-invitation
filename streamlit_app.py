import streamlit as st
import streamlit.components.v1 as components
import os
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
standalone_path = ROOT_DIR / "standalone.html"

if standalone_path.exists():
    with open(standalone_path, "r", encoding="utf-8") as f:
        html_content = f.read()
    components.html(html_content, height=1200, scrolling=True)
else:
    st.error("standalone.html not found.")
