import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const BeatUploadForm = () => {
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const watchBeatFile = watch('beat-file', false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFormSubmit = async (data) => {
    const formData = new FormData();
    formData.append('beat-file', data['beat-file'][0]);
    formData.append('beat-name', data['beat-name']);
    formData.append('beat-description', data['beat-description']);
    formData.append('beat-price', data['beat-price']);
  
    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
    
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(req.file)
      console.log(req.body)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    setPreviewUrl('');
  }, [watchBeatFile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValue('beat-file', file);
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <button
        type='button'
        className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none  focus:ring-offset-2 focus:ring-indigo-500'
        onClick={handleClickOpen}
      >
        Upload Beat
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='upload beat dialog'
      >
        <div className='flex justify-between items-center'>
          <DialogTitle id='upload beat dialog'>Upload Beat</DialogTitle>
          <XMarkIcon
            className='h-6 w-6 text-red-500 mr-3 cursor-pointer'
            onClick={handleClose}
          />
        </div>

        <DialogContent>
          <div className='max-w-md mx-auto'>
            {/* upload beat form with the beats fields */}
            <div className='rounded-lg shadow-md bg-white p-4'>
              <form className='space-y-6' onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                  <label
                    htmlFor='beat-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Beat Name
                  </label>
                  <input
                    id='beat-name'
                    name='beat-name'
                    type='text'
                    autoComplete='beat-name'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    {...register('beat-name', { required: true })}
                  />
                </div>
                <div className=''>
                  <label
                    htmlFor='beat-description'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Beat Description
                  </label>
                  <div className='mt-1'>
                    <textarea
                      id='beat-description'
                      name='beat-description'
                      rows={3}
                      className='shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md resize-none px-3 py-2'
                      placeholder='Beat Description'
                      defaultValue={''}
                      {...register('beat-description', { required: true })}
                    />
                  </div>
                </div>

                <div className='relative'>
                  <label
                    htmlFor='beat-price'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Beat Price
                  </label>
                  <input
                    id='beat-price'
                    name='beat-price'
                    type='number'
                    autoComplete='beat-price'
                    required
                    placeholder='KSh'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm group-focus:hidden'
                    {...register('beat-price', { required: true })}
                  />
                </div>

                <div>
                  <label
                    htmlFor='beat-file'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Beat File
                  </label>
                  <input
                    id='beat-file'
                    name='beat-file'
                    type='file'
                    autoComplete='beat-file'
                    required
                    accept='audio/*, .mp3, .wav'
                    onChange={handleFileChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    {...register('beat-file', {
                      required: true,
                      validate: {
                        fileSize: (value) => {
                          return (
                            value[0].size < 10000000 ||
                            'File size should be less than 10MB!'
                          )
                        },
                      },
                    })}
                  />
                  {errors['beat-file'] &&
                    errors['beat-file'].type === 'fileSize' && (
                      <p className='text-red-500 text-xs italic mt-2'>
                        {errors['beat-file'].message}
                      </p>
                    )}
                </div>
                {/* preview the audio file beat before upload */}

                {previewUrl && (
                  <div className='mb-4'>
                    <label className='block mb-1'>Preview</label>
                    <audio controls>
                      <source src={previewUrl} type='audio/mpeg' />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                <div className=''>
                  <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none  focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Upload Beat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BeatUploadForm;
