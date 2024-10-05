FROM mcr.microsoft.com/devcontainers/python:3.12-bookworm

RUN pip install pip --upgrade

RUN pip install pretext --only-binary {greenlet}

RUN pip install codechat-server

RUN playwright install-deps


RUN wget https://github.com/jgm/pandoc/releases/download/3.1.4/pandoc-3.1.4-1-amd64.deb && \
  dpkg -i pandoc-3.1.4-1-amd64.deb

RUN apt update && apt install -y --no-install-recommends \
  texlive \
  texlive-science \
  texlive-xetex \
  texlive-fonts-extra \
  ghostscript \
  pdf2svg \
  fig2dev