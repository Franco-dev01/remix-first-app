import React from 'react';
import { useLoaderData , Link} from '@remix-run/react';
import NewNotes, {links as newNotesLinks} from '../components/newNotes';
import { getStoredNotes, storeNotes } from '../data/notes';
import {json, redirect} from '@remix-run/node';
import NoteList, {links as notesLinks} from '../components/NoteList';


export default function NotesPage() {
  const notes = useLoaderData()
  return (
    <main>
        <NewNotes/>
        <NoteList notes={notes}/>
    </main>
  )
}


export async function loader(){
  const notes = await getStoredNotes()
  if(!notes || notes.length === 0){
    throw json({
      message:"Could not find any notes."
    }, 
    {status:404, statusText:"Not Found"})
  }
  return notes;
}


export async function action({request}){
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  if(noteData.title.trim().length < 5){
    return { message: "Title can't be less that 5" }
  }

  // Add validation
  const existingNotres = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotres.concat(noteData); 


  await storeNotes(updatedNotes);

  // await new Promise((resolve, reject)=>{
  //   setTimeout(()=>{
  //     resolve("done");
  //   },2000)
  // })
  return redirect("/notes")
}
export function links(){
  return [...newNotesLinks(), ...notesLinks()]
}


export function ErrorBoundary({error}){
  return(
    
        <main className="error">
          <h1>An error occured!</h1>
          <p>{error.message}</p>
          <p>Back to <Link to="/">safety</Link>!</p>
        </main>
      
  )
}