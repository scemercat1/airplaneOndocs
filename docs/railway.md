---
title: Railway Setup
---

This guide explains how to host **AirplaneON** on **Railway** step by step.

No VPS. No local PC. 100% cloud.

---

## 🚆 What is Railway?

Railway is a cloud platform that lets you run apps directly from GitHub.

Perfect for Discord bots that need 24/7 uptime.

---

## 📦 What You Need

Before starting, make sure you have:

- A **GitHub account**
- A **Railway account**
- A **Discord Bot Token**
- A repository containing `bot.py`

---

## 🗂 Project Structure

Your repository must look like this:

/
├─ bot.py
├─ requirements.txt
└─ config.json (optional)


Example `requirements.txt`:


discord.py

---

## 🔗 Step 1: Upload to GitHub

1. Create a new GitHub repository
2. Upload:
   - `bot.py`
   - `requirements.txt`
3. Commit and push

---

## 🚀 Step 2: Create Railway Project

1. Go to https://railway.app
2. Click **New Project**
3. Select **Deploy from GitHub repo**
4. Choose your AirplaneON repository

Railway will automatically detect Python.

---

## 🔐 Step 3: Set Environment Variables

In Railway:
1. Open your project
2. Go to **Variables**
3. Add:
DISCORD_TOKEN = your_bot_token_here

## Variables:

⚠️ Never put your token in THE CODE. (only on variables to ensure no one sees anything)

---

## ▶️ Step 4: Start Command

Railway automatically runs:
python bot.py

No custom start command needed.

---

## ✅ Step 5: Check Logs

After deploy:
- Open **Deployments**
- Check logs
- You should see:
Logged in as AirplaneON


If you see errors, read them carefully.

---

## ❌ Common Errors

### `DISCORD_TOKEN is missing`
- You forgot to add the variable in Railway

### `PrivilegedIntentsRequired`
- Enable **Members Intent** in Discord Developer Portal

### Bot goes offline
- Check Railway usage limits
- Check logs for crashes

---

## 🧠 Tips

- Keep intents minimal
- Do not spam commands
- Restart deployment after code changes

---

## 🆘 Need Help?

If you're stuck or want the official hosted version:
👉 https://discord.gg/GCKwVcwdvm

