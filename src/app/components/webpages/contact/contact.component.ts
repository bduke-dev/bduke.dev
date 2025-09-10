import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  readonly recipient = 'contact@bduke.dev';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(2000)]]
    });
  }

  /** Encode a string for a mailto URI (RFC 3986) */
  private encode(str: string): string {
    return encodeURIComponent(str).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16)}`);
  }

  /** Build the mailto: URL and trigger the client */
  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.contactForm.value;

    // Subject – you can customise the format
    const subject = this.encode(`Contact from ${name}`);

    // Body – line‑breaks become %0A (URL‑encoded newline)
    const bodyLines = [
      `Name: ${name}`,
      `E‑mail: ${email}`,
      '',
      'Message:',
      message
    ];
    const body = this.encode(bodyLines.join('\n'));

    const mailtoUrl = `mailto:${this.recipient}?subject=${subject}&body=${body}`;

    // Open the mail client – using a temporary <a> element
    const a = document.createElement('a');
    a.href = mailtoUrl;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /** Helper for template – shows a validation error */
  getControl(name: string) {
    return this.contactForm.get(name);
  }

}
