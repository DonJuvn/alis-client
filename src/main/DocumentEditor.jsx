import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';

const DocumentEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  const accessToken = useSelector(state => state.user.access_token);
  const folderId = '1oJ_-p3GPufUmVC_VJSC1wvAzk4wUCExo';

  const handleChange = content => {
    setEditorContent(content);
  };

  const saveDocumentToDrive = () => {
    const boundary = '-------314159265358979323846';
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;

    const metadata = {
      name: 'document.html',
      mimeType: 'text/html',
      parents: [folderId],
    };

    const multipartRequestBody =
      delimiter +
      'Content-Type: application/json\r\n\r\n' +
      JSON.stringify(metadata) +
      delimiter +
      'Content-Type: text/html\r\n\r\n' +
      editorContent +
      closeDelimiter;

    const request = window.gapi.client.request({
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

    request.execute(file => {
      if (file.error) {
        console.error('Error saving file:', file.error);
        alert('Failed to save document to Google Drive.');
      } else {
        console.log('File saved to Drive:', file);
        alert(`Document saved to Google Drive successfully! Check it here: https://drive.google.com/drive/folders/${folderId}`);
      }
    });
  };

  const handleAuthClick = () => {
    if (accessToken) {
      saveDocumentToDrive();
    } else {
      console.log('User is not authenticated');
    }
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
      <button className="save-document" onClick={handleAuthClick}>
        Сохранить
      </button>
    </div>
  );
};

export default DocumentEditor;


