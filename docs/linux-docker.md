---
title: Setup AirplaneON
---

# Installing AirplaneON

This guide will help you set up the AirplaneON bot on your server or VPS.
Windows installation will NOT be covered.
If you choose to self host, we will NOT offer support.
This setup is NOT recommended if you are new to linux or docker.

--------------------------------------------------

# Requirements

- Server or VPS with internet access
- Python 3.11+
- Git
- Discord Bot Token
- Optional: Docker

NOTE:
Self-hosted version is for personal use only.
It CANNOT be redistributed or resold.
For the original FULL version for free, join:
https://discord.gg/GCKwVcwdvm

--------------------------------------------------

# Linux VPS Installation

Install system updates

sudo apt update && sudo apt upgrade -y

Install Python and pip

sudo apt install python3 python3-venv python3-pip -y
python3 --version
pip3 --version

Clone the repository

git clone https://github.com/scemercat1/airplaneON.git
cd airplaneON

Create virtual environment

python3 -m venv venv
source venv/bin/activate

Install dependencies

pip install -r requirements.txt

Set environment variable

export DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN"

IMPORTANT:
Never share your bot token publicly.

Run the bot

python bot.py

--------------------------------------------------

# Docker Installation (may be outdated)

Install Docker

sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
docker --version

Build and run container

git clone https://github.com/scemercat1/airplaneON.git
cd airplaneON
docker build -t airplaneON .
docker run -e DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN" airplaneON

--------------------------------------------------

Windows installation is NOT covered.
Linux/Docker only.
