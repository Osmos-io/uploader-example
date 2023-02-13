## Setup of embed uploader integration within the React app 

1. Copy the uploader embed code and add the script to the index.html file inside the public folder. See https://github.com/Osmos-io/uploader-example/blob/main/public/index.html
2. Copy the uploader button and insert it into the component you want to embed. See https://github.com/Osmos-io/uploader-example/blob/main/src/App.tsx
3. Copy the token from the snippet and paste it into the .env file's REACT_APP_UPLOADER_TOKEN environment variable. In your codebase you probably want to have `.env` in your `.gitignore` but we've committed it here as an example. See https://github.com/Osmos-io/uploader-example/blob/main/.env 
4. Inside the component, use process.env.REACT_APP_UPLOADER_TOKEN to access the token, and inside the index.html, use "%REACT_APP_UPLOADER_TOKEN%."
5. For more information please visit https://docs.osmos.io/osmos-uploader/uploader-setup/webpage-integration
