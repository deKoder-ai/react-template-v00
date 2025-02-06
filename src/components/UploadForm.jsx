'use strict';
import { useState } from 'react';
import Mask from './Mask';
import FormError from './FormError';

const UploadForm = ({ toggle, functions }) => {
  const [submitOk, setSubmitOk] = useState(false);
  const [file, setFile] = useState([]);

  const [formErrorText, setFormErrorText] = useState('');
  const formError1 = 'Error: File is not a valid Taska projects file';
  const formError2 = 'Please choose a Projects restore file';
  const checkFile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileContents = await functions.readFileAsText(file);
      try {
        const projectsList = JSON.parse(fileContents);
        const checkFormat = projectsList[0].name === 'Daily Tasks';
        if (checkFormat) {
          // activate submit button
          setFile(projectsList);
          setSubmitOk(true);
          functions.setFormErrorDisplay(false);
        } else {
          setSubmitOk(false);
          setFormErrorText(formError1);
          functions.setFormErrorDisplay(true);
        }
      } catch (e) {
        setSubmitOk(false);
        setFormErrorText(formError1);
        functions.setFormErrorDisplay(true);
      }
    } else {
      setFormErrorText(formError2);
      functions.setFormErrorDisplay(true);
      setSubmitOk(false);
    }
  };
  const load = () => {
    if (submitOk) {
      functions.loadProjects(file);
      functions.setShowUploadForm(false);
      functions.setFormErrorDisplay(false);
      setSubmitOk(false);
    } else {
      setFormErrorText(formError2);
      functions.setFormErrorDisplay(true);
    }
  };

  return (
    <>
      <Mask onClose={toggle} />
      <div className='upload-form'>
        <label htmlFor='file-input'>Select projects file:</label>
        <input
          type='file'
          id='file-input'
          name='file-input'
          autoFocus
          onChange={checkFile}
        ></input>
        <FormError text={formErrorText} display={functions.formErrorDisplay} />
        <div className='flex'>
          <button className='submit-button' onClick={load}>
            Load
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadForm;
