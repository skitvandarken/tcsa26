import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);

  credentials = {
    email: '',
    password: ''
  };

  isLoading = false;

  async onSubmit() {
    if (!this.credentials.email || !this.credentials.password) return;

    this.isLoading = true;
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.credentials.email,
        this.credentials.password
      );
      console.log('Login success:', userCredential.user);
      alert('Login efetuado com sucesso! Bem-vindo de volta.');
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Login error:', error);
      alert('Erro ao entrar: ' + this.getErrorMessage(error.code));
    } finally {
      this.isLoading = false;
    }
  }

  private getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/invalid-credential':
        return 'E-mail ou palavra-passe incorretos.';
      case 'auth/user-not-found':
        return 'Utilizador não encontrado.';
      case 'auth/wrong-password':
        return 'Palavra-passe incorreta.';
      case 'auth/invalid-email':
        return 'Formato de e-mail inválido.';
      default:
        return 'Ocorreu um erro inesperado. Tente novamente.';
    }
  }
}
