import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private auth = inject(Auth);
  private router = inject(Router);

  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  };

  isLoading = false;

  async onSubmit() {
    if (!this.formData.email || !this.formData.password) return;

    this.isLoading = true;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.formData.email,
        this.formData.password
      );
      
      // Update display name
      await updateProfile(userCredential.user, {
        displayName: this.formData.name
      });

      console.log('Register success:', userCredential.user);
      alert('Conta criada com sucesso! Bem-vindo à TCSA.');
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Register error:', error);
      alert('Erro ao criar conta: ' + this.getErrorMessage(error.code));
    } finally {
      this.isLoading = false;
    }
  }

  private getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Este e-mail já está a ser utilizado.';
      case 'auth/invalid-email':
        return 'Formato de e-mail inválido.';
      case 'auth/operation-not-allowed':
        return 'O registo com e-mail e senha não está ativado.';
      case 'auth/weak-password':
        return 'A palavra-passe deve ter pelo menos 6 caracteres.';
      default:
        return 'Ocorreu um erro inesperado. Tente novamente.';
    }
  }
}
