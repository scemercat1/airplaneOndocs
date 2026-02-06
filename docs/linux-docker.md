---
title: Setup AirplaneON
---

# 🖥️ Installing AirplaneON

This guide will help you set up your **AirplaneON** bot on your server or VPS. Windows installation will not be covered in this guide. As well, this guide can also contain mistakes: If you chose to host it on your own VPS/Server, we will not be able to help you in the future. This type of installation is **NOT** recommended if you are new to docker/linux.

---

# 1️⃣ Requirements

- A server or VPS with internet access
- Python 3.11+
- Git
- Discord Bot Token
- (Optional) Docker for containerized setup

> **Note:** Self-hosted version is for personal use only and **cannot be redistributed**.  
> For the full original version for free, join our Discord: [Click here](https://discord.gg/GCKwVcwdvm)

---

# 2️⃣ Linux VPS Installation

## Update your server
sudo apt update && sudo apt upgrade -y


## Install Python and pip

sudo apt install python3 python3-venv python3-pip -y
python3 --version
pip3 --version


## Clone the repository

git clone https://github.com/scemercat1/airplaneON.git
cd airplaneON


## Setup a virtual environment

python3 -m venv venv
source venv/bin/activate


## Install dependencies

pip install -r requirements.txt


## Configure environment variables

export DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN"

TIP: Don't share your bot token on public.


## Run the bot

python bot.py




# 3️⃣ Docker Installation (may be outdated)
If you prefer a containerized setup:

##Install Docker
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
docker --version


##Build and run the Docker container
git clone https://github.com/scemercat1/airplaneON.git
cd airplaneON
docker build -t airplaneON .
docker run -e DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN" airplaneON



### As we said the windows installation will NOT be covered in this doc, as it's hard and things change frequently.
