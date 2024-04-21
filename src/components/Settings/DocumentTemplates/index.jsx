import { Component } from 'react';

class DocumentTemplates extends Component {
  state = {
    isSignedIn: false,
    fileId: 1,
  };

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => this.handleClientLoad();
    document.body.appendChild(script);
  }

  handleClientLoad = () => {
    window.gapi.load('client:auth2', this.initClient);
  };

  initClient = () => {
    window.gapi.client
      .init({
        apiKey: 'AIzaSyDZoCB90HDXVxtaYIoB8zpwzkViawzKuW8',
        clientId:
          '427729469986-2em9q9qlviusuu8c1gu12vbb12ttm0p8.apps.googleusercontent.com',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
        ],
        scope: 'https://www.googleapis.com/auth/drive',
      })
      .then(() => {
        window.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(this.updateSigninStatus);
        this.updateSigninStatus(
          window.gapi.auth2.getAuthInstance().isSignedIn.get(),
        );
      });
  };

  updateSigninStatus = isSignedIn => {
    this.setState({ isSignedIn });
  };

  handleAuthClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  handleSignoutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  uploadFile = file => {
    const uploader = window.gapi.client.drive.files.create({
      resource: {
        name: file.name,
        mimeType: file.type,
      },
      media: {
        mimeType: file.type,
        body: file,
      },
      fields: 'id',
    });

    uploader.execute(response => {
      this.setState({ fileId: response.id });
    });
  };

  renderAuthButton() {
    if (this.state.isSignedIn) {
      return <button onClick={this.handleSignoutClick}>Sign Out</button>;
    } else {
      return (
        <button onClick={this.handleAuthClick}>Authorize Google Drive</button>
      );
    }
  }

  render() {
    const { isSignedIn, fileId } = this.state;
    const previewUrl = fileId
      ? `https://drive.google.com/file/d/${fileId}/preview`
      : '';

    return (
      <div>
        {this.renderAuthButton()}
        {isSignedIn && (
          <>
            <input
              type="file"
              onChange={e => this.uploadFile(e.target.files[0])}
            />
            {fileId && (
              <iframe
                src={previewUrl}
                style={{ width: '100%', height: '600px' }}
                frameBorder="0"
                title="Google Docs Preview"
              ></iframe>
            )}
          </>
        )}
      </div>
    );
  }
}

export default DocumentTemplates;
