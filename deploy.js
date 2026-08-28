require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    // 2. Reference the hidden keys you just added to your file
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS, 
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + "/public",
    remoteRoot: "/public_html/", // Update this to your friend's directory path!
    include: ["*", "**/*"],      
    deleteRemote: true, // Automatically clears the old live files first
    forcePasv: true,
    sftp: false 
};

console.log("🚀 Initializing secure connection to server...");

ftpDeploy.on("uploading", function (data) {
    console.log(`Uploading [${data.transferredFileCount}/${data.totalFilesCount}]: ${data.filename}`);
});

ftpDeploy
    .deploy(config)
    .then(res => console.log("🎉 Deployment finished successfully!"))
    .catch(err => console.log("❌ Deployment error: ", err));