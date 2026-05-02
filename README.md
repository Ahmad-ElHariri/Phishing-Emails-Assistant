# Phishing Emails Assistant

Phishing Emails Assistant is a browser-based phishing detection project for Gmail.
It connects a Chrome extension with a Flask backend that uses a trained machine
learning model to analyze email content and predict whether the message looks
safe, suspicious, or phishing.

The extension extracts information from the currently opened Gmail message, such
as the subject, sender, body text, links, domains, and attachments. It then sends
that data to the backend API. The backend prepares the extracted text, runs it
through a TF-IDF vectorizer and phishing classification model, then returns a
prediction and a short explanation to the extension.

## Project Structure

```text
Phishing-Emails-Assistant/
|-- backend/
|   |-- app.py
|   |-- phishing_model.pkl
|   |-- tfidf_vectorizer.pkl
|   |-- requirements.txt
|   `-- README.md
|-- extension/
|   `-- phishguard-extension/
|       |-- manifest.json
|       |-- popup.html
|       |-- popup.js
|       |-- content.js
|       `-- style.css
`-- frontend/
```

## How It Works

1. The user opens a Gmail message.
2. The Chrome extension extracts the email information from the page.
3. The extension sends a `POST` request to the Flask backend at:

```text
http://127.0.0.1:5000/predict
```

4. The backend uses the trained model to analyze the email.
5. The backend returns the prediction result to the extension.
6. The extension displays the label, confidence score, and reasons.

## Run The Project

### 1. Start The Backend

Open a terminal from the project root and move into the backend folder:

```powershell
cd backend
```

Install the required Python packages:

```powershell
python -m pip install -r requirements.txt
```

Run the Flask backend:

```powershell
python app.py
```

The backend should start on:

```text
http://127.0.0.1:5000
```

To confirm it is running, open this URL in your browser:

```text
http://127.0.0.1:5000/health
```

You should see a JSON response showing that the backend, model, and vectorizer
are loaded.

### 2. Load The Chrome Extension

1. Open Chrome.
2. Go to:

```text
chrome://extensions
```

3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select this folder:

```text
extension/phishguard-extension
```

Make sure you select the folder that contains `manifest.json`.

### 3. Use The Extension In Gmail

1. Open Gmail:

```text
https://mail.google.com
```

2. Open a specific email message.
3. Click the PhishGuardAI extension icon.
4. Click **Extract Current Email**.

The extension should extract the email data, send it to the backend, and display
the model result.

## Expected Result

After analysis, the extension displays:

- prediction label: `Safe`, `Suspicious`, or `Phishing`
- confidence percentage
- subject
- sender information
- number of links
- attachment status
- explanation reasons

## Troubleshooting

If the extension says the backend request failed, make sure `backend/app.py` is
still running.

If the extension cannot connect to Gmail, refresh the Gmail page after loading
the extension.

If no prediction appears, check the backend terminal. A successful extension
request should show something like:

```text
POST /predict HTTP/1.1" 200 -
```

