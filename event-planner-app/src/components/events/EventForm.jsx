import { useState } from 'react';
import { validateEventForm } from '../../utils/validation';
import './EventForm.css'; 

const EventForm = ({ formData, setFormData, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateEventForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <div className="form-group">
        <label htmlFor="title">Event Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date and Time</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={errors.date ? 'error' : ''}
        />
        {errors.date && <span className="error-message">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-button">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;