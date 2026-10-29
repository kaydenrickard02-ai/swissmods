# SwissMods: deploy to Railway

1. Create a private GitHub repository `swissmods` without initializing it.
2. Upload the CONTENTS of this folder to the repository's main branch, preserving the folder structure.
3. In Railway, attach the GitHub repository to your SwissMods project, and deploy.
4. Once the deployment succeeds, add your custom domain `swissmods.co.uk` to the service.
5. Create the DNS records Railway provides at your domain registrar. Configure www separately if desired.

Build uses Bun and Nitro's node_server preset. Check Railway build logs if the original project needs other adjustments.
