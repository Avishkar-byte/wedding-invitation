import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path
import os

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

# Primary: Streamlit native static serving via iframe (/app/static/index.html)
# When enableStaticServing is true in .streamlit/config.toml, files in static/ are served directly
components.iframe("/app/static/index.html")
