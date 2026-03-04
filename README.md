## Running with Docker

You can easily run the application in an isolated Docker container:

```bash
# Make the run script executable
chmod +x run.sh

# Run the script
./run.sh
```

This script will:

1. Build the Docker image (`dummy-store`)
2. Stop and remove any existing container using that name
3. Start a new container mapping port 3000

The app will be available at [http://localhost:3000](http://localhost:3000).

_Note: Make sure your `npm run dev` server is stopped to avoid port conflicts!_
