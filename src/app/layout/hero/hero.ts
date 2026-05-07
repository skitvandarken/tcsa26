import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit {
  private el = inject(ElementRef);
  layoutService = inject(LayoutService);
  translationService = inject(TranslationService);
  
  settings = this.layoutService.settings;

  ngAfterViewInit(): void {
    this.initCounters();
  }

  private initCounters(): void {
    const statValues = this.el.nativeElement.querySelectorAll('.stat-value');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateValue(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    statValues.forEach((stat: HTMLElement) => {
      observer.observe(stat);
    });
  }

  private animateValue(obj: HTMLElement): void {
    const target = parseInt(obj.getAttribute('data-count') || '0', 10);
    const hasPlus = obj.innerText.includes('+');
    const duration = 2000; // Animation duration in ms
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * target);
      
      obj.innerText = (hasPlus ? '+' : '') + current;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.innerText = (hasPlus ? '+' : '') + target;
      }
    };
    
    window.requestAnimationFrame(step);
  }
}
