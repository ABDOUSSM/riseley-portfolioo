/**
 * API service for handling contact form submissions
 */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const response = await fetch('http://localhost:5080/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit form');
    }
    
    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}