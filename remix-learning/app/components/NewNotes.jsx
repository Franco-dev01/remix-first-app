import React from 'react'
import styles from "./NewNotes.css"
import { Form, useActionData, useTransition as useNavigation } from '@remix-run/react'
export default function NewNotes() { 
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const data = useActionData()

  
  return (
    <Form  method="post" action="/notes " id="note-form">

      {data?.message && <p id="error-content">{data.message}</p>}

        <p>
          <label htmlFor='title'>Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p>
          <label htmlFor='content'>Content</label>
          <textarea  id="content" name="content" rows='5'required />
        </p>
        <div className='form-actions'>
            <button disabled={!!isSubmitting}>{isSubmitting ? 'Submitting...' : 'Add Note'}</button>
        </div>


    </Form>
  )
}

export function links(){

    return [{rel:'stylesheet', href: styles}]
}