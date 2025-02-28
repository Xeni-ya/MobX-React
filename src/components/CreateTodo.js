import { useState } from 'react';

const CreateTodo = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    console.log('added todo');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Добавь задачу'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit'>Добавить задачу</button>
    </form>
  );
};

export default CreateTodo;