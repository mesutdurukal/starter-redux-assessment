import { useState } from 'react';

// Task 2: Import the `useDispatch()` method from the appropriate package
// Task 3: Import the `addPhoto()` action creator from the photos slice

import './create.css';

export default function CreatePhoto() {
  const [formData, setFormData] = useState({ imageUrl: '', caption: '' });
  // Task 4: Store a reference to the Redux store's dispatch method in a variable called `dispatch`

  function handleChange({ target: { name, value } }) {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Task 5: Dispatch the `addPhoto()` action creator, passing in the form data
    setFormData({ imageUrl: '', caption: '' });
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h2>Add a dog</h2>
      <div>
        <label htmlFor="url">Enter your image's url: </label>
        <input
          id="url"
          name="imageUrl"
          onChange={handleChange}
          placeholder="e.g., https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg"
          type="text"
          value={formData.imageUrl}
        />
      </div>
      <div>
        <label htmlFor="caption">Enter your image's caption: </label>
        <input
          id="caption"
          name="caption"
          onChange={handleChange}
          placeholder="e.g., Australian Shepherd"
          type="text"
          value={formData.caption}
        />
      </div>
      <input type="submit" />
    </form>
  );
}
