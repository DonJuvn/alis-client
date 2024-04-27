//write a class that will connect to google drive api and control folders and documents in google drive
//use googleapis library to connect to google drive api
const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');
const { googleAuth } = require('./googleAuth');

class GoogleController {
  constructor() {
    this.drive = google.drive({
      version: 'v3',
      auth: googleAuth,
    });
  }

  //create a folder in google drive
  async createFolder(folderName) {
    const fileMetadata = {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
    };
    const folder = await this.drive.files.create({
      resource: fileMetadata,
      fields: 'id',
    });
    return folder.data.id;
  }

  //upload a file to google drive
  async uploadFile(filePath, folderId) {
    const fileMetadata = {
      name: filePath.split('/').pop(),
      parents: [folderId],
    };
    const media = {
      mimeType: 'image/jpeg',
      body: fs.createReadStream(filePath),
    };
    const file = await this.drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id',
    });
    return file.data.id;
  }

  //list all files in a folder in google drive
  async listFiles(folderId) {
    const res = await this.drive.files.list({
      q: `'${folderId}' in parents`,
      fields: 'files(id, name)',
    });
    return res.data.files;
  }

  //download a file from google drive
  async downloadFile(fileId, filePath) {
    const dest = fs.createWriteStream(filePath);
    await this.drive.files.get(
      { fileId: fileId, alt: 'media' },
      { responseType: 'stream' },
      (err, res) => {
        res.data
          .on('end', () => {
            console.log('Done downloading file.');
          })
          .on('error', err => {
            console.error('Error downloading file.', err);
          })
          .pipe(dest);
      },
    );
  }

  //delete a file from google drive
  async deleteFile(fileId) {
    await this.drive.files.delete({
      fileId: fileId,
    });
  }

  //delete a folder from google drive
  async deleteFolder(folderId) {
    await this.drive.files.delete({
      fileId: folderId,
    });
  }

  //update a file in google drive
  async updateFile(fileId, filePath) {
    const media = {
      mimeType: 'image/jpeg',
      body: fs.createReadStream(filePath),
    };
    await this.drive.files.update({
      fileId: fileId,
      media: media,
    });
  }
}
