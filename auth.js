import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export async function loginUser(email, password) {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully!');
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
}
