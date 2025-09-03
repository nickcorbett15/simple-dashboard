FROM node:20-alpine

ENV CI=true
# Helps file change detection through bind mounts
ENV CHOKIDAR_USEPOLLING=true
# Vite dev server needs to listen on all interfaces in container
ENV HOST=0.0.0.0
ENV PORT=5173

WORKDIR /app

# Install deps first for caching
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm i; fi

# We'll mount the source at runtime for live edits
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173", "--strictPort"]
