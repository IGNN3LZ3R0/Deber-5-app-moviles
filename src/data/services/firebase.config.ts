// src/data/services/firebase.config.ts
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHNlEnQIwp6jWS0H6IyHmUDF1zG3Gnr7A",
  authDomain: "clase-app-moviles.firebaseapp.com",
  projectId: "clase-app-moviles",
  storageBucket: "clase-app-moviles.firebasestorage.app",
  messagingSenderId: "210688689451",
  appId: "1:210688689451:web:35f27e482ba3a517dfb16e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Servicios de autenticación
export class AuthService {
  static async login(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  static async register(email: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  static async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error("Error al cerrar sesión");
    }
  }

  static onAuthChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  }

  private static getErrorMessage(errorCode: string): string {
    const errors: Record<string, string> = {
      'auth/invalid-email': 'Email inválido',
      'auth/user-disabled': 'Usuario deshabilitado',
      'auth/user-not-found': 'Usuario no encontrado',
      'auth/wrong-password': 'Contraseña incorrecta',
      'auth/email-already-in-use': 'Email ya registrado',
      'auth/weak-password': 'Contraseña débil (mínimo 6 caracteres)',
      'auth/network-request-failed': 'Error de conexión',
      'auth/invalid-credential': 'Credenciales inválidas',
    };
    return errors[errorCode] || 'Error de autenticación';
  }
}