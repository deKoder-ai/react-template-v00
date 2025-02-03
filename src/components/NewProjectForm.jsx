import CloseButton from './CloseButton';

const NewProjectForm = ({ functions, display }) => {
  const close = functions.close;
  if (display === true) {
    return (
      <div className='new-project-form'>
        <h3>NEW PROJECT</h3>
        <div className='flex'>
          <div>
            <label htmlFor=''>Name:</label>
            <input type='text' placeholder='Project name...' autoFocus />
          </div>
          <div>
            <label htmlFor=''>Due Date:</label>
            <input type='date' />
          </div>
        </div>
        <div className='flex'>
          <button className='submit-button'>Create</button>
        </div>
        <CloseButton close={close} />
      </div>
    );
  } else {
    return null;
  }
};

export default NewProjectForm;
