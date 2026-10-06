# Stealth Agent public build service

This repository contains build automation only. Application source is supplied
as an AES-256-GCM encrypted archive; the decryption key is a GitHub Actions secret.
Built desktop packages are public downloads. No application credentials are
included in the build archive or artifacts.
