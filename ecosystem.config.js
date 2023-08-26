module.exports = {
  apps : [{
    name: "one-pay-api",
    script: "./bin/www",
		// watch: "../one-pay-api/",
		watch: ["server", "client"],
		watch_options: {
		    followSymlinks: false,
		    usePolling: true
		},
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}