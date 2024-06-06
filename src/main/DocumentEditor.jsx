import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { gapi } from 'gapi-script';

const DocumentEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleChange = (content) => {
    setEditorContent(content);
  };

  const saveDocumentToDrive = () => {
    const accessToken = gapi.auth.getToken().access_token;
    const boundary = '-------314159265358979323846';
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;

    const metadata = {
      name: 'document.html',
      mimeType: 'text/html',
    };

    const multipartRequestBody =
      delimiter +
      'Content-Type: application/json\r\n\r\n' +
      JSON.stringify(metadata) +
      delimiter +
      'Content-Type: text/html\r\n\r\n' +
      editorContent +
      closeDelimiter;

    const request = gapi.client.request({
      path: '/upload/drive/v3/files',
      method: 'POST',
      params: {
        uploadType: 'multipart',
      },
      headers: {
        'Content-Type': `multipart/related; boundary=${boundary}`,
        Authorization: `Bearer ${accessToken}`,
      },
      body: multipartRequestBody,
    });

    request.execute((file) => {
      console.log('File saved to Drive:', file);
      alert('Document saved to Google Drive successfully!');
    });
  };

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn().then(saveDocumentToDrive);
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  return (
    <div>
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
      <button className='save-document' onClick={handleAuthClick}>Сохранить</button>
    </div>
  );
};

export default DocumentEditor;
