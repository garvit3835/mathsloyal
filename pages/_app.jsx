import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [student, setStudent] = useState({})
  const [tutor, setTutor] = useState({})
  const FindTut = async (token) => {
    const res = await fetch("/api/tutor/checkTut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();
    // console.log(data);
    setTutor(data)
  };
  const FindStudent = async (token) => {
    const res = await fetch("/api/student/checkStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();
    // console.log(data);
    setStudent(data)
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem('myuser')) {
        const user = localStorage.getItem('myuser')
        try {
          FindStudent(JSON.parse(user).token)
        } catch (err) {
          console.log(err)
        }
        // setStudentId(JSON.parse(user).studentId)
        // console.log(studentId)
      }
      if (localStorage.getItem('mysme')) {
        const sme = localStorage.getItem('mysme')
        // setTutorId(JSON.parse(sme).tutorId)
        // console.log(tutorId)
        FindTut(JSON.parse(sme).token)
      }
    }
  }, []);


  return (
    <div className='h-screen overflow-scroll'>
      <Component {...pageProps} student={student} tutor={tutor} setTutor={setTutor} setStudent={setStudent} />
    </div>
  )
}

export default MyApp